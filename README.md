Seu Professor – Sistema de controle de consulta medica

Descrição:
Este sistema é composto por um back-end em Spring Boot e um front-end em HTML, CSS e JavaScript.
Back-end

O back-end é uma API REST desenvolvida em Spring Boot, que utiliza JPA (Java Persistence API) para gerenciar o acesso e a manipulação de dados em um banco de dados MySQL. O JPA facilita a interação com o banco de dados ao mapear objetos Java para tabelas do banco, tornando as operações de CRUD (Create, Read, Update, Delete) mais simples e seguras.
Front-end

O front-end é construído em HTML, CSS e JavaScript. A interface HTML e CSS permite que os usuários visualizem e interajam com o sistema, enquanto o JavaScript é usado para enviar e receber dados da API Spring Boot. O JavaScript executa requisições HTTP para a API (por exemplo, para cadastro de usuários e validação de CEP), possibilitando que o sistema seja dinâmico e atualize os dados sem precisar recarregar a página.

Assim, o Spring Boot com MySQL e JPA no back-end cuida do armazenamento e processamento dos dados, enquanto o front-end em HTML, CSS e JavaScript lida com a apresentação e interação do usuário.


Tutorial para Rodar o Projeto - Back-end e Front-end

Este tutorial mostra como configurar e rodar tanto o back-end em Spring Boot com MySQL quanto o front-end em HTML, CSS e JavaScript.
1. Configuração do Back-end (Spring Boot)
1.1 Pré-requisitos

    JDK (Java Development Kit) versão 11 ou superior.
    Maven para gerenciar as dependências.
    MySQL para o banco de dados.

1.2 Configuração do Banco de Dados

    Abra o MySQL e crie um banco de dados chamado sysconsultas (ou outro nome que você desejar).

    Anote as credenciais de acesso ao MySQL (usuário, senha, e porta), pois serão usadas na configuração da aplicação.

    CREATE DATABASE sysconsultas;

1.3 Configuração do Projeto Spring Boot

    No diretório do projeto, abra o arquivo de configuração do Spring Boot em src/main/resources/application.properties.

    Configure as propriedades de conexão com o banco de dados MySQL. Exemplo:

spring.datasource.url=jdbc:mysql://localhost:3306/sysconsultas
spring.datasource.username=seu_usuario
spring.datasource.password=sua_senha
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQLDialect

    spring.datasource.url: URL do banco de dados.
    spring.datasource.username e spring.datasource.password: credenciais do MySQL.
    spring.jpa.hibernate.ddl-auto: configura o Hibernate para criar e atualizar o esquema do banco automaticamente.

Adicione as dependências ao projeto, incluindo Spring Web, Spring Data JPA e MySQL Driver (caso o projeto não esteja configurado). No arquivo pom.xml, verifique as seguintes dependências:

    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-data-jpa</artifactId>
    </dependency>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
    </dependency>
    <dependency>
        <groupId>mysql</groupId>
        <artifactId>mysql-connector-java</artifactId>
    </dependency>

1.4 Rodando o Back-end

    Abra o terminal na pasta do projeto.

    Compile e rode o projeto com Maven:

mvn clean install
mvn spring-boot:run

O Spring Boot iniciará o servidor na porta 8080 (por padrão), e a API estará disponível em http://localhost:8080.

Verifique se o servidor está rodando corretamente acessando http://localhost:8080/health (ou qualquer endpoint da API que você tenha configurado) no navegador ou no Postman

Testando a Integração

    No navegador, acesse o front-end.
    Realize uma ação no front-end que envie uma requisição para a API (por exemplo, faça login ou cadastre um usuário).
    Verifique no console do back-end (Spring Boot) e no banco de dados MySQL para confirmar que a operação foi realizada corretamente.

Resumo

    Back-end: Configure o Spring Boot para conectar ao MySQL e rode-o com o comando mvn spring-boot:run.
    Front-end: Acesse o front-end em http://localhost:8000 usando um servidor local (Python ou Node.js).
    Integração: Verifique a comunicação entre front-end e back-end testando funcionalidades e observando a interação com o banco de dados.
