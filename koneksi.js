var mysql = require('mysql');

//boot koneksi database
const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'dbrestapi'
});

conn.connect((err)=>{
    if(err) throw err;
    console.log('Mysql terkoneksi');
})

module.exports = conn;