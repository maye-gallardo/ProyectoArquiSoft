export class Comision{
    constructor(porcentajeComision, TarjetaDeVentas){
        this.porcentajeComision = porcentajeComision;
        this.TarjetaDeVentas = TarjetaDeVentas;
    }
    get monto(){
        var totalVentas = 0;
        this.TarjetaDeVentas.forEach(element => {
            totalVentas += element.MontoVendido;
        });
        return this.porcentajeComision * totalVentas;
    }
}