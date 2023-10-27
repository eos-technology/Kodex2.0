<template>
  <div class="chart">
    <h4 class="h4-semibold">Transacciones</h4>
    <div class="chart__options">
      <div class="chart__btns">
        <v-btn size="44" variant="outlined" class="chart__btn">11M</v-btn>
        <v-btn size="44" variant="outlined" class="chart__btn">3M</v-btn>
        <v-btn size="44" variant="outlined" class="chart__btn">6M</v-btn>
        <v-btn size="44" variant="outlined" class="chart__btn">1Y</v-btn>
        <v-btn size="44" variant="outlined" class="chart__btn">All</v-btn>
      </div>
    </div>
  </div>
  <div id="chart">
    <apexchart type="area" height="416" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const selectedItem = ref(null)

const options = [
  { icon: 'src/assets/icons/tether.png', text: 'Tether USDT' },
  { icon: 'src/assets/icons/btc.png', text: 'Bitcoin' },
  { icon: 'src/assets/icons/bnb.png', text: 'BNB' },
  { icon: 'src/assets/icons/eth.png', text: 'Ethereum' }
]

const chartOptions = {
  chart: {
    id: 'area-chart',
    height: '100%',
    width: '100%',
    toolbar: {
      show: false
    }
  },
  xaxis: {
    categories: ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN']
  },
  colors: ['#3587FF'],
  stroke: {
    width: 2
  }
}

const series = [
  {
    name: 'Serie 1',
    data: [40, 85, 5, 90, 100, 70]
  }
]
</script>

<style lang="scss" scoped>
.projects-chart {
  height: 100%;
}
</style>
