console.log("Olá estou aki!")

/*
getElementById -> Tráz UM elemento pelo ID
getElementByClassName -> Trás TODOS os elementos com essa classe
getElementByTagName -> Trás TODOS os elementos com essa TAG
getElementBy -> Trás TODOS elementos com esse nome

querySelector -> Trás UM elemento, o PRIMEIRO que encontrar
querySelectorAll -> Trás TODOS os elementos que encontrar
*/

const input = document.getElementById("main-input")
console.log(input)

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

