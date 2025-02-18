<script>
    let {id, name, done, onedit, onchange, ondelete } = $props();
    let previousName = name;
    let isUpdating = $state(false);

    const updateTodo = async () => {
        const updated = await onedit({id, name, done});
        if (!updated) {
            name = previousName;
        }
        isUpdating = false;
    }

</script>

<div class="flex flex-1 space-x-3 align-center max-w-7/10">
    <input class="hidden h-5 w-5 text-blue-600 rounded border-gray-300 focus:ring focus:ring-blue-300"
           type="checkbox" bind:checked={done}
           onclick={onchange}
           id={id}/>
    <label class="text-lg cursor-pointer inline-flex space-x-2 max-w-9/10" for={id}>
        <span>{done ? "✅" : "⬜"}</span>
        {#if isUpdating}
            <input class="w-full w-auto border border-gray-300 rounded-lg px-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                   type="text" name="name" id="name" bind:value={name} />
        {:else}
            <p class="flex-1 px-2 break-words overflow-hidden text-ellipsis">{name}</p>
        {/if}
    </label>
</div>
<div class="flex space-x-3">
    {#if isUpdating}
        <button class="px-3 py-1 rounded-md shadow"
            onclick={updateTodo}>&#128190;
        </button>
    {:else}
        <button class="px-3 py-1 rounded-md shadow"
                onclick={() => isUpdating = true }>&#x270D;
        </button>
    {/if}
    <button class="px-3 py-1 rounded-md shadow"
            onclick={ondelete}>🗑
    </button>
</div>
