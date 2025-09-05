import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config(); // Carrega variáveis do .env

// Cria a conexão com o banco SQLite
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: process.env.DB_STORAGE || "database.sqlite",
});

export default sequelize;