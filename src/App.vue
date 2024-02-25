<template>
  <NavBar/>
  <router-view/>
</template>



<script>
import NavBar from './components/NavBar.vue';

export default {
  components: {
    NavBar,
  }
}

</script>
<style>
#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
body{
  background-color: #E3FFE0 !important;
  overflow-x: hidden;
}
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
