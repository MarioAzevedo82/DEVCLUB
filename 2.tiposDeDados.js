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

var a = 34 / 983
var b = 444 / 9876
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
        state: "SC",
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
    nome: "Mario",
    idade: 43,
    nomeDoConjuge: "Thalita",
    id: null
}

console.log(user)

console.log(user.abacate) // Undefined -> Não existe

/*
6. Array -> Vetor, Matriz

*/

const users = [
    {
        nome: "Hulk",
        idade: 7,
        nomeDoConjuge: "Lila",
        id: null
    },
    {
        nome: "Paulo",
        idade: 30,
        nomeDoConjuge: "Paula",
        id: null
    }
]

console.log(users)

const myArray = [20, 30, "Olá, JS", { name: "Mario", age: 43 }]

console.log(myArray[0])
console.log(myArray[1])
console.log(myArray[2])
console.log(myArray[3])

/*
7. If & Else

Controlador de Fluxo

-IF(se) -> Faça isso
-Else(Se não) -> Execute o ELSE

Operadores de comparação

> maior que
< menor que
== igual que

*/

const notaDoAluno = 4
const notaDeCorte = 5

if(notaDoAluno > notaDeCorte) {
    // O QUE SERÁ EXECUTADO, SE O IF FOR VERDADEIRO
    console.log("Párabens, você passou de ano!")
} else {
    // SE O IF FOR FALSO, ELE ENTRA AQUI
    console.log("Você foi reprovado.")
}

const senhaDoUsuario = 123456
const senhaDigitada = 123457

if(senhaDigitada == senhaDoUsuario){
    console.log("Seja bem-vindo, você está logado(a)!")
} else {
    console.log("Senha incorreta!")
}