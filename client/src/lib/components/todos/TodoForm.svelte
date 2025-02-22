<script>
    import {useTodoState} from "$lib/states/todoState.svelte.js";

    const todosState = useTodoState();

    let isLoading = $state(false);

    const addTodo = async (e) => {
        e.preventDefault();
        isLoading = true;
        const todo = Object.fromEntries(new FormData(e.target));
        await todosState.add(todo);
        isLoading = false;
        e.target.reset();
    }
</script>

<div class="flex justify-center items-center p-8">
    <form class="bg-white p-6 rounded-lg shadow-md w-full max-w-md space-y-4" onsubmit={addTodo}>
        <div>
            <label class="block text-gray-700 font-semibold mb-1" for="name">Enter task:</label>
            <input class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                   type="text" name="name" id="name" placeholder="Enter a new todo"/>
        </div>
        <div class="flex items-center space-x-2">
            <input class="rounded border-gray-300 focus:ring-2 focus:ring-blue-500"
                   id="done" name="done" type="checkbox"/>
            <label class="text-gray-700" for="done">Done</label>
        </div>
        <input class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition disabled:bg-blue-100"
               disabled={isLoading} type="submit" value="Add Todo"/>
    </form>
</div>

