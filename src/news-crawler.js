#!/usr/bin/env node
var usage = require('./usage');
const tn = require('./lib/tn_scraping');
const ln = require('./lib/ln_scraping');
var storage_path = '../articles/'

function newsCrawler() {
    res = usage.parseArguments();
    tn.getRss(storage_path);
    ln.getRss(storage_path)

    console.log(res)
}

newsCrawler()
