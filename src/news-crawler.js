#!/usr/bin/env node

function usage() {
    console.log("Usage: ./ab-cache-breaker -n <requests> -c <concurrency> <url>");
    console.log("Options are:");
    console.log("    -n requests     number of requests to perform");
    console.log("    -c concurrency  number of multiple requests to make at a time");
    console.log("    -d              device input can be 'desktop' or 'mobile'")

}

function parseArguments() {
    arg = process.argv;
    if (arg.length <= 4) {
        usage();
        process.exit(-1);
    }

    if (arg[2] !== "-n") {
        usage();
        process.exit(-1);
    }

    if (arg[4] !== "-c" || parseInt(arg[3]) < parseInt(arg[5])) {
        usage();
        process.exit(-1);
    }

    if ((res = arg.findIndex((val) => {
            return (val === "-d")
        })) !== -1) {
        this.device = arg[res + 1];
    }

    this.host = arg[6];
    this.count = arg[3];
    this.concurrency = arg[5];
    ;

}


function abCacheBraker() {
    parseArguments();
}

abCacheBraker()
