var fs = require('fs');
var https = require('https');
 
var options = {
  key: fs.readFileSync('server_key.pem'),
  cert: fs.readFileSync('server_cert.pem'),
    //ca: [fs.readFileSync('./fake_ca.pem')],

  requestCert: false,
  rejectUnauthorized: false
};
 
var server = https.createServer(options, function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
});
var port = 443;
var address='localhost';
server.listen(port,address, function() {
  console.log('Server is listening on port ', server.address().address,server.address().port);
});
