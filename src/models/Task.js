import { DataTypes } from "sequelize";
import sequelize from "../config/databases.js"

// Definindo o modelo Task
const Task = sequelize.define("Task", {
    title: {
        type: DataTypes.STRING,
        allowNull: false, // campo obrigatório
    },
    done: {
        type: DataTypes.BOOLEAN,
        defaultValue: false, // valor padrão: falso
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW, // registra a data de criação
    },
});

export default Task;