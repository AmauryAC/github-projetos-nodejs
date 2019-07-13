const express = require('express');
const server = express();

// route: permite encadear métodos http na mesma rota
server.route('/clientes')
  .get((req, res) => res.send('Lista de Clientes'))
  .post((req, res) => res.send('Novo Cliente'))
  .put((req, res) => res.send('Altera Cliente'))
  .delete((req, res) => res.send('Remove Cliente'));

server.listen(3000, () => console.log('Executando...'));
