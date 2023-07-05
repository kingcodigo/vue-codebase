const { createApp } = Vue

  createApp({
    data() {
      return {
        text: '',
        text2: ''
      }
    },
    methods: {
    showAlert() {
     alert("blabla");
    },
     output(event) {
     this.text=event.target.value;
    },
     output2(event) {
     this.text2=event.target.value;
    },
  },
  }).mount('#assignment')




