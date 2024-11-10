package clinica.api.controller;


import clinica.api.model.Consulta;
import clinica.api.model.Paciente;
import clinica.api.model.dto.*;
import clinica.api.model.repository.ConsultaRepository;
import clinica.api.model.service.AgendaDeConsultas;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("consultas")
public class ConsultaController {

    @Autowired
    private AgendaDeConsultas agenda;
    @Autowired
    private ConsultaRepository consultaRepository;


    @PostMapping
    @Transactional
    public ResponseEntity agendarConsulta(@RequestBody @Valid AgendamentoConsultaDTO dados) {
        var dto = agenda.agendarConsulta(dados);
        return ResponseEntity.ok(dto);
    }

    @PostMapping("/pesquisaMinhasConsultas")
    @Transactional
    public ResponseEntity<List<ListagemConsultaDTO>> pesquisaConsultasIndividuais(@RequestBody @Valid PesquisaConsultasPorDatasDTO dados) {
        List<Consulta> consultas = consultaRepository.findByPacienteIdAndDataBetween(dados.dataInicio(), dados.dataFim(),dados.idUsuario());

        if(consultas.isEmpty()){
            return ResponseEntity.notFound().build();
        }

        List<ListagemConsultaDTO> listagemConsultaDTOs = consultas.stream()
                .map(consulta -> new ListagemConsultaDTO(consulta)) // Assuming you have a ListagemConsultaDTO constructor that takes a Consulta object
                .collect(Collectors.toList());

        return ResponseEntity.ok(listagemConsultaDTOs);
    }

    @PutMapping
    @Transactional
    public void cancelarConsulta(@RequestBody @Valid CancelamentoConsultaDTO dados) {
        var consulta = consultaRepository.getReferenceById(dados.idConsulta());
        consulta.cancelar(dados.motivo());
        consultaRepository.save(consulta);

    }

    @GetMapping
    public Page<ListagemConsultaDTO> listarConsulta(@PageableDefault(size = 10, sort = {"id"}) Pageable paginacao) {
        return consultaRepository.findAll(paginacao).map(ListagemConsultaDTO::new);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ConsultaDTO> getConsulta(@PathVariable Long id) {
        Optional<Consulta> consultaOptional = consultaRepository.findById(id);
        if (consultaOptional.isPresent()) {
            Consulta consulta = consultaOptional.get();
            ConsultaDTO consultaDTO = new ConsultaDTO(consulta);
            return ResponseEntity.ok(consultaDTO);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/inserirObservacao")
    @Transactional
    public void inserirObservacao(@RequestBody @Valid ObservacaoConsultaDTO dados) {
        var consulta = consultaRepository.getReferenceById(dados.idConsulta());
        consulta.inserirObservacao(dados.observacao());
        consultaRepository.save(consulta);

    }


}
