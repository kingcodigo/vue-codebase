const app = Vue.createApp({
    data() {
        return {
            badGuyHealth: 100,
            playerHealth: 100
        };
    },
    methods: {
        attackBadGuy() {
          const attackValue =  Math.floor(Math.random() * (10-1) + 1);
          this.badGuyHealth -= attackValue;
        },
        attackPlayer() {
            const attackValue =  Math.floor(Math.random() * (10-1) + 1);
            this.playerHealth -= attackValue;
          }
    }


});

app.mount("#game");