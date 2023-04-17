<template>
    <div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            <div v-for="char in data.characters.results">
                <CharacterCard :character="char" />
            </div>
        </div>
        <div class="flex justify-end items-center gap-x-4 my-6">
            <div>Showing {{ (20 * pageInt) - 19 }}-{{ (20 * pageInt) - 19 + data.characters.results.length - 1 }} of {{ data.characters.info.count }}</div>
            <div class="flex gap-x-2">
                <div v-if="page > 1">
                    <NuxtLink :to="`/page/${pageInt - 1}`" class="rounded bg-[#00b5cc] text-white px-2 py-1 hover:bg-[#e89ac7] text-sm">Prev</NuxtLink>
                </div>
                <div v-if="page < data.characters.info.pages">
                    <NuxtLink :to="`/page/${pageInt + 1}`" class="rounded bg-[#00b5cc] text-white px-2 py-1 hover:bg-[#e89ac7] text-sm">Next</NuxtLink>
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
                id
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
console.log(data)
if (!data) {
    throw createError({ status: 404, statusMessage: 'Characters not found', fatal: true })
}
</script>

<style scoped>
    
</style>