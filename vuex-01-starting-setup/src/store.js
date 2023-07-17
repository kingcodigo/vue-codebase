import { createStore } from 'vuex';


const counterModule = {
    namespaced: true,
    state() {
      return {
        counter: 0,
      };
    },
    mutations: {
      increment(state) {
        state.counter = state.counter + 1;
      },
      increase(state, payload) {
        state.counter = state.counter + payload.value;
      },
    },
    actions: {
      increment(context) {
        setTimeout(function () {
          context.commit('increment');
        }, 3000);
      },
      increase(context, payload) {
        setTimeout(function () {
          console.log(context);
          context.commit('increase', payload);
        }, 3000);
      },
    },
    getters: {
      finalCounter(state) {
        return state.counter * 1;
      },
      normalizedCounter(_, getters) {
        const finalCounter = getters.finalCounter;
        if (finalCounter < 0) {
          return 0;
        }
        if (finalCounter > 100) {
          return 100;
        }
        return finalCounter;
      },
    },
  };
  
  const store = createStore({
    modules: {
      numbers: counterModule,
    },
    state() {
      return {
        isLoggedIn: false,
      };
    },
    mutations: {
      login(state) {
        state.isLoggedIn = true;
      },
      logout(state) {
        state.isLoggedIn = false;
      },
    },
    actions: {
      login(context) {
        context.commit('login');
      },
      logout(context) {
        context.commit('logout');
      },
    },
    getters: {
      isLoggedIn(state) {
        return state.isLoggedIn;
      },
    },
  });


  export default store;