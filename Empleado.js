import { CalculadorTiempoFijo } from "./CalculadorTiempoFijo";
import { CalculadorTiempoParcial } from "./CalculadorTiempoParcial";
import { CalculadorComision } from "./CalculadorComision";

export class Empleado{ 
    constructor(nombre, saldo, tipo, porcentajeComision){
        this.nombre = nombre;
        this.saldo = saldo;
        this.tipo = tipo;
        this.porcentajeComision = porcentajeComision;
    }
    identificarTipoDeEmpleado(tarjetas){
        if(this.tipo == "FIJO"){
            return new CalculadorTiempoFijo(this.saldo);
        }
        else if(this.tipo == "PARCIAL"){
            return new CalculadorTiempoParcial(this.saldo, tarjetas);
        }
        else{
            return new CalculadorComision(this.porcentajeComision,tarjetas);
        }
    }
    calcularSalario(tarjetas){
        return this.identificarTipoDeEmpleado(tarjetas).calcularMonto();
    }
    esValidoRecibirSalario(tarjetas, date){
        return this.identificarTipoDeEmpleado(tarjetas).verificarFecha(date);
    }
}