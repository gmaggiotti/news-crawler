#!/usr/bin/env node
var usage = require('./usage');
const site = require('./lib/scraping');
const portadas = require('./lib/portada')
connection = require('./lib/connection');
datapoints = require('./google_news')
storage_path = '../articles/'


function newsCrawler() {
    const res = usage.parseArguments();
    connection.init();

    array =[]
    datapoints.feeds.forEach(function(brand) {
        array.push(site.getRss(brand.brand))
    })
    Promise.all(array )
    .then((promises)=> console.log(res) || process.exit(0));

    //portadas.getPortada(datapoints.rss[26].brand)

}

newsCrawler()
