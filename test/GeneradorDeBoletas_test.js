var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should();

import {Empleado} from '../Empleado';
import { TarjetaAsistencia } from '../TarjetaAsistencia';
import { TarjetaVenta } from '../TarjetaVenta';

describe("GeneradorDeBoletas", function() {
      it("si se genera una boleta para Juan Perez de tipo fijo debe recibir el salario fijo", function() {
        let empleado = new Empleado("Pepito Gonzalez", 1500, "FIJO", null);
        expect(empleado.calcularSalario()).equal(1500);
      });

      it("si se genera una boleta para Juan Perez de tipo parcial debe recibir el salario parcial", function() {
        let empleado = new Empleado("Pepito Gonzalez", 500, "PARCIAL", null);
        let tarjeta = new TarjetaAsistencia("15/03/2019", 14, 16);
        let tarjetas = [tarjeta,tarjeta,tarjeta];
        expect(empleado.calcularSalario(tarjetas)).equal(3000);
      });
    
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

      it("si se pregunta si valido pagar para Juan Perez de tipo comision debe recibir un true", function() {
        let empleado = new Empleado("Pepito Gonzalez", 1500, "FIJO", null);
        expect(empleado.calcularSalario()).equal(1500);
        expect(empleado.esValidoRecibirSalario(null, new Date('2019-04-26T03:24:00'))).equal(true);
      });

      it("si se pregunta si valido pagar para Juan Perez de tipo comision debe recibir un true", function() {
        let empleado = new Empleado("Pepito Gonzalez", 500, "PARCIAL", null);
        let tarjeta = new TarjetaAsistencia("15/03/2019", 14, 16);
        let tarjetas = [tarjeta,tarjeta,tarjeta];
        expect(empleado.esValidoRecibirSalario(tarjetas, new Date('2019-06-14T03:24:00'))).equal(true);
      });
});