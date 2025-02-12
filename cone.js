export default class cone {
    constructor(raio, altura){
        this.raio = raio
        this.altura = altura
    }

    calcularGeratriz(){
        return Math.sqrt((this.raio * this.raio)+(this.altura * this.altura))
    }

    calcularVolume(){
        return (Math.PI * this.raio * this.raio * this.altura) / 3
    }

    CalcularAreaTotal(){
        return ((Math.PI * this.raio * this.raio) + (Math.PI * this.raio * this.calcularGeratriz()))
    }
}