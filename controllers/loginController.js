var User = require('../models/user');

exports.login = (req, res, next) => {
    if(req.body.email && req.body.contrasenia) {
        User.authenticate(req.body.email, req.body.contrasenia, function (error, user) {
          if (error || !user) {
            var err = new Error('Wrong email or contrasenia.');
            err.status = 401;
            return next(err);
          } else {
            req.session.userId = user._id;
            return res.redirect('/profile');
          }
        });
      } 
};

exports.logout = (req, res, next) => {
  if (req.session) {
    req.session.destroy(function (err) {
      if (err) {
        return next(err);
      } else {
        return res.redirect('/');
      }
    });
  }
};