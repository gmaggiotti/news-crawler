const fetch = require('node-fetch');
const cheerio = require('cheerio');
var parseString = require('xml2js').parseString
var fs = require('fs');
var md5 = require('md5');

let randomUserAgent = require('random-user-agent');
let tn_rss_url = 'https://tn.com.ar/rss.xml'

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

    let title = fetch.$('.article__title').text().trim();
    let dropline = fetch.$('.article__dropline').text().trim();
    let body = fetch.$('.article__body p').text().trim();

    if (!fs.existsSync(path + md5(link) )) {
        fs.writeFile(path + md5(link), title + "\n" + dropline + '\n' + body, function (err) {
            if (err) {
                return console.log(err);
            }

            console.log("The file was saved!");
        });
    }
};

const getRss = function ( path ) {
    fetch(tn_rss_url)
        .then(res => res.text())
        .then(
            xml => parseString(xml, function (err, result) {
                result.rss.channel[0].item.forEach(function (element) {
                    //title = element.title[0];
                    link = element.link[0]
                    //console.log("title: " + title);
                    console.log("link: " + link);
                    getNota( link, path )
                });


            })
        );
};

module.exports = {
    getNota: getNota,
    getRss: getRss
};