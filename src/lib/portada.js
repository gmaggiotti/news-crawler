const fetch = require('node-fetch');
const cheerio = require('cheerio');
var parseString = require('xml2js').parseString
var db_help = require('./db_help');
var fs = require('fs');
var md5 = require('md5');
let randomUserAgent = require('random-user-agent');



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

const getNota = async (link, brand) => {
    const fetch = await htmlFetch(link);

    const title = fetch.$(brand.scraping.title).text().trim().replace(/[^ -~]+/g, "").replace(/([\"\'])/g,'\\"');
    const dropline = fetch.$(brand.scraping.dropline).text().trim();
    const body = fetch.$(brand.scraping.body).text().trim();
    const filename = storage_path + md5(link);

    if (!fs.existsSync(filename)) {
        fs.writeFileSync(filename, title + "\n" + dropline + '\n' + body);
        await db_help.insert(link, md5(link), title, dropline, brand.site, null)
        console.log("Adding "+ brand.site + " " + link + " - " + md5(link));
    }
};


const parseStringPromise = (xml) => {
    return new Promise((resolve, reject) => {
        return parseString(xml, (err, result) => {
            resolve(result)
        });
    });
}




const getPortada = async function( brand ) {

    const fetch = await htmlFetch(brand.main);
    fetch.$('article a').map(function( elem) {
       return fetch.$(this).attr('href')
    }).filter( (i, uri) => {
        return uri.indexOf('.html') !== -1 })
        .map((i,uri) => getNota(brand.main+uri, brand));
}

module.exports = {
    getNota: getNota,
    getPortada: getPortada
};