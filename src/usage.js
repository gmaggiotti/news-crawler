function usage() {
    console.log("Usage: ./ab-cache-breaker -n <requests> -c <concurrency> <url>");
    console.log("Options are:");
    console.log("    -f frequency    iteration time to perform the scrapping");
    console.log("    -c concurrency  number of multiple requests to make at a time");
}

exports.parseArguments = function () {
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


    this.host = arg[6];


    return {count: arg[3], concurrency: arg[5] }

}