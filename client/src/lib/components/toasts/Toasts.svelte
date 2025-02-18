<script lang="ts">
  import Toast from "./Toast.svelte";

  import { dismissToast, toasts } from "$lib/stores/toastStore";
</script>

{#if $toasts}
    <div class="fixed flex flex-col items-center justify-center space-y-4 z-[1000] w-full">
        {#each $toasts as toast (toast.id)}
            <Toast ondismiss={() => dismissToast(toast.id)}>{toast.message}</Toast>
        {/each}
    </div>
{/if}
