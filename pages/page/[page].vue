<template>
    <div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            <div v-for="char in res">
                <CharacterCard :character="char" :key="char.id" />
            </div>
        </div>
        <div class="flex justify-end items-center gap-x-4 my-6">
            <div>Showing {{ (20 * pageInt) - 19 }}-{{ (20 * pageInt) - 19 + res.length - 1 }} of {{ inf.count }}</div>
            <div class="flex gap-x-2">
                <div v-if="page > 1">
                    <NuxtLink :to="`/page/${pageInt - 1}`" class="rounded bg-[#00b5cc] text-white px-2 py-1 hover:bg-[#e89ac7] text-sm">Prev</NuxtLink>
                </div>
                <div v-if="page < inf.pages">
                    <NuxtLink :to="`/page/${pageInt + 1}`" class="rounded bg-[#00b5cc] text-white px-2 py-1 hover:bg-[#e89ac7] text-sm">Next</NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useCharactersStore } from '../../stores/characters'
import { storeToRefs } from 'pinia'

const charactersStore = useCharactersStore();
const { addCharacterToList, addPage } = charactersStore;
const { charactersList, pages } = storeToRefs(charactersStore);

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

let res;
let inf;

if (page in pages) {
    for (let i = (pageInt * 20) - 19; i <= (pageInt * 20); i++) {
        res.push(charactersList.find(char => char.id == i))
    }
    console.log('Data exists. Populating page with existing data.');
} else {
    const { data } = await useAsyncQuery(query, variables)

    res = data._rawValue.characters.results;
    inf = data._rawValue.characters.info;
    
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