const http = require('http');
const url = require('url');
const fs = require('fs');

const server = http.createServer(function(req, res) {
  let pathname = url.parse(req.url).pathname;
  let htmlpath = __dirname + pathname + '.html';

  fs.exists(htmlpath, function(exists) {
    if(!exists) {
      if(pathname == '/') {
        htmlpath = __dirname + '/artigos.html';
      }
      else {
        htmlpath = __dirname + '/erro.html';
      }
    }

    fs.readFile(htmlpath, function(err, html) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(html);
    });
  });
});

server.listen(3000, function() {
  console.log('Servidor rodando!');
});
