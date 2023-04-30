<template>
    <div class="flex justify-end items-center gap-x-4 my-6">
        <div>Showing {{ (20 * pageInt) - 19 }}-{{ (20 * pageInt) - 19 + results.length - 1 }} of {{ info.count }}</div>
        <div class="flex gap-x-2">
            <div v-if="page > 1">
                <NuxtLink :to="`/page/${pageInt - 1}`" class="rounded bg-[#00b5cc] text-white px-2 py-1 hover:bg-[#e89ac7] text-sm">Prev</NuxtLink>
            </div>
            <div v-if="page < info.pages">
                <NuxtLink :to="`/page/${pageInt + 1}`" class="rounded bg-[#00b5cc] text-white px-2 py-1 hover:bg-[#e89ac7] text-sm">Next</NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>
    const { page, info, results } = defineProps(['page', 'info', 'results']);
    let pageInt = parseInt(page);
</script>

<style lang="scss" scoped>

</style>