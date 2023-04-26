<template>
    <div>
        <a class="rounded bg-[#00b5cc] text-white px-2 py-1 hover:bg-[#e89ac7] text-sm" href="" @click.prevent="$router.back()">Go back</a>
        <CharacterInfo :id="id" :key="id"/>
    </div>
</template>

<script setup>

const { id } = useRoute().params;

</script>