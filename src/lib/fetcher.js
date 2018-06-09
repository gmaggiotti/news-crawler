const fetch = require('node-fetch');
const cheerio = require('cheerio');
var parseString = require('xml2js').parseString
let randomUserAgent = require('random-user-agent');

const htmlFetch = async (uri) => {
    return fetch(uri,{headers:{
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

const getNota = async (uri) => {
    const fetch = await htmlFetch(uri);

    let title = fetch.$('.article__title').text().trim();
    let dropline = fetch.$('.article__dropline').text().trim();
    let body = fetch.$('.article__body p').text().trim();
    console.log(title)
};

const getRss = function (uri) {
    fetch(uri)
        .then(res => res.text())
        .then(
            xml => parseString(xml, function (err, result) {
                result.rss.channel[0].item.forEach(function (element) {
                    //title = element.title[0];
                    link = element.link[0]
                    //console.log("title: " + title);
                    console.log("link: " + link);
                    getNota(link)
                });


            })
        );
};

module.exports = {
    getNota: getNota,
    getRss: getRss
};