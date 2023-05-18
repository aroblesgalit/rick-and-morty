<template>
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
        </div>
    </div>
</template>

<script setup>
const { cards, flipCard } = defineProps(['cards', 'flipCard'])
</script>

<style scoped>
    .card {
        perspective: 1000px;
    }
</style>