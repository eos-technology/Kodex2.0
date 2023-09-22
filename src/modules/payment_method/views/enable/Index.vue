<template>
  <div class="enable">
    <div class="config__header">
      <h3 class="h3-bold">{{ $t('payment-methods.title') }}</h3>
    </div>
    <BackDummy @click="$router.back()" />
    <v-card>
      <v-card-item>
        <div class="enable__header">
          <h3 class="h3-bold">{{ $t('payment-methods.enable-method') }}</h3>
          <p class="l-regular">{{ $t('payment-methods.select-method') }}</p>
        </div>

        <div class="tabs__modal">
          <!-- Switch -->
          <v-tabs v-model="tab">
            <v-tab value="one"><span class="t-btn">Crypto</span></v-tab>
            <v-tab value="two"><span class="t-btn">Fiat</span> </v-tab>
          </v-tabs>
        </div>

        <!-- tabs content -->
        <v-window v-model="tab">
          <v-window-item value="one">
            <div class="tab-crypto">
              <div class="search-box">
                <BaseInput placeholder="Search" class="search" type="search" />
              </div>
              <div class="tab-crypto__currencies">
                <CurrencyMethod
                  v-for="(item, index) in cryptoCoins"
                  :key="index"
                  :item="item"
                  :isEnable="true"
                  :toggle="false"
                />
              </div>
            </div>
          </v-window-item>


          <v-window-item value="two">
            <div class="tab-fiat">
              <div class="search-box">
                <BaseInput placeholder="Search" class="search" type="search" />

              </div>
              <div class="tab-fiat__currencies">
                <CurrencyMethod
                  v-for="(item, index) in fiatCoins"
                  :key="index"
                  :item="item"
                  :isEnable="true"
                  :toogle="false"
                />
              </div>
            </div>
          </v-window-item>
        </v-window>
      </v-card-item>
    </v-card>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import CurrencyMethod from '../components/CurrencyMethod.vue'
import BaseInput from './content/BaseInput.vue'

const tab = ref()

const cryptoCoins = [
  {
    icon: 'tether',
    coin: 'Tether',
    value: 'USDT(ERC20)',
    transactions: 'dashboard.totalTransactions',
    valueTran: '0',
    dollars: 'dashboard.dollarAmount',
    valueDollars: '$0.00',
    ammount: 'dashboard.amountTether',
    ammountValue: '$0.00',
    type: 'crypto'
  },
  {
    icon: 'btc',
    coin: 'Bitcoin',
    value: 'BTC',
    transactions: 'dashboard.totalTransactions',
    valueTran: '0',
    dollars: 'dashboard.dollarAmount',
    valueDollars: '$0.00',
    ammount: 'dashboard.amountbtc',
    ammountValue: '$0.00',
    type: 'crypto'
  },
  {
    icon: 'bnb',
    coin: 'Binance',
    value: 'BNB',
    transactions: 'dashboard.totalTransactions',
    valueTran: '0',
    dollars: 'dashboard.dollarAmount',
    valueDollars: '$0.00',
    ammount: 'dashboard.amountbtc',
    ammountValue: '$0.00',
    type: 'crypto'
  }
]

const fiatCoins = [
  {
    icon: 'bancolombia',
    coin: 'Bancolombia',
    value: 'dashboard.saving',
    transactions: 'dashboard.totalTransactions',
    valueTran: '0',
    dollars: 'dashboard.dollarAmount',
    valueDollars: '$0.00',
    ammount: 'dashboard.amountCop',
    ammountValue: '$0.00',
    type: 'fiat'
  },
  {
    icon: 'bbva',
    coin: 'BBVA',
    value: 'dashboard.saving',
    transactions: 'dashboard.totalTransactions',
    valueTran: '0',
    dollars: 'dashboard.dollarAmount',
    valueDollars: '$0.00',
    ammount: 'dashboard.amountCop',
    ammountValue: '$0.00',
    type: 'fiat'
  },
  {
    icon: 'davivienda',
    coin: 'Davivienda',
    value: 'dashboard.saving',
    transactions: 'dashboard.totalTransactions',
    valueTran: '0',
    dollars: 'dashboard.dollarAmount',
    valueDollars: '$0.00',
    ammount: 'dashboard.amountCop',
    ammountValue: '$0.00',
    type: 'fiat'
  }
]
</script>

<style lang="scss" scoped>
.enable {
  display: flex;
  flex-direction: column;
  gap: 24px;

  &__header{
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
}

.tab-crypto__currencies,.tab-fiat__currencies{
  display: flex;
  flex-direction: column;
  gap: 19px;
}

.search-box{
  width: 100%;
  margin-bottom: 32px;
}


:deep(.v-card) {
  max-width: 500px;
  margin: 0 auto;
  border-radius: 16px;
  padding: 12px;
}

.tabs__modal {
  margin: 0 auto;
  margin-top: 32px;

  :deep(.v-btn) {
    flex: 1;
    border: none;
    font-weight: 300;
    color: #fff;
    font-size: 14px;

    &::after {
      display: none;
    }
  }

  :deep(.v-btn.v-slide-group-item--active.v-tab--selected) {
    background-color: #fff;
    border-radius: 100px;
    box-shadow: 0px 10px 15px -3px rgba(16, 24, 40, 0.1), 0px 4px 6px -4px rgba(16, 24, 40, 0.1);
    font-weight: 500;
  }

  .t-btn {
    color: #051255;
  }
}

:deep(.v-btn) {
  text-transform: none;
  border-radius: 16px;
  height: fit-content;
  padding: 10px 16px;

  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;

  &.border-btn {
    border: 1px solid #f4f5f8;
  }

  &.w-btn {
    background-color: #fff;
  }
}

:deep(.v-tab--selected .v-tab__slider) {
  display: none;
}

:deep(.v-slide-group__content) {
  background: #f6f8fa;
  border-radius: 100px;
  padding: 4px;
  overflow: hidden;
}

:deep(.v-pagination__item.v-pagination__item--is-active .v-btn) {
  background: #051255 !important;
  color: #fff;
}

:deep(.v-switch__track) {
  background-color: #e9ecf1;
  opacity: 1;
}

:deep(.v-selection-control--dirty .v-switch__thumb) {
  color: #fff;
}

:deep(.v-input__details) {
  display: none;
}

:deep(
    .v-selection-control.v-selection-control--dirty.v-selection-control--density-default.v-switch__track
  ) {
  background-color: #091d8b;
}

:deep(.v-window) {
  margin-top: 32px;
}
</style>
