var mysql = require('mysql');
var db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Psai@3413",
    database: "project_work"
  });
  db.connect((err)=>{
    if(err){
        throw err;
    }
    console.log('mysql connected');
  });

  module.exports = db;