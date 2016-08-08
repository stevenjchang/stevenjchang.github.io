console.dir("hello world");

var http = require('https');
var fs = require('fs');
var result = "";

http.get('https://www.google.com/index.html', (res) => {
  console.log(`Got response: ${res.statusCode}`);
  res.on('data', function(chunk){
  	result += chunk;
  	console.log(result);
  	fs.writeFile('index.html', result, (err) => {
  	  if (err) throw err;
  	  console.log('It\'s saved!');
  	});

  })
  // consume response body
  res.resume();
}).on('error', (e) => {
  console.log(`Got error: ${e.message}`);
});
