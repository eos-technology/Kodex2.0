<template>
  <div class="enable ">
    <div class="config__header">
      <h3 class="h3-bold">{{ $t('payment-methods.title') }}</h3>
    </div>
    <BackDummy @click="$router.back()" />
    <v-card>
      <v-card-item class="text-primary">
        <div class="enable__header">
          <h3 class="h3-bold">{{ $t('payment-methods.enable-method') }}</h3>
          <p class="l-regular">{{ $t('payment-methods.select-method') }}</p>
        </div>

        <div class="tabs__modal mb-8">
          <!-- Switch -->
          <v-tabs class="tabs-rounded w-100" align-tabs="center" v-model="tab">
            <v-tab value="one">Crypto</v-tab>
            <v-tab value="two">Fiat </v-tab>
          </v-tabs>
        </div>

        <!-- tabs content -->
        <v-window v-model="tab">
          <v-window-item value="one">
            <div class="tab-crypto">
              <div class="search-box ">
                <v-text-field
                  variant="solo-filled"
                  :placeholder="$t('search')"
                  hide-details
                  class="inpt"
                  density="compact"
                  type="search"
                  clearable 
                >
                  <template v-slot:prepend-inner>
                    <i class="icon-search"></i>
                  </template>
                </v-text-field>
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
                <v-text-field
                  variant="solo-filled"
                  hide-details
                  :placeholder="$t('search')"
                  class="inpt"
                  density="compact"
                  type="search"
                  clearable 
                >
                  <template v-slot:prepend-inner>
                    <i class="icon-search"></i>
                  </template>
                </v-text-field>
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

  &__header {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
}

.tab-crypto__currencies,
.tab-fiat__currencies {
  display: flex;
  flex-direction: column;
  gap: 19px;
}

.search-box {
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


</style>
