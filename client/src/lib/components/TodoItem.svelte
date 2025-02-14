<script>
    import {useTodoState} from "$lib/states/todoState.svelte.js";

    let {todo} = $props();

    const todosState = useTodoState();
</script>

    <div class="flex flex-wrap space-x-3">
        <input class="h-5 w-5 text-blue-600 rounded border-gray-300 focus:ring focus:ring-blue-300"
               type="checkbox" bind:checked={todo.done}
               onclick={() => todosState.changeDone(todo)}
               id={todo.id}/>
        <!-- TODO fix word wrapping -->
        <label class="break-words text-lg cursor-pointer" for={todo.id}>
            {todo.name}

        </label>
    </div>
    <button class="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md shadow"
            onclick={() => todosState.remove(todo.id)}>Remove
    </button>
