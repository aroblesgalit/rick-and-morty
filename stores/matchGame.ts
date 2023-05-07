import { defineStore } from 'pinia'
import { useCharactersStore } from './characters'
import { storeToRefs } from 'pinia'

interface Card {
    id: string,
    image: string,
    flipped: boolean,
    matched: boolean
}

export const useMatchGameStore = defineStore('matchGameStore', () => {
    const charactersStore = useCharactersStore();
    const { setCharactersResults } = charactersStore;
    const { pages, charactersResults, charactersInfo } = storeToRefs(charactersStore);

    const cards: Ref<Card[]> = ref([]);

    async function setCards() {
        try {
            // Import characters store for pages, charactersList, and charactersInfo
            // Get random number within charactersInfo pages value
            let randomPage = Math.random() * ( parseInt(charactersInfo.value.pages) - 1 ) + 1;
            // Check if randomNum is in pages
                // If so, get random numbers within charactersList based on page number
                    // Get 3 total and 2 variations of each (change id values)
                // If not, make a query call and add values to charactersList, also add page to pages
                    // Then do what's in the "If so" logic
            await setCharactersResults(randomPage.toString());
            let selection = [...charactersResults.value];
            for (let i = 1; i <= 3; i++) {
                let randomIndex = Math.floor(Math.random() * selection.length);
                let card = selection[randomIndex];

                let newCardA = {
                    id: card.id + 'a',
                    image: card.image,
                    flipped: false,
                    matched: false
                }
                let newCardB = {
                    id: card.id + 'b',
                    image: card.image,
                    flipped: false,
                    matched: false
                }
                // Store into cards const
                cards.value.push(newCardA, newCardB);
                selection.splice(randomIndex, 1);
            }
        } catch (error) {
            throw createError({ status: 404, statusMessage: 'Please try again.', fatal: true })
        }
        
    }

    function flipCard(card: Card) {
        let cardIndex = cards.value.findIndex(item => item.id == card.id);
        cards.value[cardIndex].flipped = !cards.value[cardIndex].flipped;
    }

    function matchCards(card1: Card, card2: Card) {
        let card1Index = cards.value.findIndex(item => item.id == card1.id);
        let card2Index = cards.value.findIndex(item => item.id == card2.id);
        cards.value[card1Index].matched = true;
        cards.value[card2Index].matched = true;
    }

    return { cards, setCards, flipCard, matchCards}
});