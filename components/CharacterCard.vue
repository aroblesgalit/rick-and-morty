<template>
    <div class="card">
        <img :src="character.image" :alt="character.name">
        <h3>{{ character.name }}</h3>
        <p>{{ character.species }}</p>
    </div>
</template>

<script setup>
    const { character } = defineProps(['character'])
</script>

<style scoped>
    img {
        margin: 0;
    }
</style>