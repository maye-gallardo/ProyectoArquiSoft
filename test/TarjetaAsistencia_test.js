var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should();

import {Empleado} from '../src/Empleado';
import { Asistencia } from '../src/tarjetas/asistencia';

describe("Asistencia", function() {

    it("si se genera una boleta para Juan Perez de tipo parcial debe recibir el salario parcial", function() {
      let empleado = new Empleado("Pepito Gonzalez", 500, "PARCIAL", null);
      let tarjeta = new Asistencia("15/03/2019", 14, 16);
      let tarjetas = [tarjeta,tarjeta,tarjeta];
      expect(empleado.calcularSalario(tarjetas)).equal(3000);
    });
});