const fetch = require('node-fetch');
const cheerio = require('cheerio');
var parseString = require('xml2js').parseString
var db_help = require('./db_help');
var fs = require('fs');
var md5 = require('md5');

let randomUserAgent = require('random-user-agent');
let tn_rss_url = 'https://tn.com.ar/rss.xml';


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

const getNota = async (link) => {
    const fetch = await htmlFetch(link);

    const title = fetch.$('.article__title').text().trim().replace(/[^ -~]+/g, "").replace(/([\"\'])/g,'\\"');
    const dropline = fetch.$('.article__dropline').text().trim();
    const body = fetch.$('.article__body p').text().trim();
    const filename = storage_path + md5(link);
    if (!fs.existsSync(filename)) {
        fs.writeFileSync(filename, title + "\n" + dropline + '\n' + body);
        await db_help.insert(link, md5(link), title, dropline, "TN", null)
        console.log("Adding TN " + link + " - " + md5(link));
    }
};

const parseStringPromise = (xml) => {
    return new Promise((resolve, reject) => {
        return parseString(xml, (err, result) => {
            resolve(result)
        });
    });
}
const getRss = function () {
    return fetch(tn_rss_url)
        .then(res => res.text())
        .then( xml => parseStringPromise(xml) )
        .then( result => Promise.all(
            result.rss.channel[0].item.map(element => 
                Promise.resolve(getNota(element.link[0]))
            )
        ));
};

module.exports = {
    getNota: getNota,
    getRss: getRss
};