<script>
    import { fade } from "svelte/transition";
    import ErrorIcon from "$lib/components/toasts/ErrorIcon.svelte";
    import CloseIcon from "$lib/components/toasts/CloseIcon.svelte";

    let { children, ondismiss } = $props();
</script>

<div class="flex justify-center items-center w-full max-w-xs p-4 space-x-4 bg-red-400 rtl:space-x-reverse border-transparent text-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg"
     role="alert" transition:fade>
    <ErrorIcon width="1.8em" />
    <div class="text-sm font-normal border-transparent">{@render children?.()}</div>
    <button class="text-base" onclick={ondismiss}>
        <CloseIcon width="0.8em"/>
    </button>
</div>