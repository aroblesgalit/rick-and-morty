<template>
    <div class="rounded-lg shadow-md p-4">
        <h3 class="text-md font-bold text-[#b2df28]">{{ title }}</h3>
    </div>
</template>

<script setup>
    const { title } = defineProps(['title'])
</script>

<style lang="scss" scoped>

</style>