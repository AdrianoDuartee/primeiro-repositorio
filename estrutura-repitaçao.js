    /**
     * Estrutura de Repetição
     */
    // while -> enquanto

    let precoProduto = parseFloat(prompt('Qual o preço do produto?'))
    while (isNaN(precoProduto) || precoProduto <= 0) {
       alert('O preço digitado e invalido. Por favor, digite o numero correntemente') 
       precoProduto = parseFloat(prompt('Qual o preço do produto?'))
    }
    const mensagem = `
    Qual a forma de pagamento?
    Digite 1 para pagamento em dinheiro
    Digite 2 para pagamento em cheque
    Digite 3 para pagamento em cartão
    `
    let metodoDePagamento = parseInt(prompt(mensagem))
    while (metodoDePagamento >= 4 || isNaN(metodoDePagamento) || metodoDePagamento <= 0 ) {
        alert('O numero digitado e invalido. Por favor, digite o numero correntemente')
        metodoDePagamento = parseInt(prompt('Digite o numero correspondente a opção:'))  
    }

    console.log(precoProduto)
    console.log(metodoDePagamento)
    
    // Se o valor da contante 'metodoDePagamento' for 1 ou 2, significa que a pessoa possuirá um desconto de 10%
    
    if (metodoDePagamento == 1 || metodoDePagamento == 2){
        const precofinal = precoProduto * 0.9
        alert(`O preço final do pagamento é ${precofinal} reais`)
    } else if (metodoDePagamento == 3){
        let parcelas = parseInt(prompt('Informe a quantidade de parcelas')) 
    
    while (parcelas >= 4 || isNaN(parcelas) || parcelas <= 0 ){
        alert ('O numero digitado e invalido. Por favor, digite o numero de parcelas correspondente:')
        parcelas = parseInt(prompt('Digite o numero correspondente a opção:'))
    }
        if ( parcelas == 1) {
            const precofinal = precoProduto * 0.85
            alert(`O preço final do pagamento é ${precofinal} reais`)
        } else if (parcelas == 2){
            alert(`O preço final do pagamento é ${precofinal} reais`)
        } else if (parcelas == 3){
            const precofinal = precoProduto * 1.1
            alert (`O preço final do pagamento é ${precofinal} reais`)
        }
    }
    