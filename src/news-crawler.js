#!/usr/bin/env node
var usage = require('./usage');
const tn = require('./lib/tn_scraping');
const ln = require('./lib/ln_scraping');
const cl = require('./lib/clarin_scraping');
const ib = require('./lib/ib_scraping');
var sleep = require('sleep');
connection = require('./lib/connection');
storage_path = '../articles/'

function newsCrawler() {
    res = usage.parseArguments();
    connection.init();
    Promise.all([tn.getRss(),ln.getRss(),cl.getRss(),ib.getRss()]).then((v)=> {
        //process.exit();
    });
    console.log("Crawling: " + res)
}

newsCrawler()
