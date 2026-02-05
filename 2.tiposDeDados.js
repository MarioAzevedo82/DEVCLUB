/*
1. String - Textos
 
*/

const texto1 = "Textos com aspas duplas"
const texto2 = 'Textos com aspas simples'
const texto3 = `Textos com a crase` //Template String

console.log(texto1)
console.log(texto2)
console.log(texto3)

const myAge = 43
const wifeAge = 39
const myString = `Minha idade é ${myAge} e da minha esposa é ${wifeAge}` 

console.log(myString)

/*
2. Numbers -> Números

*/

const number1 = 32 / 2
const fakeNumber = "32 / 2"

console.log(number1);
console.log(fakeNumber);

/*
3. Boolean -> Boleano
true or false

*/

var a = 34/983
var b = 444/9876
var c = a < b

console.log(c)

/*
4. Object -> Objetos

*/

const name = "Mario"
const age = 43
const address = "Rua Sem Nome, número Zero"

const mario = {
    name: "Mario",
    age: 43,
    address: {
        street: "Rua Sem Nome",
        number: 0,
        city: "São Nunca",
        state:"SC",
        country: "Brasil"
    }
}

console.log(mario)
console.log(mario.age)

mario.address.number = 10 // altrar o objeto
mario.name = "Hulk" // alterar o objeto

console.log(mario)

/*
5. Null & Undefined

 */

const user = {
    nome:"Mario",
    idade: 43,
    nomeDoConjuge: "Thalita",
    id: null
}

console.log(user)

console.log(user.abacate) // Undefined -> Não existe