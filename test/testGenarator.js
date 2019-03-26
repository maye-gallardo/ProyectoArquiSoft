var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should();

import Generador from '../Generador.js';

describe('Generate', function() {
    it("deberia mostrar un empleado con un salario 0", function() {
        let boletaPago = new Generador();
        expect(boletaPago.monto).equal(0);
      });
    /*it("deberia generar una boleta con monto 100 para un empleado", function() {
        let boletaPago = new Generador();
        expect(boletaPago.monto).equal(100);
      });*/
});