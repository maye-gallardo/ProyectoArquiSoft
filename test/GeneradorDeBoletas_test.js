var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should();

import {GeneradorDeBoletas} from '../GeneradorDeBoletas';
import {Empleado} from '../Empleado';

describe("GeneradorDeBoletas", function() {
    it("deberia mostrar una boleta con un salario 0", function() {
        let boletaPago = new GeneradorDeBoletas(null);
        expect(boletaPago.monto).equal(0);
      });

      it("deberia mostrar una boleta de un empleado con un salario 1500", function() {
        let empleado = new Empleado("Pepito Gonzalez", 1500);
        let boletaPago = new GeneradorDeBoletas(empleado);
        expect(boletaPago.monto).equal(1500);
      });

      it("deberia generar una boleta en una fecha especifica", function() {
        var today = String(new Date()).slice(0,15);
        let empleado = new Empleado("Pepito Gonzalez", 1500);
        let boletaPago = new GeneradorDeBoletas(empleado);
        expect(boletaPago.fecha).equal(today);
      });

      it("si se genera una boleta para Juan Perez el contribuyente de la boleta deberia ser Juan Perez", function() {
        let empleado = new Empleado("Pepito Gonzalez", 1500);
        let boletaPago = new GeneradorDeBoletas(empleado);
        expect(boletaPago.nombreEmpleado).equal("Pepito Gonzalez");
      });
    

});