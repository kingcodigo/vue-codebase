const { createApp } = Vue

  createApp({
    data() {
      return {
        name: 'tobi',
        age: 5,
        imagesrc: 'https://cdn.pixabay.com/photo/2023/06/15/13/13/theme-park-8065415_1280.jpg',
        hello: 'Good day!'
      }
    },
    methods: {
    ageplus5() {
     return this.age+5;
    },
     favoritenumber() {
     return Math.random();
    },
    setName(event, lastname) {
	    alert("test");
	    this.hello = event.target.value + lastname;
    },
    submit(event) {
	    alert("test");
    }
  },
  }).mount('#assignment')




