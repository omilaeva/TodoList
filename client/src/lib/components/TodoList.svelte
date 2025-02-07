<script>
    import TodoItem from "$lib/components/TodoItem.svelte";
    import {useTodosState} from "$lib/states/todoState.svelte.js";

    const todosState = useTodosState();
</script>

<h2>Existing todos</h2>

<ul>
    {#each todosState.todos as todo}
        <TodoItem {todo}/>
    {/each}
</ul>