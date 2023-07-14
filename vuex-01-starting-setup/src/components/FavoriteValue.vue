<template>
    <h3>Favorite Value: {{ counter }}</h3>
</template>


<script>

export default{
    computed: {
        counter() {
            return this.$store.getters.normalizedCounter;
        }
    }


}


</script>