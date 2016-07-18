var pregunta = require('../../app/controllers/aniadir_tema.controller');

module.exports=function(app){
    app.get('/administrador/aniadir_tema',function(req,res,next)
	    {	
	    	if(req.isAuthenticated() && req.user.idrol===1){	
	    		next();
	    	}else{
	    		res.redirect("/");
	    	}
	    },pregunta.aniadir_tema_get);

    app.post('/administrador/aniadir_tema',function(req,res,next)
    {	
    	if(req.isAuthenticated() && req.user.idrol===1){	
    		next();
    	}else{
    		res.redirect("/");
    	}
    },pregunta.aniadir_tema_post);

    app.post('/administrador/modificar_tema',function(req,res,next)
    {	
    	if(req.isAuthenticated() && req.user.idrol===1){	
    		next();
    	}else{
    		res.redirect("/");
    	}
    },pregunta.modificar_tema);
}