export class GeneradorDeBoletas{
    constructor(empleado){
        this.empleado = empleado;
        this.fechactual=String(new Date()).slice(0,15);
    }

    get monto(){
        if(this.empleado != null){
           return this.empleado.salario;
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