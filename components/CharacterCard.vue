<template>
    <div class="card rounded-lg overflow-hidden shadow-md h-full">
        <img class="w-full" :src="character.image" :alt="character.name">
        <div class="text-white px-4 pb-4">
            <h3 class="text-lg leading-5 text-[#97ce4c] font-bold mb-1">{{ character.name }}</h3>
            <p class="text-sm font-light">{{ character.species }}</p>
        </div>
    </div>
</template>

<script setup>
    const { character } = defineProps(['character'])
</script>

<style scoped>
/* 
Logo name
blue: #00b5cc
green: #b2df28

Palette
brown: #44281d
peach: #e4a788
yellow: #f0e14a
green: #97ce4c
pink: #e89ac7
*/

    .card {
        background-color: #44281d;
    }
    img {
        display: block;
        -webkit-mask-image:-webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)));
        mask-image: linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0));
    }


</style>