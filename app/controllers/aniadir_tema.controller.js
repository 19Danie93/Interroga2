var consulta = require('../../app/models/tema.models');

exports.aniadir_tema_post = function(req,res) {
	consulta.aniadir_tema(req,function(result) {
		if(result){
				res.redirect('/administrador/aniadir_tema');
		}else{
			consulta.lista_tema(function(result) {
				res.render('aniadir_tema.jade',{error:'ya existe un tema con el mismo nombre',lista:result,nombre : req.user.nombre});
			});
		}

	});

}

exports.aniadir_tema_get = function(req,res) {
	consulta.lista_tema(function(result) {
		res.render('aniadir_tema.jade',{lista:result,nombre : req.user.nombre});
	});
}

exports.modificar_tema = function(req,res) {
	console.log(req.body);
	consulta.modificar_tema(req.body.idtema,req.body.nombretema,function(resultado) {
		console.log(resultado);
		res.send({resultado:resultado});
	});
}
