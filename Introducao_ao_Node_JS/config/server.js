// Arquivo de configurações do servidor
module.exports = function() {
	var express = require('express');
	var bodyParser = require('body-parser');

	var app = express();

	app.set('view engine', 'ejs');
	app.set('views', './app/views');

	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));
 
	require('../app/routes/web')(app);

	app.listen(8000, function() {
		console.log("localhost:8000");
	});
};

//module.exports = app;