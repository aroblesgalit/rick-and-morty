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
    const { pages, charactersList, charactersInfo } = storeToRefs(charactersStore);

    const cards: Ref<Card[]> = ref([]);

    function setCards(characters: Card[]) {
        // Import characters store for pages, charactersList, and charactersInfo
        // Get random number within charactersInfo pages value
        let randomNum = Math.random() * ( parseInt(charactersInfo.value.pages) - 1 ) + 1;
        // Check if randomNum is in pages
            // If so, get random numbers within charactersList based on page number
                // Get 3 total and 2 variations of each (change id values)
                // Store into cards const
            // If not, make a query call and add values to charactersList, also add page to pages
                // Then do what's in the "If so" logic
        cards.value.push(...characters);
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