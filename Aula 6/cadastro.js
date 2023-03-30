class Pessoa{
    constructor(pNome, pEndereco){
        this.nome = pNome
        this.endereco = pEndereco
    }

    get Nome(){return this.nome}
    set Nome(pNome){this.nome = pNome}

    get Endereco(){return this.endereco}
    set Endereco(pEndereco){this.endereco = pEndereco}

    imprimir(){
        return "Nome: " + this.nome + "\nEndereço: " + this.endereco
    }
}

class Fisica extends Pessoa{
    constructor(pNome, pEndereco, pCpf, pDataNascimento){
        super(pNome, pEndereco)
        this.cpf = pCpf
        this.dataNascimento = pDataNascimento
    }

    get Cpf(){return this.cpf}
    set Cpf(pCpf){this.cpf = pCpf}

    get DataNascimento(){return this.dataNascimento}
    set DataNascimento(pDataNascimento){this.dataNascimento = pDataNascimento}

    imprimir(){
        return super.imprimir() + "\nCPF: " + this.cpf + "\nData de nascimento: " + this.dataNascimento
    }
}

class Juridica extends Pessoa{
    constructor(pNome, pEndereco, pCnpj, pRazaoSocial){
        super(pNome, pEndereco)
        this.cnpj = pCnpj
        this.razaoSocial = pRazaoSocial
    }

    get Cnpj(){return this.cnpj}
    set Cnpj(pCnpj){this.cnpj = pCnpj}

    get RazaoSocial(){return this.razaoSocial}
    set RazaoSocial(pRazaoSocial){this.razaoSocial = pRazaoSocial}

    imprimir(){
        return super.imprimir() + "\nCNPJ: " + this.cnpj + "\nRazão Social: " + this.razaoSocial
    }
}

var obj_fisica = new Fisica("Fabricio", "Poá", "561.971.726-92", "21/03/2003")
console.log(obj_fisica.imprimir())

var obj_juridica = new Juridica("Rafael", "São Miguel", "190.231.123-12", "Educação")
console.log(obj_juridica.imprimir())