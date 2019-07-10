// Arquivo de configurações de rotas do servidor
module.exports = function(app) {
	app.get('/', function(req, res) {
		res.render('site/home');
	});

	app.get('/contato', function(req, res) {
		res.render('site/contato');
	});
};