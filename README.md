<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/BrunoSaibert/brunoflix?color=%2304D361&style=for-the-badge">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/BrunoSaibert/brunoflix?style=for-the-badge">

  <a href="https://github.com/BrunoSaibert/brunoflix/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/BrunoSaibert/brunoflix?style=for-the-badge">
  </a>

   <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen?style=for-the-badge">
   <a href="https://github.com/BrunoSaibert/brunoflix/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/BrunoSaibert/brunoflix?style=for-the-badge">
  </a>

  <a href="https://brunosaibert.com.br/">
    <img alt="Feito por Bruno Saibert" src="https://img.shields.io/badge/feito%20por-Bruno%20Saibert-%231b9?style=for-the-badge">
  </a>

</p>
<h1 align="center">
    <img alt="Brunoflix" title="Brunoflix" src="https://raw.githubusercontent.com/BrunoSaibert/brunoflix/master/src/assets/brunoflix.png" />
</h1>

<h4 align="center">
	🚧  Brunoflix 📺 Em construção 🏗 🚧
</h4>

<p align="center">
 <a href="#--sobre-o-projeto">Sobre</a> •
 <a href="#-%EF%B8%8F-funcionalidades">Funcionalidades</a> •
 <a href="#--layout">Layout</a> •
 <a href="#--como-executar-o-projeto">Como executar</a> •
 <a href="#--tecnologias">Tecnologias</a> •
 <a href="#--autor">Autor</a> •
 <a href="#--licença">Licença</a>
</p>

![Brunoflix layout](https://raw.githubusercontent.com/BrunoSaibert/brunoflix/master/src/assets/project/brunoflix-hero.jpg)

## [](https://github.com/BrunoSaibert/brunoflix#--sobre-o-projeto) 💻 Sobre o projeto

📺 Brunoflix - é um clone da interface da [Netflix](https://www.netflix.com/).

Projeto desenvolvido para aprofundar meus conhecimentos de **ReactJS**, **TypeScript** e **Testes**.

---

## [](https://github.com/BrunoSaibert/brunoflix#-%EF%B8%8F-funcionalidades) ⚙️ Funcionalidades

- [x] Header:

  - [x] menu fixo no topo e ao sair do topo deve alterar a cor de fundo
  - [x] navegar para a página inicial
  - [x] navegar entre as páginas
  - [x] setar a página atual
  - [ ] campo de busca
  - [ ] badge alerta
  - [ ] menu suspenso alerta
  - [ ] menu suspenso usuário

- [x] Hero:

  - [x] conter imagem de fundo
  - [ ] após 3 segundos trocar a imagem de fundo por um vídeo
  - [x] conter as informações de título, descrição e botões

- [ ] Loading

- [x] Card:

  - [x] sem foco deve conter apenas a imagem de fundo
  - [x] com foco deve:
    - [x] aumentar de tamanho:
      - [x] origem no centro para os comuns
      - [x] origem nas laterais para o primeiro e último
    - [x] ficar acima dos demais cards
    - [x] mostrar título e botões
  - [ ] se tem exibição:
    - [ ] barra de progresso

- [x] Slider (imagem vertical):

  - [x] conter título
  - [x] conter cards
  - [x] conter navegação

- [ ] SliderMyListPage (sem navegação):

  - [ ] conter título
  - [ ] conter cards

- [ ] SliderOriginal (imagem horizontal):

  - [ ] conter título
  - [ ] conter cards
  - [ ] conter navegação

- [ ] SliderTop10:

  - [ ] conter título
  - [ ] conter cards
  - [ ] conter navegação

- [ ] Footer

---

## [](https://github.com/BrunoSaibert/brunoflix#--layout) 🎨 Layout

![Brunoflix layout](https://raw.githubusercontent.com/BrunoSaibert/brunoflix/master/src/assets/project/brunoflix-hero.jpg)

---

## [](https://github.com/BrunoSaibert/brunoflix#--como-executar-o-projeto) 🚀 Como executar o projeto

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/).

#### 🧭 Rodando a aplicação

```bash

# Clone este repositório
$ git clone git@github.com:BrunoSaibert/brunoflix.git

# Acesse a pasta do projeto no seu terminal/cmd
$ cd brunoflix

# Instale as dependências
$ yarn

# Execute a aplicação em modo de desenvolvimento
$ yarn start

# A aplicação será aberta na porta:3000 - acesse http://localhost:3000

```

---

## [](https://github.com/BrunoSaibert/brunoflix#--tecnologias) 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### **Website** ([React](https://reactjs.org/) + [TypeScript](https://www.typescriptlang.org/))

 <img style="border-radius: 8px;" src="https://raw.githubusercontent.com/BrunoSaibert/brunoflix/master/src/assets/project/react-logo.png" width="100px;" alt="React logo"/>
 <img style="border-radius: 8px;" src="https://raw.githubusercontent.com/BrunoSaibert/brunoflix/master/src/assets/project/typescript-logo.png" width="100px;" alt="TypeScript logo"/>

- **[React Router Dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)**
- **[React Icons](https://react-icons.github.io/react-icons/)**

> Veja o arquivo [package.json](https://github.com/BrunoSaibert/brunoflix/blob/master/web/package.json)

#### **Utilitários**

- Editor: **[Visual Studio Code](https://code.visualstudio.com/)**
- API: **[The Movie Database](https://api.themoviedb.org)**
- Teste de API: **[Insomnia](https://insomnia.rest/)**
- Markdown: **[Markeditor](https://markeditor.netlify.app/)**
- Ícones: **[Font Awesome](https://fontawesome.com/)**, **[Feather Icons](https://feathericons.com/)**
- Fontes: **[Netflix Font](https://fontmeme.com/netflix-font/)**

---

## 💪 Como contribuir para o projeto

1. Faça um **fork** do projeto.
2. Crie uma nova **branch** com as suas alterações:

```
git checkout -b my-feature
```

3. Salve as alterações e crie uma mensagem de **commit** contando o que você fez:

```
git commit -m "feature: My new feature"
```

4. Envie as suas alterações:

```
git push origin my-feature
```

> Caso tenha alguma dúvida confira este [guia de como contribuir no GitHub](./CONTRIBUTING.md)

---

## [](https://github.com/BrunoSaibert/brunoflix#--autor) 👨‍🚀 Autor

<a href="https://brunosaibert.com.br/">
 <img style="border-radius: 50%;" src="https://avatars2.githubusercontent.com/u/40339324?s=460&u=4f5a7b83aa4e018b4eccbeaa1f6a6b8b04e0e4b7&v=4" width="100px;" alt="Bruno Henrique Saibert"/>
 <br />
 <sub><b>Bruno Henrique Saibert</b></sub>
 </a>
 <br />

Feito com ❤️ por Bruno Henrique Saibert 👋 Entre em contato!

[![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=for-the-badge&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/brunohenriquesaibert/)](https://www.linkedin.com/in/brunohenriquesaibert/)
[![Twitter Badge](https://img.shields.io/badge/-Twitter-1ca0f1?style=for-the-badge&labelColor=1ca0f1&logo=twitter&logoColor=white&link=https://twitter.com/bh_saibert)](https://twitter.com/bh_saibert)
[![Whatsapp Badge](https://img.shields.io/badge/-Whatsapp-4CA143?style=for-the-badge&labelColor=4CA143&logo=whatsapp&logoColor=white&link=https://api.whatsapp.com/send?phone=5541996758098&text=Olá!)](https://api.whatsapp.com/send?phone=5541996758098&text=Olá!)
[![Gmail Badge](https://img.shields.io/badge/-Gmail-c14438?style=for-the-badge&logo=Gmail&logoColor=white&link=mailto:brunosaibert@gmail.com)](mailto:brunosaibert@gmail.com)

---

## [](https://github.com/BrunoSaibert/brunoflix#--licença) 📝 Licença

Este projeto esta sobe a licença [MIT](./LICENSE).
