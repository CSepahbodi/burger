var mysql = require('mysql');

var connection;
 
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: process.env.DB_pass,
    database: 'burgers_db'
  });
};

// used to test the database connection
connection.connect(function(err) {
  if(err) {
    console.log("Error", err.stack);
  }
  console.log("Connected as id: %s", connection.threadId)
});
module.exports = connection;