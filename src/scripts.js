document.addEventListener('DOMContentLoaded', () => {

    const projectsData = [
        {   
            title: "LetsGoals - Gestão de Metas", 
            subtitle: "Aplicação Web mobile-first para metas financeiras colaborativas. Desenvolvida com React, Tailwind CSS e Context API, focada em UX e persistência de dados.", 
            image: "src/images/lets-goals-app.png",
            link: "https://github.com/gabrielschug/letsgoals"
        },
        {   
            title: "Library Manager (POO & Jest)", 
            subtitle: "Sistema de backend em TypeScript focado em Programação Orientada a Objetos. Implementação de Herança, Polimorfismo e Testes Unitários com Jest.", 
            image: "src/images/sistema-biblioteca-poo.png",
            link: "https://github.com/gabrielschug/library-manager-typescript"
        },
        {   
            title: "API REST de Pedidos", 
            subtitle: "Servidor robusto em Node.js e Express para gestão de pedidos. Implementação de Middlewares de validação, UUID e padrões RESTful.", 
            image: "src/images/api-pedidos.png", 
            link: "https://github.com/gabrielschug/api-pedidos"
        },
        {   
            title: "Réplica Spotify", 
            subtitle: "Estudo de interface e responsividade replicando o layout do Spotify. Focado em CSS moderno (Flexbox/Grid) e estruturação semântica.", 
            image: "src/images/replica_spotify.png", 
            link: "https://github.com/gabrielschug/pagina-web__replica_spotify"
        }
    ]
    
    const projectsGrid = document.querySelector('.projetos-caixa')
    
    projectsData.forEach( project => {
        const projectCard = document.createElement('div')
        projectCard.classList.add('project__card')
        
        projectCard.innerHTML = `
            <a href="${project.link}" target="_blank" rel="noopener noreferrer">
            <div class="projetos-card m-2 bg-cinza_card rounded-2xl backdrop-blur-xs border-1 border-solid border-vidro overflow-hidden md:transition md:duration-500 md:ease-in-out cursor-pointer md:hover:shadow-[0_0_20px_rgba(224,173,111,0.3)] md:hover:transform md:hover:translate-y-[-10px] md:hover:scale-105">
                <img class= "card-imagem h-[200px] w-full object-cover" src="${project.image}" alt="${`Imagem de ${project.image}`}"/>
                <div class="projetos-card-texto p-2">
                    <h3 class="card-info mb-1">${project.title}</h3>
                    <p class="card-paragrafo text-texto-card text-justify text-sm">${project.subtitle}</p>
                </div>
            </div>
            </a>
        `
        projectsGrid.appendChild(projectCard)
    });

})