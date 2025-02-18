<script>
    import TodoItem from "$lib/components/todos/TodoItem.svelte";
    import {useTodoState} from "$lib/states/todoState.svelte.js";
    import {fade} from "svelte/transition";

    const todosState = useTodoState();
</script>

<h2 class="text-2xl font-bold mt-4 mb-4 text-center text-blue-500">My ToDos</h2>

<div class="h-auto overflow-y-auto p-4">
    <ul class="space-y-2 max-w-md mx-auto">
        {#each todosState.todos as todo (todo.id)}
            <li transition:fade class="flex items-center justify-between bg-gray-100 p-3 rounded-lg shadow-md">
                <TodoItem id={todo.id} name={todo.name} done={todo.done} onedit={async (updatedTodo) => await todosState.update(updatedTodo)}
                          onchange={async () => await todosState.changeDone(todo)}
                          ondelete={async () => await todosState.remove(todo.id)}/>
            </li>
        {/each}
    </ul>
</div>