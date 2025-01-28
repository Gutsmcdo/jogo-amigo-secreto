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