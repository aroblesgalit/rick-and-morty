<template>
    <div class="md:max-w-3xl mx-auto">
        <div class="grid grid-cols-3 gap-6">
            <div
                v-for="token in reels"
                class="token rounded-lg overflow-hidden"
            >
                <img :src="token.image" alt="character card" />
            </div>
        </div>
        <button @click="spinReel(0)">Spin</button>
    </div>
</template>

<script setup>
import { useSlotGameStore } from '~~/stores/slotGame';
import { storeToRefs } from 'pinia';

const slotGameStore = useSlotGameStore();
const { setTokens, spinReel } = slotGameStore;
const { tokens, reels } = storeToRefs(slotGameStore);

setTokens();
</script>

<style scoped>

</style>