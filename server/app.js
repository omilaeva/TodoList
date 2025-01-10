import { Hono } from "jsr:@hono/hono@4.6.5";

const app = new Hono();

app.all("/", (c) => c.text("Hi again!"));

export default app;
