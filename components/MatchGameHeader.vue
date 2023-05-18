<template>
    <div class="mb-6 flex justify-between">
        <div>
            <button @click="setCards('easy')" class="rounded bg-[#00b5cc] text-white px-2 py-1 mr-2 hover:bg-[#e89ac7] text-sm">Easy</button>
            <button @click="setCards('medium')" class="rounded bg-[#00b5cc] text-white px-2 py-1 mr-2 hover:bg-[#e89ac7] text-sm">Medium</button>
            <button @click="setCards('hard')" class="rounded bg-[#00b5cc] text-white px-2 py-1 hover:bg-[#e89ac7] text-sm">Hard</button>
        </div>
        <div>{{ Math.floor(timer / 60) }}m {{ (timer % 60) < 10 ? '0' : '' }}{{ (timer % 60) }}s</div>
    </div>
</template>

<script setup>
const { timer, setCards } = defineProps(['timer', 'setCards'])
</script>

<style scoped>

</style>