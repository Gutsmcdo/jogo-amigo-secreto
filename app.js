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
