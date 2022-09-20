 // operadores lógicos

 // Operador E 

 // V -> verdadeiro
 // F -> falso

 //V V -> V
 //F V -> F
 //V F -> F
 //F F -> F


 // Média precisa ser maior ou igual 7 e preciso ter, no minimo, 80% de presença
 const media = (3.5 + 6 + 10) / 3
 const presença = 0.7

 console.log(media >= 7 && presença >= 0.8) // false

 // Operador Ou

 //V V -> V
 //F V -> V
 //V F -> V
 //F F -> F

 console.log(4 > 7 )

//Operador NOT

/**
 * NOT V -> F
 * NOT F -> V
 */

 const resultado = 5 < 3

 console.log(!resultado)


