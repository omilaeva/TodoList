import { browser } from "$app/environment";
import * as todoApi from "$lib/apis/todosApi.js";

let todoState = $state([]);

if (browser) {
    todoState = await todoApi.readTodos();
}

const useTodoState = () => {
    return {
        get todos() {
            return todoState;
        },
        add: async (todo) => {
            const newTodo = await todoApi.createTodo(todo);
            todoState.push(newTodo);
        },
        changeDone: async (todo) => {
            todo.done = !todo.done;
            await todoApi.setDone(todo);
        },
        remove: async (id) => {
            const removedTodo = await todoApi.deleteTodo(id);
            todoState = todoState.filter((todo) => todo.id !== removedTodo.id);
        },
    };
};

export { useTodoState };