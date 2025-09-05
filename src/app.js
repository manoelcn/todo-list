import express from "express";
import taskRoutes from "./routes/taskRoutes.js";

const app = express();

// Configuração do middleware para receber dados de formulários
app.use(express.urlencoded({ extended: true }));

// Configuração do middleware para receber JSON
app.use(express.json());

// Configuração do EJS como template engine
app.set("view engine", "ejs");
app.set("views", "./src/views");

// Usar rotas
app.use("/", taskRoutes);

export default app;