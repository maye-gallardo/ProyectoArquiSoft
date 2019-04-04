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
    calcularSalario(tarjetas){
        if(this.tipo == "FIJO"){
            return new CalculadorTiempoFijo(this.saldo).calcularMonto;
        }
        else if(this.tipo == "PARCIAL"){
            return new CalculadorTiempoParcial(this.saldo, tarjetas).calcularMonto;
        }
        else{
            return new CalculadorComision(this.porcentajeComision,tarjetas).calcularMonto;
        }
    }
}