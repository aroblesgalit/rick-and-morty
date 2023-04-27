<template>
    <div class="px-6 py-4">
        <p class="text-xl mb-10 md:max-w-lg relative">Please enjoy this simple Nuxt app providing you with a collection of Rick and Morty characters. I developed this project to help me learn the basics of Nuxt...</p>
        <NuxtLink to="/page/1" class="rounded bg-[#00b5cc] text-white px-4 py-2 mx-auto hover:bg-[#e89ac7] text-md">Show me the characters</NuxtLink>
    </div>
</template>

<script setup>

</script>

<style scoped>
    p::before {
        content: '';
        display: block;
        position: absolute;
        top: -16px;
        left: -20px;
        border: 2px solid #f0e14a;
        border-right: none;
        border-bottom: none;
        border-radius: 10px 0 0;
        width: 140px;
        height: 80px;
    }

    p::after {
        content: '';
        display: block;
        position: absolute;
        bottom: -20px;
        right: 0;
        border: 2px solid #97ce4c;
        border-top: none;
        border-left: none;
        border-radius: 0 0 10px;
        width: 140px;
        height: 40px;
    }
</style>