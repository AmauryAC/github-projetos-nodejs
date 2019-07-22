// Importar as configurações do servidor
var app = require('./config/server');

// Parametrizar a porta de escuta
var server = app.listen(80, function() {
  console.log('Servidor online');
});

var io = require('socket.io').listen(server);

app.set('io', io);

// Criar a conexão por websocket
io.on('connection', function(socket) {
  console.log('Usuário conectou');

  socket.on('disconnect', function() {
    console.log('Usuário desconectou');
  });

  socket.on('msgParaServidor', function(data) {
    // Diálogo
    // Envia só pra quem emitiu
    socket.emit(
      'msgParaCliente',
      {
        apelido: data.apelido,
        mensagem: data.mensagem
      }
    );

    // Envia pra todos os outros usuários
    socket.broadcast.emit(
      'msgParaCliente',
      {
        apelido: data.apelido,
        mensagem: data.mensagem
      }
    );

    // Participantes
    // Envia só pra quem emitiu
    if(parseInt(data.apelido_atualizado_nos_clientes) == 0) {
      socket.emit(
        'participantesParaCliente',
        {
          apelido: data.apelido
        }
      );

      // Envia pra todos os outros usuários
      socket.broadcast.emit(
        'participantesParaCliente',
        {
          apelido: data.apelido
        }
      );
    }
  });
});
