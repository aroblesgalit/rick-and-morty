<template>
    <div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div v-for="char in data.characters.results">
                <CharacterCard :character="char" />
            </div>
        </div>
        <div class="flex justify-end gap-x-4 mt-4">
            <div>Showing {{ (20 * pageInt) - 19 }}-{{ (20 * pageInt) - 19 + data.characters.results.length - 1 }} of {{ data.characters.info.count }}</div>
            <div class="flex gap-x-2">
                <div v-if="page > 1">
                    <NuxtLink :to="`/page/${pageInt - 1}`">Prev</NuxtLink>
                </div>
                <div v-if="page < data.characters.info.pages">
                    <NuxtLink :to="`/page/${pageInt + 1}`">Next</NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

const { page } = useRoute().params;

const query = gql`
    query getCharacters($page: Int) {
        characters(page: $page) {
            info {
                count
                pages
            },
            results {
                name
                image
                species
            }
        }
    }
`

let pageInt = parseInt(page);

let variables = {
    page: pageInt
}

const { data } = await useAsyncQuery(query, variables)

if (!data) {
    throw createError({ status: 404, statusMessage: 'Characters not found', fatal: true })
}
</script>

<style scoped>
    
</style>