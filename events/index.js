/**
 * criar um função responsável por mostra um alerta na tela
 */
let count = 0;

function mostrarAlerta() {
    /**
     *  o objeto document e uma objeto que faz uma representação do HTML do seu site dentro do JavaScript
     */
    /**
     * getElementById serve para recuperar um elemento HTML pelo id
     */
    /**
     * A propriedade classlist retorna um array com todas as classes Css que um elemento possui
     * 
     * classList.add() serve para adicionar novas classes dinamiticamente dentro de um elemento HTML
     */
    const divAlerta = document.getElementById('alerta')
    divAlerta.classList.add('mostrar')
    let contador = document.getElementById('aviso')
    count ++;
    contador.innerHTML = `Voce ja clicou ${count}`;
}
/**
 * classList.remove() remove uma classe
 */
function fecharAlerta() {
    const divAlerta = document.getElementById('alerta')
    divAlerta.classList.remove('mostrar')
  
}

const btnMostrar = document.getElementById('mostrar')
const btnFechar = document.getElementById('fechar')

/**
 * addEventListener e um método que te permite ouvir eventos do HTML pelo JavaScript
 */
/**
 * Se eu precisa passar uma função como paramento para outra eu passo a referencia dela, ou seja, a função sem o paramento na frente
 */

btnMostrar.addEventListener('click', mostrarAlerta)
btnFechar.addEventListener('click', fecharAlerta)