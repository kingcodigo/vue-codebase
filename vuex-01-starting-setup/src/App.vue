<template>
  <base-container title="Vuex">
    <h3>{{ this.$store.state.counter }}</h3>
    <button @click="addOne">Add 1</button>
    <the-counter></the-counter>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue'
export default {
  components: {
    BaseContainer,TheCounter
  },
  methods: {
    addOne() {
      this.$store.state.counter++;
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
