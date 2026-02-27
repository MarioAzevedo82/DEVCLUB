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

    if (imc < 18.5) {
        resposta = "Abaixo do peso"
        cor = "#3498db"
    } else if (imc < 25) {
        resposta = "Peso normal"
        cor = "#2ecc71"
    } else if(imc < 30){
        resposta = "Sobrepeso"
        cor = "#f1c40f"
    } else if(imc < 35){
        resposta = "Obesidade grau I"
        cor = "#e67e22"
    } else if(imc < 40){
        resposta = "Obesidade grau II"
        cor = "#e74c3c"
    } else {
        resposta = "Obesidade grau III"
        cor = "#8e0000"
    }

    resultado.innerHTML = `IMC ${imc} <br>${resposta}`
    resultado.style.background = cor
    resultado.style.color = "fff"
}