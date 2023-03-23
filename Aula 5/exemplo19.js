class Conta{
    constructor(){
        this.saldo = 0
    }

    get Saldo(){return this.saldo}
    set Saldo(pSaldo){this.saldo = pSaldo}

    imprimir(){
        return "Saldo: " + this.saldo
    }
}

class Corrente extends Conta{
    constructor(pLimite){
        super()
        this.limite = pLimite
    }

    get Limite(){return this.limite}
    set Limite(pLimite){return this.limite = limite}

    Imprimir(){
        return super.imprimir() + "\nLimite: " + this.limite
    }
}

var obj_corrente = new Corrente(300)
console.log(obj_corrente.Imprimir())