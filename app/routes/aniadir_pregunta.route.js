var pregunta = require('../../app/controllers/aniadir_pregunta.controller');

module.exports=function(app){
    app.get('/administrador/aniadir_pregunta',function(req,res,next)
    {	
    	if(req.isAuthenticated() && req.user.idrol===1){	
    		next();
    	}else{
    		res.redirect("/");
    	}
    },pregunta.aniadir_pregunta_get);

    app.post('/administrador/aniadir_pregunta',function(req,res,next)
    {	
    	if(req.isAuthenticated() && req.user.idrol===1){	
    		next();
    	}else{
    		res.redirect("/");
    	}
    },pregunta.aniadir_pregunta_post);

}