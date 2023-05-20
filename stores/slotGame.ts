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

    async function setTokens() {
        try {
            tokens.value = [];

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
        } catch (error) {
            throw createError({ status: 404, statusMessage: 'Please try again.', fatal: true })
        }
    }

    return { tokens, setTokens }
});