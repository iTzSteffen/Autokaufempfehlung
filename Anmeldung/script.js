var express = require('express');
var mysql = require('mysql');
var app = express();
var connect = mysql.createConnection({
  //states_and_properties
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'sampleDB'
});

connection.connect(function(error) {
  //callback
  if(error) {
    console.log('Error');
  }else{
    console.log('Connected');
  }
});

app.get('/', function(req, resp){
  //about mysql
  connection.query("SELECT * FROM sampleDB", function(error, rows, fields) {
    // callback
    if(!!error) {
      console.log('Error in the query');
    }else{
      console.log('successful query');
    }
  });
})
app.listen(1337);
