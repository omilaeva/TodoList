<script>
    import TodoItem from "$lib/components/TodoItem.svelte";
    import {useTodoState} from "$lib/states/todoState.svelte.js";

    const todosState = useTodoState();
</script>

<h2>Existing todos</h2>

<ul>
    {#each todosState.todos as todo}
        <TodoItem {todo}/>
    {/each}
</ul>