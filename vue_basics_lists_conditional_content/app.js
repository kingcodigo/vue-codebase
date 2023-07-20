const app = Vue.createApp({
  data() {
    return {
      enteredValue: '',
      visible: true,
      tasks: []
    };
  },
  methods: {
    addTask() {
	   
      this.tasks.push(this.enteredValue);
    },
    changeVisibility () {
	    this.visible = !this.visible;
    }
  },
});

app.mount('#assignment');
