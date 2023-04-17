<template>
    <div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            <div v-for="char in data.characters.results">
                <CharacterCard :character="char" />
            </div>
        </div>
        <div class="flex justify-end items-center gap-x-4 my-6">
            <div>Showing 1-20 of {{ data.characters.info.count }}</div>
            <div class="flex gap-x-2">
                <div>
                    <NuxtLink :to="`/page/2`" class="rounded bg-[#00b5cc] text-white px-2 py-1 hover:bg-[#e89ac7] text-sm">Next</NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

const query = gql`
    query getCharacters() {
        characters() {
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

const { data } = await useAsyncQuery(query)

if (!data) {
    throw createError({ status: 404, statusMessage: 'Characters not found', fatal: true })
}
</script>

<style scoped>
    
</style>