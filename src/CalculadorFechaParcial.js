export class CalculadorFechaParcial{
    obtenerFecha(date){
        return date.getDay();
    }
    verificarFecha(date){
        if (this.obtenerFecha(date)==5){
            return true;
        }
        else{
            return false
        }
    }
}