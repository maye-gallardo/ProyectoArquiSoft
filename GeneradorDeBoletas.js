export class GeneradorDeBoletas{
    constructor(empleadosTarjetas){
        this.empleadosTarjetas=empleadosTarjetas;
    }
    generarBoletas(){
        var boletas = [];
        this.empleadosTarjetas.forEach(element => {
            boletas.push(element[0].calcularSalario(element[1]));
        });
        return boletas;
    }
}