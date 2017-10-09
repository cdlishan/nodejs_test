
//express_demo.js ??
var express = require('express');
var app = express();
 
app.get('/', function (req, res) {
   res.send('Test');
})
 
var server = app.listen(8888, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("location: http://%s:%s", host, port)
 
})
