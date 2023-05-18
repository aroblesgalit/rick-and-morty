<template>
    <div class="md:max-w-3xl mx-auto">
        <MatchGameHeader :timer="timer" :setCards="setCards" />
        <MatchGameCards :cards="cards" :flipCard="flipCard" />
        <MatchGameTimes :cards="cards" :bestTimes="bestTimes" />
    </div>
    
</template>

<script setup>
import { useMatchGameStore } from '../../stores/matchGame'
import { storeToRefs } from 'pinia'

const matchGameStore = useMatchGameStore();
const { setCards, flipCard } = matchGameStore;
const { cards, timer, bestTimes } = storeToRefs(matchGameStore);

setCards('easy');
</script>

<style scoped>
  
</style>