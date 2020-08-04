<template>
  <div class="header">
    <div class="content">
      <p class="title">Курс {{ baseCurrency }} сегодня</p>
      <nav class="tabs-items">
        <a @click="getPrevMenuItem()"
          class="tabs-item arrow"
          v-show="isPrevBtnVisible"
          >
          <ChevronLeft />
        </a>
        <a @click="chooseCurrency(curr)"
          class="tabs-item"
          :class="{active: curr === baseCurrency}"
          v-for="curr in currentMenu"
          :key="curr"
          >{{ curr }}</a>
        <a @click="getNextMenuItem()"
          class="tabs-item arrow"
          v-show="isNextBtnVisible"
          >
          <ChevronRight />
        </a>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import ChevronRight from './ChevronRight.vue';
import ChevronLeft from './ChevronLeft.vue';

export default {
  name: 'Header',
  components: {
    ChevronRight,
    ChevronLeft,
  },
  data() {
    return {
      currentCurrency: 'CAD',
      start: 0,
      isNextBtnVisible: true,
      isPrevBtnVisible: false,
    };
  },
  computed: {
    ...mapGetters(['allMenuCurrency', 'baseCurrency']),
    currentMenu() {
      return this.getCurrentMenu(this.start, this.start + 7);
    },
  },
  async created() {
    this.fetchCurrency(this.currentCurrency);
  },
  methods: {
    ...mapActions(['fetchCurrency']),
    getCurrentMenu(start, end) {
      return this.allMenuCurrency
        .filter((name, index) => index >= start && index < end);
    },
    async chooseCurrency(curr) {
      this.fetchCurrency(curr);
      this.currentCurr = curr;
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
      this.isNextBtnVisible = (this.allMenuCurrency.length !== this.start + 7);
      this.isPrevBtnVisible = (this.start !== 0);
    },
  },
};
</script>

<style scoped>
  .header {
    background-color: #FFE782;
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
