<template>
    <the-header title="Remember me"></the-header>
</template>


<script>
import TheHeader from './components/layouts/TheHeader.vue'

export default {
    components: {
        TheHeader
    },
    data() {
        return {
            
        };
    },
    methods : {
        addResource() {

        },
    }
}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>