<template>
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
</template>

<script setup>
const { cards, bestTimes } = defineProps(['cards', 'bestTimes'])
</script>

<style scoped>

</style>