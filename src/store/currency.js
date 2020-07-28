export default {
  actions: {
    async fetchCurrency(ctx, baseCurrency = 'USD') {
      const res = await fetch(
        `https://api.exchangeratesapi.io/latest?base=${baseCurrency}`,
      );
      const currency = await res.json();
      ctx.commit('updateCurrency', currency);
    },
  },
  mutations: {
    updateCurrency(state, currency) {
      state.currency = currency;
      state.allMenuCurrency = Object.keys(currency.rates);
    },
  },
  state: {
    currency: [],
    allMenuCurrency: [],
  },
  getters: {
    allCurrency(state) {
      return state.currency;
    },
    allMenuCurrency(state) {
      return state.allMenuCurrency;
    },
  },
};
