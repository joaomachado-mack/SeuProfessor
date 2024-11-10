async function validarCep() {
    const cep = document.getElementById("cep").value;

    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        if (response.ok) {
            const data = await response.json();
            if (!data.erro) {
                document.getElementById("logradouro").value = data.logradouro;
                document.getElementById("bairro").value = data.bairro;
                document.getElementById("cidade").value = data.localidade;
                document.getElementById("estado").value = data.uf;
                // Desabilitar campos após preenchimento automático
                document.getElementById("logradouro").disabled = true;
                document.getElementById("bairro").disabled = true;
                document.getElementById("cidade").disabled = true;
                document.getElementById("estado").disabled = true;
            } else {
                if (confirm("CEP não encontrado. Deseja continuar com os campos vazios?")) {
                    document.getElementById("logradouro").disabled = false;
                    document.getElementById("bairro").disabled = false;
                    document.getElementById("cidade").disabled = false;
                    document.getElementById("estado").disabled = false;
                }
            }
        } else {
            alert("Erro ao consultar o CEP.");
        }
    } catch (error) {
        console.error("Erro:", error);
        alert("Erro ao consultar o CEP.");
    }
}

function cancelar() {
    window.history.back();
}

document.getElementById("cadastroMedicoForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    const medico = {
        nome: document.getElementById("nome").value,
        email: document.getElementById("email").value,
        crm: document.getElementById("crm").value,
        especialidade: document.getElementById("especialidade").value,
        endereco: {
            logradouro: document.getElementById("logradouro").value,
            bairro: document.getElementById("bairro").value,
            cep: document.getElementById("cep").value,
            cidade: document.getElementById("cidade").value,
            uf: document.getElementById("estado").value,
            complemento: document.getElementById("complemento").value,
            numero: document.getElementById("numero").value
        },
        login: document.getElementById("usuario").value,
        senha: document.getElementById("senha").value
    };

    try {
        const response = await fetch("http://localhost:8080/medicos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(medico)
        });

        if (response.ok) {
            alert("Médico cadastrado com sucesso!");
            document.getElementById("cadastroMedicoForm").reset();
        } else {
            alert("Erro ao cadastrar médico.");
        }
    } catch (error) {
        console.error("Erro:", error);
        alert("Erro ao cadastrar médico.");
    }
});
