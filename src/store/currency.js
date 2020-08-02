export default {
  actions: {
    async fetchCurrency(ctx, baseCurrency = 'CAD') {
      const res = await fetch(
        `https://api.exchangeratesapi.io/latest?base=${baseCurrency}`,
      );
      const currency = await res.json();
      ctx.commit('updateCurrency', currency);
    },
  },
  mutations: {
    updateCurrency(state, currency) {
      state.currency = Object.entries(currency.rates);
      state.allMenuCurrency = Object.keys(currency.rates);
      state.baseCurrency = currency.base;
    },
  },
  state: {
    currency: [],
    allMenuCurrency: [],
    baseCurrency: String,
  },
  getters: {
    allCurrency(state) {
      return state.currency;
    },
    allMenuCurrency(state) {
      return state.allMenuCurrency;
    },
    baseCurrency(state) {
      return state.baseCurrency;
    },
  },
};
