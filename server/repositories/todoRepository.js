import { sql } from "./database.js";

export const getTodos = async () => {
    return await sql`SELECT * FROM todos`;
}

export const addTodo = async (todo) => {
    const result = await sql`INSERT INTO todos(name, done) VALUES(${todo.name}, ${todo.done}) RETURNING *`;
    return result[0];
}

export const getTodoById = async (id) => {
    const result = await sql`SELECT * FROM todos WHERE id = ${id}`;
    return result[0];
}

export const updateTodoById = async (id, todo) => {
    const result = await sql`UPDATE todos SET name = ${todo.name}, done = ${todo.done} WHERE id = ${id} RETURNING *`;
    return result[0];
}

export const deleteTodoById = async (id) => {
    const result = await sql`DELETE FROM todos WHERE id = ${id} RETURNING *`;
    return result[0];
}