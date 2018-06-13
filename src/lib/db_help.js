
exports.insert = function(link, hash, title, dropline, brand, c_id) {
    return new Promise((resolve, reject)=>{
        connection.acquire(function (err, con) {
            con.query('insert into article(date,link,hash,title, brand,c_id) values("' +
                new Date().toISOString() + '","' +
                link + '", "' +
                hash + '" , "' +
                title + '", "' +
                brand + '", ' +
                c_id + ')', function(err, result){
                    resolve(result);
                } );
        });
    }); 
}