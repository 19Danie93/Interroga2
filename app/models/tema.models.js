var DataBase   = require('../../config/HelperDB.js');
var db         = DataBase();

var idmax=function(callback){
    db.query(
		"select max(idtema) from tema",
		function (error, result){
  			idusuario=result.rows[0].max;
			callback(idusuario);
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

exports.modificar_tema = function (req,callback) {     
}

exports.validar_tema = function (req,callback) {     
}

exports.lista_tema = function (callback) {  
	db.query(
		"select * from tema",
		function (error, result){
  			idusuario=result.rows;
			callback(idusuario);
    });   
}