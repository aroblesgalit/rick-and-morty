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

/*
export const useCharactersStore = defineStore('charactersStore', () => {
    // const pagesVisited: Ref<number[]> = ref([]);
    const charactersList: Ref<Page> = ref({
        '0': {
            id: '0',
            name: '0',
            image: '0',
            species: '0',
            status: '0',
            gender: '0',
            origin: {
                name: '0'
            },
            location: {
                name: '0'
            },
            episode: {
                name: '0',
                air_date: '0'
            }
        },
        '00': {
            id: '00',
            name: '00',
            image: '00',
            species: '00',
            status: '00',
            gender: '00',
            origin: {
                name: '00'
            },
            location: {
                name: '00'
            },
            episode: {
                name: '00',
                air_date: '00'
            }
        }
    });

    function addCharacterToList(page: string, characters: Character[]) {
        if (page in charactersList.value) return;
        Object.assign(charactersList, { page: characters})
        console.log(charactersList)
    }

    // function addPageToList(page: number) {
    //     pagesVisited.value.push(page)
    // }

    return { addCharacterToList, charactersList }
});*/

export const useCharactersStore = defineStore({
    id: 'characters-store',
    state: () => {
        return {
            charactersList: {},
        }
    },
    actions: {
        addCharacterToList(page: string, characters: Character[]) {
            if (page in this.charactersList) return;
            Object.assign(this.charactersList, { page: characters })
        },
    },
    getters: {
        charactersList: state => state.charactersList,
    }
})