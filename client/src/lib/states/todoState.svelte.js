import { browser } from "$app/environment";

let initialTodos = [];
const TODO_LIST = "todos"
if (browser && localStorage.hasOwnProperty(TODO_LIST)) {
    initialTodos = JSON.parse(localStorage.getItem(TODO_LIST));
}
let todos = $state(initialTodos);

const saveTodos = () => {
    localStorage.setItem(TODO_LIST, JSON.stringify(todos));
}

const useTodosState = () => {
    return {
        get todos() {
            return todos;
        },
        add: (todo) => {
            todos.push(todo);
            saveTodos();
        },
        changeDone: (uuid) => {
            const todo = todos.find((todo) => todo.uuid === uuid);
            todo.done = !todo.done;
            saveTodos();
        },
        remove: (uuid) => {
            todos = todos.filter((todo) => todo.uuid !== uuid);
            saveTodos();
        }
    };
};

export { useTodosState };