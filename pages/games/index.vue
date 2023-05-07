<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        <GameTile title="Matching" />
    </div>
</template>

<script setup>
import { useMatchGameStore } from '../../stores/matchGame'
import { storeToRefs } from 'pinia'

const matchGameStore = useMatchGameStore();
const { setCards } = matchGameStore;
const { cards } = storeToRefs(matchGameStore);

setCards();
</script>

<style lang="scss" scoped>

</style>