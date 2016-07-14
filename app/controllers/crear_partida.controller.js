var consulta = require('../../app/models/partida.models');

exports.crear_partida = function(req,res) {
  consulta.lista_partida(function(result) {
    res.render('crear_partida.jade',{partidas:result,nombre : req.user.nombre});
  });
}

exports.guardar_partida = function(req,res) {
    console.log(req.body);
    consulta.aniadir_partida(
      req.body.partida,
      function(respuesta) {
        console.log(respuesta);
        if(respuesta){
          
          res.redirect('/administrador/partida');
        }else{
          consulta.lista_partida(function(result) {
            res.render('crear_partida.jade',{error:'ya existe una partida con el mismo nombre',partidas:result,nombre : req.user.nombre});
          });
        }

      }
    );
}
