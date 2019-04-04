export class CalculadorTiempoFijo{
    constructor(montoKardex){
        this.montoKardex = montoKardex;
    }
    calcularMonto(){
        return this.montoKardex;
    }
    obtenerDia(date){
        return date.getDay();
    }
    obtenerMes(date){
        return date.getDate();
    }
    esUltimoViernesDelMes(date){
        return (this.obtenerDia(date)==5)&&(this.obtenerMes(date)>24);
    }
    verificarFecha(date){
        if (this.esUltimoViernesDelMes(date)){
            return true;
        }
        else{
            return false;
        }
    }
}