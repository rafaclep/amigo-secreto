//1. Capturar o valor do campo de entrada: Utilize document.getElementById ou document.querySelector para obter o texto inserido pelo usuário.

//lista para armazenar os nomes
let amigos = []

//função para inserir os nomes dos amigos
function inserirNomeAmigo () {
    let input = document.getElementById('amigo');
//input.value pega o texto digitado pelo usuário + trim: retira espaços em branco do texto
    let nome = input.value.trim();

//Validar a entrada: Implemente uma validação para garantir que o campo não esteja vazio.
    if (nome === ''){
        alert ('Digite um nome para começar o sorteio.');
        return;
    }

    amigos.push(nome);

    let lista = document.getElementById('listaAmigos');
    // Limpa a lista antes de reprocessar
    lista.innerHTML = '';
    for (let i=0; i < amigos.length; i++) {
        lista.innerHTML += `<li>${amigos[i]}</li>`;
    }

    input.value = '';
    input.focus();
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Adicione os amigos para realizar o sorteio.');
        return
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let nomeSorteado = amigos[indiceSorteado];
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>${nomeSorteado} foi sorteado(a)!</li>`;
}