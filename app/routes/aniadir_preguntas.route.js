var añadir  = require('../controllers/aniadir_preguntas.controller');
module.exports = function(app) {
	app.get('/aniadir_preguntas', añadir.mostrar);
	//app.post('/añadir_preguntas', cuenta.añadir_preguntas);
}
