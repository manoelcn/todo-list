# To Do List

Este é um projeto simples de uma lista de tarefas, construído com **Node.js** e **Express**, utilizando **EJS** como motor de template e **Sequelize** para a manipulação do banco de dados **SQLite**.

## Funcionalidades

A aplicação permite que você gerencie suas tarefas de forma simples e eficaz:

-   **Visualizar tarefas**: A rota principal (`/`) lista todas as tarefas cadastradas.
-   **Adicionar tarefa**: A rota `/add` cria uma nova tarefa no banco de dados com o título enviado através do formulário.
-   **Marcar/desmarcar tarefa**: A rota `/toggle/:id` altera o valor do campo `done` de uma tarefa para o valor oposto.
-   **Excluir tarefa**: A rota `/delete/:id` remove uma tarefa permanentemente do banco de dados.

## Tecnologias

O projeto utiliza as seguintes tecnologias:

-   **Backend**:
    -   **Node.js**: Ambiente de execução JavaScript.
    -   **Express.js**: Framework web para Node.js.
    -   **Sequelize**: ORM para Node.js.
    -   **SQLite3**: Banco de dados leve.

-   **Frontend**:
    -   **EJS**: Motor de template para renderizar as visualizações no servidor.
    -   **Bootstrap**: Framework CSS para estilização da interface.

## Instalação e Configuração

Siga os passos abaixo para configurar e rodar o projeto em sua máquina:

1.  **Clone o repositório:**
    ```
    git clone [https://github.com/manoelcn/todo-list-nodejs.git](https://github.com/manoelcn/todo-list-nodejs.git)
    cd todo-list-nodejs
    ```

2.  **Instale as dependências:**
    ```
    npm install
    ```

3.  **Crie o arquivo de ambiente:**
    Crie um arquivo chamado `.env` na raiz do projeto e adicione a seguinte linha para configurar o banco de dados:
    ```
    DB_STORAGE=database.sqlite
    ```
    Você pode substituir `database` pelo nome de arquivo que preferir para o seu banco de dados.

    O arquivo `.gitignore` já está configurado para ignorar o arquivo `.env` e o banco de dados.

---

## Como Rodar a Aplicação

Para iniciar o servidor, utilize o script de desenvolvimento:

```
npm run dev
```


Markdown

# To Do List

Este é um projeto simples de uma lista de tarefas, construído com **Node.js** e **Express**, utilizando **EJS** como motor de template e **Sequelize** para a manipulação do banco de dados **SQLite**.

## Funcionalidades

A aplicação permite que você gerencie suas tarefas de forma simples e eficaz:

-   **Visualizar tarefas**: A rota principal (`/`) lista todas as tarefas cadastradas.
-   **Adicionar tarefa**: A rota `/add` cria uma nova tarefa no banco de dados com o título enviado através do formulário.
-   **Marcar/desmarcar tarefa**: A rota `/toggle/:id` altera o valor do campo `done` de uma tarefa para o valor oposto.
-   **Excluir tarefa**: A rota `/delete/:id` remove uma tarefa permanentemente do banco de dados.

## Tecnologias

O projeto utiliza as seguintes tecnologias:

-   **Backend**:
    -   **Node.js**: Ambiente de execução JavaScript.
    -   **Express.js**: Framework web para Node.js.
    -   **Sequelize**: ORM para Node.js.
    -   **SQLite3**: Banco de dados leve.
    -   **dotenv**: Módulo para carregar variáveis de ambiente de um arquivo `.env`.
    -   **Nodemon**: Ferramenta de desenvolvimento para reiniciar automaticamente o servidor.

-   **Frontend**:
    -   **EJS**: Motor de template para renderizar as visualizações no servidor.
    -   **Bootstrap**: Framework CSS para estilização da interface.

## Instalação e Configuração

Siga os passos abaixo para configurar e rodar o projeto em sua máquina:

1.  **Clone o repositório:**
    ```
    git clone https://github.com/manoelcn/todo-list.git
    cd todo-list-nodejs
    ```

2.  **Instale as dependências:**
    ```
    npm install
    ```

3.  **Crie o arquivo de ambiente:**
    Crie um arquivo chamado `.env` na raiz do projeto e adicione a seguinte linha para configurar o banco de dados:
    ```
    DB_STORAGE=database.sqlite
    ```
    Você pode substituir `database.sqlite` pelo nome de arquivo que preferir para o seu banco de dados. O arquivo `.gitignore` já está configurado para ignorar o arquivo `.env` e os arquivos de banco de dados SQLite.

---

## Como Rodar a Aplicação

Para iniciar o servidor, utilize o script de desenvolvimento:

```
npm run dev
```
O servidor será iniciado na **porta 3000**. Você pode acessar a aplicação no seu navegador em `http://localhost:3000`.