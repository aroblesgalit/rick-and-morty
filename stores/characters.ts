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
    const pagesVisited: Ref<number[]> = ref([]);
    const charactersList: Ref<Character[]> = ref([]);

    function addCharacterToList(char: Character) {
        charactersList.value.push(char)
    }

    function addPageToList(page: number) {
        pagesVisited.value.push(page)
    }

    return { addPageToList, addCharacterToList, charactersList }
});