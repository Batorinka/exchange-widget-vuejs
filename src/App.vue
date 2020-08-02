<template>
  <div id="app">
    <Header />
    <input type="number" v-model.number="quantity" :min="1">
    <div class="frames">
      <Frame
        :baseCurrencyName="baseCurrency"
        v-for="value in fourCurrency"
        :key="value[0]"
        :currencyName="value[0]"
        :currencyValue="value[1]"
        :quantity="quantity"
      />
    </div>
    <button @click="getPrevPage">prev page</button>
    <button @click="getNextPage">next page</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Header from './components/Header.vue';
import Frame from './components/Frame.vue';

export default {
  name: 'App',
  components: {
    Header,
    Frame,
  },
  data() {
    return {
      pageNumber: 1,
      quantity: 1,
    };
  },
  computed: {
    ...mapGetters(['allCurrency', 'baseCurrency']),
    fourCurrency() {
      return this.getFourCurrency(this.allCurrency, this.pageNumber);
    },
  },
  methods: {
    getNextPage() {
      if (this.pageNumber < this.allCurrency.length / 4) {
        this.pageNumber += 1;
      }
    },
    getPrevPage() {
      if (this.pageNumber > 1) {
        this.pageNumber -= 1;
      }
    },
    getFourCurrency(currency, pageNumber) {
      const end = Number(pageNumber) * 4 - 1;
      const start = (Number(pageNumber) - 1) * 4;
      const result = [];
      currency.forEach((element, index) => {
        if (index >= start && index <= end) {
          result.push(element);
        }
      });
      return result;
    },
  },
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 720px;
  height: 582px;
  margin: 0px auto;
  border: 1px solid #FFFFFF;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
html,
body {
  height: 100%;
  background-color: #FFFFFF;
  font-family: Roboto, sans-serif;
  color: #2B2D33;
}
.frames {
  display: flex;
  flex-wrap:wrap;
  padding: 15px;
}
</style>
