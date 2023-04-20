<template>
    <div>
        ID: {{ characterDetail.id }}
        <!-- {{ data.character }} -->
        <!-- <h2>{{ data.character.name }}</h2>
        <img :src="data.character.image" :alt="data.name">
        <p>{{ data.character.species }}</p>
        <p>{{ data.character.status }}</p>
        <p>{{ data.character.gender }}</p>
        <p>{{ data.character.origin.name }}</p>
        <p>{{ data.character.location.name }}</p> -->
    </div>
</template>

<script setup>
import { useCharactersStore } from '../../stores/characters';
import { storeToRefs } from 'pinia';

const charactersStore = useCharactersStore();
const { setCharacterDetail } = charactersStore;
const { characterDetail } = storeToRefs(charactersStore);

const { id } = useRoute().params;

setCharacterDetail(id);

</script>

<style scoped>
    
</style>