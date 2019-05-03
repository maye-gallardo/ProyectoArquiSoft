import { CalculadorFechaComision } from "./CalculadorFechaComision";
import { CalculadorFechaFijo } from "./CalculadorFechaFijo";
import { CalculadorFechaParcial } from "./CalculadorFechaParcial";

export class CalculadorFecha{
    constructor(){
    }
    
    identificarTipoDeEmpleado(tipo){
        if(tipo == "FIJO"){
            return new CalculadorFechaFijo();
        }
        else if(tipo == "PARCIAL"){
            return new CalculadorFechaParcial();
        }
        else{
            return new CalculadorFechaComision();
        }
    }
    estaEsLaFechaDePaga(tipo, fecha){
        return this.identificarTipoDeEmpleado(tipo).verificarFecha(fecha);
    }
}