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
    obtenerDia(date){
        return date.getDay();
    }
    obtenerMes(date){
        return date.getDate();
    }
    esSegundoViernes(date){
        return (this.obtenerDia(date)==5)&&(this.obtenerMes(date)==14||this.obtenerMes(date)==28);
    }
    verificarFecha(date){
        if (this.esSegundoViernes(date)){
            return true;
        }
        else{
            return false
        }
    }
}