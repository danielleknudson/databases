var mysql = require('mysql');

var connection = mysql.createConnection({host: 'localhost',
  user: 'root', password: "", database: 'chat'});

var query = function(bojangles){
  connection.query(bojangles);
};

// var starts = function(){
//   connection.connect();
// }
// var end = function(){
//   connection.end();
// }


exports.connection = connection;
exports.query = query;
// exports.starts = starts;
// // exports.end = end;






// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


