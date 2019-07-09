//console.log("Olá, Node.");

// Importando módulo http (p/ trabalhar com requisições)
var http = require('http');

// Criando um servidor
var server = http.createServer(function(req, res) {
	var pagina = req.url;
	console.log(pagina);

	//res.end("OK. Url " + pagina);

	if(pagina == "/contato") {
		res.end(`
			<!DOCTYPE html>
			<html>
				<head>
					<meta charset="utf-8">
					<title>Introdução ao Node JS</title>
				</head>
				<body>
					<h1>Página de Contato</h1>
				</body>
			</html>
		`);
	}
	else {
		res.end(`
			<!DOCTYPE html>
			<html>
				<head>
					<meta charset="utf-8">
					<title>Introdução ao Node JS</title>
				</head>
				<body>
					<h1>Página Home</h1>
				</body>
			</html>
		`);
	}
});

// Rodando o servidor criado
console.log("localhost:8000");
server.listen(8000);