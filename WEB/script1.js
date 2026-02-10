/*
Eventos

*/

const input = document.querySelector("#main-input")
const select = document.querySelector("select")
const button = document.querySelector(".main-button")

select.addEventListener("change", function() {
    console.log("troquei o valor")
})

function troqueiValor(event){
    console.log(event)
}

select.addEventListener("change", troqueiValor)

input.addEventListener("keypress", troqueiValor)

button.addEventListener("click", function(){
    console.log("Clicou no verde")
})