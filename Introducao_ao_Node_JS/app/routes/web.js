// Arquivo de configurações de rotas do servidor
var clienteController = require('../controllers/clienteController'); 

module.exports = function(app) {
	app.get('/', function(req, res) {
		clienteController.index(req, res);
	});

	app.get('/detalhe/:id', function(req, res) {
		clienteController.show(req, res);
		//console.log(req.params.id);
	});

	app.get('/contato', function(req, res) {
		res.render('site/contato');
	});
};