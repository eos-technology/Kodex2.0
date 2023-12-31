<template>
  <div class="card-big">
    <v-card class="pa-4 pa-md-6" rounded="lg">
      <div class="main-content">
        <!-- Payment Methods -->
        <h5 class="h5-semibold">{{ $t('dashboard.payments') }}</h5>

        <div v-for="(item, index) in coins" :key="index" class="payments">
          <div class="payments__coin">
            <img :src="getFile({ route: 'icons', url: `${item.icon}`, extension: 'png' })" alt="" />
            <div>
              <p class="l-medium">{{ item.coin }}</p>
              <p class="s-light">{{ $t(item.value) }}</p>
            </div>
          </div>

          <div class="payments__box">
            <p class="s-light">{{ $t(item.transactions) }}</p>
            <p class="l-medium">{{ item.valueTran }}</p>
          </div>
          <div class="payments__box">
            <p class="s-light">{{ $t(item.dollars) }}</p>
            <p class="l-medium">{{ item.valueDollars }}</p>
          </div>
          <div class="payments__box">
            <p class="s-light">{{ $t(item.ammount) }}</p>
            <p class="l-medium">{{ item.ammountValue }}</p>
          </div>
        </div>
        <v-pagination
          class="pagination"
          v-model="currentPage"
          :length="rows"
          :total-visible="7"
          align="center"
        ></v-pagination>
      </div>
    </v-card>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { getFile } from '@/helpers/Index'
const rows = ref(100)
const currentPage = ref(3)

//select options
const selectedItem = ref(null)
const options = [
  { icon: 'src/assets/icons/tether.png', text: 'Tether USDT' },
  { icon: 'src/assets/icons/btc.png', text: 'Bitcoin' },
  { icon: 'src/assets/icons/bnb.png', text: 'BNB' },
  { icon: 'src/assets/icons/eth.png', text: 'Ethereum' }
]

const coins = [
  {
    icon: 'tether',
    coin: 'Tether',
    value: 'USDT(ERC20)',
    transactions: 'dashboard.totalTransactions',
    valueTran: '0',
    dollars: 'dashboard.dollarAmount',
    valueDollars: '$0.00',
    ammount: 'dashboard.amountTether',
    ammountValue: '$0.00'
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
    ammountValue: '$0.00'
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
    ammountValue: '$0.00'
  },
  {
    icon: 'bancolombia',
    coin: 'Bancolombia',
    value: 'dashboard.saving',
    transactions: 'dashboard.totalTransactions',
    valueTran: '0',
    dollars: 'dashboard.dollarAmount',
    valueDollars: '$0.00',
    ammount: 'dashboard.amountCop',
    ammountValue: '$0.00'
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
    ammountValue: '$0.00'
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
    ammountValue: '$0.00'
  }
]
</script>

<style lang="scss" scoped>
.payments {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  padding: 16px;
  gap: 16px;
  background: #fafafa;
  border: 1px solid #dde4ed;
  border-radius: 12px;
  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
  &__coin {
    display: flex;
    gap: 16px;
    align-items: center;
    width: 32px;
    height: 32px;
    flex: 1;
  }
  &__box {
    flex: 1;
  }
  p {
    color: #0a1e8c;
    width: 100%;
  }
  .s-light {
    white-space: nowrap;
  }
}

/* Table */

.dot-status {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 100%;
}

.dot-status--success {
  background-color: #00b183;
}

.dot-status--warning {
  background-color: #f2c744;
}

.dot-status--disable {
  background-color: #040919;
}
.dot-status--error {
  background-color: #e01e5a;
}
.project {
  &-chart {
    height: 416px;
  }
}

.main-content {
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-self: stretch;
}

.card-big {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.card-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}

.chart-options {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
}

.table-custom {
  tr,
  th {
    @media (max-width: 350px) {
      font-size: 12px;
    }
  }
}
</style>
