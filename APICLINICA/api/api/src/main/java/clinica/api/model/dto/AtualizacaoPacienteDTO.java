package clinica.api.model.dto;

import jakarta.validation.constraints.NotNull;


public record AtualizacaoPacienteDTO(
        @NotNull
        Long id,
        String nome,
        String email,
        String cpf,
        EnderecoDTO endereco) {
}
