//1 ---------------------------------------------------
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';
//2 ---------------------------------------------------
function clickBotaoConsole() {
    console.log('O botão Console foi clicado');
};
//3 ---------------------------------------------------
function clickBotaoAlerta() {
    alert('Eu amo JS')
};
//4 ---------------------------------------------------
function clickBotaoPrompt() {
    let cidade = prompt('Digite o nome de uma cidade do Brasil');
    alert(`Estive em ${cidade} e lembrei de você`)
};
//5 ---------------------------------------------------
function clickBotaoSoma() {
    let valor1 = prompt('Digite o primeiro valor inteiro a ser somado');
    let valor2 = prompt('Digite o segundo valor inteiro a ser somado');
    let soma = parseInt(valor1) + parseInt(valor2);
    alert(`A soma entre ${parseInt(valor1)} e ${parseInt(valor2)} é igual a ${soma}`)
};