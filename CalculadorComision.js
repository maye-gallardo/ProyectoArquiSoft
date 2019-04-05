export class CalculadorComision{
    constructor(porcentajeComision, TarjetaDeVentas){
        this.porcentajeComision = porcentajeComision;
        this.TarjetaDeVentas = TarjetaDeVentas;
    }
    calcularTotalVentas(){
        var totalVentas = 0;
        this.TarjetaDeVentas.forEach(element => {
            totalVentas += element.MontoVendido;
        });
        return totalVentas;
    }
    calcularMonto(){
        return this.porcentajeComision * this.calcularTotalVentas();
    }
}