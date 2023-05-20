<template>
    <div class="md:max-w-3xl mx-auto">
        <div class="grid grid-cols-3 gap-6">
            <div
                v-for="token in tokens"
                :id="token.id"
                :key="token.id"
                class="token rounded-lg overflow-hidden"
            >
                <img :src="token.image" alt="character card" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { useSlotGameStore } from '~~/stores/slotGame';
import { storeToRefs } from 'pinia';

const slotGameStore = useSlotGameStore();
const { setTokens } = slotGameStore;
const { tokens } = storeToRefs(slotGameStore);

setTokens();
</script>

<style scoped>

</style>