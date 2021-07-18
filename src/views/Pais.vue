<template>
    <!-- <h1>Detalle de {{ $route.params.nombre }}</h1> -->
    <h1>Detalle de {{ nombre }}</h1>
    <p>{{ arrayData }}</p>
</template>

<script>
import  { useRoute } from 'vue-router'
import { useFetch } from '../hooks/useFetch.js'

export default {
    props: ['nombre'],
    setup(props) {
        console.log(props.nombre);  //Para acceder mediante este método debemos configurar la ruta de la vista con el atributo 'props: true'
        
        const nombreParams = useRoute();    //Para acceder mediante esta forma debemos importar useRoute de la librería 'vue-router'
        console.log(nombreParams.params.nombre);

        const { arrayData } = useFetch(`https://restcountries.eu/rest/v2/name/${ props.nombre }`)

        return { arrayData }

    },
}
</script>