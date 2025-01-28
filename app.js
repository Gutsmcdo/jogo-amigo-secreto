// Array para armazenar os nomes dos amigos
const amigos = [];

// Função para adicionar amigos
function adicionarAmigo() {
    // Capturar o valor do campo de entrada
    const input = document.getElementById('amigo');
    const nome = input.value.trim(); // Remover espaços extras

    // Validar a entrada
    if (nome === '') {
        alert('Por favor, insira um nome.');
        return;
    }

    // Adicionar o nome ao array de amigos
    amigos.push(nome);

    // Atualizar a lista exibida na página
    atualizarLista();

    // Limpar o campo de entrada
    input.value = '';
}
// Função para atualizar a lista de amigos exibida na página
function atualizarLista() {
    // Obter o elemento da lista HTML
    const lista = document.getElementById('listaAmigos');
    
    // Limpar a lista existente para evitar duplicados
    lista.innerHTML = '';

    // Percorrer o array amigos e adicionar cada nome como um <li>
    for (let i = 0; i < amigos.length; i++) {
        const listItem = document.createElement('li'); // Criar o elemento <li>
        listItem.textContent = amigos[i]; // Definir o texto como o nome do amigo
        lista.appendChild(listItem); // Adicionar o <li> à lista
    }
}
// Função para sortear um amigo aleatoriamente
function sortearAmigo() {
    // Validar se há amigos disponíveis no array
    if (amigos.length === 0) {
        alert('A lista de amigos está vazia. Adicione amigos antes de sortear.');
        return;
    }

    // Gerar um índice aleatório
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obter o nome sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar o resultado na tela
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>O amigo sorteado é: <strong>${amigoSorteado}</strong></li>`;
}
