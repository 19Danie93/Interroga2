exports.mostrar= function(req,res) {
    res.render('usuario.jade',{nombre : req.user.nombre});
}
