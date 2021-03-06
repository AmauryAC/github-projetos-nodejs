var db = require('../../config/db');

module.exports = function() {
	this.all = function(retorno) {
		var con = db();
		return con.query('SELECT * FROM clientes', retorno);
	};

	this.find = function(id, retorno) {
		var con = db();
		return con.query('SELECT * FROM clientes WHERE id = ?', id, retorno);
	};

	this.save = function(dados, retorno) {
		var con = db();
		return con.query('INSERT INTO clientes SET ?', dados, retorno);
	};

	return this;
};