var puntuacion = require('../../app/controllers/puntuacion.controller');

module.exports=function(app){
    app.get('/puntuacion',puntuacion.puntuacion);
}