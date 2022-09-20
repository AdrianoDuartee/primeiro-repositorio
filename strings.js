// Delimitação de Strings

const aspasSimples="Olá mundo"
console.log(aspasSimples)

// Caracteres de escape

const aspasDuplas=" Olá eu sou o \n JavaScript" // \n = quebra de linha
console.log(aspasDuplas)

const textoComCrase = `Olá eu sou o 
JavaScrip` // ` = quebra linha no JavaScript sem precisa por nada mais
console.log(textoComCrase)

// Concatenação

//const nomeUsuario= prompt("Olá usuário, qual seu nome?")
//const idadeUsuario= parseInt(prompt("Qual a sua idade?"))
//alert("Então o seu nome é " + nomeUsuario + " e sua idade é " + idadeUsuario)
//alert("Olá minha idade é " + 20 + 5);
//alert("Olá, minha idade é " + (20 + 5))
// template string
//alert(`Então o seu nome é ${nomeUsuario} e a sua idade é ${idadeUsuario}`)

//Métodos das strings

const texto= "O JavaScript foi criado alguns anos após o Python. No entanto, o JavaScript é bem mais legal."
console.log(texto.toUpperCase()) // ToupperCase deixa todo testo em maiusculo
console.log(texto.toLowerCase()) // toLoowerCase deixa minusculo
console.log(texto.concat(' A linguagem C é a mãe de todas as linguagens')) // junta as duas frases
console.log(texto[2], texto[17]) // pega a letra correspondente na frase
console.log(texto.substring(2)) // pega do numero da letra par frente
console.log(texto.substring(2, 12)) // pega uma palavras especifica
console.log(texto.replace('JavaScript', 'Rust')) // replace substitui a primeira ocorrência da pesquisa
//console.log(texto.replaceALL('JavaScript', 'Kotlin'))
console.log(texto.replace(/JavaScript/g, 'PHP'))
console.log(texto.replace(/JavaScript/gi, 'PHP'))

const html = '<!DOCTYPE html>\n<html></html>'
console.log(html.startsWith('<!DOCTYPE html>')) // verifica se é o arquivo começa com oq esta no HTML
console.log(html.endsWith('</body>'))
const mensagem = '                                   Olá, mundo'
console.log(mensagem)
console.log(mensagem.trim()) // remove os espaços

