<template>
    <div>
        <header class="container shadow-sm bg-white p-4 mx-auto">
            <nav class="mx-auto flex justify-between">
                <h1 class="font-bold text-lg text-cyan-500">Rick and Morty Characters</h1>
                <ul class="flex gap-4">
                    <li>All</li>
                    <li>Rick</li>
                    <li>Morty</li>
                </ul>
            </nav>
        </header>

        <div class="container mx-auto p-4">
            <slot />
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>

</style>