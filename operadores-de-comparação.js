//Operadores de comparação
// verdadeiro(true) ou falso (false)

//Igualdade          == indica se a igualdade entre dois elementos
const msg = "Eu sou uma mensagem"
const msg2 = "Eu sou outra mensagem"

console.log(msg == msg2) // false

const num = 5
const num2 = 5

console.log(num == num2) // true

let a = 78
let b = "78"

console.log(typeof a) // typeof retorna a origem
console.log(typeof b)
console.log( a == b) // true

// idénticos             === diz se e idéntico ou nao
console.log(a === b) // false

let z = 5 // number
c = "Olá mundo" // string

// diferença

console.log(msg != msg2) // true
console.log(a != b) // false
console.log(a !== b) // true

a = 56
b = 38
let c = 500
let d = 500
console.log(a > b) // true
console.log(c >= d) // true
console.log(5 > 6) // false

console.log( 3 < 7.5) //true
console.log(7.5 < 7.5) //false
console.log(8 <= 8) //true

