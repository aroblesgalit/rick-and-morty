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
    const { charactersResults, charactersInfo } = storeToRefs(charactersStore);

    const cards: Ref<Card[]> = ref([]);
    const currentFlipped: Ref<Card[]> = ref([]);
    const cardsCount: Ref<number> = ref(4);
    const bestTimes: Ref<number[]> = ref([])
    const timer: Ref<number> = ref(0);
    const isNewGame: Ref<boolean> = ref(true);
    let timerInterval;

    // const convertedTimer = computed(() => {
    //     let minutes: number = Math.floor(timer.value / (60 * 1000));
    //     let seconds = ((timer.value % (60 * 1000)) / 1000).toFixed(0);
    //     return parseInt(seconds) == 60 ? (minutes + 1) + "m 00s" : minutes + "m " + (parseInt(seconds) < 10 ? "0" : "") + parseInt(seconds) + "s"
    // });

    async function setCards(mode: string) {
        try {
            isNewGame.value = true;
            clearInterval(timerInterval);
            clearTimer();
            cards.value = [];
            switch (mode) {
                case 'easy':
                    cardsCount.value = 4;
                    break;
                case 'medium':
                    cardsCount.value = 6;
                    break;
                case 'hard':
                    cardsCount.value = 8;
                    break;
                default:
                    cardsCount.value = 4;
            }
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
            let tempCards = [];
            for (let i = 1; i <= cardsCount.value; i++) {
                let randomIndex = Math.floor(Math.random() * selection.length);
                let card = selection[randomIndex];

                let newCardA = {
                    id: card.id + '-a',
                    image: card.image,
                    flipped: false,
                    matched: false
                }
                let newCardB = {
                    id: card.id + '-b',
                    image: card.image,
                    flipped: false,
                    matched: false
                }
                // Store into temp cards array
                tempCards.push(newCardA, newCardB);
                selection.splice(randomIndex, 1);
            }
            // Shuffle cards and store into state
            let curIndex = tempCards.length;
            let ranIndex;
            while (curIndex != 0) {
                ranIndex = Math.floor(Math.random() * curIndex);
                curIndex--;

                [tempCards[curIndex], tempCards[ranIndex]] = [tempCards[ranIndex], tempCards[curIndex]];
            }
            cards.value = tempCards;
        } catch (error) {
            throw createError({ status: 404, statusMessage: 'Please try again.', fatal: true })
        }
        
    }

    function flipCard(card: Card) {
        if (isNewGame.value) {
            setTimer();
            isNewGame.value = false;
        }
        // filter flipped cards
        // if 2 are flipped, check if they are the same by image url
        // if so, keep them flipped
        // if not, flip them back over
        
        if (currentFlipped.value.length == 2) return;
        
        let cardIndex = cards.value.findIndex(item => item.id == card.id);
        if (!cards.value[cardIndex].flipped) {
            cards.value[cardIndex].flipped = true;
            currentFlipped.value.push(card);
            if (currentFlipped.value.length === 2) {
                matchCards(currentFlipped.value[0], currentFlipped.value[1]);
            }
        }
        
    }

    function matchCards(card1: Card, card2: Card) {
        let card1Index = cards.value.findIndex(item => item.id == card1.id);
        let card2Index = cards.value.findIndex(item => item.id == card2.id);
        if (cards.value[card1Index].image === cards.value[card2Index].image) {
            cards.value[card1Index].matched = true;
            cards.value[card2Index].matched = true;
            currentFlipped.value = [];
            if (cards.value.filter(item => item.matched == true).length == cards.value.length) {
                clearInterval(timerInterval);
                setTimeout(() => {
                    alert('You won! Play again.');
                    addBestTime(timer.value);
                }, 1000);
            }
        } else {
            setTimeout(() => {
                cards.value[card1Index].flipped = false;
                cards.value[card2Index].flipped = false;
                currentFlipped.value = [];
            }, 1500);
        }
    }

    function setTimer() {
        let start = new Date();
        let now;
        let timeElapsed;
        timerInterval = setInterval(() => {
            now = new Date()
            timeElapsed = now.getTime() - start.getTime();
            timer.value = Math.round(timeElapsed / 1000);
        }, 1000)
    }

    function clearTimer() {
        timer.value = 0;
    }

    function addBestTime(time: number) {
        bestTimes.value.push(time)
    }

    return { cards, timer, bestTimes, setCards, flipCard, matchCards}
});