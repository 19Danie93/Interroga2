exports.mostrar= function(req,res) {
    res.render('administrador.jade',{nombre : req.user.nombre});
}
