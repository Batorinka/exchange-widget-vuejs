<template>
  <div id="app">
    <Header />
    <ul>
      <li v-for="(value, curr) in allCurrency.rates" :key="curr">{{curr}}{{value}}</li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    Header,
  },
  methods: mapActions(['fetchCurrency']),
  async created() {
    this.fetchCurrency('USD');
  },
  computed: {
    ...mapGetters(['allCurrency', 'allMenuCurrency']),
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
