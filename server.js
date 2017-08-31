var express = require('express');
var https = require('https');
var fs = require('fs');
var path = require('path');
var app = express();
var options = {
  key: fs.readFileSync('./key.pem'),
  cert: fs.readFileSync('./cert.pem'),
  requestCert: false,
  rejectUnauthorized: false
};
var server = https.createServer(options, app).listen(8100);

app.use('/files', express.static(path.join(__dirname + '/src')));
app.get('/', function(req, res){
  res.sendFile('index.html', {root: __dirname })
});
