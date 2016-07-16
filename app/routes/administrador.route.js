var admin = require('../../app/controllers/administrador.controller');
var passport= require('passport');

module.exports=function(app){
    app.get('/administrador',function(req,res,next)
	    {	
	    	if(req.isAuthenticated() && req.user.idrol===1){	
	    		next();
	    	}else{
	    		res.redirect("/");
	    	}
	    },admin.mostrar);
}
