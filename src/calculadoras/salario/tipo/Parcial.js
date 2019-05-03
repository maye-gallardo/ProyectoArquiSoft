export class Parcial{
    constructor(montoHora, tarjetasDeAsistencia){
        this.montoHora = montoHora;
        this.tarjetasDeAsistencia = tarjetasDeAsistencia;
    }
    calcularTotalHoras(){
        var totalHoras = 0;
        this.tarjetasDeAsistencia.forEach(element => {
            totalHoras += element.totalHorasTabajadas;
        });
        return totalHoras;
    }
    calcularMonto(){
        return this.montoHora * this.calcularTotalHoras();
    }
}