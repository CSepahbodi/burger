var mysql = require('mysql');

var connection = mysql.createConnection({
  host:'localhost',
  port: 3306,
  user:'root',
  password: 'C1y05@176#4',
  database:'burgers_db'
}); 
 
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: 'hacktheplanet',
    database: 'todoagain_db'
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
connection.query('SELECT * FROM burgers', function(err, rows, fields) {                                                   
    if (err) throw err;
    console.log("The burger connection test :" + rows[0].burger_name);                 
});