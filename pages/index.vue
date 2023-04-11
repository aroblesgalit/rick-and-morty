<template>
    <div>
        <h2 class="mb-4">Count: {{ data.characters.info.count }} | Pages: {{ data.characters.info.pages }}</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div v-for="char in data.characters.results">
                <CharacterCard :character="char" />
            </div>
        </div>
        <NuxtLink to="/page/24" class="pt-6">Page 24</NuxtLink>
    </div>
</template>

<script lang="ts" setup>

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

let variables = {
    page: 1
}

const { data } = await useAsyncQuery(query, variables)
</script>

<style scoped>
    
</style>