import { TiempoFijo } from "./CalculadorTiempoFijo";
import { TiempoParcial } from "./CalculadorTiempoParcial";

export class GeneradorDeBoletas{
    constructor(empleado, tarjeta){
        this.empleado = empleado;
        this.fechactual=String(new Date()).slice(0,15);
        this.tarjeta = tarjeta;
    }

    get monto(){
        if(this.empleado != null){
            if(this.empleado.tipo == "FIJO"){
                return new TiempoFijo(this.empleado.monto).monto;
            }
            else if(this.empleado.tipo == "PARCIAL"){
                return new TiempoParcial(this.empleado.monto, this.tarjeta).monto;
            }
            else{
                
            }
        }
        return 0;
    }

    get fecha(){
        console.log(this.fechactual);
        return this.fechactual;
    }

    get nombreEmpleado(){
        return this.empleado.nombre;
    }
}