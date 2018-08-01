
exports.insert = function(date,link, hash, title, dropline, brand) {
    return new Promise((resolve, reject)=>{
        connection.acquire(function (err, con) {
            con.query('insert into article(date,link,hash,title, brand) values("' +
                date + '","' +
                link + '", "' +
                hash + '" , "' +
                title + '", "' +
                brand + '")', function(err, result){
                    resolve(result);
                } );
            con.release();
        });
    }); 
}

