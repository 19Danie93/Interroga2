var consulta = require('../../app/models/tema.models');

exports.aniadir_tema_post = function(req,res) {
	consulta.aniadir_tema(req,function(result) {
		if(result){
			consulta.lista_tema(function(result) {
				res.render('aniadir_tema.jade',{lista:result});
			}); 
		}else{
			consulta.lista_tema(function(result) {
				res.render('aniadir_tema.jade',{error:'ya existe un tema con el mismo nombre',lista:result});
			});
		}

	});
    
}

exports.aniadir_tema_get = function(req,res) {
	consulta.lista_tema(function(result) {
		res.render('aniadir_tema.jade',{lista:result});
	});    
}
