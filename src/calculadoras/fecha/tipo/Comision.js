export class Comision{
    obtenerDia(fecha){
        return fecha.getDay();
    }
    obtenerMes(fecha){
        return fecha.getDate();
    }
    esSegundoViernes(fecha){
        return (this.obtenerDia(fecha)==5)&&(this.obtenerMes(fecha)==14||this.obtenerMes(fecha)==28);
    }
    verificarFecha(fecha){
        if (this.esSegundoViernes(fecha)){
            return true;
        }
        else{
            return false
        }
    }
}