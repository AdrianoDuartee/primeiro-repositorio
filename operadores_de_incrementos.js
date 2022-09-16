alert("código Funcionando!")// mostra uma mensagem para o usuario.
const nomeUsuario = prompt("Olá, usuario qual seu nome?")// mostra uma mensagem e recebe um valor

let num = Number(prompt("olá, " + nomeUsuario + ". Digite algum número, por favor :)"))
//console.log(typeof num) // typeof retorna o valor que a variavel armazena

// operadores de incrementos
//const sucessor = num ++ // = num + 1
//const antecessor = num - 1

//alert("O sucessor de " + num + " é " + sucessor )
//alert("O antecessor de " + num + " é " + antecessor)
console.log(num++) // operador de pós- incremento
console.log(num)
console.log(++num) //oprador de pré-incremento

//operdores de decremento
console.log(num--) // operador de pós-decremento
console.log(num)
console.log(--num) // operador de pré-decremento