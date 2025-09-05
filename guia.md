# Guia de Desenvolvimento: To-Do List com Node.js, Express, EJS e SQLite

Este guia serve como roteiro para construir um projeto de To-Do List seguindo o padrão MVC.

---

## 1. Planejamento do Projeto

**Objetivo:** Criar uma aplicação web que permita ao usuário:
- Adicionar tarefas
- Listar tarefas
- Marcar tarefas como concluídas
- Excluir tarefas

**Tecnologias:**
- Backend: Node.js + Express.js + EJS
- Banco de dados: SQLite + Sequelize
- Frontend: HTML5 + CSS3 + JavaScript (vanilla) + Bootstrap (opcional)

**Arquitetura MVC:**
- **Model:** definição das tabelas e modelos no banco
- **View:** templates EJS que renderizam a interface do usuário
- **Controller:** lógica que processa requisições e respostas
- **Routes:** rotas que conectam URLs aos controllers

---

## 2. Configuração Inicial

1. Criar a pasta do projeto e inicializar Node.js:
```
mkdir todo-list
cd todo-list
npm init -y
```

2. Instalar dependências:
```
npm install express ejs sequelize sqlite3 dotenv
npm install --save-dev nodemon
```

3. Configurar scripts no package.json:
```
"scripts": {
  "dev": "nodemon src/server.js"
}
```

4. Criar estrutura de pastas:
```
todo-list/
│── src/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── views/
│   ├── app.js
│   └── server.js
│── .env
```

## 3. Configuração do Banco de Dados
1. Criar arquivo src/config/database.js

2. Configurar Sequelize para usar SQLite

3. Criar arquivo .env com:

```
DB_STORAGE=./src/database.sqlite
PORT=3000
```

## 4. Criar Model (Task)
1. Criar ``src/models/Task.js``

2. Definir os campos da tabela:
- title (string, obrigatório)
- done (boolean, default false)
- createdAt (date, default current date)

## 5. Criar Controllers
1. ``Criar src/controllers/taskController.js``

2. Implementar funções:
- ``getTasks`` → listar tarefas
- ``createTask`` → criar nova tarefa
- ``toggleTask`` → marcar/desmarcar como concluída
- ``deleteTask`` → excluir tarefa

## 6. Criar Rotas
1. Criar ``src/routes/taskRoutes.js``

2. Definir rotas que chamam os controllers:
- ``GET /`` → listar tarefas
- ``POST /add`` → criar tarefa
- ``GET /toggle/:id`` → marcar/desmarcar tarefa
- ``GET /delete/:id`` → excluir tarefa

## 7. Configuração do Express
1. Criar ``src/app.js``:
- Configurar Express
- Configurar EJS como template engine
- Registrar rotas
- Configurar middlewares (JSON, urlencoded)

2. Criar ``src/server.js``:
- Conectar ao banco
- Sincronizar modelos
- Iniciar servidor

## 8. Criar Views
1. Criar ``src/views/index.ejs``

2. Layout básico com:
- Formulário para adicionar tarefa
- Lista de tarefas
- Botões para marcar como concluída e excluir

## 9. Testes e Ajustes
- Testar todas as funcionalidades (CRUD)
- Corrigir bugs
- Melhorar estilos com CSS/Bootstrap
- Ajustar UX (feedback visual para tarefas concluídas)

## 10. Melhorias Futuras (Extras)
- Editar tarefa
- Ordenar tarefas (concluídas e pendentes)
- Autenticação de usuários (login)
- Separar layout com partials (header/footer)
- Deploy online (Heroku, Railway, Render, etc.)