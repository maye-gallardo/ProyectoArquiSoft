var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should();

import {Empleado} from '../src/Empleado';
import { Venta } from '../src/tarjetas/venta';
import { Asistencia } from '../src/tarjetas/asistencia';

describe("Venta", function() {
    
    it("si se genera una boleta para Juan Perez de tipo comision debe recibir el salario por comision", function() {
      let empleado = new Empleado("Pepito Gonzalez", 500, "COMISION", 0.2);
      let tarjeta = new Venta("15/03/2019", 500)
      let tarjetas = [tarjeta,tarjeta,tarjeta];
      expect(empleado.calcularSalario(tarjetas)).equal(300);
    });

    it("si se genera una boleta para Juan Perez de tipo comision debe recibir el salario por comision", function() {
      let empleado = new Empleado("Pepito Gonzalez", 500, "COMISION", 0);
      let tarjeta = new Venta("15/03/2019", 500)
      let tarjetas = [tarjeta,tarjeta,tarjeta];
      expect(empleado.calcularSalario(tarjetas)).equal(0);
    });
});