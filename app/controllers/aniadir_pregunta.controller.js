var tema = require('../../app/models/tema.models');
var pregunta = require('../../app/models/pregunta.models');

exports.aniadir_pregunta_get = function(req,res) {
	tema.lista_tema(function(result) {
		res.render('aniadir_pregunta.jade',{temas:result});
	}); 
}

exports.aniadir_pregunta_post = function(req,res) {
	console.log(req.body);
	pregunta.aniadir_pregunta(req.body.pregunta,req.body.tema,[req.body.resp1,req.body.resp2,req.body.resp3,req.body.resp4],function(resultado) {
		tema.lista_tema(function(result) {
			res.render('aniadir_pregunta.jade',{error:result,temas:result});
		});
	}); 
}