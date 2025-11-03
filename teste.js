let resposta = document.getElementById('resposta')

function principal(){

    let number = Number(document.getElementById('number').value)
    let numberb = Number(document.getElementById('numberb').value) 
    let soma = calcularQntd(number, numberb)
    //chama a soma
    resposta.innerHTML += ``
    resposta.innerHTML = `o resultado da soma é: ${soma.toFixed(2)}`
    //resposta para o site                          
}

function calcularQntd(number, numberb){
    return number + numberb
    //!soma
}







