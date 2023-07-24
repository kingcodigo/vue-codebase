<template>
    <h2> {{ userName }}</h2>
    <h3> {{ age }}</h3>
    <button @click="fireEmit">fire Emit</button>
    <h3>Injected: {{ providedValue }}</h3>
</template>


<script setup>
import { defineProps, defineEmits, inject, onBeforeMount,onMounted, onUpdated} from 'vue'
defineProps({
  userName: String,
})
const emit = defineEmits(['change', 'delete'])
const providedValue = inject('providedValue');

onBeforeMount(function() {
    console.log('onBeforeMount');
});
onMounted(function() {
    console.log('onMounted');
});
onUpdated(function() {
    console.log('onUpdated');
});

function fireEmit() {
    console.log("fireEmit");
    emit('change', 500);
}

</script>