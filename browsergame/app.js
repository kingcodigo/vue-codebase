const app = Vue.createApp({
    data() {
        return {
            badGuyHealth: 100,
            playerHealth: 100,
            round: 1
        };
    },
    methods: {
        surrender() {
            this.playerHealth = 0;
        },
        heal() {
            this.round++;
            const healValue =  Math.floor(Math.random() * (15-5) + 5);
            alert(this.round);
            if(healValue+this.playerHealth <= 100) {
                this.playerHealth += healValue; 
            } else {
                this.playerHealth = 100; 

            }
            this.attackPlayer();
        },
        attackBadGuy() {
          this.round++;
          const attackValue =  Math.floor(Math.random() * (10-1) + 1);
          this.badGuyHealth -= attackValue;
          this.attackPlayer();
        },
        attackPlayer() {
            const attackValue =  Math.floor(Math.random() * (10-1) + 1);
            this.playerHealth -= attackValue;
        },
        specialAttackBadGuy() {
            this.round++;
            const attackValue =  Math.floor(Math.random() * (15-5) + 5);
            this.badGuyHealth -= attackValue;
            this.specialAttackPlayer();
        },
          specialAttackPlayer() {
            const attackValue =  Math.floor(Math.random() * (15-5) + 5);
            this.playerHealth -= attackValue;
        }
    }


});

app.mount("#game");