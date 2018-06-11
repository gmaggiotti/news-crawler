#!/usr/bin/env node
var usage = require('./usage');
const tn = require('./lib/tn_scraping');
const ln = require('./lib/ln_scraping');
connection = require('./lib/connection');
storage_path = '../articles/'

function newsCrawler() {
    res = usage.parseArguments();
    connection.init();
    tn.getRss();
    ln.getRss()
    console.log(res)
}

newsCrawler()
