// Seleciona o botão de alternância de tema
let themeToggler = document.querySelector('#theme-toggler');

// Adiciona um evento de clique ao botão
themeToggler.onclick = () => {
    // Alterna a classe 'fa-sun' no ícone do botão
    themeToggler.classList.toggle('fa-sun');

    // Se o botão tem a classe 'fa-sun', aplica o tema escuro no body
    if (themeToggler.classList.contains('fa-sun')) {
        document.body.classList.add('active'); // Tema escuro ativado
    } else {
        document.body.classList.remove('active'); // Tema claro ativado
    }
};
