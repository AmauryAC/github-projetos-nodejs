module.exports = function(app) {
  app.get('/jogo', function(req, res) {
    res.render('jogo');
  });
};
