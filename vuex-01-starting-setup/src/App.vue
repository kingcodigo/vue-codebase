<template>
  <base-container v-if="this.$store.state.isLoggedIn" title="Vuex"> 
    <h3>{{ this.$store.state.numbers.counter }}</h3>
    <button @click="addOne">increment 1</button>
    <the-counter></the-counter>
    <change-counter></change-counter>
    <favorite-value></favorite-value>
  </base-container>
  <base-container title="Auth">
  <user-auth></user-auth>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue'
import ChangeCounter from './components/ChangeCounter.vue'
import FavoriteValue from './components/FavoriteValue.vue'
import UserAuth from './components/UserAuth.vue'

export default {
  components: {
    BaseContainer,TheCounter,ChangeCounter,FavoriteValue,UserAuth
  },
  methods: {
    addOne() {
      this.$store.dispatch({type:'numbers/increase', value: 1});
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
