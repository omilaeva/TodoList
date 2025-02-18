import { PUBLIC_API_URL } from "$env/static/public";
import {addToast} from "$lib/stores/toastStore.js";

export const createTodo = async (todo) => {
    const response = await fetch(`${PUBLIC_API_URL}/todos`, {
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(todo),
    });

    const data = await response.json();
    if (data.success === false) {
        const errors = data.error.issues;
        console.log(errors);
        errors.forEach((error) => {
            addToast({message: error.message});
        })
        return null;
    }
    return data;
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
    const data = await response.json();
    if (data.success === false) {
        const errors = data.error.issues;
        console.log(errors);
        errors.forEach((error) => {
            addToast({message: error.message});
        })
        return null;
    }
    return data;
};

export const setDone = async (todo) => {
    const response = await fetch(`${PUBLIC_API_URL}/todos/${todo.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(todo)
    });
    const data = await response.json();
    if (data.success === false) {
        const errors = data.error.issues;
        console.log(errors);
        errors.forEach((error) => {
            addToast({message: error.message});
        })
        return null;
    }
    return data;
}

export const updateTodo = async (todo) => {
    const response = await fetch(`${PUBLIC_API_URL}/todos/${todo.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(todo)
    });
    const data = await response.json();
    if (data.success === false) {
        const errors = data.error.issues;
        console.log(errors);
        errors.forEach((error) => {
            addToast({message: error.message});
        })
        return null;
    }
    return data;
}