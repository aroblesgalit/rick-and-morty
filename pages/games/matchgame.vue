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
        <MatchGameCards :cards="cards" :flipCard="flipCard" />
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
  
</style>