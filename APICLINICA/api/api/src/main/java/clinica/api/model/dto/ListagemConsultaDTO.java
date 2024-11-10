package clinica.api.model.dto;

import clinica.api.model.Consulta;

import java.time.LocalDateTime;

public record ListagemConsultaDTO(Long id, String medico, String paciente, LocalDateTime data, String motivo_cancelamento, String observacoes) {

    public ListagemConsultaDTO(Consulta consulta) {
        this(consulta.getId(),consulta.getMedico().getNome(),consulta.getPaciente().getNome(),consulta.getData(),consulta.getMotivoCancelamento().toString(), consulta.getObservacoes());
    }

}