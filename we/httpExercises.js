let http = require('http');
let server = http.createServer((function(request,response) {

  response.writeHead(200, {
    'Content-Type': 'text/plain'
  })
  response.end('hello World\n');
}));


server.listen(3000);