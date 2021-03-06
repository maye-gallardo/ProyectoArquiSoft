import { CalculadorSalario } from "./calculadoras/salario/Salario";
import { CalculadorFecha } from "./calculadoras/fecha/Fecha";

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
    esValidoRecibirSalario(fecha){
        return new CalculadorFecha().estaEsLaFechaDePaga(this.tipo, fecha);
    }
}