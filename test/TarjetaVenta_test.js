var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should();

import {Empleado} from '../Empleado';
import { TarjetaVenta } from '../TarjetaVenta';

describe("TarjetaVenta", function() {
    
      it("si se genera una boleta para Juan Perez de tipo comision debe recibir el salario por comision", function() {
        let empleado = new Empleado("Pepito Gonzalez", 500, "COMISION", 0.2);
        let tarjeta = new TarjetaVenta("15/03/2019", 500)
        let tarjetas = [tarjeta,tarjeta,tarjeta];
        expect(empleado.calcularSalario(tarjetas)).equal(300);
      });

      it("si se pregunta si valido pagar para Juan Perez de tipo comision debe recibir un true", function() {
        let empleado = new Empleado("Pepito Gonzalez", 500, "COMISION", 0.2);
        let tarjeta = new TarjetaVenta("15/03/2019", 500)
        let tarjetas = [tarjeta,tarjeta,tarjeta];
        expect(empleado.esValidoRecibirSalario(tarjetas, new Date('2019-06-14T03:24:00'))).equal(true);
      });
});