function pegarDadosIMC(){           // pega os atributos peso e altura dos campos inputs no html

    let peso = document.getElementById('peso').value
    let alt = document.getElementById('altura').value
    return peso / (alt * alt)
}

function classificarIMC(imc){        // classifica o IMC e mostra no html

    let clf = ''

    if (imc < 18.5){
        clf = 'Desnutrição'
    }

    else if (imc < 25){
        clf = 'Peso Normal'
    }

    else if (imc < 30){
        clf = 'Sobrepeso'
    }

    else if (imc < 35){
        clf = 'Obesidade 1'
    }

    else if (imc < 40){
        clf = 'Obesidade 2'
    }

    else {
        clf = 'Obesidade 3'
    }

    document.getElementById('res').innerHTML = imc
    document.getElementById('resClf').innerHTML = clf
}

function calcularIMC(){            // utiliza ambas as funções para mostrar os dados no html

    let imc = pegarDadosIMC()
    classificarIMC(imc)
}