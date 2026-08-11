# Projeto Portfólio Pessoal

---

<div align="center">

<img src="https://img.shields.io/badge/HTML-5-orange?style=for-the-badge&logo=html5" alt="HTML Badge" />
<img src="https://img.shields.io/badge/CSS-3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS Badge" />
<img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript Badge" />

</div>

<br />

O **Projeto Portfólio Pessoal** é um site profissional desenvolvido com **HTML, CSS e JavaScript**, criado para apresentar minha trajetória, meus projetos, informações profissionais e formas de contato de maneira clara, interativa e responsiva.

O projeto possui uma identidade visual personalizada em **tons de azul**, além de elementos gráficos, animações e uma ilustração desenvolvida especialmente para o portfólio.

A aplicação também consome dados da **API do GitHub**, permitindo carregar automaticamente informações do perfil e dos repositórios.

---

## Funcionalidades

- Estrutura desenvolvida com **HTML semântico**
- Identidade visual personalizada com **CSS**
- Layout responsivo para:
    - Desktop
    - Tablet
    - Mobile
- Utilização de:
    - Variáveis CSS
    - Animações
    - Transições
    - Media Queries
    - Flexbox
    - Grid
- Integração com a **API do GitHub** para:
    - Exibição dinâmica das informações do perfil
    - Número de seguidores
    - Número de repositórios públicos
    - Informações dos projetos
- Exibição de **12 projetos** no portfólio:
    - 4 projetos principais definidos manualmente
    - 8 repositórios recentes carregados automaticamente pelo GitHub
- Identificação visual dos projetos em destaque
- Remoção automática de projetos duplicados entre os destaques e os repositórios recentes
- Exibição dos projetos em **carrossel responsivo** utilizando **Swiper.js**
- Exibição dinâmica de:
    - Linguagem principal
    - Tecnologias/tópicos do repositório
    - Descrição
    - Link para o GitHub
    - Link de deploy, quando disponível
- Formulário de contato com **validação no frontend**
- Envio de mensagens utilizando **FormSubmit**
- Página dedicada de confirmação de envio
- Navegação com menu fixo e rolagem suave
- Links para:
    - GitHub
    - LinkedIn
    - Currículo
    - Certificados

---

## Estrutura do Projeto

```text
📁 portfolio/
│
├── index.html                 # Página principal do portfólio
├── success.html               # Página de confirmação de envio
│
├── 📁 assets/
│   ├── 📁 css/
│   │   └── styles.css         # Estilos e responsividade
│   │
│   ├── 📁 js/
│   │   └── script.js          # GitHub API, Swiper e validações
│   │
│   ├── 📁 img/                # Imagens, ilustrações e favicon
│   │
│   ├── 📁 icons/
│   │   ├── 📁 languages/      # Ícones das linguagens
│   │   └── 📁 social/         # Ícones das redes sociais
│   │
│   └── 📁 docs/               # Documentação técnica
│
└── README.md
```

---

## Tecnologias Utilizadas

- **HTML5**: estruturação semântica do conteúdo
- **CSS3**: estilização, identidade visual, animações e responsividade
- **JavaScript (ES6+)**: interatividade, consumo de API e validações
- **Swiper.js**: carrossel responsivo de projetos
- **FormSubmit**: serviço utilizado para envio de mensagens pelo formulário
- **GitHub REST API**: carregamento dinâmico de dados do perfil e dos repositórios

---

## Executando Localmente

Para executar o projeto em ambiente local, siga os passos abaixo.

### Pré-requisitos

- [Visual Studio Code](https://code.visualstudio.com/) ou outro editor de sua preferência
- Extensão **Live Server** instalada no VS Code

### Passos

1. Clone o repositório:

```bash
git clone https://github.com/victorpgms/portifolio-vpgms
```

2. Acesse a pasta do projeto:

```bash
cd portifolio-vpgms
```

3. Abra o projeto no Visual Studio Code:

```bash
code .
```

4. Abra o arquivo `index.html`, clique com o botão direito e selecione:

```text
Open with Live Server
```

O site será aberto no navegador e poderá ser executado localmente.

---

## Documentação Técnica

1. [Estrutura do HTML](./assets/docs/html/README.md)
2. [Estilização com CSS](./assets/docs/css/README.md)
3. [Script JavaScript](./assets/docs/js/README.md)

---

## Diferenciais do Projeto

- Layout totalmente **responsivo**
- Identidade visual personalizada em **tons de azul**
- Interface adaptada e personalizada a partir da estrutura inicial proposta durante o curso
- Ilustração e elementos visuais próprios
- Integração dinâmica com a **API do GitHub**
- Seleção de **projetos em destaque**
- Atualização automática dos projetos recentes
- Prevenção de projetos duplicados na listagem
- Carrossel responsivo com **Swiper.js**
- Animações e transições suaves
- Formulário funcional com validações em JavaScript
- Envio automático de mensagens através do **FormSubmit**
- Estrutura organizada utilizando HTML semântico
- Separação entre conteúdo, estilização e comportamento

---

## Deploy

Este site será disponibilizado publicamente através do **GitHub Pages**.

🔗 _Em elaboração_

---

## Contribuições

Contribuições são bem-vindas.

Caso tenha sugestões de melhorias, correções ou novas funcionalidades, sinta-se à vontade para abrir uma **issue** ou enviar um **pull request**.
