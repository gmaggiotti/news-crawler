var mysql = require('mysql');

function Connection() {
    this.pool = null;

    this.init = function() {
        this.pool = mysql.createPool({
            connectionLimit: 4000,
            host: 'localhost',
            user: 'root',
            password: 'bla',
            database: 'newscrawler'
        });
    };

    this.acquire = function(callback) {
        this.pool.getConnection(function(err, connection) {
            callback(err, connection);
        });
    };
}


module.exports =  new Connection()



