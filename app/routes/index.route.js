var index  = require('../controllers/index.controller');
var passport= require('passport');

module.exports = function(app) {
	app.get('/',function(req,res,next)
	    {	
	    	if(req.isAuthenticated()){
	    		req.logout();
	    		next();
	    	}else{
	    		next();
	    	}
	    },index.render);
	    
	app.post('/',passport.authenticate('local',{
	    //successRedirect: '/administrador',
	    failureRedirect:'/',
	    failureFlash: true
	})
	,index.login
	);
}
