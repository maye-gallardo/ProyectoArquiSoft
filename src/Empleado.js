import { CalculadorSalario } from "./CalculadorSalario";
import { CalculadorFecha } from "./CalculadorFecha";

export class Empleado{ 
    constructor(nombre, saldo, tipo, porcentajeComision){
        this.nombre = nombre;
        this.saldo = saldo;
        this.tipo = tipo;
        this.porcentajeComision = porcentajeComision;
    }
    identificarTipoDeEmpleado(tarjetas){
        return new CalculadorSalario(this.tipo).tipoEmpleado(this.saldo, tarjetas, this.porcentajeComision);
    }
    calcularSalario(tarjetas){
        return this.identificarTipoDeEmpleado(tarjetas).calcularMonto();
    }
    esValidoRecibirSalario(date){
        return new CalculadorFecha().estaEsLaFechaDePaga(this.tipo, date);
    }
}