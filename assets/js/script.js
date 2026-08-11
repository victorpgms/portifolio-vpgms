//Selecionar a seção about

const about = document.querySelector("#about");

const swiperWraper = document.querySelector(".swiper-wrapper");

// Formulário
const formulario = document.querySelector("#formulario");

// Expressão Regular de validação do e-mail
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

//função para contruir a seção abou
async function getAboutGithub() {
    try {
        const resposta = await fetch("https://api.github.com/users/victorpgms");

        const perfil = await resposta.json();

        //console.log(perfil);

        about.innerHTML = "";

        about.innerHTML = `
        <!-- Imagem -->
                <figure class="about-image">
                    <img
                        src="${perfil.avatar_url}"
                        alt="${perfil.name}"
                    />
                </figure>

                <!-- Conteúdo -->
                <article class="about-content">
                    <h2>Sobre mim</h2>

                    <p>
                        Sou Victor Pedro, desenvolvedor Full Stack em formação,
                        estudante de Análise e Desenvolvimento de Sistemas na
                        FIAP e participante do bootcamp Java Full Stack da
                        Generation Brasil. Tenho conhecimentos em Java, Spring
                        Boot, React, JavaScript, HTML, CSS e bancos de dados.
                    </p>

                    <p>
                        Sou formado em Arquitetura e Urbanismo e construí minha
                        experiência profissional atuando com organização de
                        processos, análise de informações e busca por soluções
                        mais eficientes. Atualmente, aplico essa experiência no
                        desenvolvimento de projetos digitais simples,
                        organizados e focados em resolver problemas reais.
                    </p>

                    <!-- Links -->
                    <div class="about-buttons-data">
                        <!-- Botões -->
                        <div class="buttons-container">
                            <a
                                href="${perfil.html_url}"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="botao-outline"
                            >
                                GitHub
                            </a>

                            <a
                                href="https://1drv.ms/f/c/a6367a07b7ba8450/IgCyatgzLrcITJIQ1kclud9TAU5VkyAiZi_yXXQQuiHHqTg?e=KzS8pl"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="botao-outline"
                            >
                                Currículo
                            </a>

                            <a
                                href="https://onedrive.live.com/?cid=a6367a07b7ba8450&id=A6367A07B7BA8450%21sf7524f74dc3b43cea4f9ef83afa6b994&resid=A6367A07B7BA8450%21sf7524f74dc3b43cea4f9ef83afa6b994&ithint=folder&e=ogPO2u&migratedtospo=true&redeem=aHR0cHM6Ly8xZHJ2Lm1zL2YvYy9hNjM2N2EwN2I3YmE4NDUwL0lnQjBUMUwzTzl6T1E2VDU3NE92cHJtVUFVdkFHZHpsNUVoNnJNcmFzTWlnel9VP2U9b2dQTzJ1&v=validatepermission"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="botao-outline"
                            >
                                Certificados
                            </a>
                        </div>

                        <!-- Dados -->
                        <div class="data-container">
                            <!-- Número de seguidores -->
                            <div class="data-item">
                                <span class="data-number"> ${perfil.followers} </span>

                                <span class="data-label"> Seguidores </span>
                            </div>

                            <!-- Número de repositórios -->
                            <div class="data-item">
                                <span class="data-number"> ${perfil.public_repos} </span>

                                <span class="data-label"> Repositórios </span>
                            </div>
                        </div>
                    </div>
                </article>
        `;
    } catch (error) {
        console.error("Erro ao buscar dados no GitHub", error);
    }
}

//Função para construção do carrossel com o Swiper
async function getProjectsGitHub() {
    try {
        // 1 - Projetos que quero exibir primeiro
        const projetosPrincipais = [
            {
                usuario: "victorpgms",
                repositorio: "projeto-fintech",
            },
            {
                usuario: "victorpgms",
                repositorio: "challenge-care-plus-fiap",
            },
            {
                usuario: "victorpgms",
                repositorio: "blog-pessoal-spring",
            },
            {
                usuario: "VidaConecta",
                repositorio: "ConectaTravel",
            },
        ];

        // 2 - Busca os dados dos 4 projetos
        const repositoriosPrincipais = await Promise.all(
            projetosPrincipais.map(async (projeto) => {
                const resposta = await fetch(
                    `https://api.github.com/repos/${projeto.usuario}/${projeto.repositorio}`,
                );

                return await resposta.json();
            }),
        );

        // 3 - Busca os projetos mais recentes
        const respostaRecentes = await fetch(
            "https://api.github.com/users/victorpgms/repos?sort=updated&direction=desc&per_page=20",
        );

        const repositoriosRecentes = await respostaRecentes.json();

        // 4 - Remove dos recentes os projetos que já estão nos principais
        const recentesSemDuplicados = repositoriosRecentes.filter(
            (repositorio) =>
                !repositoriosPrincipais.some(
                    (principal) => principal.id === repositorio.id,
                ),
        );

        // 5 - Pega apenas 8 recentes
        const oitoRecentes = recentesSemDuplicados.slice(0, 8);

        // 6 - Junta os 4 principais com os 8 recentes
        const repositorios = [...repositoriosPrincipais, ...oitoRecentes];

        swiperWraper.innerHTML = "";

        // Ícones das linguagens
        const linguagens = {
            JavaScript: "javascript",
            TypeScript: "typescript",
            Python: "python",
            Java: "java",
            HTML: "html",
            CSS: "css",
            PHP: "php",
            "C#": "csharp",
            Go: "go",
            Kotlin: "kotlin",
            Swift: "swift",
            C: "c",
            "C++": "c_plus",
            GitHub: "github",
        };

        repositorios.forEach((repositorio) => {
            // Seleciona o nome da linguagem padrão do repositório
            const linguagem = repositorio.language || "GitHub";

            // Seleciona o ícone da linguagem padrão
            const icone = linguagens[linguagem] ?? linguagens["GitHub"];

            // Construir o link do ícone
            const urlIcone = `./assets/icons/languages/${icone}.svg`;

            // Formata o Nome do Repositório
            const nomeFormatado = repositorio.name
                .replace(/[-_]/g, " ") // Substitui hifens e underlines por espaços em branco
                .replace(/[^a-zA-Z0-9\s]/g, "") // Remove Caracteres especiais
                .replace(/\s+t[a-z0-9]+$/i, "") // Remove a identificação de turma
                .toUpperCase(); // Converte a string em letras maiúsculas

            // Função para truncar texto
            // Se a descrição possuir mais de 100 carcateres
            // seleciona os primeiros 97 e acrescenta '...' no final
            // Senão retorna o mesmo texto
            const truncar = (texto, limite) =>
                texto.length > limite
                    ? texto.substring(0, limite) + "..."
                    : texto;

            const descricao = repositorio.description
                ? truncar(repositorio.description, 100)
                : "Projeto desenvolvido no GitHub";

            // Tags
            const tags =
                repositorio.topics?.length > 0
                    ? repositorio.topics
                          .slice(0, 3)
                          .map((topic) => `<span class="tag">${topic}</span>`)
                          .join("")
                    : `<span class="tag">${linguagem}</span>`;

            // Botão de Deploy
            const botaoDeploy = repositorio.homepage
                ? `<a href="${repositorio.homepage}" target="_blank" rel="noopener noreferrer" class="botao-outline botao-sm">Deploy</a>`
                : "";

            // Botões de ação
            const botoesAcao = `
                <div class="project-buttons">
                    <a href="${repositorio.html_url}" target="_blank" rel="noopener noreferrer" class="botao botao-sm">GitHub</a>
                    ${botaoDeploy}
                </div>
                    `;

            swiperWraper.innerHTML += `
                    <div class="swiper-slide">
                        <article class="project-card">
                            <figure class="project-image">
                                <img src="${urlIcone}" alt="${linguagem}" />
                            </figure>

                            <div class="project-content">
                                <h3>${nomeFormatado}</h3>
                                <p>${descricao}</p>

                                <div class="project-tags">
                                    ${tags}
                                </div>

                                ${botoesAcao}
                            </div>
                        </article>
                    </div>
                `;
        });

        iniciarSwiper();
    } catch (error) {
        console.error("Erro ao buscar os dados dos projetos no GitHub", error);
    }
}

function iniciarSwiper() {
    new Swiper(".projects-swiper", {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 24,
        centeredSlides: false,
        loop: false,
        rewind: true,
        watchOverflow: true,

        breakpoints: {
            0: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 16,
            },

            769: {
                slidesPerView: 2,
                slidesPerGroup: 1,
                spaceBetween: 24,
            },

            1025: {
                slidesPerView: 3,
                slidesPerGroup: 1,
                spaceBetween: 32,
            },
        },

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            dynamicBullets: true,
        },

        autoplay: {
            delay: 5000,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
        },

        grabCursor: true,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
    });
}

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    document
        .querySelectorAll("form span")
        .forEach((span) => (span.innerHTML = ""));

    let isValid = true;

    const nome = document.querySelector("#nome");
    const erroNome = document.querySelector("#erro-nome");

    if (nome.value.trim().length < 3) {
        erroNome.innerHTML = "O nome deve ter no mínimo 3 caracteres";
        if (isValid) nome.focus();
        isValid = false;
    }

    const email = document.querySelector("#email");
    const erroEmail = document.querySelector("#erro-email");

    if (!email.value.trim().match(emailRegex)) {
        erroEmail.innerHTML = "Digite um endereço de e-mail válido";
        if (isValid) email.focus();
        isValid = false;
    }

    const assunto = document.querySelector("#assunto");
    const erroAssunto = document.querySelector("#erro-assunto");

    if (assunto.value.trim().length < 5) {
        erroAssunto.innerHTML = "O assunto deve ter no mínimo 5 caracteres";
        if (isValid) assunto.focus();
        isValid = false;
    }

    const mensagem = document.querySelector("#mensagem");
    const erroMensagem = document.querySelector("#erro-mensagem");

    if (mensagem.value.trim().length === 0) {
        erroMensagem.innerHTML = "A mensagem não pode ser vazia";
        if (isValid) mensagem.focus();
        isValid = false;
    }

    if (isValid) {
        const submitButton = formulario.querySelector('button[type="submit"]');
        submitButton.disabled = true;
        submitButton.textContent = "Enviando...";

        formulario.submit();
    }
});

getAboutGithub();
getProjectsGitHub();
