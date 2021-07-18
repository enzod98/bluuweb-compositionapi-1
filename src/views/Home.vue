<template>
  <div class="home">
    <h1
      :style="{'color': colorFont}"
    >
      Contador: {{ contador }}
    </h1>
    <button @click="aumentar">+</button>
    <button @click="disminuir">-</button>
  </div>
</template>

<script>

export default {
  data() {
    return {
      contador: 0
    }
  },
  methods: {
    aumentar() {
      this.contador += 1
    },
    disminuir(){
      this.contador --;
    }
  },
  computed: {
    colorFont() {
      return this.contador > 0 ? 'green' : 'red'  
    }
  },
}
</script>
