import  { defineStore } from 'pinia'

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

    // const getCharactersList = computed(() => charactersList)

    function addCharacterToList(page: string, character: Character) {
        if (page in pages.value) return;
        charactersList.value.push(character)
    }

    function addPage(page: string) {
        if (page in pages.value) return;
        pages.value.push(page)
        console.log(pages.value)
    }

    function setCharacterDetail(id: string) {
        const filterChar = charactersList.filter(char => char.id == id);
        characterDetail.value = filterChar[0];
    }

    // function addPageToList(page: number) {
    //     pagesVisited.value.push(page)
    // }

    return { addCharacterToList, setCharacterDetail, addPage, charactersList, pages }
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