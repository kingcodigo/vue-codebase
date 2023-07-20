const { createApp } = Vue

  createApp({
    data() {
      return {
        text: '',
        text2: '',
        count:0
      }
    },
    computed: {
	    resultt() {
		    if(this.count<=37) {
			    this.result="Not there yet" + this.count;
		    } else {
			   this.result="Too much";
		    }
		    return this.result;
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




