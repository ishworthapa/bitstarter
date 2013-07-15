var fs = require('fs');
var infile = "index.html";

var buf = fs.readFileSync(infile);
var bufStr = buf.toString();
var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  //response.send('Hello World 2!');
  response.send(bufStr);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
