var employee = require('../modelos/empleado');

exports.getEmployee = (req, res, next) => {
    employee.findById(req.body.employeeId)
      .exec(function (error, employee) {
        if (error) {
          return next(error);
        } else {
          if (employee === null) {
            var err = new Error('Not found');
            err.status = 400;
            return next(err);
          } else {
            return res.send(employee);
          }
        }
      });
};

exports.createEmployee = (req, res, next) => {
  if (req.body.user && req.body.saldo && req.body.tipo && req.body.comision) {
    var employeeData = {
      user: req.body.user,
      saldo: req.body.saldo,
      tipo: req.body.tipo,
      comision: req.body.comision
    }
    employee.create(employeeData, function (error, employee) {
      if (error) {
        return next(error);
      } else {
        return res.redirect('/profile');
      }
    });
  } else {
    var err = new Error('All fields required.');
    err.status = 400;
    return next(err);
  }
};

exports.deleteEmployee = (req) => {
    User.remove(req.body.employeeId);
};

exports.updateEmployee = (req, res, next) =>{
    if (req.body.user && req.body.saldo && req.body.tipo && req.body.comision) {
        var employeeData = {
          user: req.body.user,
          saldo: req.body.saldo,
          tipo: req.body.tipo,
          comision: req.body.comision
        }
        employee.create(employeeData, function (error, employee) {
          if (error) {
            return next(error);
          } else {
            return res.redirect('/profile');
          }
        });
      } else {
        var err = new Error('All fields required.');
        err.status = 400;
        return next(err);
      }
};