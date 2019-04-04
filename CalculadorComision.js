export class CalculadorComision{
    constructor(porcentajeComision, TarjetaDeVentas){
        this.porcentajeComision = porcentajeComision;
        this.TarjetaDeVentas = TarjetaDeVentas;
    }
    get calcularMonto(){
        var totalVentas = 0;
        this.TarjetaDeVentas.forEach(element => {
            totalVentas += element.MontoVendido;
        });
        return this.porcentajeComision * totalVentas;
    }
}