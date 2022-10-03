/**
 * Objetos é uma estrutura que permite organizar dados na forma de chave valor
 */
let end = {
    rua: 'rua',
    numero: 123,
    estado: 'MA',
    complemento: 'sem complemento',
    cep: '123456-123',
}
let pessoa = {
    nome: 'Joana',
    idade: 25,
    CPF: "000.000.000-00",
    altura: 1.89,
    // endereço: end,
    // destructuring
    endereço: { ...end},
    solteira: true,
    habilidade: ['React', 'Java', 'JavaScript', 'Golang', 'Rust'],
    cumprimentar () {
        /**
         * Quando eu desejo referenciar o mesmo objeto dentro dele mesmo, eu utilizo a palavra 'this'
         */
        console.log(`Olá, tudo bem? Meu nome é ${this.nome}`)
    }
}
/*console.log(end)
console.log(pessoa.habilidade[3])*/
// pessoa.cumprimentar()
// pessoa.nome = 'Pablo Escobar'
// pessoa.cumprimentar()
// pessoa.habilidade.push('angula')
// console.log(pessoa.habilidade)
// console.log(pessoa['CPF'])
console.log(end.rua)
console.log(pessoa.endereço.rua)
pessoa.endereço.rua = 'rua Secundária'
console.log(pessoa.endereço.rua)
console.log(end.rua)



