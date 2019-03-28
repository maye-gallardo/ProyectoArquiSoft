export class GeneradorDeBoletas{
    constructor(empleado, jornada, tarjeta){
        this.empleado = empleado;
        this.fechactual=String(new Date()).slice(0,15);
        this.jornada = jornada;
        this.tarjeta = tarjeta;
    }

    get monto(){
        if(this.empleado != null){
           return this.jornada.monto;
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