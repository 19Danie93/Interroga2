var tema = require('../../app/models/tema.models');
var pregunta = require('../../app/models/pregunta.models');

exports.aniadir_pregunta_get = function(req,res) {
	tema.lista_tema(function(result) {
		pregunta.lista_pregunta(
			function(resultado) {
				res.render('aniadir_pregunta.jade',{temas:result,preguntas:resultado,nombre : req.user.nombre});
			}
		);
	});
}

exports.aniadir_pregunta_post = function(req,res) {
	console.log(req.body);
	pregunta.aniadir_pregunta(req.body.pregunta,req.body.tema,[req.body.resp1,req.body.resp2,req.body.resp3,req.body.resp4],function(result_ap) {
			if(result_ap){
				res.redirect('/administrador/aniadir_pregunta');
			}else{
				tema.lista_tema(function(result) {
					console.log(result);
					pregunta.lista_pregunta(
						function(resultado) {
							res.render('aniadir_pregunta.jade',{error:'ya existe una pregunta igual',temas:result,preguntas:resultado,nombre : req.user.nombre});
						});
					});
			}

	});
}
