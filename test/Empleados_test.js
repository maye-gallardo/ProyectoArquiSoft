var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should();

import {Empleado} from '../Empleado';
describe("Empleados", function() {
  
    it("si se genera una boleta para Juan Perez de tipo fijo debe recibir el salario fijo", function() {
      let empleado = new Empleado("Pepito Gonzalez", 1500, "FIJO", null);
      expect(empleado.calcularSalario()).equal(1500);
    });

    it("si se pregunta si valido pagar para Juan Perez de tipo comision debe recibir un true", function() {
      let empleado = new Empleado("Pepito Gonzalez", 1500, "FIJO", null);
      expect(empleado.calcularSalario()).equal(1500);
      expect(empleado.esValidoRecibirSalario(new Date('2019-04-26T03:24:00'))).equal(true);
    });


});