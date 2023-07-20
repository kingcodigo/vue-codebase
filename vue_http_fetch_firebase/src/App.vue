<template>
  <learning-survey @reload-experiences="reloadExperiences"></learning-survey>
  <user-experiences ref="userExperiences"></user-experiences>
</template>

<script>
import LearningSurvey from './components/survey/LearningSurvey.vue';
import UserExperiences from './components/survey/UserExperiences.vue';

export default {
  components: {
    LearningSurvey,
    UserExperiences,
  },
 /* data() {
    return {
      savedSurveyResults: [],
    };
  },
  */
  methods: {
    reloadExperiences() {
      var blabla = this;
      setTimeout(function(){
        blabla.$refs.userExperiences.loadExperiences();
}, 500);

      
    },
  },
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