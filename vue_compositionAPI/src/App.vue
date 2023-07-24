<template>
  <section class="container">
    <h2>{{ userName }}</h2>
    <h3>{{ age }}</h3>
  </section>

  <section class="container">
    <h2>{{ user.name }}</h2>
    <h3>{{ user.age }}</h3>
    <h3>{{ fullName }}</h3>
  </section>
  <section class="container">
    <button @click="changeData">Change Data</button>
  </section>

  <section class="container">
   <input type="text" placeholder="First Name" @input="setFirstName" />
   <input type="text" placeholder="Last Name" v-model="lastName" />
   <input type="text" placeholder="Template Refs" ref="templateRef" />
    <button @click="setTemplateRef">setTemplateRef</button>
  </section>


  <section class="container">
   <user-data userName="this is a prop" @change="answerEmit"></user-data>
  </section>

</template>

<script setup>
import { ref, reactive, computed,watch,provide } from 'vue';
import userData from './components/UserData.vue';

const userName = ref('Maximilian');
const age = ref(31);
const firstName = ref('');
const lastName = ref('');
const providedValue = ref('test');
const templateRef = ref(null);
const user = reactive({
  name: 'tobi',
  age: 35,
});

provide('providedValue',providedValue);

function changeData() {
  userName.value = 'Max';
  age.value = 25;

  user.name = 'Tobias';
  user.age = 32;
}

function setFirstName(event) {
  firstName.value= event.target.value;
}

const fullName = computed(function() {
   
    return firstName.value+' '+lastName.value;

});

function setTemplateRef() {
  // templateRef.value = points on input
  // .value.value = points to value of input
  templateRef.value.value ="test";
  console.log('setTemplateRef');
}

watch(age,function(newValue,oldValue) {
  console.log("WATCHED" + newValue + ' ' +oldValue);
}
);

function answerEmit(payload) {
  alert(payload);
}

/* data() {
    return {
      userName: 'Maximilian',
    };
  },
  */
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

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
