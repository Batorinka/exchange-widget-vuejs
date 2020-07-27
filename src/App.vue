<template>
  <div id="app">
    <Header />
  </div>
</template>

<script>
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    Header,
  },
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
}
html,
body {
  height: 100%;
  background-color: #FFFFFF;
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  color: #2B2D33;
}
</style>
