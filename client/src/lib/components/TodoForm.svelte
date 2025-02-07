<script>
    import { useTodosState } from "$lib/states/todoState.svelte.js";

    const todosState = useTodosState();

    const addTodo = (e) => {
        e.preventDefault();
        const todo = Object.fromEntries(new FormData(e.target));
        todo.uuid = crypto.randomUUID();
        todosState.add(todo);
        e.target.reset();
    }
</script>


<h2>Add Todo</h2>

<form onsubmit={addTodo}>
    <label for="name">Enter task:</label>
    <input type="text" name="name" id="name"  placeholder="Enter a new todo" />
    <div>
        <input id="done" name="done" type="checkbox" />
        <label for="done">Done</label>
    </div>
    <input type="submit" value="Add Todo" />
</form>