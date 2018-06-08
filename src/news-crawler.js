#!/usr/bin/env node
var usage = require('./usage');

function abCacheBraker() {
    res = usage.parseArguments();
    console.log(res)
}

abCacheBraker()
