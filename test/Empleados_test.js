var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should();

import {Empleado} from '../src/Empleado';
import { Asistencia } from '../src/tarjetas/asistencia';
import { Venta } from '../src/tarjetas/venta';
describe("Empleados", function() {
  
    it("si se genera una boleta para Juan Perez de tipo fijo debe recibir el salario fijo", function() {
      let empleado = new Empleado("Pepito Gonzalez", 1500, "FIJO", null);
      expect(empleado.calcularSalario()).equal(1500);
    });

    it("si se genera una boleta para Juan Perez de tipo fijo debe recibir el salario fijo", function() {
      let empleado = new Empleado("Pepito Gonzalez", 500, "PARCIAL", null);
      let tarjeta = new Asistencia("15/03/2019", 14, 16);
      let tarjetas = [tarjeta,tarjeta,tarjeta];
      expect(empleado.calcularSalario(tarjetas)).equal(3000);
    });

    it("si se genera una boleta para Juan Perez de tipo fijo debe recibir el salario fijo", function() {
      let empleado = new Empleado("Pepito Gonzalez", 1500, "COMISION", 0.15);
      let tarjeta = new Venta("15/03/2019", 1600);
      let tarjetas = [tarjeta,tarjeta,tarjeta];
      expect(empleado.calcularSalario(tarjetas)).equal(720);
    });

});