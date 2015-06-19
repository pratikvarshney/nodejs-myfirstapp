var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'pass',
  database : 'db1'
});

connection.connect();

connection.query('SELECT * from mcqbank', function(err, rows, fields) {
  if (err) throw err;
  console.log('The solution is: ', rows[0].question);
});

connection.end();
