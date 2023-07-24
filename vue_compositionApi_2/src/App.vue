<template>
  <h2>My Course Goal</h2>

  <h3 v-if="isVisible">{{ mainGoal1 }}</h3>
  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
  <button @click="toggleGoal">Toggle Goal</button>
  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate refs -->
  <!-- => Ref Object -->
  <!-- => Reactive Object -->
  <!-- Task 4: Also solve the assignment with the Options API -->

  <h3>refObject {{ refObject.mainGoal2 }}</h3>
  <h3>reactiveObject {{ reactiveObject.mainGoal3 }}</h3>

</template>

<script setup>
import { ref, reactive} from 'vue';

const mainGoal1 = ref('Learning vue');
const isVisible = ref(true);

const refObject = ref({
  mainGoal2: 'Learning vue refObject'
});

const reactiveObject = reactive({
  mainGoal3: 'Learning vue reactive Object'
});


function toggleGoal() {
isVisible.value=!isVisible.value;
}
</script>

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
</style>
