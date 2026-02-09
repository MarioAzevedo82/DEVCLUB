console.log("Olá estou aki!")

/*
getElementById -> Tráz UM elemento pelo ID
getElementByClassName -> Trás TODOS os elementos com essa classe
getElementByTagName -> Trás TODOS os elementos com essa TAG
getElementBy -> Trás TODOS elementos com esse nome

querySelector -> Trás UM elemento, o PRIMEIRO que encontrar
querySelectorAll -> Trás TODOS os elementos que encontrar
*/

// const input = document.getElementById("main-input")
// console.log(input)

const elements = document.getElementsByClassName("paragraph-js")
console.log(elements)

const elements1 = document.getElementsByTagName("p")
console.log(elements1)

const elements2 = document.getElementsByName("nome-completo")
console.log(elements2)

const elements3 = document.querySelector("p")
console.log(elements3)
const elements4 = document.querySelector(".paragraph-js")
console.log(elements4)

/*
Alterando e Acessando textos

textContent -> Pega todo o conteúdo
innerText -> Pega APENAS o texto
innnerHTML -> Permite adicionar HTML e texto

*/

const elemento = document.querySelector(".paragraph-js");


elemento.textContent = "O novo texto é esse!"
console.log(elemento.textContent) // SÓ HTML
console.log(elemento.innerText) // LEVA EM CONTA O CSS
console.log(elemento.innerHTML) // TRÁS TUDO

const button = document.querySelector(".main-button");

button.style.color = "white"
button.style.backgroundColor = "red"

/*
Eventos

*/
const input = document.querySelector("#main-input")

function cliqueiNoBotao() {
    alert("Botão clicado com sucesso!")
}

function digiteiNoInput() {
    console.log(input.value)
}