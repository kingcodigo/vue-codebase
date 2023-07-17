<template>
    <button v-if="!isLoggedIn" @click="login">Login</button>
    <button v-else-if="isLoggedIn" @click="logout">Logout</button>
</template>



<script>
import { mapGetters,mapActions } from 'vuex'

export default {
        methods :{
            ...mapActions(['login','logout'])
        },
        computed: {
            
           ...mapGetters(['isLoggedIn'])
        
        }
}
</script>