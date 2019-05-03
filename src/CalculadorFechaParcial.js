export class CalculadorFechaParcial{
    obtenerFecha(fecha){
        return fecha.getDay();
    }
    verificarFecha(fecha){
        if (this.obtenerFecha(fecha)==5){
            return true;
        }
        else{
            return false
        }
    }
}