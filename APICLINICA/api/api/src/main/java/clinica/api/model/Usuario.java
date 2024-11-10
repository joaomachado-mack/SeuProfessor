package clinica.api.model;


import clinica.api.model.dto.CadastroUsuarioDTO;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Table(name = "usuarios")
@Entity(name = "Usuario")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Usuario{

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String login;
    private String senha;
    private Boolean medico;

    public Usuario(CadastroUsuarioDTO cadastroUsuarioDTO){
        this.login = cadastroUsuarioDTO.login();
        this.senha = cadastroUsuarioDTO.senha();
        this.medico = false;
    }

}