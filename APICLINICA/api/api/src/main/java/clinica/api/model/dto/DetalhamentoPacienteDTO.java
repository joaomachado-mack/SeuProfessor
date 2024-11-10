package clinica.api.model.dto;

import clinica.api.model.Endereco;
import clinica.api.model.Paciente;

public record DetalhamentoPacienteDTO(Long id, String nome, String email, String cpf, Endereco endereco) {

    public DetalhamentoPacienteDTO(Paciente paciente) {
        this(paciente.getId(), paciente.getNome(), paciente.getEmail(), paciente.getCpf(), paciente.getEndereco());
    }
}
