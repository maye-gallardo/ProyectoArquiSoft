var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should();

import {Empleado} from '../Empleado';
import { TiempoFijo } from '../CalculadorTiempoFijo';
import { TiempoParcial } from '../CalculadorTiempoParcial';
import { TarjetaAsistencia } from '../TarjetaAsistencia';
import { TarjetaVenta } from '../TarjetaVenta';

describe("GeneradorDeBoletas", function() {
    /*it("deberia mostrar una boleta con un salario 0", function() {
        let boletaPago = new GeneradorDeBoletas(null);
        expect(boletaPago.monto).equal(0);
      });*/

      /*it("deberia mostrar una boleta de un empleado con un salario 1500", function() {
        let empleado = new Empleado("Pepito Gonzalez", 1500);
        let boletaPago = new GeneradorDeBoletas(empleado);
        expect(boletaPago.monto).equal(1500);
      });*/

      /*it("deberia generar una boleta en una fecha especifica", function() {
        var today = String(new Date()).slice(0,15);
        let empleado = new Empleado("Pepito Gonzalez");
        let boletaPago = new GeneradorDeBoletas(empleado);
        expect(boletaPago.fecha).equal(today);
      });*/

      /*it("si se genera una boleta para Juan Perez el contribuyente de la boleta deberia ser Juan Perez", function() {
        let empleado = new Empleado("Pepito Gonzalez");
        let boletaPago = new GeneradorDeBoletas(empleado);
        expect(boletaPago.nombreEmpleado).equal("Pepito Gonzalez");
      });*/

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
});