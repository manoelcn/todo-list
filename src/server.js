import app from "./app.js";
import sequelize from "./config/databases.js"
import Task from "./models/Task.js";

const PORT = 3000;

async function startServer() {
    try {
        // Sincroniza com o banco
        await sequelize.sync()
        console.log("Banco de dados sincronizado!");

        // Inicia o servidor
        app.listen(PORT, () => {
            console.log(`Servidor rodando na porta ${PORT}`);
        });
    } catch (err) {
        console.log(`Erro ao iniciar o servidor: ${err}`);
    }
};

startServer();