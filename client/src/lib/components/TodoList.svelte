<script>
    import TodoItem from "$lib/components/TodoItem.svelte";
    import {useTodoState} from "$lib/states/todoState.svelte.js";

    const todosState = useTodoState();
</script>

<h2 class="text-2xl font-bold mt-4 mb-4 text-center">My ToDos</h2>

<ul class="space-y-2 max-w-md mx-auto">
    {#each todosState.todos as todo}
        <li class="flex items-center justify-between bg-gray-100 p-3 rounded-lg shadow-md">
        <TodoItem {todo}/>
        </li>
    {/each}
</ul>