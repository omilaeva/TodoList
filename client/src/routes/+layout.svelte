<script>
    let { children } = $props();
    let isOpen = $state(false);
</script>

<style global>
    @import '../app.css';
</style>

<nav class="bg-blue-500 text-white p-4 shadow-md">
    <div class="container mx-auto flex justify-between items-center">
        <!-- Logo -->
        <a href="/" class="text-2xl font-bold">ToDo List</a>

        <!-- Desktop Menu -->
        <ul class="hidden md:flex space-x-6">
            <li><a href="/" class="hover:underline">Home</a></li>
            <li><a href="/about" class="hover:underline">About</a></li>
        </ul>

        <!-- Mobile Hamburger Button (visible on small screens) -->
        <div class="md:hidden">
            <button onclick={() => isOpen = !isOpen} aria-label="Toggle menu">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
            </button>
        </div>
    </div>

    <!-- Mobile Dropdown Menu (visible on small screens when isMenuOpen is true) -->
    <div class={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-blue-500 text-white p-4 space-y-2`}>
        <a href="/" class="block py-2">Home</a>
        <a href="/about" class="block py-2">About</a>
    </div>
</nav>
<div class="h-auto bg-gradient-to-br from-blue-400 via-emerald-200 to-fuchsia-400">
    {@render children()}
</div>