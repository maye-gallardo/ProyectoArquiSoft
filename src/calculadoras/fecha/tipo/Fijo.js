export class Fijo{
    obtenerDia(fecha){
        return fecha.getDay();
    }
    obtenerMes(fecha){
        return fecha.getDate();
    }
    esUltimoViernesDelMes(fecha){
        return (this.obtenerDia(fecha)==5)&&(this.obtenerMes(fecha)>24);
    }
    verificarFecha(fecha){
        if (this.esUltimoViernesDelMes(fecha)){
            return true;
        }
        else{
            return false;
        }
    }
}