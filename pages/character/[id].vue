<template>
    <div>
        <h2>{{ data.name }}</h2>
        <img :src="data.image" :alt="data.name">
        <p>{{ data.species }}</p>
        <p>{{ data.status }}</p>
        <p>{{ data.gender }}</p>
        <p>{{ data.origin.name }}</p>
        <p>{{ data.location.name }}</p>
    </div>
</template>

<script setup>

const { id } = useRoute().params;

const query = gql`
    query getCharacter($id: Int) {
        character(id: $id) {
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
`

let idInt = parseInt(id);

let variables = {
    id: idInt
}

const { data } = await useAsyncQuery(query, variables)

if (!data) {
    throw createError({ status: 404, statusMessage: 'Character not found', fatal: true })
}
</script>

<style scoped>
    
</style>