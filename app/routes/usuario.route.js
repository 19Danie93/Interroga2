var user = require('../../app/controllers/usuario.controller');
module.exports=function(app){
    app.get('/usuario',function(req,res,next)
	    {	//console.log(req.user);console.log("estoy viendo si es admin");
	    	if(req.isAuthenticated() && req.user.idrol===2){	    		
	    		next();
	    	}else{
	    		res.redirect("/");
	    	}
	    },user.mostrar);
}
