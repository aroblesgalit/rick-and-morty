<template>
    <div class="rounded-lg overflow-hidden shadow-lg p-5 text-center">
        <div class="relative flex justify-center">
            <img class="rounded" :src="character.image" :alt="character.name">
            <h3 class="bg-white border-solid border px-6 py-2 text-center text-lg rounded-lg w-max absolute">{{ character.name }}</h3>
        </div>
        <p class="mt-6">{{ character.species }}</p>
    </div>
</template>

<script setup>
    const { character } = defineProps(['character'])
</script>

<style scoped>
    img {
        max-width: 200px;
    }
    h3 {
        bottom: -20px;
    }
</style>