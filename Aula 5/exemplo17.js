class Livro{
    constructor(pNome, pPreco){
        this.nome = pNome
        this.preco = pPreco
    }

    get Nome(){return this.nome}
    set Nome(pNome){this.nome = pNome}

    get Preco(){return this.preco}
    set Preco(pPreco){return this.preco = pPreco}

    calcularDesconto(pDesconto){
        this.preco = this.preco - (this.preco * pDesconto)
    }
}

var obj_livros1 = new Livro("Use a cabeça Java", 300)
var obj_livros2 = new Livro("Use a cabeça C#", 170)


var lista = []

lista.push(obj_livros1)
lista.push(obj_livros2)

console.log(lista[1])