// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/apollo',
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt'
    ],
    apollo: {
        clients: {
            default: {
                httpEndpoint: 'https://rickandmortyapi.com/graphql'
            }
        }
    },
    app: {
        baseURL: '/rick-and-morty/'
    },
    ssr: false
})
