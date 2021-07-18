<template>
    <h1>Contador: {{ contador }}</h1>    
    <Btn @accion="aumentar" txtButton="Aumentar" />
    <Btn @accion="disminuir" txtButton="Disminuir" />
</template>

<script>
import {useContador} from '../hooks/useContador.js'
import Btn from '../components/Btn'
export default {
    components: {
        Btn
    },
    setup() {
        const { contador, aumentar, disminuir } = useContador();

        return{ contador, aumentar, disminuir};

        //return {...useContador()} //Lo mismo pero más barato
    },
}
</script>