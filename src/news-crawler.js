#!/usr/bin/env node
var usage = require('./usage');
const fetcher = require('./lib/tn_scraping');

var storage_path = '../articles/'

function newsCrawler() {
    res = usage.parseArguments();
    fetcher.getRss(storage_path)

    console.log(res)
}

newsCrawler()
