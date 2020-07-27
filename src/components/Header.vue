<template>
  <div class="header">
    <div class="content">
      <p class="title">Курс {{ currentCurr }} сегодня</p>
      <nav class="tabs-items">
        <a @click="getPrevMenuItem()"
          class="tabs-item arrow"
          v-show="isPrevBtnVisible"
          >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/></svg>
        </a>
        <a @click="chooseCurrency(curr)"
          class="tabs-item"
          :class="{active: curr === currentCurr}"
          v-for="curr in currencyMenu"
          :key="curr"
          >{{ curr }}</a>
        <a @click="getNextMenuItem()"
          class="tabs-item arrow"
          v-show="isNextBtnVisible"
          >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6.646 3.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L12.293 10 6.646 4.354a.5.5 0 010-.708z"/></svg>
        </a>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      currency: [
        'USD',
        'EUR',
        'RUB',
        'HRK',
        'NOK',
        'CAD',
        'JPY',
        'THB',
        'CHF',
        'MYR',
        'BGN',
        'ZAR',
        'AUD',
        'PLN',
      ],
      currencyMenu: [],
      currentCurr: 'USD',
      start: 0,
      isNextBtnVisible: true,
      isPrevBtnVisible: false,
    };
  },
  mounted() {
    this.getCurrentMenu(this.start, this.start + 7);
  },
  methods: {
    chooseCurrency(curr) {
      this.currentCurr = curr;
    },
    getCurrentMenu(start, end) {
      this.currencyMenu = this.currency.filter((name, index) => index >= start && index < end);
    },
    getNextMenuItem() {
      this.start += 1;
      this.getCurrentMenu(this.start, this.start + 7);
      this.getBtnsVisibility();
    },
    getPrevMenuItem() {
      this.start -= 1;
      this.getCurrentMenu(this.start, this.start + 7);
      this.getBtnsVisibility();
    },
    getBtnsVisibility() {
      this.isNextBtnVisible = (this.currency.length !== this.start + 7);
      this.isPrevBtnVisible = (this.start !== 0);
    },
  },
};
</script>

<style scoped>
  .header {
    background-color: #FFE782;
    width: 720px;
    height: 110px;
    margin: 0px auto;
  }

  .content {
    padding: 60px 5px 0 5px;
    position: relative;
  }

  .title {
    position: absolute;
    top: 30px;
    left: 22px;
    font-size: 18px;
    color: #2B2D33;
    padding: 0;
    margin: 0;
  }

  .tabs-items {
    display: flex;
  }

  .tabs-item {
    width: 90px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    color: #CCAE68;
    text-decoration: none;
    cursor: pointer;
    font-size: 12px;
    font-weight: bold;
    margin: 0 5px;
  }
  .arrow {
    width: 20px
  }

  .active {
    background-color: #FFFFFF;
    color: #2B2D33;
    border-radius: 10px 10px 0 0;
  }
</style>
