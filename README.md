# 👨‍💻 Portfólio Pessoal - Gabriel Schug

> O código por trás da minha vitrine profissional na web.  
> 🌐 **Acesse o site ao vivo:** [gabrielschug.com.br](https://www.gabrielschug.com.br/)

![Status](https://img.shields.io/badge/Status-Online-brightgreen)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4.1-38B2AC?logo=tailwind-css)
![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-F7DF1E?logo=javascript&logoColor=black)
![Vercel](https://img.shields.io/badge/Deploy-Vercel-000000?logo=vercel)

## 📍 Sobre o Projeto

Este repositório contém o código-fonte do meu portfólio pessoal. Ele foi projetado para ser uma Single Page Application (SPA), focada em apresentar minha trajetória acadêmica, habilidades técnicas e os principais projetos da minha carreira em Análise e Desenvolvimento de Sistemas.

Optei por não utilizar frameworks pesados (como React) neste momento para demonstrar domínio sólido sobre as tecnologias base da Web.

## 🛠️ Decisões de Arquitetura e Tecnologias

* **Estrutura:** HTML5 Semântico.
* **Estilização:** **Tailwind CSS** (via CLI). Toda a responsividade (Mobile-First) e os efeitos visuais (Glassmorphism e hover states) foram construídos utilizando classes utilitárias, garantindo um CSS final minificado e rápido.
* **Dinamismo (JavaScript):** Em vez de escrever o HTML de cada projeto manualmente, utilizei manipulação de DOM (`document.createElement`) com JavaScript Vanilla. Os dados dos projetos são lidos de um Array de Objetos, tornando o portfólio escalável e fácil de atualizar.
* **SEO e Meta Tags:** O arquivo `index.html` está otimizado com tags Open Graph para garantir uma boa visualização em links compartilhados no LinkedIn, WhatsApp e motores de busca.
* **Deploy e CI/CD:** O projeto está conectado à **Vercel**. Qualquer push na branch `main` deste repositório gera uma nova build do Tailwind e atualiza o site no domínio oficial em segundos.

## ⚙️ Como executar localmente

Caso queira clonar este projeto para rodar em sua máquina:

```bash
# 1. Clone o repositório
git clone [https://github.com/gabrielschug/gabrielschug-portfolio.git](https://github.com/gabrielschug/gabrielschug-portfolio.git)

# 2. Acesse a pasta
cd gabrielschug-portfolio

# 3. Instale as dependências (Tailwind CLI)
npm install

# 4. Inicie o processo de build do Tailwind em modo 'watch'
npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch
```

Após iniciar o Tailwind, basta abrir o arquivo `index.html` no seu navegador ou utilizar a extensão Live Server do VS Code.

## ✍️ Contato
Conecte-se comigo para conversarmos sobre tecnologia, Back-End e dados!
