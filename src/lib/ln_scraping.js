const fetch = require('node-fetch');
const cheerio = require('cheerio');
var parseString = require('xml2js').parseString
var fs = require('fs');
var md5 = require('md5');

let randomUserAgent = require('random-user-agent');
let ln_rss_url = 'http://contenidos.lanacion.com.ar/herramientas/rss-origen=2'

const htmlFetch = async ( link ) => {
    return fetch(link ,{headers:{
        'user-agent': randomUserAgent('desktop')
    }})
        .then(function(res) { return res.text();})
        .then(function(body) {
            return {
                body: body,
                $ : cheerio.load(body,{
                    normalizeWhitespace: true,
                    xmlMode: true
                })
            }
        });
};

const getNota = async (link, path ) => {
    const fetch = await htmlFetch(link);

    let title = fetch.$('.titulo').text().trim();
    let dropline = fetch.$('.epigrafe').text().trim();
    let body = fetch.$('#cuerpo p').text().trim();

    if (!fs.existsSync(path + md5(link) )) {
        fs.writeFile(path + md5(link), title + "\n" + dropline + '\n' + body, function (err) {
            if (err) {
                return console.log(err);
            }

            console.log("Adding LN " + link + " - " + md5(link));
        });
    }
};

const getRss = function ( path ) {
    fetch(ln_rss_url)
        .then(res => res.text())
        .then(
            xml => parseString(xml, function (err, result) {
                result.feed.entry.forEach(function (element) {
                    //title = element.title[0];
                    link = element.id[0]
                    //console.log("title: " + title);
                    //console.log("link: " + link);
                    getNota( link, path )
                });


            })
        );
};

module.exports = {
    getNota: getNota,
    getRss: getRss
};