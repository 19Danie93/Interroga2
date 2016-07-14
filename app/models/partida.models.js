var DataBase   = require('../../config/HelperDB.js');
var db         = DataBase();

var idpartidamax=function(callback){
    db.query(
		"select max(idpartida) from partida",
		function (error, result){
			callback(result.rows[0].max);
    });
}

exports.lista_partida = function (callback) {
	db.query(
		"select * from partida order by idpartida",
		function (error, result){
			callback(result.rows);
    });
}

exports.aniadir_partida = function (titulo,callback) {
    idpartidamax(
    	function(result) {
    		result=result+1;
        var fecha=new Date();
        fecha=fecha.getDate()+"-"+(fecha.getMonth()+1)+"-"+fecha.getFullYear();
    		db.query(
				"insert into partida values("+result+",'"+titulo+"','"+fecha+"');",
				function (error, res){
					var resultado;
					if(res===undefined){
						resultado=false;
					}else{
						resultado=true;
					}
					console.log(error);
					console.log(res);
		  		callback(resultado);
	    	});
    	}
    );
}

exports.aniadir_pregunta_partida = function (consulta_query,callback) {
	db.query(
  	consulta_query,
  	function (error, res){
  		var resultado;
  		if(res===undefined){
  			resultado=false;
  		}else{
  			resultado=true;
  		}
  		console.log(error);
  		console.log(res);
  		callback(resultado);
	});
}
//Math.floor(Math.random()*(5-1)+1);
