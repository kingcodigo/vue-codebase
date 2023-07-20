<template>
  <button @click="confirmInput">change route programmatically</button>
  <ul>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
  </ul>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  methods: {
    confirmInput() {
      this.$router.push('/teams');
    }
  },
  beforeRouteLeave(to,from,next) {
    const userWantsToLeave = confirm('Are you sure you want to leave?');
   next(userWantsToLeave); 
  }
};

</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>