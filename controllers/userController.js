var User = require('../models/user');

exports.getUser = (req, res, next) => {
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

exports.createUser = (req, res, next) => {

  if (req.body.password !== req.body.passwordConf) {
    var err = new Error('Passwords do not match.');
    err.status = 400;
    res.send("passwords dont match");
    return next(err);
  }

  if (req.body.email && req.body.password && req.body.passwordConf && req.body.firstname && req.body.lastname && req.body.city && req.body.date ) {
    var userData = {
      email: req.body.email,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      city: req.body.city,
      date: req.body.date,
      password: req.body.password,
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

exports.deleteUser = (req) => {
    User.remove(req.session.userId);
};

exports.updateUser = (req, res, next) =>{
    var userData = this.getUser;
      if (req.body.email && req.body.password && req.body.passwordConf && req.body.firstname && req.body.lastname && req.body.city && req.body.date) {
        var userData = {
          email: req.body.email,
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          city: req.body.city,
          date: req.body.date,
          password: req.body.password,
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