<template>
  <base-dialog @close="closeDialog" :show="!!error" title="An error occurred">
    <p>{{ error }}</p></base-dialog
  >
  <section>
    <base-card>
      <header>
        <h2>Requests received</h2>
      </header>
      <div v-if="isLoading">
        <base-spinner></base-spinner>
      </div>

      <ul v-if="hasRequests">
        <request-item
          v-for="request in receivedRequests"
          :key="request.id"
          :message="request.message"
          :email="request.userEmail"
        >
        </request-item>
      </ul>
      <h3 v-if="!hasRequests">You haven't received any requests yet</h3>
    </base-card>
  </section>
</template>

<script>
import RequestItem from '../../components/requests/RequestItem.vue';
export default {
  data() {
    return {
      error: null,
      isLoading: false,
    };
  },
  created() {
    this.loadRequests();
  },
  components: { 'request-item': RequestItem },
  computed: {
    receivedRequests() {
      return this.$store.getters['requests/requests'];
    },
    hasRequests() {
      return this.$store.getters['requests/hasRequests'] && !this.isLoading;
    },
  },

  methods: {
    async loadRequests() {
      this.error = '';
      this.isLoading = true;
      try {
        await this.$store.dispatch('requests/loadRequests');
      } catch (error) {
        this.error = error.message || 'Something went wrong';
      }
      this.isLoading = false;
    },
    closeDialog() {
      this.error = null;
    },
  },
};
</script>

<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>
