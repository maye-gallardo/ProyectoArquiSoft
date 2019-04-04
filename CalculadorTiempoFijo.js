export class CalculadorTiempoFijo{
    constructor(montoKardex){
        this.montoKardex = montoKardex;
    }
    calcularMonto(){
        return this.montoKardex;
    }
    obtenerDia(){
        var today = new Date();
        return today.getDay();
    }
    obtenerMes(){
        var today = new Date();
        return today.getDate();
    }
    esUltimoViernesDelMes(){
        return (this.obtenerDia()==5)&&(this.obtenerMes()>24);
    }
    verificarFecha(){
        if (esUltimoViernesDelMes()){
            return true;
        }
        else{
            return false;
        }
    }
}