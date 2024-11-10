async function autenticar(event) {
    event.preventDefault(); // Prevenir o comportamento padrão do formulário

    // Obter valores do formulário
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Configurar o objeto de dados
    const usuario = {
        login: username,
        senha: password
    };

    // Converter o objeto para JSON
    const jsonContent = JSON.stringify(usuario);

    try {
        // Definir a URL da API
        const apiUrl = 'http://localhost:8080/usuarios/valida-login'; // Substitua pela URL correta da API

        // Fazer a requisição POST
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: jsonContent
        });

        if (response.ok) {
            const usuarioRetorno = await response.json();
            alert("Login realizado com sucesso!");
            // Redirecionar para a página principal
            window.location.href = "menu-principal.html";
        } else {
            alert("Login ou senha incorretos");
        }
    } catch (error) {
        console.error('Erro:', error);
        alert("Ocorreu um erro ao tentar realizar o login");
    }
}

function cancelar() {
    window.close(); // Fecha a aba ou janela (só funciona em janelas abertas por JavaScript)
}

// Adiciona o evento ao formulário de login
document.getElementById('loginForm').addEventListener('submit', autenticar);

// Exemplo de script para fechar o menu dropdown ao clicar fora
document.addEventListener('click', function(event) {
    const dropdown = document.querySelector('.dropdown-content');
    if (dropdown && !event.target.closest('.dropdown')) {
        dropdown.style.display = 'none';
    }
});

document.querySelector('.dropdown').addEventListener('click', function() {
    const dropdownContent = this.querySelector('.dropdown-content');
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
});



