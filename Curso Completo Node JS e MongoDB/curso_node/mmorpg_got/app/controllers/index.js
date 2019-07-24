module.exports.index = function(app, req, res) {
  res.render('index', {validacao: {}});
};

module.exports.autenticar = function(app, req, res) {
  var dadosForm = req.body;

  req.assert('usuario', 'Usuário não pode ser vazio').notEmpty();
  req.assert('senha', 'Senha não pode ser vazia').notEmpty();

  var erros = req.validationErrors();

  if(erros) {
    res.render('index', {validacao: erros});
    return;
  }

  res.send('Tudo OK');
};
