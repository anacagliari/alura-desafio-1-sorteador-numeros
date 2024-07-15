function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    let listaSorteados = [];
    let numero;
    let quantidadeNumerosParaSortear = (ate - de);
    //alert(`Quantidade de números para sortear: ${quantidade}. Sortear do número ${de} até o número: ${ate}`);

    if (de >= ate) {
        alert("O campo 'Do número' deve ser menor que o campo 'Até o número'. Confira seus números.");
        return;
    } 

    if (quantidade > quantidadeNumerosParaSortear) {
        alert("O campo 'Quantidade' deve ser maior que a subtração dos demais campos. Ajuste seus números.");
        return;
    } 

    for (let i = 0; i < quantidade; i++) {
        numero = gerarNumeroAleatorio(de, ate);
        while (listaSorteados.includes(numero)) {
            numero = gerarNumeroAleatorio(de, ate);
        }
        listaSorteados.push(numero);
    }

    //alert(listaSorteados);
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${listaSorteados}</label>`;
    alterarBotaoReiniciar();
}

function gerarNumeroAleatorio(deNumeroMin, ateNumeroMax) {
    return Math.floor(Math.random() * (ateNumeroMax - deNumeroMin + 1) + deNumeroMin);
}

function alterarBotaoReiniciar() {
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function limparCampo() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
}

function reiniciar() {
    alterarBotaoReiniciar();
    limparCampo();
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
}
