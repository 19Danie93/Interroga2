var consulta = require('../../app/models/usuario.models');
var passport= require('passport');

exports.render = function(req,res) {

	res.render('index.jade',{
        title : 'Inicio',
        error: req.flash('error')[0]
    });
}

exports.login = function(req,res) {
    if(req.user.idrol===1){
        res.redirect('/administrador');
    }else if(req.user.idrol===2){
        res.redirect('/usuario');
    }
}
