const app = Vue.createApp({
    data() {
        return {
            badGuyHealth: 100,
            playerHealth: 100,
            round: 1,
            winner: null,
            logMessages: [],
        };
    },
    methods: {
        addLogMessage(who,what,value) {
            this.logMessages.unshift({
                actionBy: who,
                actionType: what,
                actionValue: value
            });
        },
        startGame() {
            this.playerHealth=100;
            this.badGuyHealth=100;
            this.round = 1;
            winner = '';
            this.logMessages= [];
            this.addLogMessage('new','game started')

        },
        surrender() {
            this.playerHealth = 0;
            winner = "Badguy";
            this.addLogMessage('player','surrender')

        },
        heal() {
            this.round++;
            const healValue =  Math.floor(Math.random() * (15-5) + 5);
            if(healValue+this.playerHealth <= 100) {
                this.playerHealth += healValue; 
            } else {
                this.playerHealth = 100; 

            }
            this.addLogMessage('player','heal',healValue)

            this.attackPlayer();
        },
        attackBadGuy() {
          this.round++;
          const attackValue =  Math.floor(Math.random() * (10-1) + 1);
          this.badGuyHealth -= attackValue;
          this.addLogMessage('player','attack',attackValue)
          this.attackPlayer();
        },
        attackPlayer() {
            const attackValue =  Math.floor(Math.random() * (10-1) + 1);
            this.playerHealth -= attackValue;
            this.addLogMessage('badguy','attack',attackValue)

        },
        specialAttackBadGuy() {
            this.round++;
            const attackValue =  Math.floor(Math.random() * (15-5) + 5);
            this.badGuyHealth -= attackValue;
            this.addLogMessage('player','special attack',attackValue)

            this.specialAttackPlayer();
        },
          specialAttackPlayer() {
            const attackValue =  Math.floor(Math.random() * (15-5) + 5);
            this.playerHealth -= attackValue;
            this.addLogMessage('badguy','special attack',attackValue)

        }
    },
    watch: {
        playerHealth(newQuestion, oldQuestion) {
            if(this.playerHealth<=0) {
                this.playerHealth=0;
                this.winner="BadGuy";
                this.addLogMessage('player','lost')

            }
        },
        badGuyHealth(newQuestion, oldQuestion) {

            if(this.badGuyHealth<=0) {
                this.badGuyHealth=0;
                this.addLogMessage('badguy','lost')

                this.winner="Player";
            }
        }
    }


});

app.mount("#game");