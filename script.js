// Seleciona todos os botões com a classe .btn-proximo
const avanca = document.querySelectorAll('.btn-proximo');

// Adiciona um listener de evento 'click' a cada botão
avanca.forEach(button => {
    button.addEventListener('click', () => {
        // Seleciona o passo atual
        const atual = document.querySelector('.ativo');
        // Obtém o próximo passo a partir do atributo data-proximo
        const proximoPassoId = 'passo-' + button.dataset.proximo;
        const proximoPasso = document.getElementById(proximoPassoId);

        // Remove a classe 'ativo' do passo atual
        atual.classList.remove('ativo');

        // Adiciona a classe 'ativo' ao próximo passo, se ele existir
        if (proximoPasso) {
            proximoPasso.classList.add('ativo');
        }
    });
});
