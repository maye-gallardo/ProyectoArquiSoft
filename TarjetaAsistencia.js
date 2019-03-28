export class TarjetaAsistencia{
    constructor(fecha, horaIngreso, horaSalida){
        this.fecha = fecha;
        this.horaIngreso = horaIngreso;
        this.horaSalida = horaSalida;
    }
    get totalHorasTabajadas(){
        return this.horaSalida - this.horaIngreso;
    }
}