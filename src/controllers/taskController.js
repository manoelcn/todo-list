import Task from "../models/Task.js";

// Função para listar todas as tarefas
export const getTasks = async (req, res) => {
    try {
        const tasks = await Task.findAll(); // Busca todas as tarefas no banco de dados

        res.render("index", { tasks }); // Renderiza a view index passando as tasks
    } catch (err) {
        console.error(`Erro ao buscar tarefas: ${err}`);
        res.status(500).send("Erro ao buscar tarefas");
    }
};

// Função para criar uma nova tarefa
export const createTask = async (req, res) => {
    try {
        const title = req.body.title; // Pega o título enviado pelo formulário

        await Task.create({ title }); // Cria a tarefa no banco de dados

        res.redirect("/"); // Redireciona para a página inicial após criar a tarefa
    } catch (err) {
        console.error(`Erro ao criar tarefa: ${err}`);
        res.status(500).send("Erro ao criar tarefa");
    }
};

// Função para excluir uma tarefa
export const deleteTask = async (req, res) => {
    try {
        const id = req.params.id // Pega o id da tarefa da URL

        const task = await Task.findByPk(id); // Procura a tarefa no banco de dados

        // Verifica se a tarefa existe
        if (!task) {
            return res.status(404).send("Tarefa não encontrada!");
        }

        await task.destroy(); // Remove tarefa do banco de dados;

        res.redirect("/"); // Redireciona para a página inicial
    } catch (err) {
        console.error(`Erro ao deletar tarefa: ${err}`);
        res.status(500).send("Erro ao deletar tarefa");
    }
};

// Função para marcar/desmarcar uma tarefa
export const toggleTask = async (req, res) => {
    try {
        const id = req.params.id; // Pega o id da tarefa da URL

        const task = await Task.findByPk(id); // Procura a tarefa no banco de dados

        // Verifica se a tarefa existe
        if (!task) {
            return res.status(404).send("Tarefa não encontrada!");
        }

        task.done = !task.done; // Muda o valor do campo done (inverte o valor do campo)

        await task.save(); // Salva a alteração no banco

        res.redirect("/");
    } catch (err) {
        console.error(`Erro ao marcar/desmarcar tarefa: ${err}`);
        res.status(500).send("Erro ao marcar/desmarcar tarefa");
    }
};