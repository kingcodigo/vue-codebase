<template>
<div>
    <user-data @set-active-user="setActiveUser"></user-data>
    <active-user :name="name" :age="age"></active-user>
</div>
</template>


<script>
import ActiveUser from './components/ActiveUser.vue'
import UserData from './components/UserData.vue'
export default {
    components: { UserData, ActiveUser },
    data() {
        return {
        name:'',
        age:0
    }
    },
    methods: {
        setActiveUser(name, age) {
            alert(name + age);
            this.name= name;
            this.age = age;
        }
    }

}
</script>