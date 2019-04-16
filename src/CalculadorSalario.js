import { CalculadorTiempoFijo } from "./CalculadorTiempoFijo";
import { CalculadorTiempoParcial } from "./CalculadorTiempoParcial";
import { CalculadorComision } from "./CalculadorComision";

export class CalculadorSalario{
    constructor(tipo){
        this.tipo = tipo;
    }

    tipoEmpleado(saldo, tarjetas, porcentajeComision){
        if(this.tipo == "FIJO"){
            return new CalculadorTiempoFijo(saldo);
        }
        else if(this.tipo == "PARCIAL"){
            return new CalculadorTiempoParcial(saldo, tarjetas);
        }
        else{
            return new CalculadorComision(porcentajeComision,tarjetas);
        }
    }
}