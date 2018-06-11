
exports.insert = function(link, hash, title, dropline, brand, c_id) {
    connection.acquire(function (err, con) {
        con.query('insert into article(date,link,hash,title, brand,c_id) values("' +
            new Date().toISOString() + '","' +
            link + '", "' +
            hash + '" , "' +
            title + '", "' +
            brand + '", ' +
            c_id + ')' );
    });
}