<template>
    <div>
        <header class="shadow-sm bg-white">
            <nav class="container mx-auto p-4 flex justify-between">
                <h1 class="font-bold text-lg text-cyan-500">Rick and Morty Characters</h1>
                <ul class="flex gap-4">
                    <NuxtLink to="/">Home</NuxtLink>
                    <NuxtLink to="/page/1">Characters</NuxtLink>
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
    .router-link-exact-active {
        color: rgb(6 182 212 / 1);
        font-weight: 700;
    }
</style>