var DataBase   = require('../../config/HelperDB.js');
var crypto  =   require('crypto');
var db         = DataBase();
var ctr = 'aes-256-ctr';
var clavesegura = 'interroga2';

var encriptar=function(text){
  var cipher = crypto.createCipher(ctr,clavesegura)
  var crypted = cipher.update(text,'utf8','hex')
  crypted += cipher.final('hex');
  return crypted;
}
 
var desencriptar=function(text){
  var decipher = crypto.createDecipher(ctr,clavesegura)
  var dec = decipher.update(text,'hex','utf8')
  dec += decipher.final('utf8');
  return dec;
}

var idUlt=function(callback){
    db.query(
		"select max(idusu) from usuario",
		function (error, result){
  			idusuario=result.rows[0].max;
			callback(idusuario);
    });
}

exports.datos_usuario=function(id,callback){
    db.query(
		"select * from usuario where( idusu='"+id+"' )",
		function (error, result){
  			idusuario=result.rows[0];
            idusuario.alias=desencriptar(idusuario.alias);
            idusuario.clave=desencriptar(idusuario.clave);
			callback(idusuario);
    });
}

exports.modificar_cuenta=function(req,callback){
    //var alias=crypto.createHmac('sha1',req.body.alias).digest('hex');
    //var pass=crypto.createHmac('sha1',req.body.pass).digest('hex');
    console.log(req.user);
    var alias=encriptar(req.body.alias);
    var pass=encriptar(req.body.pass);
    var nombre=req.body.nombre;
    var ap=req.body.ap;
    var am=req.body.am;
    var email=req.body.email;
    var telf=parseInt(req.body.telf) || 0;
    var idusuario;
    idUlt(function(result){
        idusuario=result;
        console.log(idusuario);
        idusuario=idusuario+1;
        db.query(
            "update usuario set alias='"+alias+"',nombre= '"+nombre+"',ap='"+ap+"',am='"+am+"',telefono="+telf+",email='"+email+"',clave='"+pass+"' WHERE idusu="+req.user.idusu+";",
		    function (error, result){
		        var resultado;
		        if(result===undefined){
		            resultado=false;
		            console.log(error);
		        }else{
		            resultado=true;
		        }
  			callback(resultado);
        });
    });
}

exports.validar_usuario=function(alias,pass,callback){
    var alias=encriptar(alias);
    var pass=encriptar(pass);
    var query = db.query(
        "select A.idusu,B.idrol,A.nombre from usuario A,usuariorol B where(A.idusu=B.idusu and A.alias='"+alias+"' and A.clave='"+pass+"');",
		function (error, result){
            var resultado;
            if(result.rows[0]===undefined){
                resultado=0;
            }else{
                resultado=result.rows[0];
            }
            callback(resultado);
        });
}

exports.crear_cuenta = function (req,callback) {

    var alias=encriptar(req.body.alias);
    var pass=encriptar(req.body.pass);
    var nombre=req.body.nombre;
    var ap=req.body.ap;
    var am=req.body.am;
    var email=req.body.email;
    var telf=parseInt(req.body.telf) || 0;
    var idusuario;
    idUlt(function(result){
        idusuario=result;
        console.log(idusuario);
        idusuario=idusuario+1;
        db.query(
		    "insert into usuario values("+idusuario+",'"+alias+"','"+nombre+"','"+ap+"','"+am+"',"+telf+",'"+email+"','"+pass+"');"+
		    "insert into usuariorol values("+idusuario+",2);",
		    function (error, result){
		        var resultado;
		        if(result===undefined){
		            resultado=false;
		            console.log(error);
		        }else{
		            resultado=true;
		        }
  			callback(resultado);
        });
    });
}


