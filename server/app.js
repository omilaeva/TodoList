import {Hono} from "jsr:@hono/hono@4.6.5";
import { env } from 'hono/adapter';
import {cors} from "jsr:@hono/hono@4.6.5/cors";
import * as todoController from "./controllers/todoController.js";
import * as userController from "./controllers/userController.js";

const app = new Hono();
app.use("/*", async (c, next) => {
    const { CORS_ORIGIN } = env(c);
    console.log(CORS_ORIGIN);
    const corsMiddleware = cors({
        origin: CORS_ORIGIN,
        allowMethods: ['GET', 'OPTIONS', 'POST', 'PUT', 'DELETE'],
        credentials: true,
    })
    return corsMiddleware(c, next);
});

app.get("/todos", todoController.getTodos);
app.post("/todos", ...todoController.addTodo);
app.get("/todos/:id", todoController.getTodoById);
app.put("/todos/:id", ...todoController.updateTodoById);
app.delete("/todos/:id", todoController.deleteTodoById);

app.post("/api/auth/register", ...userController.registerUser);
app.post("/api/auth/login", ...userController.login);
app.post("/api/auth/verify", userController.verifyToken)

export default app;