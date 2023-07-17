<template>
  <button @click="increment">increment 2</button>
  <button @click="increase({value:11})">add 11</button>

</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
  //  addOne() {
  //    this.$store.commit({ type: 'increase', value: 5 });
  //  },
  ...mapActions('numbers',['increase', 'increment'])

    /* or this syntax to change the local method names

  ...mapActions({ 
      inc:'increment', 
      increase'increment'})

    */


  },
};
</script>
