var partida = require('../../app/controllers/crear_partida.controller');

module.exports=function(app){
    app.get('/administrador/partida',function(req,res,next)
    {
    	if(req.isAuthenticated() && req.user.idrol===1){
    		next();
    	}else{
    		res.redirect("/");
    	}
    },partida.crear_partida);

    app.post('/administrador/partida',function(req,res,next)
    {
    	if(req.isAuthenticated() && req.user.idrol===1){
    		next();
    	}else{
    		res.redirect("/");
    	}
    },partida.guardar_partida);

}
