module.exports.jogo = function(app, req, res) {
  if(req.session.autorizado) {
    res.render('jogo');
  }
  else {
    res.render('index', {validacao: {}});
  }
};
