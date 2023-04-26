<template>
    <div>
        <a class="rounded bg-[#00b5cc] text-white px-2 py-1 hover:bg-[#e89ac7] text-sm" href="" @click.prevent="$router.back()">Go back</a>
        <CharacterInfo :characterDetail="characterDetail" :key="characterDetail.id"/>
    </div>
</template>

<script setup>
import { useCharactersStore } from '../../stores/characters';
import { storeToRefs } from 'pinia';

const { id } = useRoute().params;

const charactersStore = useCharactersStore();
const { setCharacterDetail } = charactersStore;
const { characterDetail } = storeToRefs(charactersStore);

setCharacterDetail(id);

</script>

<style scoped>
    
</style>