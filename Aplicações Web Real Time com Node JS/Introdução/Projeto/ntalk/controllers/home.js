/*
const index = function(req, res) {
  res.render('home/index');
}

module.exports = { index };
*/

module.exports = function(app) {
  const HomeController = {
    index: function(req, res) {
      res.render('home/index');
    }
  };
  return HomeController;
};
