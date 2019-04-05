export class CalculadorFechaComision{
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