<template>
  <div class="row">
    <div class="base">
      <span class="quantity">{{ quantity }}</span>
      {{ baseCurrencyName }} =
    </div>
    <div class="value">
      {{ (currencyValue * quantity).toFixed(2) }} <span class="curr">{{ currencyName }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Frame',
  props: [
    'quantity',
    'baseCurrencyName',
    'currencyName',
    'currencyValue',
  ],
};
</script>

<style scoped>
  .row {
    position: relative;
    width: 297px;
    height: 108px;
    display: flex;
    margin: 8px;
    padding: 15px;
    box-shadow: 0px 3px 6px rgba(157, 157, 157, 0.16);
    border-radius: 12px;
  }
  .row:hover {
    box-shadow: 0px 6px 6px rgba(157, 157, 157, 0.6);
  }
  .base {
    white-space: nowrap;
    position: absolute;
    height: 28px;
    left: 9.17%;
    right: 65.14%;
    top: calc(50% - 28px/2 - 37px);

    font-style: normal;
    font-weight: 300;
    font-size: 28px;
    line-height: 28px;
    letter-spacing: 0.0171429px;

    color: #B9B9B9;
  }
  .quantity {
    color: #2B2D33;
  }
  .value {
    white-space: nowrap;
    position: absolute;
    height: 56px;
    left: 9.17%;
    right: 31.19%;
    top: calc(50% - 56px/2 + 24px);

    font-style: normal;
    font-weight: 300;
    font-size: 56px;
    line-height: 56px;
    letter-spacing: 0.0342857px;

    color: #2B2D33;
  }
  .curr {
    font-size: 24px;
  }
</style>
