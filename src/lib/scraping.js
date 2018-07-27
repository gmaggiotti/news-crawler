const fetch = require('node-fetch');
const cheerio = require('cheerio');
var parseString = require('xml2js').parseString
var db_help = require('./db_help');
var fs = require('fs');
var md5 = require('md5');
let randomUserAgent = require('random-user-agent');

function getLocaltime() {
    var d = new Date();
    var offset = (new Date().getTimezoneOffset() / 60) * -1;
    var n = new Date(d.getTime() - offset);
    return n;
}

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

const getNota = async (link, site,date) => {
    const fetch = await htmlFetch(link);

    const title = fetch.$(site.scraping.title).text().trim().replace(/[^ -~]+/g, "").replace(/([\"\'])/g,'\\"');
    const dropline = fetch.$(site.scraping.dropline).text().trim();
    const body = fetch.$(site.scraping.body).text().trim();
    const filename = storage_path + md5(link);
    //TODO: fix local time when not geting date from feed
    const idate = (date == undefined || date == '' ) ? new Date().toISOString() : new Date(date).toISOString();

    if (!fs.existsSync(filename)) {
        fs.writeFileSync(filename, title + "\n" + dropline + '\n' + body);
        await db_help.insert(idate,link, md5(link), title, dropline, site.site)
        console.log("Adding "+ site.site + " " + link + " - " + md5(link));
    }
};

const parseStringPromise = (xml) => {
    return new Promise((resolve, reject) => {
        return parseString(xml, (err, result) => {
            resolve(result)
        });
    });
}

const getRss = function ( site ) {
    return fetch(site.url)
        .then(res => res.text())
        .then( xml => parseStringPromise(xml) )
        .then( result => Promise.all(
            eval(site.links).map(element =>
                Promise.resolve(getNota(eval(site.element), site,eval(site.date) ))
            )
        ));
};

module.exports = {
    getNota: getNota,
    getRss: getRss
};