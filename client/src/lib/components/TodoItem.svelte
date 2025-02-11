<script>
    import {useTodoState} from "$lib/states/todoState.svelte.js";

    let { todo } = $props();

    const todosState = useTodoState();
</script>

<li>
    <input type="checkbox"  bind:checked={todo.done} onclick={() => todosState.changeDone(todo)} id={todo.id} />
    <label for={todo.id}>
        {todo.name} ({todo.done ? "done" : "not done"})
    </label>
    <button onclick={() => todosState.remove(todo.id)}>Remove</button>
</li>