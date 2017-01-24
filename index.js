var express = require('express');
var fs = require("fs");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());




//MARK : HTTP Get
app.get('/', function (req, res) {

  res.end("This api is not available")
})

app.get('/api/jobs', function (req, res) {
   fs.readFile( __dirname + "/JSONs/" + "jobs.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})

app.get('/api/employee', function (req, res) {
   fs.readFile( __dirname + "/JSONs/" + "employee.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})

app.get('/api/mapView', function (req, res) {
   fs.readFile( __dirname + "/JSONs/" + "mapView.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})

app.get('/api/inventory', function (req, res) {
   fs.readFile( __dirname + "/JSONs/" + "inventory.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})



var port = process.env.PORT || 8000
var server = app.listen(port, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})
