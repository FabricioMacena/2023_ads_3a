class Livro{
    constructor(pNome, pPreco){
        this.nome = pNome
        this.preco = pPreco
    }

    get Nome(){return this.nome}
    set Nome(pNome){this.nome = pNome}

    get Preco(){return this.preco}
    set Preco(pPreco){return this.preco = pPreco}

    calcularDesconto(){
        this.preco = this.preco - 10
    }
}

var obj_livros1 = new Livro("Use a cabeça Java", 300)
obj_livros1.calcularDesconto()

console.log("Nome do Livro: " + obj_livros1.nome + " custa R$" + obj_livros1.preco)