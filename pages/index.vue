<template>
    <div>
        <h2 class="mb-4">Home</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div v-for="char in data.characters.results">
                <CharacterCard :character="char" />
            </div>
            <p>Count: {{ data.characters.info.count }}</p>
            <p>Pages: {{ data.characters.info.pages }}</p>
        </div>
    </div>
</template>

<script lang="ts" setup>

const query = gql`
    query getCharacters {
        characters {
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
const { data } = await useAsyncQuery(query)
</script>

<style scoped>
    
</style>