var DataBase   = require('../../config/HelperDB.js');
var db         = DataBase();

var idmax=function(callback){
    db.query(
		"select max(idtema) from tema",
		function (error, result){
			callback(result.rows[0].max);
    });
}

exports.aniadir_tema = function (req,callback) {
    console.log(req.body.tema);
    var tema=req.body.tema;
    idmax(
    	function(result) {
    		result=result+1;
    		db.query(    			
				"insert into tema values("+result+",1,'"+tema+"');",
				function (error, res){
					var resultado;
					if(res===undefined){
						resultado=false;
					}else{
						resultado=true;
					}
		  			callback(resultado);
	    	});
    	}
    );	    
}

exports.modificar_tema = function (idtema,nombretema,callback) {  
	db.query(    			
		"update tema set nombretema='"+nombretema+"' WHERE idtema="+idtema+";",
		function (error, res){
			var resultado;
			if(res===undefined){
				resultado=false;
				console.log(error);
			}else{
				resultado=true;
			}
  			callback(resultado);
	});	     
}

exports.validar_tema = function (req,callback) {
	onsole.log(req.body.tema);
    var tema=req.body.tema;
	db.query(    			
		"select * from tema where(nombretema="+tema+");",
		function (error, res){
			var resultado;
			if(res===undefined){
				resultado=false;
			}else{
				resultado=true;
			}
  			callback(resultado);
	});	        
}

exports.lista_tema = function (callback) {  
	db.query(
		"select * from tema order by idtema",
		function (error, result){
			callback(result.rows);
    });   
}