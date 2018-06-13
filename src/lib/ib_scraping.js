const fetch = require('node-fetch');
const cheerio = require('cheerio');
var parseString = require('xml2js').parseString
var db_help = require('./db_help');
var fs = require('fs');
var md5 = require('md5');

let randomUserAgent = require('random-user-agent');
let ln_rss_url = 'https://www.infobae.com/argentina-rss.xml'

const htmlFetch = async (link) => {
    return fetch(link, {
        headers: {
            'user-agent': randomUserAgent('desktop')
        }
    })
        .then(function (res) {
            return res.text();
        })
        .then(function (body) {
            return {
                body: body,
                $: cheerio.load(body, {
                    normalizeWhitespace: true,
                    xmlMode: true
                })
            }
        });
};

const getNota = async (link) => {
    const fetch = await htmlFetch(link);

    let title = fetch.$('.article-header h1').text().trim().replace(/[^ -~]+/g, "").replace(/([\"\'])/g, '\\"');
    let dropline = fetch.$('.subheadline').text().trim();
    let body = fetch.$('.body-nota p').text().trim();

    if (!fs.existsSync(storage_path + md5(link) )) {
        fs.writeFileSync(storage_path + md5(link), title + "\n" + dropline + '\n' + body);
        await db_help.insert(link, md5(link), title, dropline, "IB", null)
        console.log("Adding IB " + link + " - " + md5(link));
    }
};

const getRss = function (path) {
    return fetch(ln_rss_url)
        .then(res => res.text())
        .then(
            xml => parseString(xml, function (err, result) {
                result.rss.channel[0].item.forEach(function (element) {
                    //title = element.title[0];
                    link = element.link[0];
                    //console.log(link)
                    getNota(link)
                });

            })
        );
};

module.exports = {
    getNota: getNota,
    getRss: getRss
};