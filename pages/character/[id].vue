<template>
    <div>
        <a href="" @click.prevent="$router.back()">Go back</a>
        <div class="flex flex-col md:flex-row gap-4 mt-4">
            <div class="basis-full md:basis-1/2">
                <img class="md:w-full" :src="characterDetail.image" :alt="characterDetail.name">
            </div>
            <div class="basis-full md:basis-1/2">
                <h2 class="text-5xl font-black">{{ characterDetail.name }}</h2>
                <p class="text-2xl mb-4 font-bold">{{ characterDetail.species }}</p>
                <p class="mb-1"><span class="font-bold">Status:</span> {{ characterDetail.status }}</p>
                <p class="mb-1"><span class="font-bold">Gender:</span> {{ characterDetail.gender }}</p>
                <p class="mb-1"><span class="font-bold">Origin:</span> {{ characterDetail.origin.name }}</p>
                <p class="mb-1"><span class="font-bold">Location:</span> {{ characterDetail.location.name }}</p>
                <p><span class="font-semibold">Episodes:</span> <span v-for="episode in characterDetail.episode">{{ episode.name + ' (' + episode.air_date + '), ' }}</span></p>
            </div>
        </div>
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