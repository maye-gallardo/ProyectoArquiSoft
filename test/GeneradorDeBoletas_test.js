var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should();

import {Empleado} from '../src/Empleado';
import { Asistencia } from '../src/tarjetas/asistencia';
import { GeneradorDeBoletas } from '../src/GeneradorDeBoletas';

describe("GeneradorDeBoletas", function() {
    it("si se genera varias boletas para empleados deberia devolver el sueldo de varios empleados", function() {
        let empleado1 = new Empleado("Fileponcio Gonzalez", 500, "PARCIAL", null);
        let empleado2 = new Empleado("Fernando Gonzalez", 700, "PARCIAL", null);
        let empleado3 = new Empleado("Chino Gonzalez", 200, "PARCIAL", null);
        let empleado4 = new Empleado("Pepito Gonzalez", 300, "PARCIAL", null);
        let tarjeta = new Asistencia("15/03/2019", 14, 16);
        let tarjetas = [tarjeta,tarjeta,tarjeta];
        let generador = new GeneradorDeBoletas([[empleado1,tarjetas],[empleado2,tarjetas],[empleado3,tarjetas],[empleado4,tarjetas]]);
        let respuesta = [ 3000, 4200, 1200, 1800 ];
        expect(generador.generarBoletas()).eql(respuesta);
      });
});