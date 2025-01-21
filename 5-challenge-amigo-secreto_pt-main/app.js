//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
let amigoSecreto;

function adicionarAmigo() {
    let adicionar = document.querySelector('Input').value.trim();
    if (adicionar == '') {
        alert("Por favor, insira um nome.");
    } else {
        if (amigos.some(amigo => amigo.toLowerCase() === adicionar.toLowerCase())) {
            alert("Esse nome ja existe, digite outro nome.");
        } else {
            amigos.push(adicionar);
            mostrarNaLista();
            limparCampo();
        }
    }
};

function mostrarNaLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    for (i = 0; i < (amigos.length); i++) {
        let itemLista = document.createElement('li');
        itemLista.textContent = amigos[i];
        lista.appendChild(itemLista);
    }
};

function limparCampo() {
    let limpar = document.querySelector('input');
    limpar.value = '';
};


function sortearAmigo() {
    if (amigos.length == 0) {
        alert("A lista de amigos do sorteio está vazia, tente novamente apos digitar nomes para sorteio");
    } else {
        if (amigos.length == 1) {
            alert("A lista possui apenas um nome, digite pelo menos mais um nome.");
        } else {
            let quantidadeDeElementosNaListaAmigos = amigos.length;
            let amigoSecreto = amigos[Math.floor(Math.random() * quantidadeDeElementosNaListaAmigos)];
            let resultado = document.getElementById('resultado');
            resultado.innerHTML = amigoSecreto;
        }
    }
};
