// (!!) var e let aceita redefinição diferentemente do const

var nome = 'Luiz'
var nome = 'João'

console.log("var: " + nome)


let nome = 'Luís'
nome = 'João'

console.log("let: " + nome)


const nome = 'Luís'
nome = 'João'

console.log("const: " + nome)