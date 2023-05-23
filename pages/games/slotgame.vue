<template>
    <div class="md:max-w-3xl mx-auto">
        <div class="grid grid-cols-3 gap-6 mb-4">
            <div
                v-for="token in reels"
                class="token rounded-lg overflow-hidden"
            >
                <img :src="token.image" alt="character card" />
            </div>
        </div>
        <button @click="handleSpin" :class="{ 'pointer-events-none': isSpinning }" class="rounded bg-[#00b5cc] text-white px-2 py-1 hover:bg-[#e89ac7] text-sm">Spin</button>
    </div>
</template>

<script setup>
import { useSlotGameStore } from '~~/stores/slotGame';
import { storeToRefs } from 'pinia';

const slotGameStore = useSlotGameStore();
const { setTokens, handleSpin } = slotGameStore;
const { reels, isSpinning } = storeToRefs(slotGameStore);

setTokens();
</script>

<style scoped>

</style>