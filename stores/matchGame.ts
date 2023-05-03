import { defineStore } from 'pinia'

interface Card {
    id: string,
    image: string,
    flipped: boolean,
    matched: boolean
}

export const useMatchGameStore = defineStore('matchGameStore', () => {

    const cards: Ref<Card[]> = ref([]);

    function addCards(characters: Card[]) {
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

    return { cards, addCards, flipCard, matchCards}
});