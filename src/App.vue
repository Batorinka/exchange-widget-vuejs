<template>
  <div id="app">
    <Header />
    <div class="inputContainer">
      <input type="text" v-model.number="quantity" :min="1">
      <span class="baseCurr">{{baseCurrency}}</span>
    </div>
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
    <div class="buttons">
      <a @click="getPrevPage" class="btn prevBtn" :disabled="isPrevBtnDisabled"
      :class="{disBtn: isPrevBtnDisabled, btnHover: !isPrevBtnDisabled}"
      ><ChevronLeft class="chevronPrev" /> назад</a>
      <a @click="getNextPage" class="btn nextBtn" :disabled="isNextBtnDisabled"
      :class="{disBtn: isNextBtnDisabled, btnHover: !isNextBtnDisabled}"
      >далее <ChevronRight class="chevronNext" /></a>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Header from './components/Header.vue';
import Frame from './components/Frame.vue';
import ChevronRight from './components/ChevronRight.vue';
import ChevronLeft from './components/ChevronLeft.vue';

export default {
  name: 'App',
  components: {
    Header,
    Frame,
    ChevronRight,
    ChevronLeft,
  },
  data() {
    return {
      pageNumber: 1,
      quantity: 1,
      isPrevBtnDisabled: true,
      isNextBtnDisabled: false,
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
        this.isNextBtnDisabled = false;
        this.isPrevBtnDisabled = false;
      }
      if (this.pageNumber > this.allCurrency.length / 4) {
        this.isNextBtnDisabled = true;
      }
    },
    getPrevPage() {
      if (this.pageNumber > 1) {
        this.pageNumber -= 1;
        this.isNextBtnDisabled = false;
        this.isPrevBtnDisabled = false;
      }
      if (this.pageNumber === 1) {
        this.isPrevBtnDisabled = true;
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
  display:flex;
  flex-direction:column;
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
  user-select: none;
}
.inputContainer {
  display:flex;
  justify-content:flex-end;
  margin-top: 20px;
  margin-right: 20px;
}
input {
  max-width: 120px;
  border: 0px;
  border-bottom: 1px solid #D9D9D9;
  outline: 0;
  text-align: end;
  font-size: 20px;
}
.baseCurr {
  margin-left: 5px;
  color: #B9B9B9;
  font-size: 20px;
}
.frames {
  display: flex;
  flex-wrap:wrap;
  padding: 15px;
  flex: 1 1 auto;
}
.buttons {
  display:flex;
  justify-content:center;
  align-items:center;
  height: 94px;
}
.btn {
  position: relative;
  box-shadow: 0px 3px 6px rgba(157, 157, 157, 0.16);
  border-radius: 8px;
  border: 0px;
  background-color: #FFFFFF;
  text-transform: uppercase;
  color: #787878;
  letter-spacing: 1px;
  cursor: pointer;
  display: inline-block;
}
.btnHover:hover {
  box-shadow: 0px 6px 6px rgba(157, 157, 157, 0.6);
}
.disBtn {
  background-color: #F2F2F2;
}
.nextBtn {
  margin-left: 7px;
  padding: 10px 35px 10px 25px;
}
.chevronNext {
  position: absolute;
  right: 10px;
}
.prevBtn {
  margin-right: 7px;
  padding: 10px 25px 10px 35px;
}
.chevronPrev {
  position: absolute;
  left: 10px;
}
</style>
