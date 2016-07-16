var consulta = require('../../app/models/usuario.models');

/*exports.crear_cuenta = function(req,res) {
	consulta.crear_cuenta(req,
        function(result){
            if(result){
                res.redirect('/');
            }else{
           }
        }
    );
}*/

exports.mostrar = function(req,res) {
    res.render('aniadir_preguntas.jade',{datos:'añadir'});
}
