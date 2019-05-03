var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should();

import {Empleado} from '../src/Empleado';
import { Asistencia } from '../src/tarjetas/asistencia';
import { GeneradorDeBoletas } from '../src/GeneradorDeBoletas';

describe("GeneradorDeBoletas", function() {

    it("si se genera varias boletas para 2 empleados deberia devolver el sueldo de 2 empleados", function() {
      let empleado1 = new Empleado("Fileponcio Gonzalez", 500, "PARCIAL", null);
      let empleado2 = new Empleado("Fernando Gonzalez", 700, "PARCIAL", null);
      let tarjeta = new Asistencia("15/03/2019", 14, 16);
      let tarjetas = [tarjeta,tarjeta,tarjeta];
      let generador = new GeneradorDeBoletas([[empleado1,tarjetas],[empleado2,tarjetas]]);
      let respuesta = [ 3000, 4200 ];
      expect(generador.generarBoletas()).eql(respuesta);
    });

    it("si se genera varias boletas para 3 empleados deberia devolver el sueldo de 3 empleados", function() {
      let empleado1 = new Empleado("Fileponcio Gonzalez", 500, "PARCIAL", null);
      let empleado2 = new Empleado("Fernando Gonzalez", 700, "PARCIAL", null);
      let empleado3 = new Empleado("Chino Gonzalez", 200, "PARCIAL", null);
      let tarjeta = new Asistencia("15/03/2019", 14, 16);
      let tarjetas = [tarjeta,tarjeta,tarjeta];
        let generador = new GeneradorDeBoletas([[empleado1,tarjetas],[empleado2,tarjetas],[empleado3,tarjetas]]);
        let respuesta = [ 3000, 4200, 1200 ];
        expect(generador.generarBoletas()).eql(respuesta);
    });
  
    it("si se genera varias boletas para 4 empleados deberia devolver el sueldo de 4 empleados", function() {
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

      it("si se genera varias boletas para 6 empleados deberia devolver el sueldo de 6 empleados", function() {
        let empleado1 = new Empleado("Fileponcio Gonzalez", 500, "PARCIAL", null);
        let empleado2 = new Empleado("Fernando Gonzalez", 700, "PARCIAL", null);
        let empleado3 = new Empleado("Chino Gonzalez", 200, "PARCIAL", null);
        let empleado4 = new Empleado("Pepito Gonzalez", 300, "PARCIAL", null);
        let empleado5 = new Empleado("Juan Gonzalez", 800, "PARCIAL", null);
        let empleado6 = new Empleado("Neddy Gonzalez", 900, "PARCIAL", null);
        let tarjeta = new Asistencia("15/03/2019", 14, 16);
        let tarjetas = [tarjeta,tarjeta,tarjeta];
        let generador = new GeneradorDeBoletas([[empleado1,tarjetas],[empleado2,tarjetas],[empleado3,tarjetas],[empleado4,tarjetas],[empleado5,tarjetas],[empleado6,tarjetas]]);
        let respuesta = [ 3000, 4200, 1200, 1800, 4800, 5400];
        expect(generador.generarBoletas()).eql(respuesta);
      });


      it("si se pregunta si valido pagar para Juan Perez de tipo comision debe recibir un true", function() {
        let empleado = new Empleado("Pepito Gonzalez", 500, "PARCIAL", null);
        let tarjeta = new Asistencia("15/03/2019", 14, 16);
        let tarjetas = [tarjeta,tarjeta,tarjeta];
        expect(empleado.esValidoRecibirSalario(new Date('2019-06-14T03:24:00'))).equal(true);
      });
  
      it("si se pregunta si valido pagar para Juan Perez de tipo comision debe recibir un true", function() {
        let empleado = new Empleado("Pepito Gonzalez", 500, "PARCIAL", 0.2);
        let tarjeta = new Asistencia("15/03/2019", 14, 16);
        let tarjetas = [tarjeta,tarjeta,tarjeta];
        expect(empleado.esValidoRecibirSalario(new Date('2019-06-14T03:24:00'))).equal(true);
      });
  
      it("si se pregunta si valido pagar para Juan Perez de tipo comision debe recibir un false", function() {
        let empleado = new Empleado("Pepito Gonzalez", 500, "PARCIAL", null);
        let tarjeta = new Asistencia("15/03/2019", 14, 16);
        let tarjetas = [tarjeta,tarjeta,tarjeta];
        expect(empleado.esValidoRecibirSalario(new Date('2019-08-10T03:24:00'))).equal(false);
      });
  
      it("si se pregunta si valido pagar para Juan Perez de tipo comision debe recibir un false", function() {
        let empleado = new Empleado("Pepito Gonzalez", 500, "PARCIAL", 0.2);
        let tarjeta = new Asistencia("15/03/2019", 14, 16);
        let tarjetas = [tarjeta,tarjeta,tarjeta];
        expect(empleado.esValidoRecibirSalario(new Date('2019-07-18T03:24:00'))).equal(false);
      });

});