var User = require('../models/user');

// GET route for reading data
exports.resgistar = (req, res, next) =>  {
    return res.render('register.ejs');
  };
  
// GET route for reading data
exports.login = (req, res, next) =>  {
    return res.render('index.ejs');
};
// GET route for reading data
exports.editarPerfil = (req, res, next) =>  {
    return res.render('profileForm.ejs');
};

// GET route for reading data
exports.perfil = (req, res, next) =>  {
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
            return res.render('perfil.ejs', {user:user});
          }
        }
      });
};

// GET route for reading data
exports.email = (req, res, next) =>  {
    return res.render('email.ejs');
};

// GET route for reading data
exports.boleta = (req, res, next) =>  {
    return res.render('boleta.ejs');
};

// GET route for reading data
exports.nuevoEmpleado = (req, res, next) =>  {
  return res.render('nuevoEmpleado.ejs');
};
  