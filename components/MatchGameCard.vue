<template>
    <div class="card-inner relative w-full h-full text-center">
        <div class="card-front absolute w-full h-full">
            <img src="https://preview.redd.it/x498howiltl71.gif?format=png8&s=d1c048cf6e8e9863f60e390f628a75fffd592e08" alt="" class="w-full">
        </div>
        <div class="card-back">
            <img class="w-full" :src="card.image" alt="character card">
        </div>
    </div>
</template>

<script setup>
const { card } = defineProps(['card'])
</script>

<style scoped>

    .card-inner {
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
    }
</style>