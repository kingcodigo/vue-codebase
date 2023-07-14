<template>
  <base-container title="Vuex"> 
    <h3>{{ this.$store.state.counter }}</h3>
    <button @click="addOne">increment</button>
    <the-counter></the-counter>
    <change-counter></change-counter>
    <favorite-value></favorite-value>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue'
import ChangeCounter from './components/ChangeCounter.vue'
import FavoriteValue from './components/FavoriteValue.vue'

export default {
  components: {
    BaseContainer,TheCounter,ChangeCounter,FavoriteValue
  },
  methods: {
    addOne() {
      this.$store.commit('increment');
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
