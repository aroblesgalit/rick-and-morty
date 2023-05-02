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
    const charactersResults: Ref<Character[]> = ref([]);

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

    async function setCharactersResults(page: string) {
        charactersResults.value = [];
        let pageInt = parseInt(page);
        let variables = {
            page: pageInt
        }

        if (pages.value.includes(page)) {
            for (let i: string | number = (pageInt * 20) - 19; i <= (pageInt * 20); i++) {
                let char: Character = charactersList.value.find(char => char.id == i)
                charactersResults.value.push(char)
            }

        } else {
            const { data } = await useAsyncQuery(queryGetCharacters, variables);

            charactersResults.value = data.value.characters.results;
            charactersInfo.value = data.value.characters.info;

            charactersResults.value.forEach(char => addCharacterToList(page, char));
            addPage(page);

            if(!data) {
                throw createError({ status: 404, statusMessage: 'Characters not found', fatal: true })
            }
        }
    }

    return { setCharactersResults,  addCharacterToList, setCharacterDetail, addPage, setCharactersInfo, charactersResults, charactersList, characterDetail, pages, charactersInfo }
});
