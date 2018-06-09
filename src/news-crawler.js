#!/usr/bin/env node
var usage = require('./usage');
const fetcher = require('./lib/fetcher');

function newsCrawler() {
    res = usage.parseArguments();
    fetcher.getRss('https://tn.com.ar/rss.xml')

    console.log(res)
}

newsCrawler()
