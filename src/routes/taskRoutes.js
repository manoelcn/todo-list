import express from "express";
import {getTasks, createTask, toggleTask, deleteTask} from "../controllers/taskController.js";

const router = express.Router;

router.get("/", getTasks); // Rota para listar tarefas
router.post("/add", createTask); // Rota para criar tarefa
router.get("/toggle/:id", toggleTask); // Rota para marcar/desmarcar tarefa
router.get("/delete/:id", deleteTask);  // Rota para deletar tarefa

export default router;