<script>
    import {useTodosState} from "$lib/states/todoState.svelte.js";

    let { todo } = $props();

    const todosState = useTodosState();
</script>

<li>
    <input type="checkbox"  bind:checked={todo.done} onclick={() => todosState.changeDone(todo.uuid)} id={todo.uuid} />
    <label for={todo.uuid}>
        {todo.name} ({todo.done ? "done" : "not done"})
    </label>
    <button onclick={() => todosState.remove(todo.uuid)}>Remove</button>
</li>