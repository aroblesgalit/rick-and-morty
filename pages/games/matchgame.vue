<template>
    <div class="md:max-w-3xl mx-auto">
        <div class="mb-6 flex justify-between">
            <div>
                <button @click="setCards('easy')" class="rounded bg-[#00b5cc] text-white px-2 py-1 mr-2 hover:bg-[#e89ac7] text-sm">Easy</button>
                <button @click="setCards('medium')" class="rounded bg-[#00b5cc] text-white px-2 py-1 mr-2 hover:bg-[#e89ac7] text-sm">Medium</button>
                <button @click="setCards('hard')" class="rounded bg-[#00b5cc] text-white px-2 py-1 hover:bg-[#e89ac7] text-sm">Hard</button>
            </div>
            <div>{{ Math.floor(timer / 60) }}m {{ (timer % 60) < 10 ? '0' : '' }}{{ (timer % 60) }}s</div>
        </div>
        <div class="grid grid-cols-4 gap-3 md:gap-6">
            <div 
                v-for="card in cards" 
                :id="card.id" 
                :key="card.id" 
                :class="[{flipped: card.flipped}]" 
                class="card rounded-lg overflow-hidden shadow-md h-full relative bg-transparent cursor-pointer"
                @click="flipCard(card)"
            >
                <MatchGameCard :card="card" />
                <!-- <div class="card-inner relative w-full h-full text-center">
                    <div class="card-front absolute w-full h-full">
                        <img src="https://preview.redd.it/x498howiltl71.gif?format=png8&s=d1c048cf6e8e9863f60e390f628a75fffd592e08" alt="" class="w-full">
                    </div>
                    <div class="card-back">
                        <img class="w-full" :src="card.image" alt="character card">
                    </div>
                </div> -->
            </div>
        </div>
        <div class="mt-6" v-if="cards.length > 0">
            <h3 class="text-lg font-semibold mb-2">You times:</h3>
            <div class="grid grid-cols-3 gap-3">
                <div v-if="bestTimes.some(val => val.mode == 'easy')">
                    <h4>Easy</h4>
                    <div v-for="time in bestTimes" :key="time.id">
                        <span v-if="time.mode == 'easy'">
                            {{ Math.floor(time.seconds / 60) }}m {{ (time.seconds % 60) < 10 ? '0' : '' }}{{ (time.seconds % 60) }}s
                        </span>
                    </div>
                </div>
                <div v-if="bestTimes.some(val => val.mode == 'medium')">
                    <h4>Medium</h4>
                    <div v-for="time in bestTimes" :key="time.id">
                        <span v-if="time.mode == 'medium'">
                            {{ Math.floor(time.seconds / 60) }}m {{ (time.seconds % 60) < 10 ? '0' : '' }}{{ (time.seconds % 60) }}s
                        </span>
                    </div>
                </div>
                <div v-if="bestTimes.some(val => val.mode == 'hard')">
                    <h4>Hard</h4>
                    <div v-for="time in bestTimes" :key="time.id">
                        <span v-if="time.mode == 'hard'">
                            {{ Math.floor(time.seconds / 60) }}m {{ (time.seconds % 60) < 10 ? '0' : '' }}{{ (time.seconds % 60) }}s
                        </span>
                    </div>
                </div>
            </div>
        </div>
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
    .card {
        perspective: 1000px;
    }

    /* .card-inner {
        transition: transform 0.6s;
        transform-style: preserve-3d;
    }

    .card.flipped .card-inner {
        transform: rotateY(180deg);
    }

    .card-front,
    .card-back {
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
    }

    .card-back {
        transform: rotateY(180deg);
    } */
</style>