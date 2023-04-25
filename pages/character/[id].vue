<template>
    <div>
        <h2>{{ characterDetail.name }}</h2>
        <img :src="characterDetail.image" :alt="characterDetail.name">
        <p>{{ characterDetail.species }}</p>
        <p>{{ characterDetail.status }}</p>
        <p>{{ characterDetail.gender }}</p>
        <p>{{ characterDetail.origin.name }}</p>
        <p>{{ characterDetail.location.name }}</p>
    </div>
</template>

<script setup>
import { useCharactersStore } from '../../stores/characters';
import { storeToRefs } from 'pinia';

const { id } = useRoute().params;

const charactersStore = useCharactersStore();
const { setCharacterDetail } = charactersStore;
const { characterDetail } = storeToRefs(charactersStore);

if (!characterDetail) {
    throw createError({ statusCode: 404, statusMessage: 'Character not found.' });
}

setCharacterDetail(id);

</script>

<style scoped>
    
</style>