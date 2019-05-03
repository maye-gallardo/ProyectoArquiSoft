var mongoose = require('mongoose');
var usuario = require('./usuario');

var EmployeeSchema = new mongoose.Schema({
  usuario: {
    type: usuario,
    unique: true,
    required: true,
    trim: true
  },
  saldo: {
    type: Int16Array,
    required: true,
  },
  tipo: {
    type: String,
    required: true,
  },
  comision: {
    type: Float32Array,
    required: true,
  }
});

var EmployeeSchema = mongoose.model('Employee', EmployeeSchema);
module.exports = Employee;