var num = document.getElementById('txtn')
var lista = document.getElementById('txtlista')
var res = document.getElementById('finalizado')
var valores = []

function isNumero(n){
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else{
        return false
    }
}

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    } else{
        return false
    }
}

function incluir(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        var opcao = document.createElement('option')
        opcao.text = `Valor ${num.value} adicionado`
        lista.appendChild(opcao) 
        res.innerHTML = ''
    } else{
        window.alert('Valor Invalido ou já consta na lista.')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if(valores.length == 0){
        window.alert('Informe um número de autenticação')
        document.getElementById('txtn').focus()
        return false
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores){
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if(valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / total

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }
}

function limpar(){
    lista.innerHTML = ''
    res.innerHTML = ''
    valores = []
}
