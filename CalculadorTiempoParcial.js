export class CalculadorTiempoParcial{
    constructor(montoHora, tarjetasDeAsistencia){
        this.montoHora = montoHora;
        this.tarjetasDeAsistencia = tarjetasDeAsistencia;
    }
    get monto(){
        var totalHoras = 0;
        this.tarjetasDeAsistencia.forEach(element => {
            totalHoras += element.totalHorasTabajadas;
        });
        return this.montoHora * totalHoras;
    }
}