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
            if (newTodo) {
                todoState.push(newTodo);
            }
        },
        changeDone: async (todo) => {
            todo.done = !todo.done;
            await todoApi.setDone(todo);
        },
        remove: async (id) => {
            const removedTodo = await todoApi.deleteTodo(id);
            if (removedTodo) {
                todoState = todoState.filter((todo) => todo.id !== removedTodo.id);
            }
        },
        update: async (todo) => {
            const updatedTodo = await todoApi.updateTodo(todo);
            if (updatedTodo) {
                const index = todoState.findIndex(elem => elem.id === todo.id);
                todoState[index] = updatedTodo;
                return true;
            }
            return false;
        }
    };
};

export { useTodoState };