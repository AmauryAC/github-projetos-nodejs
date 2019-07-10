// Arquivo de configurações do servidor
module.exports = function() {
	var express = require('express');
	var app = express();

	app.set('view engine', 'ejs');
	app.set('views', './app/views');

	require('../app/routes/web')(app);

	app.listen(8000, function() {
		console.log("localhost:8000");
	});
};

//module.exports = app;