function calcular() {
    const altura = document.getElementById("altura").value
    const peso = document.getElementById("peso").value
    const resultado = document.getElementById("resultado")

    if (altura === '' || peso === '') {
        resultado.innerHTML = "Preencha todos os campos"
        return
    }

    const imc = (peso / (altura * altura)).toFixed(2)
    let resposta = ''

    if (imc < 18,5) {
        resposta = "Abaixo do peso"
        cor = "#3498db"
    } else if (imc < 25) {
        resposta = "Peso normal"
    } else if(imc < 30){
        resposta = "Sobrepeso"
    } else if(imc < 35){
        resposta = "Obesidade grau I"
    } else if(imc < 40){
        resposta = "Obesidade grau II"
    } else {
        resposta = "Obesidade grau III"
    }

    resultado.innerHTML = `IMC ${imc} - ${resposta}`
    resultado.style.background = cor
    resultado.style.color = "fff"
}