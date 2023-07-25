<template>
  <user-alert v-if="alertIsVisible" :title="alertTitle" @close="hideAlert">
    <p>Do you want to continue with deleting a user?</p>
  </user-alert>
  <section>
    <h2>Delete a User</h2>
    <button @click="showAlert">Delete User</button>
  </section>
</template>

<script>
import UserAlert from '../components/UserAlert.vue';

import AlertMixin from '../mixins/alert.js'

export default {
  components: {UserAlert},
  mixins: [AlertMixin],
};
</script>

<script setup>
import {ref} from 'vue'

// overwrites the mixin properties
const alertTitle = ref('Delete User?');
const alertIsVisible = false;

</script>./UserAlert.vue