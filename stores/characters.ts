import  { defineStore } from 'pinia'
import { isEmpty } from 'lodash'

interface Name {
    name: string
}

interface Episode {
    name: string,
    air_date: string
}

interface Character {
    id: string,
    name: string,
    image: string,
    species: string,
    status: string,
    gender: string,
    origin: Name,
    location: Name,
    episode: Episode[]
}

export const useCharactersStore = defineStore('charactersStore', () => {
    // const pagesVisited: Ref<number[]> = ref([]);
    const pages: Ref<string[]> = ref([]);
    const charactersList: Ref<Character[]> = ref([]);
    const characterDetail = ref({});
    const totalChars = ref({});

    // const getCharactersList = computed(() => charactersList)

    function addCharacterToList(page: string, character: Character) {
        if (pages.value.includes(page)) return;
        charactersList.value.push(character)
    }

    function addPage(page: string) {
        if (pages.value.includes(page)) return;
        pages.value.push(page)
    }

    function setCharacterDetail(id: string) {
        const filterChar = charactersList.value.filter(char => char.id == id);
        if (filterChar.length === 0) {
            throw createError({ statusCode: 404, statusMessage: 'Character not found.' });
        }
        characterDetail.value = filterChar[0];
    }

    function setTotalChars(value: Object) {
        if(isEmpty(totalChars.value))
        totalChars.value = value;
    }
    // function addPageToList(page: number) {
    //     pagesVisited.value.push(page)
    // }

    return { addCharacterToList, setCharacterDetail, addPage, setTotalChars, charactersList, characterDetail, pages, totalChars }
});

// export const useCharactersStore = defineStore('characters-store', {
//     state: () => {
//         return {
//             pages: [],
//             charactersList: [],
//         }
//     },
//     actions: {
//         addCharacterToList(page: string, characters: Character[]) {
//             if (page in this.pages) return;
//             characters.
//             // this.charactersList = {
//             //     ...this.charactersList,
//             //     [page]: characters
//             // }
//         },
//     },
//     getters: {
//         getCharactersList: state => state.charactersList,
//     }
// })