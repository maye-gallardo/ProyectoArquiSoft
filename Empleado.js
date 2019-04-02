import { TiempoFijo } from "./CalculadorTiempoFijo";
import { TiempoParcial } from "./CalculadorTiempoParcial";
import { Comision } from "./CalculadorComision";

export class Empleado{ 
    constructor(nombre, saldo, tipo, porcentajeComision){
        this.nombre = nombre;
        this.saldo = saldo;
        this.tipo = tipo;
        this.porcentajeComision = porcentajeComision;
    }
    calcularSalario(tarjetas){
        if(this.tipo == "FIJO"){
            return new TiempoFijo(this.saldo).monto;
        }
        else if(this.tipo == "PARCIAL"){
            return new TiempoParcial(this.saldo, tarjetas).monto;
        }
        else{
            return new Comision(this.porcentajeComision,tarjetas).monto;
        }
    }
}