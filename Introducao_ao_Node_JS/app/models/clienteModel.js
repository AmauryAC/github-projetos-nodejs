var db = require('../../config/db');

module.exports = function() {
	this.all = function() {
		var con = db();
		
		con.query('SELECT * FROM clientes', function(erro, resultado) {
			console.log(resultado);
		});

		return [
			{nome: "Paulo", email: "paulo@mail.com"}
		];
	};

	return this;
};