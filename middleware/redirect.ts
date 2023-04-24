export default defineNuxtRouteMiddleware((to, from) => {
    if (notValidRoute(to)) {
        return abortNavigation()
    }
})