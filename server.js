var express = require('express');
var fs = require("fs");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());




//MARK : HTTP Get
app.get('/api/form1', function (req, res) {
   fs.readFile( __dirname + "/JSONs/" + "default-values-in-template.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})

app.get('/api/form2', function (req, res) {
   fs.readFile( __dirname + "/JSONs/" + "forms.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})

app.get('/api/form3', function (req, res) {
   fs.readFile( __dirname + "/JSONs/" + "section-field-position.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})

app.get('/api/form4', function (req, res) {
   fs.readFile( __dirname + "/JSONs/" + "multiple-show-hide-section-targets.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})




var server = app.listen(8081, function () {

  var host = "192.168.2.25"//server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})

