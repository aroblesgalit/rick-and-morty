<template>
    <div class="flex flex-col md:flex-row gap-4 mt-4">
        <div class="basis-full md:basis-1/2 relative">
            <img class="md:w-full rounded-lg" :src="characterDetail.image" :alt="characterDetail.name">
        </div>
        <div class="char-details basis-full md:basis-1/2 relative p-4 pl-0">
            <h2 class="text-5xl font-black text-[#f0e14a]">{{ characterDetail.name }}</h2>
            <p class="text-2xl mb-4 font-bold text-gray-500">{{ characterDetail.species }}</p>
            <p class="mb-1"><span class="font-bold">Status:</span> {{ characterDetail.status }}</p>
            <p class="mb-1"><span class="font-bold">Gender:</span> {{ characterDetail.gender }}</p>
            <p class="mb-1"><span class="font-bold">Origin:</span> {{ characterDetail.origin.name }}</p>
            <p class="mb-1"><span class="font-bold">Location:</span> {{ characterDetail.location.name }}</p>
            <p><span class="font-semibold">Episodes:</span> <span v-for="episode in characterDetail.episode">{{ episode.name + ' (' + episode.air_date + '), ' }}</span></p>
        </div>
    </div>
</template>

<script setup>
import { useCharactersStore } from '../stores/characters';
import { storeToRefs } from 'pinia';

const { id } = defineProps(['id'])

const charactersStore = useCharactersStore();
const { setCharacterDetail } = charactersStore;
const { characterDetail } = storeToRefs(charactersStore);

setCharacterDetail(id);
</script>

<style scoped>
    div:has(> img)::after {
        content: '';
        display: block;
        position: absolute;
        bottom: -20px;
        left: 20px;
        border: 2px solid #f0e14a;
        border-top: none;
        border-right: none;
        border-radius: 0 0 0 10px;
        width: 90px;
        height: 160px;
    }

    .char-details::before {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        border: 2px solid #97ce4c;
        border-left: none;
        border-bottom: none;
        border-radius: 0 10px 0;
        width: 90px;
        height: 140px;
    }
    
    .char-details::after {
        content: '';
        display: block;
        position: absolute;
        bottom: 0;
        right: 0;
        border: 2px solid #97ce4c;
        border-top: none;
        border-left: none;
        border-radius: 0 0 10px;
        width: 180px;
        height: 60px;
    }
</style>