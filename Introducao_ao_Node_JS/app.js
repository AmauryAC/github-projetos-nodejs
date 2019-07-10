var express = require('express');
var meuModulo = require('./modulo_externo');

console.log(meuModulo());

var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
	res.render('site/home');
});

app.get('/contato', function(req, res) {
	res.render('site/contato');
});

app.listen(8000, function() {
	console.log("localhost:8000");
});