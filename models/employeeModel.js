var mongoose = require('mongoose');
var User = require('../models/user');

var EmployeeSchema = new mongoose.Schema({
  user: {
    type: User,
    unique: true,
    required: true,
    trim: true
  },
  balance: {
    type: Int16Array,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  comission: {
    type: Float32Array,
    required: true,
  }
});

var EmployeeSchema = mongoose.model('Employee', EmployeeSchema);
module.exports = Employee;