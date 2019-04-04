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
    obtenerDia(){
        var today = new Date();
        return today.getDay();
    }
    obtenerMes(){
        var today = new Date();
        return today.getDate();
    }
    esUltimoViernesDeLaSegundaSemanaDelMes(){
        return (this.obtenerDia()==5)&&(this.obtenerMes()==14||this.obtenerMes()==28);
    }
    verificarFecha(){
        if (esUltimoViernesDeLaSegundaSemanaDelMes()){
            return true;
        }
        else{
            return false
        }
    }
}