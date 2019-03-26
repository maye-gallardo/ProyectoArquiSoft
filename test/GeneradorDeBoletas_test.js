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
});