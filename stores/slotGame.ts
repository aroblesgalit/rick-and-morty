import { defineStore, storeToRefs } from 'pinia'
import { useCharactersStore } from './characters'

interface Token {
    id: string,
    image: string
}

export const useSlotGameStore = defineStore('slotGameStore', () => {
    const charactersStore = useCharactersStore();
    const { setCharactersResults } = charactersStore;
    const { charactersResults, charactersInfo } = storeToRefs(charactersStore);

    const tokens: Ref<Token[]> = ref([]);
    const reels: Ref<Token[]> = ref([]);

    async function setTokens() {
        try {
            tokens.value = [];
            reels.value = [];

            let randomPage = Math.random() * (parseInt(charactersInfo.value.pages) - 1) + 1;

            await setCharactersResults(randomPage.toString());
            let selection = [...charactersResults.value];
            for (let i = 1; i <= 3; i++) {
                let randomIndex = Math.floor(Math.random() * selection.length);
                let token = selection[randomIndex];

                let newToken = {
                    id: token.id,
                    image: token.image
                }
                tokens.value.push(newToken);
                selection.splice(randomIndex, 1);
            }
            reels.value.push(tokens.value[0], tokens.value[0], tokens.value[0])
        } catch (error) {
            throw createError({ status: 404, statusMessage: 'Please try again.', fatal: true })
        }
    }

    function spinReel(index: number) {
        console.log('spinning..')
        // 3 times
        let tempTokens = [...tokens.value]
        let curIndex = tempTokens.length;
        let ranIndex;
        while (curIndex != 0) {
            ranIndex = Math.floor(Math.random() * curIndex);
            reels.value[index] = tempTokens[ranIndex];
            console.log(tempTokens[ranIndex]);
            tempTokens.splice(ranIndex, 1);
            curIndex = tempTokens.length;
        }
        
        // randomize index 0 to 2 and stop after 2000ms, 2500ms, 3000ms
        // store each one in an array then render on screen
    }

    return { tokens, reels, setTokens, spinReel }
});