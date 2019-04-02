export class Comision{
    constructor(sueldoBase, montoKardex, porcentajeComision, ventas){
        this.sueldoBase = sueldoBase;
        this.montoKardex = montoKardex;
        this.porcentajeComision = porcentajeComision;
        this.ventas = ventas;
    }
    get monto(){
        return (this.sueldoBase - this.montoKardex) + (this.porcentajeComision * this.ventas);
    }
}