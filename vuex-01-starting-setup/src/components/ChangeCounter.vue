<template>
  <button @click="addOne">increase</button>
</template>

<script>
export default {
  methods: {
    addOne() {
      this.$store.commit({ type: 'increase', value: 5 });
    },
  },
};
</script>
