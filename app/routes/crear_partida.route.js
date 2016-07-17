var partida = require('../../app/controllers/crear_partida.controller');

module.exports=function(app){
    app.get('/crear_partida',partida.crear_partida);
}