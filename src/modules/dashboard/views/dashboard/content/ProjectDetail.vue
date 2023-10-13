<template>
  <v-card class="pa-4 pa-md-6 rounded-lg elevation-0 border">
    <div class="project-detail">
      <!-- Poject Detail -->
      <div class="card-header">
        <h4 class="h4-semibold">{{ $t('dashboard.detailProject') }}</h4>
        <div class="chart__options">
          <v-select
            density="compact"
            v-model="selectedItem"
            :items="options"
            variant="solo-filled"
            class="inpt"
            menu-icon="mdi-chevron-down"
            hide-details="auto"
          >
            <template #item="{ item }">
              <div class="d-flex align-center input-select" @click="selectedItem = item.value.text">
                <img :src="item.value.icon" alt="" />
                <p class="b-medium">{{ item.value.text }}</p>
              </div>
            </template>
            <template v-slot:prepend-inner>
              <div class="d-flex align-center">
                <img
                  class="img-select ml-2 mr-2"
                  src="@/assets/images/avatar.png"
                  v-if="selectedItem === null"
                />
                <p class="b-medium" style="width: 6.25rem" v-if="selectedItem === null">Proyecto</p>
              </div>
              <div class="d-flex align-center" v-for="icon in options" :key="icon.text">
                <img class="img-select" :src="icon.icon" alt="" v-if="icon.text === selectedItem" />
              </div>
            </template>
          </v-select>
          <div class="chart__btns">
            <v-btn size="46" variant="outlined" class="chart__btn">1M</v-btn>
            <v-btn size="46" variant="outlined" class="chart__btn">3M</v-btn>
            <v-btn size="46" variant="outlined" class="chart__btn">6M</v-btn>
            <v-btn size="46" variant="outlined" class="chart__btn">1Y</v-btn>
            <v-btn size="46" variant="outlined" class="chart__btn">All</v-btn>
          </div>
        </div>
      </div>
      <div class="project-chart">
        <ChartProject />
      </div>
      <h5 class="h5-semibold">{{ $t('dashboard.transactions') }}</h5>
      <div class="table-custom">
        <table>
          <thead>
            <tr>
              <th>
                {{ $t('dashboard.transactionsType') }}
              </th>
              <th>{{ $t('dashboard.amount') }}</th>
              <th>{{ $t('dashboard.total') }}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div class="table-custom__flex">
                  <div class="dot bg-success"></div>
                  {{ $t('dashboard.approved') }}
                </div>
              </td>
              <td>100</td>
              <td>$100.00</td>
            </tr>
            <tr>
              <td>
                <div class="table-custom__flex">
                  <div class="dot bg-yellow"></div>
                  {{ $t('dashboard.pending') }}
                </div>
              </td>
              <td>100</td>
              <td>$100.00</td>
            </tr>
            <tr>
              <td>
                <div class="table-custom__flex">
                  <div class="dot bg-red"></div>
                  {{ $t('dashboard.cancel') }}
                </div>
              </td>
              <td>100</td>
              <td>$100.00</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Payment Methods -->
      <h5 class="h5-semibold">{{ $t('dashboard.payments') }}</h5>

      <div v-for="(item, index) in coins" :key="index" class="payments">
        <div class="payments__coin">
          <img :src="getFile({ route: 'icons', url: `${item.icon}`, extension: 'png' })" alt="" />
          <div>
            <p class="l-medium">{{ item.coin }}</p>
            <p class="s-light text-no-wrap">{{ $t(item.value) }}</p>
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
        :total-visible="totalVisible"
        align="center"
      ></v-pagination>
    </div>
  </v-card>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import ChartProject from '../charts/ChartProject.vue'
import { getFile } from '@/helpers/Index'
const rows = ref(100)
const currentPage = ref(3)

const totalVisible = ref(7)

onMounted(() => {
  const handleResize = () => {
    totalVisible.value = window.innerWidth > 600 ? 7 : 4
  }

  handleResize()
  window.addEventListener('resize', handleResize)

  // Limpia el event listener cuando el componente es desmontado
  onBeforeUnmount(() => {
    window.removeEventListener('resize', handleResize)
  })
})

const selectedItem = ref(null)

const options = [{ icon: 'src/assets/images/avatar.png', text: 'Proyecto' }]
const coins = [
  {
    icon: 'tether',
    coin: 'Tether',
    value: 'dashboard.usdt',
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
    value: 'dashboard.btc',
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
    value: 'dashboard.bnb',
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
  padding: 16px; /* Cambio de 1.6rem a 16px */
  gap: 16px; /* Cambio de 1.6rem a 16px */
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
    gap: 16px; /* Cambio de 1.6rem a 16px */
    align-items: center;
    width: 32px;
    height: 32px;
    flex: 1;
  }
  &__box {
    flex: 1;
  }
}

.project {
  &-detail {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
  &-chart {
    height: 416px;
  }
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
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
