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

const queryGetCharacters = gql`
    query getCharacters($page: Int) {
        characters(page: $page) {
            info {
                count
                pages
            },
            results {
                id
                name
                image
                species
                status
                gender
                origin {
                    name
                }
                location {
                    name
                }
                episode {
                    name
                    air_date
                }
            }
        }
    }
`

export const useCharactersStore = defineStore('charactersStore', () => {
    
    const pages: Ref<string[]> = ref([]);
    const charactersList: Ref<Character[]> = ref([]);
    const characterDetail = ref({});
    const charactersInfo = ref({});

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

    function setCharactersInfo(value: Object) {
        if(isEmpty(charactersInfo.value))
        charactersInfo.value = value;
    }

    return { addCharacterToList, setCharacterDetail, addPage, setCharactersInfo, charactersList, characterDetail, pages, charactersInfo }
});
