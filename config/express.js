var express        = require('express'),
    bodyParse      = require('body-parser'),
    methodOverride = require('method-override'),
    morgan         = require('morgan'),
    session        = require('express-session'),
    passport    = require('passport'),
    flash   =   require('connect-flash'),
    cookie  = require('cookie-parser'),
    config         = require('./config'),
    rutas          = '../app/routes/';

module.exports = function() {
	var app    = express();
    var servidor = require('http').createServer(app);
    var socket = require('socket.io').listen(servidor);
    app.use(morgan('dev'));
    app.use(bodyParse.urlencoded({extended:true}));
    app.use(bodyParse.json());
    app.use(methodOverride());
    app.use(cookie());
    app.use(session({
        saveUninitialized: true,
        resave           : true,
        secret           : config.sesssionSecret
    }));
    app.set('views', './app/views');
    app.set('view engine', 'jade');

    app.use(flash());
    app.use(passport.initialize());
    app.use(passport.session());

    require(rutas+'index.route.js')(app);
    require(rutas+'crear_cuenta.route.js')(app);
    require(rutas+'usuario.route.js')(app);
    require(rutas+'administrador.route.js')(app);
    require(rutas+'aniadir_pregunta.route.js')(app);
    require(rutas+'aniadir_tema.route.js')(app);
    //require(rutas+'panel_d.server.route.js')(app);
    app.use(express.static('./public'));
    //require(rutas+'aniadir_public.server.route.js')(socket);

    return servidor;
}
