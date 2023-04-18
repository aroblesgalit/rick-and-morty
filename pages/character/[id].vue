<template>
    <div>
        ID: {{ id }}
        <!-- {{ data.character }} -->
        <!-- <h2>{{ data.character.name }}</h2>
        <img :src="data.character.image" :alt="data.name">
        <p>{{ data.character.species }}</p>
        <p>{{ data.character.status }}</p>
        <p>{{ data.character.gender }}</p>
        <p>{{ data.character.origin.name }}</p>
        <p>{{ data.character.location.name }}</p> -->
    </div>
</template>

<script setup>

const { id } = useRoute().params;

const query = gql`
    query getCharacter($id: String) {
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

// let idInt = parseInt(id);

let variables = {
    id: id
}

const { data } = await useAsyncQuery(query, variables)
console.log(data)
if (!data) {
    throw createError({ status: 404, statusMessage: 'Character not found', fatal: true })
}
</script>

<style scoped>
    
</style>