export class GeneradorDeBoletas{
    constructor(empleado){
        this.empleado = empleado;
    }

    get monto(){
        if(this.empleado == null){
            return 0;
        }
        else{
           return this.empleado.salario;
        }
    }
}