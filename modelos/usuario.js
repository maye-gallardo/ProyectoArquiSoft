var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var UserSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  apellido: {
    type: String,
    required: true
  },
  fecha: {
    type: Date,
    required: true
  },
  ciudad: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  contrasenia: {
    type: String,
    required: true,
  }
});

//authenticate input against database
UserSchema.statics.authenticate = function (email, contrasenia, callback) {
  User.findOne({ email: email })
    .exec(function (err, user) {
      if (err) {
        return callback(err)
      } else if (!user) {
        var err = new Error('User not found.');
        err.status = 401;
        return callback(err);
      }
      bcrypt.compare(contrasenia, user.contrasenia, function (err, result) {
        if (result === true) {
          return callback(null, user);
        } else {
          return callback();
        }
      })
    });
}

//hashing a contrasenia before saving it to the database
UserSchema.pre('save', function (next) {
  var user = this;
  bcrypt.hash(user.contrasenia, 10, function (err, hash) {
    if (err) {
      return next(err);
    }
    user.contrasenia = hash;
    next();
  })
});


var User = mongoose.model('User', UserSchema);
module.exports = User;