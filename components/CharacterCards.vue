<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        <div v-for="char in results">
            <CharacterCard :character="char" :key="char.id" />
        </div>
    </div>
</template>

<script setup>
const { results } = defineProps(['results'])
</script>

<style scoped>
    
</style>