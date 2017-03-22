var fs = require('fs');
var https = require('https');
 
var options = {
	  ca: [fs.readFileSync('../server_cert.pem')],

  host: 'localhost',
  port: 443,
  method: 'GET',
  path: '/'
};
var request = https.request(options, function(response) {
   console.log('response.statusCode:', response.statusCode);
 
   response.on('data', function(data) {
     console.log('got some data back from the server:', data);
   });
});
 
request.write('Hey!\n');
request.end();
