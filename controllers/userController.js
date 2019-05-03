var User = require('../models/user');

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

exports.crearUsuario = (req, res, next) => {

  if (req.body.contrasenia !== req.body.contraseniaConf) {
    var err = new Error('contrasenias do not match.');
    err.status = 400;
    res.send("contrasenias dont match");
    return next(err);
  }

  if (req.body.email && req.body.contrasenia && req.body.contraseniaConf && req.body.nombre && req.body.apellido && req.body.ciudad && req.body.fecha ) {
    var userData = {
      email: req.body.email,
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      ciudad: req.body.ciudad,
      fecha: req.body.fecha,
      contrasenia: req.body.contrasenia,
    }
    User.create(userData, function (error, user) {
      if (error) {
        return next(error);
      } else {
        req.session.userId = user._id;
        return res.redirect('/profile');
      }
    });
  } else {
    var err = new Error('All fields required.');
    err.status = 400;
    return next(err);
  }
};

exports.eliminarUsuario = (req) => {
    User.remove(req.session.userId);
};

exports.actualizarUsuario = (req, res, next) =>{
    var userData = this.obtenerUsuario;
      if (req.body.email && req.body.contrasenia && req.body.contraseniaConf && req.body.nombre && req.body.apellido && req.body.ciudad && req.body.fecha) {
        var userData = {
          email: req.body.email,
          nombre: req.body.nombre,
          apellido: req.body.apellido,
          ciudad: req.body.ciudad,
          fecha: req.body.fecha,
          contrasenia: req.body.contrasenia,
        }
        User.create(userData, function (error, user) {
          if (error) {
            return next(error);
          } else {
            req.session.userId = user._id;
            return res.redirect('/profile');
          }
        });
      } else {
        var err = new Error('All fields required.');
        err.status = 400;
        return next(err);
      }
};