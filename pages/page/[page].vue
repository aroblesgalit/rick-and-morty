<template>
    <div>
        <CharacterCards :results="res" />
        <Pagination :page="page" :info="inf" :results="res" />
    </div>
</template>

<script setup>
import { useCharactersStore } from '../../stores/characters'
import { storeToRefs } from 'pinia'

const charactersStore = useCharactersStore();
const { addCharacterToList, addPage, setTotalChars } = charactersStore;
const { charactersList, pages, totalChars } = storeToRefs(charactersStore);

const { page } = useRoute().params;

const query = gql`
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

let pageInt = parseInt(page);

let variables = {
    page: pageInt
}

let res = [];
let inf = {};

if (pages.value.includes(page)) {
    for (let i = (pageInt * 20) - 19; i <= (pageInt * 20); i++) {
        res.push(charactersList.value.find(char => char.id == i))
    }
    inf = totalChars.value;
    console.log('Data exists. Populating page with existing data.');
} else {
    const { data } = await useAsyncQuery(query, variables)

    res = data._rawValue.characters.results;
    inf = data._rawValue.characters.info;

    setTotalChars(inf);
    
    res.forEach(char => addCharacterToList(page, char));

    addPage(page);

    console.log('Data does NOT exist. Populating page with new data.');
    if (!data) {
        throw createError({ status: 404, statusMessage: 'Characters not found', fatal: true })
    }
}

</script>

<style scoped>
    
</style>