var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "bla",
    database: "newscrawler"
});

var title = 'tittle'

ins = "insert into article(date,link,hash,title,c_id) values('2018-06-10 12:30', 'https://www.lanacion.com.ar/2142540-mauricio-macri-el-peronismo-sabe-que-no-hay-mas-lugar-para-la-locura','3dfd8sf415ddb1f57b2dc1db6be2d5a','"+title+"',1 )"


con.connect(function(err) {
    if (err) throw err;
    //Select all customers and return the result object:
    con.query(ins, function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
});


console.log("End")