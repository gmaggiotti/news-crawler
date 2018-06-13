#!/usr/bin/env node
var usage = require('./usage');
const tn = require('./lib/tn_scraping');
const ln = require('./lib/ln_scraping');
const cl = require('./lib/clarin_scraping');
connection = require('./lib/connection');
storage_path = '../articles/'

function newsCrawler() {
    const res = usage.parseArguments();
    connection.init();
    Promise.all([tn.getRss()])
    .then((promises)=> console.log(res) || process.exit(0));
}

newsCrawler()
