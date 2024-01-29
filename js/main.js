const {createApp} = Vue;

createApp ({
    data() {
      return {
        text: 'Ciao a tutti!',
        imageURL: "./img/Logo.png",
      };
    },
  }).mount('#app')