import { Comision } from "./tipo/Comision";
import { Fijo } from "./tipo/Fijo";
import { Parcial } from "./tipo/Parcial";

export class CalculadorFecha{
    constructor(){
    }
    
    identificarTipoDeEmpleado(tipo){
        if(tipo == "FIJO"){
            return new Fijo();
        }
        else if(tipo == "PARCIAL"){
            return new Parcial();
        }
        else{
            return new Comision();
        }
    }
    estaEsLaFechaDePaga(tipo, fecha){
        return this.identificarTipoDeEmpleado(tipo).verificarFecha(fecha);
    }
}