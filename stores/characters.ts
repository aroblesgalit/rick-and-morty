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

interface Page {
    [key: string]: Character[]
}


export const useCharactersStore = defineStore('charactersStore', () => {
    // const pagesVisited: Ref<number[]> = ref([]);
    const charactersList: Ref<Page> = ref({});

    function addCharacterToList(page: string, characters: Character[]) {
        if (page in charactersList.value) return;
        Object.assign(charactersList, { page: characters})
    }

    // function addPageToList(page: number) {
    //     pagesVisited.value.push(page)
    // }

    return { addCharacterToList, charactersList }
});