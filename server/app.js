import { Hono } from "jsr:@hono/hono@4.6.5";
import { cors } from "jsr:@hono/hono@4.6.5/cors";
import * as todoController from "./controllers/todoController.js";

const app = new Hono();
app.use("/*", cors());

app.get("/todos", todoController.getTodos);

app.post("/todos", ...todoController.addTodo);

app.get("/todos/:id", todoController.getTodoById);

app.put("/todos/:id", ...todoController.updateTodoById);

app.delete("/todos/:id", todoController.deleteTodoById);

export default app;