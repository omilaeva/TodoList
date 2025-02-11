import {todoValidator} from "../validators/todoValidator.js";
import * as todosRepository from "../repositories/todoRepository.js";
import {zValidator} from "zValidator";

export const addTodo = [
    zValidator("json", todoValidator),
    async (c) => {
        const todo = c.req.valid("json");
        const result = await todosRepository.addTodo(todo);
        return c.json(result);
    }
];

export const getTodos = async (c) => {
    return c.json(await todosRepository.getTodos());
};

export const updateTodoById = [
    zValidator("json", todoValidator),
    async (c) => {
        const id = Number(c.req.param("id"));
        const todo = c.req.valid("json");
        return c.json(await todosRepository.updateTodoById(id, todo));
    }
];

export const getTodoById = async (c) => {
    const id = Number(c.req.param("id"));
    return c.json(await todosRepository.getTodoById(id));
};

export const deleteTodoById = async (c) => {
    const id = Number(c.req.param("id"));
    return c.json(await todosRepository.deleteTodoById(id));
};

