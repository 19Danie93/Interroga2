var consulta = require('../../app/models/usuario.models');

exports.crear_cuenta = function(req,res) {
	consulta.crear_cuenta(req,
        function(result){
            if(result){
                res.redirect('/');
            }else{
                console.log('es la respuesta');
                console.log(result);
                req.flash('errorDatos','prueba con otro alias y/o contraseña');
                res.redirect('/error');
           }
        }
    );    
}

exports.mostrar = function(req,res) {
    //console.log(req.flash('error'));
    res.render('crear_cuenta.jade',{    titulo: 'Crear Nueva Cuenta',
                                        error : req.flash('errorDatos')[0]  });
}

exports.actualizarUsuario = function(req,res) {
    
    consulta.modificar_cuenta( req,
        function(result){
            if(result){
                res.redirect('/');
            }else{
                req.flash('errorDatos','prueba con otro alias y/o contraseña');
                res.redirect('/error');
           }
        }
    );
    
}

exports.modificarUsuario = function(req,res) {
    consulta.datos_usuario( req.user.idusu,
        function(result){
            res.render('crear_cuenta.jade',{    titulo: 'Modificar Cuenta Usuario' , datos: result });
        }
    );
    
}

exports.modificarAdmin = function(req,res) {
    consulta.datos_usuario( req.user.idusu,
        function(result){
            //console.log(result);
            res.render('crear_cuenta.jade',{    titulo: 'Modificar Cuenta Administrador' , datos: result });
        }
    );    
}

exports.errorc = function(req,res) {
    res.render('crear_cuenta_error.jade',{  usuario: req.session.idr,
                                            error : req.flash('errorDatos')[0]  }); 
}