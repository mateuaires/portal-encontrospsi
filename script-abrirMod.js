const listaNaoTriado = document.querySelectorAll('.painel-section:nth-child(1) .open-modal');
const listaEmAndamento = document.querySelectorAll('.painel-section:nth-child(2) .open-modal');
const listaMeusPacientes = document.querySelectorAll('.painel-section:nth-child(3) .open-modal');

// Seleciona os modais 
const modalNaoTriado = document.getElementById('modal');
const modalEmAndamento = document.getElementById('modal-02');
const modalMeusPacientes = document.getElementById('modal-03');

// Função para abrir modal
function abrirModal(modal, cliente) {
    const clientNameElement = modal.querySelector('#modal-client');
    clientNameElement.textContent = cliente;
    modal.style.display = 'flex';
}

// Adiciona evento de clique para listas de clientes não triados
listaNaoTriado.forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault();
        const cliente = this.getAttribute('data-client');
        abrirModal(modalNaoTriado, cliente);
    });
});

// Adiciona evento de clique para listas de clientes em andamento
listaEmAndamento.forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault();
        const cliente = this.getAttribute('data-client');
        abrirModal(modalEmAndamento, cliente);
    });
});

// Adiciona evento de clique para listas de meus pacientes
listaMeusPacientes.forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault();
        const cliente = this.getAttribute('data-client');
        abrirModal(modalMeusPacientes, cliente);
    });
});

// Fecha o modal ao clicar no botão 'Voltar'
const closeModalButtons = document.querySelectorAll('.close-modal');
closeModalButtons.forEach(button => {
    button.addEventListener('click', function() {
        this.closest('.modal').style.display = 'none';
    });
});

// Fecha o modal ao clicar fora do conteúdo
window.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
});