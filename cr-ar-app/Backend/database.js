var mysql = require('mysql');

var connection = mysql.createConnection({
    host: '127.0.0.1',
    database: 'ar-app',
    user: 'root',
    password: '',
    port: '3306'
})
module.exports = connection;
