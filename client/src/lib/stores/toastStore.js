import { writable } from "svelte/store";

export const toasts = writable([]);

export const addToast = (toast) => {
    // Create a unique ID so we can easily find/remove it
    // when timeout expires
    toast.id = Math.floor(Math.random() * 10000);
    toast.timeout = toast.timeout ?? 3000;

    // Push the toast to the top of the list of toasts
    toasts.update((all) => [toast, ...all]);

    // If toast is dismissible, dismiss it after "timeout" amount of time.
    if (toast.timeout) {
        setTimeout(() => dismissToast(toast.id), toast.timeout);
    }
};

export const dismissToast = (id) => {
    toasts.update((all) => all.filter((t) => t.id !== id));
};