var User = require('../modelos/usuario');

exports.obtenerUsuario = (req, res, next) => {
    User.findById(req.session.userId)
      .exec(function (error, user) {
        if (error) {
          return next(error);
        } else {
          if (user === null) {
            var err = new Error('Not authorized! Go back!');
            err.status = 400;
            return next(err);
          } else {
            return res.send(user);
          }
        }
      });
};

function compararContrasenias(body){
  if (body.contrasenia !== body.contraseniaConf) {
    var err = new Error('contrasenias do not match.');
    err.status = 400;
    res.send("contrasenias dont match");
    return next(err);
  }
}

function modelarUsuario(body){
  var userData = {
    email: body.email,
    nombre: body.nombre,
    apellido: body.apellido,
    ciudad: body.ciudad,
    fecha: body.fecha,
    contrasenia: body.contrasenia,
  }
  return userData;
}

function cumpleTodosLosRequisitos(body, next){
  if (body.email && body.contrasenia && body.contraseniaConf && body.nombre && body.apellido && body.ciudad && body.fecha ) {
    return true;
  } else {
    var err = new Error('All fields required.');
    err.status = 400;
    return next(err);
  }
}

exports.crearUsuario = (req, res, next) => {
  compararContrasenias(req.body);
  if (cumpleTodosLosRequisitos(req.body , next)) {
    var userData = modelarUsuario(req.body);
    User.create(userData, function (error, user) {
      if (error) {
        return next(error);
      } else {
        req.session.userId = user._id;
        return res.redirect('/perfil');
      }
    });
  } 
};

exports.eliminarUsuario = (req) => {
    User.remove(req.session.userId);
};

exports.actualizarUsuario = (req, res, next) =>{
    var userData = this.obtenerUsuario;
    if (cumpleTodosLosRequisitos(req.body , next)) {
      var userData = modelarUsuario(req.body);
      User.create(userData, function (error, user) {
        if (error) {
          return next(error);
        } else {
          req.session.userId = user._id;
          return res.redirect('/perfil');
        }
      });
    } 
};