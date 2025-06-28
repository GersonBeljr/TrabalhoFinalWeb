 HEAD
---
title: Detran

---


# 🎮 Jogo do Detran - Projeto Final DS122 ⌨️

![Badge PHP](https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white)
![Badge JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Badge HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![Badge CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Badge MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)

> Projeto final da disciplina de Desenvolvimento WEB 1 (DS122), consistindo em um jogo de digitação com sistema de pontuação, ligas e autenticação de usuários, desenvolvido com PHP, JavaScript, HTML5 e CSS3.

---

### 📚 Índice

* [Integrantes do Grupo](#-integrantes-do-grupo)
* [Visão Geral do Projeto](#-visão-geral-do-projeto)
* [Funcionalidades Principais](#-funcionalidades-principais)
* [Tecnologias e Ferramentas](#-tecnologias-e-ferramentas)
* [Estrutura do Banco de Dados](#-estrutura-do-banco-de-dados)
* [Como Executar o Projeto (Setup Local)](#-como-executar-o-projeto)
* [O Que Poderíamos Ter Feito de Diferente e Próximos Passos](#o-que-poderíamos-ter-feito-de-diferente-e-próximos-passos)

---

### 👥 Integrantes do Grupo

| Nome Completo     |    GRR                               |
| ----------------- | ------------------------------------ |
| ` Juliano Vidal Silva` | `20243064` |
| ` Gerson Belniowski Junior` | `20240439` |
| ` Roberto Rigo ` | `20240574` |

---

### 🎯 Visão Geral do Projeto

Este projeto implementa um sistema web de jogo de digitação onde os usuários podem se cadastrar, competir por pontuações e participar de ligas. O foco do desenvolvimento foi seguir estritamente os requisitos da disciplina DS122, utilizando JavaScript  para toda a lógica do jogo no front-end e PHP puro para o back-end, responsável pela persistência de dados, autenticação e regras de negócio.
O jogo foi inspirado e tem referências em um teste do Detran, cujo o papel seria o do usuário visualizar em um curto espaço de tempo uma imagem e, após isso, o usuário precisa digitar o que visualizou na tela.

---

### ✨ Funcionalidades Principais

* **👤 Autenticação de Usuários:**
    * Cadastro de novas contas.
    * Login com validação de credenciais no banco de dados.
    * Sessões de usuário para manter o acesso restrito.

* **🕹️ Gameplay:**
    * Jogo de digitação interativo implementado em JavaScript. *(Dica: Descreva brevemente o seu jogo. Ex: "Palavras caem da tela e o jogador deve digitá-las corretamente antes que cheguem ao final")*.
    * Cálculo e exibição de pontuação ao final da rodada.

* **📊 Quadros de Pontuação (Leaderboards):**
    * **Quadro Geral:** Pontuação de todos os jogadores (total e semanal).
    * **Quadro de Ligas:** Pontuação dos membros de uma liga (total e semanal).

* **📜 Relatórios e Histórico:**
    * Página de perfil onde o usuário pode visualizar seu histórico completo de partidas, com data e pontuação de cada uma.

* **🔒 Validações:**
    * Validação de formulários no front-end (JS) para feedback imediato.
    * Validação de segurança no back-end (PHP) para garantir a integridade dos dados.

---

### 🛠️ Tecnologias e Ferramentas

* **Front-end:**
    * `HTML5`: Estruturação das páginas.
    * `CSS3`: Estilização e responsividade.
    * `JavaScript `: Lógica do jogo, interatividade e requisições.

* **Back-end:**
    * `PHP para o servidor, responsável por toda a regra de negócio.

* **Banco de Dados:**
    * `[MySQL]`: Sistema de gerenciamento de banco de dados para armazenar usuários, partidas, ligas e pontuações.

* **Ambiente de Desenvolvimento:**
    * `XAMPP`: Servidor local Apache para rodar o PHP.
    *  `GitHub`: Para controle de versão.

---

### 🗂️ Estrutura do Banco de Dados


As principais tabelas do sistema são:
* **`usuarios`**: armazena dados de login, senha (hash) e informações do perfil.
* **`partidas`**: registra cada partida jogada, com a `fk_usuario`, pontuação e data.

---

### 🚀 Como Executar o Projeto (Setup Local)

Siga os passos abaixo para rodar o projeto em seu ambiente local.

**1. Pré-requisitos:**
* Ter um ambiente de servidor local como **XAMPP** ou **WAMP** instalado.
* Ter o **Git** instalado.

---

### O Que Poderíamos Ter Feito de Diferente e Próximos Passos

Refletindo sobre o processo de desenvolvimento, algumas abordagens alternativas poderiam ter facilitado a implementação de funcionalidades complexas como o sistema de ligas:
- Planejamento e Escopo: Uma lição aprendida foi a importância de dimensionar a complexidade de cada funcionalidade no início do projeto. Talvez uma versão mais simples do sistema de ligas pudesse ter sido implementada como um primeiro passo, deixando a automação para uma fase posterior.
-Como próximos passos, a implementação do sistema de ligas permaneceria como a principal prioridade para a evolução do projeto. O plano seria iniciar pela modelagem do banco de dados, seguida pelo desenvolvimento dos endpoints da API em PHP para gerenciar os dados das ligas e, finalmente, construir as visualizações correspondentes em JavaScript.
**Conclusão Final**
Em suma, o projeto atingiu seus objetivos fundamentais e serve como uma base sólida e funcional. A não implementação do sistema de ligas, longe de ser um demérito, tornou-se um valioso estudo de caso sobre complexidade de software, planejamento e arquitetura, enriquecendo enormemente a experiência de aprendizado obtida ao longo da disciplina.

