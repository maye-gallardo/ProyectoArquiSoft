export class TiempoParcial{
    constructor(montoHora, horasTrabajadas){
        this.montoHora = montoHora;
        this.horasTrabajadas = horasTrabajadas;
    }
    get monto(){
        return this.montoHora * this.horasTrabajadas;
    }
}