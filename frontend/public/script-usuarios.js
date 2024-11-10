function cancelar() {
    window.history.back();
}

document.getElementById("cadastroUsuarioForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    const usuario = {
        login: document.getElementById("usuario").value,
        senha: document.getElementById("senha").value
    };

    if (!usuario.login || !usuario.senha) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    try {
        const response = await fetch("http://localhost:8080/usuarios", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(usuario)
        });

        if (response.ok) {
            alert("Usuário cadastrado com sucesso!");
            document.getElementById("cadastroUsuarioForm").reset();
        } else {
            alert("Erro ao tentar inserir o usuário: " + response.status);
        }
    } catch (error) {
        console.error("Erro:", error);
        alert("Erro ao tentar inserir o usuário.");
    }
});
