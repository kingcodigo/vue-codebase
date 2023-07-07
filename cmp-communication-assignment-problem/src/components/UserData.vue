<template>
    <div>
    
    <input type="text" v-model="name">
    <input type="text" v-model="age">
    <button @click="this.$emit('setActiveUser',name,age)">send</button>
</div>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            age: 0
        }
    },
}
</script>