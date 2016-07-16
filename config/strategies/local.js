var passport  = require('passport'),
        local = require('passport-local').Strategy,
        consulta = require('../../app/models/usuario.models.js');

module.exports = function(){
    passport.use(new local(
        {
            usernameField: 'alias',
            passwordField: 'clave'
        },
        function(alias,clave,done){
            consulta.validar_usuario(alias,clave,
                function(result){
                    if(result===0){
                        done(null,false,{message:'Usuario no encontrado!!!'});    
                    }else{
                        done(null,result);
                    }
                }
            );
        }
    ));
}

