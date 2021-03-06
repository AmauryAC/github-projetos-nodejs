// Importar os módulos da aplicação
var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var expressSession = require('express-session');

// Iniciar o objeto do express
var app = express();

// Setar as variáveis 'view engine' e 'views' do express
app.set('view engine', 'ejs');
app.set('views', './app/views');

// Configurar o middleware express.static
app.use(express.static('./app/public'));

// Configurar o middleware body-parser
app.use(bodyParser.urlencoded({extended: true}));

// Configurar o middleware express-validator
app.use(expressValidator());

// Configurar o middleware express-session
app.use(expressSession({
  secret: 'hjsdgdsuihois',
  resave: false,
  saveUninitialized: false
}));

// Efetuar o autoload das rotas, dos models e dos controllers para o objeto app
consign()
    .include('app/routes')
    .then('config/dbConnection.js')
    .then('app/models')
    .then('app/controllers')
    .into(app);

// Exportar o objeto app (que contém uma instância do express)
module.exports = app;
