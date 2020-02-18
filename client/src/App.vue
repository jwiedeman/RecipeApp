// App.vue

<template>
<div>
<Nav/>
<router-view></router-view>
<Footer/>
</div> 
</template>

<style>
html {
  height: 100%;
}
body {
  min-height: 100vh;
}
</style>

<script>
  import Nav from "./components/Nav.vue"
  import Footer from "./components/Footer.vue"
  export default {
  name: 'App',
  components:{
    Nav:Nav,
    Footer:Footer
  },
  data() {
    return {
      prevHeight: 0,
    };
  },
  
  methods: {
    beforeLeave(element) {
      this.prevHeight = getComputedStyle(element).height;
    },
    enter(element) {
      const { height } = getComputedStyle(element);

      element.style.height = this.prevHeight;

      setTimeout(() => {
        element.style.height = height;
      });
    },
    afterEnter(element) {
      element.style.height = 'auto';
    },
  },
};
</script>