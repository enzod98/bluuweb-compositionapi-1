<template>
    <h1>Lista de paises</h1>
    <p v-for="(pais, index) in arrayData" :key="index">
        <router-link :to="`/pais/${ pais.name }`">
            {{ pais.name }}
        </router-link>
    </p>
</template>

<script>
import { useFetch } from '../hooks/useFetch.js'
export default {
    setup() {
        return { ...useFetch('https://restcountries.eu/rest/v2/all') }
    },
}
</script>