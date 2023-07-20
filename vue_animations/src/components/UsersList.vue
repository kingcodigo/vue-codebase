<template>
    <transition-group tag="ul" name="user-list">
      <li v-for="user in users" :key="user" @click="removeUser(user)">
        {{ user }}
      </li>
    </transition-group>
  <input type="text" ref="userNameInput" />
  <button @click="addUser">Add User</button>
</template>

<script>
export default {
  data() {
    return {
      users: ['Max', 'Manu', 'Gabi', 'José', 'John'],
    };
  },
  methods: {
    addUser() {
      this.users.unshift(this.$refs.userNameInput.value);
    },
    removeUser(user) {
      this.users = this.users.filter((usr) => usr !== user);
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 1rem 0;
  padding: 0;
}

li {
  border: 1px solid #810032;
  padding: 1rem;
  text-align: center;
}

.user-list-enter-from {
    opacity:0;
    transform: translateX(-30px);
}
.user-list-enter-active {
    transition: all 1s ease-out;
}
.user-list-enter-to {
    opacity:1;
    transform: translateX(0px);
}

.user-list-leave-from {
    opacity:1;
}
.user-list-leave-active {
    transition: all 1s ease-in;
    position: absolute;
}
.user-list-leave-to {
    opacity:0;
    transform: translateX(30px);
}
.user-list-move {
    transition: all 1s ease;
}
</style>
