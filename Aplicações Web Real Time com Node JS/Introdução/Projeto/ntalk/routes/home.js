/*
const home = require('../controllers/home');

module.exports = function(app) {
  app.get('/', home.index);
};
*/

module.exports = function(app) {
  const home = app.controllers.home;
  app.get('/', home.index);
};
