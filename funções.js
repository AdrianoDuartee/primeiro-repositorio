/**
 * Funções são blocos de construção fundamentais em javascript.Uma função e um procedimento de Javascript
 * -um conjunto de instruções que executa uma tarefa ou calcula um valor. para usar uma função,você deve
 * defini-la em algum lugar no escopo do qual você quiser chamá-la.
 */

/**
 * paramentos
 * 
 * São valores que passam para funções, para que eles utilizem esses valor dentro delas
 * 
 * passar um valor como paramento para mostra-lo dentro do alert
 */
// function cumprimentar(mensagem, repetir = 1) {
//     for (let i = 1; i <= repetir; i++){
//     alert(mensagem.toUpperCase())
//  }
// }
// function soma(num, num2){
//     /**
//      *  O return serve para enviar o resultado da execução daquela função
//      */
//     let result = num + num2
//     return result
// }

// function maiorValor(a, b){
//     if (a.b) {
//         return a 
//     } else {
//         return b
//     }
// }
// let resultado = soma(4, 7)
// console.log(`O valor da variável resultado é ${resultado}`)

// const num1 = parseInt(prompt("Informe o primeiro numero"))
// const num2 = parseInt(prompt("Informe o segundo numero"))
// alert(`O maior numero entre esses é ${maiorValor(num1, num2)}`)
// soma( 7.5, 7)
// soma( 2, 5)
// soma(8, 3)
//cumprimentar('Olá, mundo', 3)

/**
 * Criem uma função que gera o resultado de uma equação do segundo grau
 * 
 * ax² + bx + c = 0
 * 
 * delta = b² - 4ac
 * b = -b +- raiz de delta / 2a
 */

function equacao(a, b, c){
    const delta =  b ** 2 -4 * a * c
    /**Math é um objeto do JavaScript que ja possui métodos para fazer cálculos matemáticos mais complexos */
    const raizDelta = Math.sqrt(delta)
    const x1 = (-b + raizDelta) /(2 * a)
    const x2 = (-b - raizDelta) / (2 * a)
    return [x1, x2]
}

console.log(equacao(1, -1, -12))