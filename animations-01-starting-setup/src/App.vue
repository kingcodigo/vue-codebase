<template>
  
  <router-view v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
  <div class="container">
    <div class="block" :class="{ animate: animatedBlock }"></div>
    <button @click="animateBlock">Animate</button>
  </div>
  <div class="container">
    <transition name="para" @before-enter="beforeEnter" @before-leave="beforeLeave" @enter="enter" @leave="leave">
      <p v-if="paraIsVisible">This is only sometimes visible</p>
    </transition>
    <button @click="toggleParagraph">Toggle Paragraph</button>
  </div>
  <div class="container">
    <transition name="fade-button" mode="out-in">
    <button @click="showUsers" v-if="!usersAreVisible">Show Users</button>
    <button @click="hideUsers" v-else-if="usersAreVisible">Hide Users</button>
  </transition>
  <users-list v-if="usersAreVisible"></users-list>
  </div>
  <base-modal @close="hideDialog" :open="dialogIsVisible">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>
  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div>
</template>

<script>
import UsersList from './components/UsersList.vue'


export default {
  components:{UsersList},
  data() {
    return {
      usersAreVisible: false,
      paraIsVisible: false,
      animatedBlock: false,
      dialogIsVisible: false,
    };
  },
  methods: {
    beforeEnter(el) {
      console.log("before enter" + el);
      el.style.opacity =0;
    },
    enter(el,done) {
      console.log("enter" + el);
      let round = 1;
      const interval = setInterval(function() {
        el.style.opacity = round * 0.01 ;
        round++;
        console.log('interval'+ el.style.opacity);
        if(el.style.opacity >=1) {
          clearInterval(interval);
          done();
        }
      },20);
    },
    beforeLeave(el) {
      console.log("before leave" + el);
    },
    leave(el,done) {
      console.log("enter" + el);
      let round = 1;
      const interval = setInterval(function() {
        el.style.opacity = 1- round * 0.01 ;
        round++;
        console.log('interval'+ el.style.opacity);
        if(el.style.opacity <=0) {
          clearInterval(interval);
          done();
        }
      },20);
    },
    animateBlock() {
      this.animatedBlock = true;
      alert(this.animatedBlock);
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    toggleParagraph() {
      this.paraIsVisible = !this.paraIsVisible;
    },
    showUsers() {
      this.usersAreVisible = true;
    },
    hideUsers() {
      this.usersAreVisible = false;

    }
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
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
  margin: 5px;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /* transition: transform 0.3s ease-out; */
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}

.animate {
  /*transform: translateX(-50px); */
  background-color: red;
  animation: slide-fade 03s ease-out forwards;
}

.para-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.para-enter-active {
  transition: all 0.3s ease-out;
}

.para-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.para-leave-from {
  opacity: 1;
  transform: translateY(-30px);
}

.para-leave-active {
  transition: all 0.3s ease-in;
}

.para-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

.fade-button-enter-from,
.fade-button-leave-to {
  opacity: 0;
}
.fade-button-enter-active {
  transition: opacity 0.3s ease-out;
}
.fade-button-leave-active {
  transition: opacity 0.3s ease-in;
}
.fade-button-enter-to, .fade-button-leave-from  {
  opacity: 1;
}


.route-enter-from {
opacity: 0;
}

.route-enter-active {
  transition: all 2s ease;
}

.route-enter-to {
  opacity: 1;
}

@keyframes slide-scale {
  0% {
    transform: translateX(0) scale(1);
  }
  70% {
    transform: translateX(-120px) scale(1.1);
  }
  100% {
    transform: translateX(-150px) scale(1);
  }
}
</style>
