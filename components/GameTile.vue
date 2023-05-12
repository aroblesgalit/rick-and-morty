<template>
    <div :class="bgColor" class="rounded-lg shadow-md p-4">
        <h3 class="text-4xl font-bold text-[#b2df28]">{{ title }}</h3>
    </div>
</template>

<script setup>
    const { title, color } = defineProps(['title', 'color'])
    const bgColor = 'bg-[' + color + ']'
</script>

<style lang="scss" scoped>

</style>