var DataBase   = require('../../config/HelperDB.js');
var db         = DataBase();

exports.existe = function (req,callback) {
    //console.log(req.body.alias);
    var alias=req.body.alias;
    var pass=req.body.pass;
    var query = db.query(
		//"select * from usuario where  alias='"+alias+"' and clave='"+pass+"';",
		"select idr from usuariorol where(idu in (select id from usuario where(alias='"+alias+"' and clave='"+pass+"')));",
		function (error, result){
			//console.log(result.rows[0]);
			var resultado;
			if(result.rows[0]===undefined){
				resultado=0;
			}else{
				resultado=result.rows[0].idr;
			}
  			callback(resultado);
        });        
}
