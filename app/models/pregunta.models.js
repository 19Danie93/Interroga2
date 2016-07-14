var DataBase   = require('../../config/HelperDB.js');
var db         = DataBase();

var idmaxpre=function(callback){
    db.query(
		"select max(idpreg) from pregunta",
		function (error, result){
			callback(result.rows[0].max);
    });
}

var idmaxres=function(callback){
    db.query(
		"select max(idres) from respuesta",
		function (error, result){
			callback(result.rows[0].max);
    });
}

exports.lista_pregunta = function (callback) {
	db.query(
		"select * from pregunta order by idpreg",
		function (error, result){
			callback(result.rows);
    });
}

var aniadir_respuesta = function (pregunta,respuesta,estado,callback) {
    idmaxres(
    	function(result) {
    		result=result+1;
    		db.query(
				"insert into respuesta values("+result+","+pregunta+",'"+respuesta[0]+"',"+estado[0]+");"+
				"insert into respuesta values("+(result+1)+","+pregunta+",'"+respuesta[1]+"',"+estado[1]+");"+
				"insert into respuesta values("+(result+2)+","+pregunta+",'"+respuesta[2]+"',"+estado[2]+");"+
				"insert into respuesta values("+(result+3)+","+pregunta+",'"+respuesta[3]+"',"+estado[3]+");",
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

exports.aniadir_pregunta = function (pregunta,tema,respuestas,callback) {
    idmaxpre(
    	function(result) {
    		result=result+1;
    		db.query(
				"insert into pregunta values("+result+",'"+tema+"','"+pregunta+"');",
				function (error, res){
					var resultado;
					if(res===undefined){
						resultado=false;
					}else{
						//var estado=true;
						console.log(respuestas);
						//for (var i = 0; i < respuestas.length; i++) {
							aniadir_respuesta(result,respuestas,[true,false,false,false],function(argument) {});
							//estado=false;
						//};
						resultado=true;
					}
		  			callback(resultado);
	    	});
    	}
    );
}
//select * from pregunta order by random() LIMIT 5;
//insert into preguntapartida values(1,6),(1,9),(1,7),(1,2),(1,5)
