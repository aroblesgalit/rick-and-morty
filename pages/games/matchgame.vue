<template>
    <div v-for="card in cards" :id="card.id" class="card rounded-lg overflow-hidden shadow-md h-full relative">
        <img class="w-full" :src="card.image" alt="character card">
    </div>
</template>

<script setup>
import { useMatchGameStore } from '../../stores/matchGame'
import { storeToRefs } from 'pinia'

const matchGameStore = useMatchGameStore();
const { setCards } = matchGameStore;
const { cards } = storeToRefs(matchGameStore);

setCards();
</script>

<style lang="scss" scoped>

</style>