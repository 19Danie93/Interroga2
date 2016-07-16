var cuenta  = require('../controllers/crear_cuenta.controller');
module.exports = function(app) {
	
	app.get('/crear_cuenta',cuenta.mostrar);
	
	app.post('/crear_cuenta',function(req,res,next)
	    {	
    		req.session.ruta=req.route.path;	
    		next();
	    },cuenta.crear_cuenta);
	
	app.post('/modificar_cuenta',function(req,res,next)
	    {	
	    	if(req.isAuthenticated()){
	    		req.session.ruta=req.route.path;	
	    		next();
	    	}else{
	    		res.redirect("/");
	    	}
	    },cuenta.actualizarUsuario);

	app.get('/administrador/crear_cuenta',function(req,res,next)
	    {	
	    	if(req.isAuthenticated() && req.user.idrol===1){	
	    		next();
	    	}else{
	    		res.redirect("/");
	    	}
	    },cuenta.modificarAdmin);
    
    app.get('/usuario/crear_cuenta',function(req,res,next)
	    {	
	    	if(req.isAuthenticated() && req.user.idrol===2){	
	    		next(); 
	    	}else{
	    		res.redirect("/");
	    	}
	    },cuenta.modificarUsuario);

    app.get('/crear_cuenta_error',function(req,res,next)
	    {	
	    	if(req.session.ruta===undefined){	
	    		res.redirect("/");
	    	}else if(req.session.ruta==='/crear_cuenta'){
	    		req.session.idr=0;
	    		next();
	    	}else{
	    		req.session.idr=req.user.idrol;
	    		next();
	    	}
	    },cuenta.errorc);

}
