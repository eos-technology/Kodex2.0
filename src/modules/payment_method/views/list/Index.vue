<template>
  <div class="payment-method">
    <div class="payment-method__header">
      <h3 class="h3-bold">{{ $t('payment-methods.title') }}</h3>

      <div v-if="btn" class="box-button">
        <v-btn class="btn btn-white" variant="outlined" color="secondary">
          <p class="text-primary"> {{ $t('payment-methods.import-crypto') }} </p>
        </v-btn>
        <!-- <v-btn class="btn" color="primary" @click="$router.push({ name: 'payment_method-enable' })">
          {{ $t('payment-methods.enable-method') }}
        </v-btn> -->
        <v-btn class="btn" color="primary" @click="dialog=true">
          {{ $t('payment-methods.enable-method') }}
        </v-btn>
      </div>
    </div>

    <!-- List currency -->
    <div v-if="!isConfigure && !isEnable" class="payment-method__main-content">
      <v-card class="pa-4 pa-md-6 rounded-lg border elevation-0">
        <div class="tabs__modal">
          <!-- Switch -->
          <v-tabs class="tabs-rounded" v-model="tab">
            <v-tab value="one">Crypto</v-tab>
            <v-tab value="two">Fiat </v-tab>
          </v-tabs>
        </div>
        <br>
        <!-- tab content -->
        <v-window v-model="tab">
          <v-window-item value="one">
            <!-- Tab Crypto -->
            <div class="tab-crypto">
              <v-text-field
                class="inpt inpt-search"
                elevation-0
                density="compact"
                hide-details
                :placeholder="$t('transactions.search')"
                variant="solo-filled"
                clearable 
              >
                <template v-slot:prepend-inner><i class="icon-search"></i></template>
              </v-text-field>
              <div class="tab-crypto__currencies">
                <CurrencyMethod
                  @enable-configure="enableConfigure(1), (btn = !btn)"
                  v-for="(item, index) in cryptoCoins"
                  :key="index"
                  :item="item"
                  :toggle="true"
                />
              </div>
            </div>
          </v-window-item>
          <v-window-item value="two">
            <!-- Tab fiat -->
            <div class="tab-fiat">
              <NoConfigure v-if="!isConfigureFiat" />

              <div class="tab-fiat__content" v-if="isConfigureFiat">
                <v-text-field
                  :placeholder="$t('transactions.search')"
                  variant="solo-filled"
                  hide-details
                  density="compact"
                  class="inpt inpt-search"
                >
                  <template v-slot:prepend-inner>
                    <i class="icon-search"></i>
                  </template>
                </v-text-field>
                <div class="tab-fiat__currencies">
                  <CurrencyMethod
                    @enable-configure="enableConfigure(2), (btn = !btn)"
                    v-for="(item, index) in fiatCoins"
                    :key="index"
                    :item="item"
                    :toggle="true"
                  />
                </div>
              </div>
            </div>
          </v-window-item>
        </v-window>
      </v-card>
    </div>
  </div>

  <!-- Modal -->
  <v-dialog v-model="dialog">
    <EnableMethod @close="dialog=false"/>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import CurrencyMethod from '../components/CurrencyMethod.vue'
import NoConfigure from './content/NoConfigure.vue'
import EnableMethod from '../enable/Index.vue'

const tab = ref()

const currencyType = ref(1)
const isConfigureFiat = ref(false)
const isEnable = ref(false)
const isConfigure = ref(false)
const btn = ref(true)
const dialog = ref(false)

const changeCurrency = (value: number) => (currencyType.value = value)

const enableConfigure = (e = currencyType.value) => {
  changeCurrency(e)
  isConfigure.value = true
  isEnable.value = false
}


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
@import '@/assets/sass/colors';

.payment-method {
  display: flex;
  flex-direction: column;
  gap: 24px;

  &__header {
    display: flex;
    align-items: center;
    gap: 24px;
    flex-wrap: wrap;
    justify-content: space-between;

    .box-button {
      display: flex;
      align-items: center;
      gap: 24px;
      flex-wrap: wrap;
      justify-content: space-between;

      @media (max-width: 767px) {
        gap: 7.5px;
        width: 100%;

        button {
          width: 100%;
        }
      }
    }
  }

  &__main-content {
    .tab-crypto {
      display: flex;
      flex-direction: column;
      gap: 24px;

      &__currencies {
        display: flex;
        flex-direction: column;
        gap: 24px;
      }
    }

    .tab-fiat {
      &__content {
        display: flex;
        flex-direction: column;
        gap: 24px;
      }

      &__currencies {
        display: flex;
        flex-direction: column;
        gap: 24px;
      }
    }
  }
}

.gap {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.small-box {
  width: 500px;
  margin: 0 auto;

  @media (max-width: 767px) {
    width: 100%;
  }
}

.btn-white{
  background-color: $b-white;
}
</style>

<style>
.h3-bold {
  color: #0a1e8c;
}
</style>
