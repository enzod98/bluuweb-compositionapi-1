<template>
    <button @click="accionHijo"> {{ txtButton }}</button>
</template>

<script>

export default {
    props: ['txtButton'],
    setup(props, context){
        const accionHijo = () => {
            context.emit('accion');
        }

        return { accionHijo }
    }
}
</script>
