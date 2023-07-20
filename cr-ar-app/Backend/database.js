var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    database: 'ar_app',
    user: 'root',
    password: '',
    port: '3307'
})
module.exports = connection;
