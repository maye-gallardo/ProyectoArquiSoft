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
            return new CalculadorTiempoFijo(this.saldo).monto;
        }
        else if(this.tipo == "PARCIAL"){
            return new CalculadorTiempoParcial(this.saldo, tarjetas).monto;
        }
        else{
            return new CalculadorComision(this.porcentajeComision,tarjetas).monto;
        }
    }
}