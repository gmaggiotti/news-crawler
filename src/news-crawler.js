#!/usr/bin/env node
var usage = require('./usage');
const site = require('./lib/scraping');
const portadas = require('./lib/portada')
connection = require('./lib/connection');
datapoints = require('./rss')
storage_path = '../articles/'






function newsCrawler() {
    // const res = usage.parseArguments();
    // connection.init();
    //
    // array =[]
    // datapoints.rss.forEach(function(brand) {
    //     array.push(site.getRss(brand.brand))
    // })
    // Promise.all(array /*tn.getRss(rss[1].ln),tn.getRss(rss[2].cl),tn.getRss(rss[3].ib)*/ )
    // .then((promises)=> console.log(res) || process.exit(0));
    portadas.getPortada(datapoints.rss[26].brand)

}

newsCrawler()
