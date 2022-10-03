/**
 * Arrays ou vetores é um tipo especial que te permite armazenar diversos valores em apenas um local
 */

// criando um arrays

//let arr = new Array()

//let arr2= new Array(5)
//cada valor de array é separado por virgula
//dentro de um array eu posso ter vários tipo de dados
//posições de um array
//-> Cada posição é representado por um numero
//-> A primeira posição de um array e 0
//sempre que vc informa um numero indefinido ele te informara o valor undefined
//let arr = [10, 15, 9.8, "Eu sou um texto dentro de um array", 'Olá mundo', true, false, false]
//console.log(arr[6])
//arr[6] = 'Outro testo'
//console.log(arr[6])
//console.log(arr[8])// undefined
//arr[8] = 'Agora a posição 8 existe dentro de arr'
//console.log(arr[8])


const lista = ['João', 'Maria', 'Paulo', 'Pedro', 'Vitoria', 'Augusto', 'Fábio', 'Larissa']
console.log(lista)
lista.push('Roberta')// adiciona um valor no final da array
console.log(lista)
lista.unshift('Gustavo')// adiciona valor para no inicio do array
console.log(lista)
lista.pop()// remove o último valor do array
console.log(lista)
lista.shift()// remove o último valor do arra
console.log(lista)
console.log(lista.concat('Julio')) // cria um novo array adicionando o valor passado como parâmetro no final
console.log(lista)
console.log(lista.join('-> '))







