<template>
  <div class="about">
    <titulo :contador="contador" :colorFont="colorFont" />
    <!-- <h1
      :style="{'color': colorFont}"
    >
      Contador: {{ contador }}
    </h1> -->
    <!-- <button @click="aumentar">+</button>
    <button @click="disminuir">-</button> -->
    <btn txtButton="+" @accion="aumentar" />
    <btn txtButton="-" @accion="disminuir" />
    <hr>
    <input type="text" v-model="texto">
    <p>{{ texto }}</p>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import { computed } from '@vue/runtime-core';
import Titulo from '../components/Titulo.vue'
import Btn from '../components/Btn.vue';

export default {
  components:{
    Titulo,
    Btn
  },
  setup() {
    const contador = ref(0);
    const texto = ref('');

    const aumentar = () => {
      contador.value ++;
    }

    const disminuir = () => {
      contador.value --;
    }

    const colorFont = computed(() => {
      return contador.value > 0 ? 'green' : 'red'  
    })

    return { contador, aumentar, disminuir, colorFont, texto }
  },
}
</script>

