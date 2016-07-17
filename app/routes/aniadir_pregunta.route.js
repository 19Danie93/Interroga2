var pregunta = require('../../app/controllers/aniadir_pregunta.controller');

module.exports=function(app){
    app.get('/aniadir_pregunta',pregunta.aniadir_pregunta);
}