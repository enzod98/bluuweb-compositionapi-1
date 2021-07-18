<template>
  <h1
  :style="{'color': colorFont}"
  >Contador: {{ signoDolar }} </h1>
</template>

<script>
import { computed } from '@vue/runtime-core'
export default {
    props: ['contador', 'colorFont'],
    // computed: {
    //     signoDolar() {
    //         return '$ ' + this.contador
    //     }
    // },
    setup(props){
        const signoDolar = computed(() => {
            return '$' + props.contador
        })

        return {signoDolar}
    }
}
</script>

<style>

</style>