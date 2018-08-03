#!/usr/bin/env node
var usage = require('./usage');
const site = require('./lib/scraping');
const portadas = require('./lib/portada')
connection = require('./lib/connection');
googlenews = require('./google_news')
rss = require('./rss')
storage_path = '../articles/'


function newsCrawler() {
    const res = usage.parseArguments();
    connection.init();

    array =[]
    rss.feeds.forEach(function(brand) {
        array.push(site.getRss(brand.brand))
    })
    googlenews.feeds.forEach(function(brand) {
        array.push(site.getRss(brand.brand))
    })
    Promise.all(array )
    .then((promises)=> console.log(res) || process.exit(0));

    //portadas.getPortada(datapoints.rss[26].brand)

}

newsCrawler()
