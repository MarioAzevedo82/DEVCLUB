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

    if (imc < 20) {
        resposta = "abaixo do peso"
    } else if (imc < 27) {
        resposta = "peso normal"
    } else {
        resposta = "gordo"
    }

    resultado.innerHTML = `IMC ${imc} - ${resposta}`
}