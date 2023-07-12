<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences">Load Submitted Experiences</base-button>
      </div>
      <p v-if="isLoading">Loading...</p>
      <p  v-else-if="!isLoading && error">{{ error }}</p>
      <p  v-else-if="results.length==0">No stored data found</p>
      <ul v-else-if="!isLoading && results.length>0">
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  components: {
    SurveyResult,
  },
  data() {
    return {
      results: [],
      isLoading: false,
      error: null
    };
  },
  methods: {
    loadExperiences() {
      this.isLoading=true;
      this.error=null;

      fetch('https://dummy-33dd0-default-rtdb.firebaseio.com/surveys.json')
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          this.isLoading=false;
          const results = [];
          for (const id in data) {
            console.log(data[id].name);

            results.push({
              id: id,
              name: data[id].name,
              rating: data[id].rating,
            });
          }
          this.results = results;
        }).catch((error) => {
          this.error = error;
          this.isLoading=false;

        });
    },
  },
  mounted(){
    this.loadExperiences();
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>