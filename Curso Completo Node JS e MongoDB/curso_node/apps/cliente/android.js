var http = require('http');

var opcoes = {
  hostname: 'localhost',
  port: 80,
  path: '/',
  method: 'post',
  headers: {
    //'Accept': 'text/html',
    'Accept': 'application/json', // Recebimento
    //'Content-type': 'application/x-www-form-urlencoded'
    'Content-type': 'application/json' // Envio
  }
}

// Content-type
var html = 'nome=José'; //x-www-form-urlencoded
var json = {nome: 'José'};
var string_json = JSON.stringify(json);

var buffer_corpo_response = [];

//http.get(opcoes, function(res) {
var req = http.request(opcoes, function(res) {
  res.on('data', function(pedaco) {
    buffer_corpo_response.push(pedaco);
  });

  res.on('end', function() {
    var corpo_response = Buffer.concat(buffer_corpo_response).toString();
    console.log(corpo_response);
  });
});

//req.write(html);
req.write(string_json);

req.end();
