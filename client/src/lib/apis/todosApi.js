import { PUBLIC_API_URL } from "$env/static/public";

export const createTodo = async (todo) => {
    const response = await fetch(`${PUBLIC_API_URL}/todos`, {
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(todo),
    });

    return await response.json();
};

export const readTodos = async () => {
    const response = await fetch(`${PUBLIC_API_URL}/todos`);
    return await response.json();
};

export const readTodo = async (id) => {
    const response = await fetch(
        `${PUBLIC_API_URL}/todos/${id}`,
    );
    return await response.json();
};

export const deleteTodo = async (id) => {
    const response = await fetch(`${PUBLIC_API_URL}/todos/${id}`, {
        method: "DELETE",
    });
    return await response.json();
};

export const setDone = async (todo) => {
    const response = await fetch(`${PUBLIC_API_URL}/todos/${todo.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(todo)
    });
    return await response.json();
}