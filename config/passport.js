var passport= require('passport'),
    consulta = require('../app/models/usuario.models.js');

module.exports = function(){

    passport.serializeUser(
        function(user,done){
            done(null,user);
        }
    );
    
    passport.deserializeUser(
        function(user,done){
            done(null,user);
        }
    );
    
    require('./strategies/local.js')();
    
};
