import { Fijo } from "./tipo/Fijo";
import { Parcial } from "./tipo/Parcial";
import { Comision } from "./tipo/Comision";

export class CalculadorSalario{
    constructor(tipo){
        this.tipo = tipo;
    }

    tipoEmpleado(saldo, tarjetas, porcentajeComision){
        if(this.tipo == "FIJO"){
            return new Fijo(saldo);
        }
        else if(this.tipo == "PARCIAL"){
            return new Parcial(saldo, tarjetas);
        }
        else{
            return new Comision(porcentajeComision,tarjetas);
        }
    }
}