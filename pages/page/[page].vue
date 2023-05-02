<template>
    <div>
        <CharacterCards :results="charactersResults" />
        <Pagination v-if="charactersResults.length > 0" :page="page" :info="charactersInfo" :results="charactersResults" />
    </div>
</template>

<script setup>
import { useCharactersStore } from '../../stores/characters'
import { storeToRefs } from 'pinia'

const charactersStore = useCharactersStore();
const { setCharactersResults } = charactersStore;
const { charactersInfo, charactersResults } = storeToRefs(charactersStore);

const { page } = useRoute().params;

setCharactersResults(page);

</script>

<style scoped>
    
</style>