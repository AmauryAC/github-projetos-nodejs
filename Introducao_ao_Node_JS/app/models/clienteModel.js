var db = require('../../config/db');

module.exports = function() {
	this.all = function(retorno) {
		var con = db();

		return con.query('SELECT * FROM clientes', retorno);
	};

	return this;
};