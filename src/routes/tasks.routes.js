import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { getTask, getTasks, deleteTask, updateTask, createTask } from "../controllers/tasks.controller.js";


const router = Router();

router.get("/tasks", authRequired, getTasks);

router.post("/tasks", createTask);

router.get("/tasks/:id", getTask);

router.put("/tasks/:id", updateTask);

router.delete("/tasks/:id", deleteTask);

export default router;