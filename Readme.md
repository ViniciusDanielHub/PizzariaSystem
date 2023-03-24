<h1 align="center">
    <img alt="PizzariaSystem Logo" src="https://i.imgur.com/j100xd6.png" width="250px" />
</h1>

<h1 align="center">
<img alt="Mockup" src="https://i.imgur.com/x4NCs4g.png">
</h1>

<h1 align="center">
<img alt="Mockup" src="https://i.imgur.com/RngfSTX.png">
</h1>

<h1 align="center">
<img alt="Mockup" src="https://i.imgur.com/HVZZzg0.png">
</h1>

<h1 align="center">
<img alt="Mockup" src="https://i.imgur.com/NgYiLGn.png">
</h1>

<h1 align="center">
<img alt="Mockup" src="https://i.imgur.com/XGwAILK.png">
</h1>

<p align="center">
  <a href="#books-requisitos">Requisitos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-começando">Começando</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#gear-iniciando-back-end">Node.js</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#computer-iniciando-front-end">NextJS</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

## :books: Requisitos
- Ter [**Git**](https://git-scm.com/) para clonar o projeto.
- Ter [**Npm**](https://www.npmjs.com/) instalado.
- Ter [**Node.js**](https://nodejs.org/en/) instalado.
- Ter [**Insomnia**](https://insomnia.rest/download) para rodar requisições
- Ter [**Dbeaver**](https://dbeaver.io/download/) para ver as tabelas do banco

## :rocket: Começando
``` bash
  # Clonar o projeto frontend:
  $ git clone https://https://github.com/ViniciusDanielHub/PizzariaSystem

  # Entrar no diretório:
  $ cd frontend

    # Clonar o projeto backend:
  $ git clone https://https://github.com/ViniciusDanielHub/PizzariaSystem

  # Entrar no diretório:
  $ cd backend
```

## :gear: Iniciando back-end
```bash
  # Criar database no pgAdmin:
  
  $database:{
  name: pizzaria,
  owner: postgres,
  }
  
  # Conectar no dbeaver:{
  host: localhost,
  port: 5432,
  database: pizzaria,
  username: postgres,
  password: senha que voce usou no pgAdmin,
  }
  
  # Entrar no diretório do back-end:
  $ cd backend

  # Instalar as dependências:
  $ yarn

  # Rodar as migrations:
  $ yarn prisma migrate dev
```

## :computer: Iniciando front-end
```bash
  # Entrar no diretório do front-end:
  $ cd frontend

  # Instalar as dependências:
  $ yarn

  # Rodar a aplicação:
  $ yarn dev
```
