<template>
    <div>
        <h1>Home</h1>
        {{ data.characters }}
    </div>
</template>

<script lang="ts" setup>
const query = gql`
    query getCharacters {
        characters {
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