<template>
  <v-card class="pa-4 pa-md-6 rounded-lg border elevation-0">
    <div class="chart">
      <h4 class="h4-semibold">Transacciones</h4>
      <div class="chart__options">
        <v-select
          density="compact"
          v-model="selectedItem"
          :items="options"
          variant="solo"
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
                class="img-select mr-2"
                src="@/assets/icons/tether.png"
                v-if="selectedItem === null"
              />
              <p class="b-medium" style="width: 6.25rem" v-if="selectedItem === null">
                Tether USDT
              </p>
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
    <div id="chart">
      <apexchart type="area" height="416" :options="chartOptions" :series="series"></apexchart>
    </div>
  </v-card>
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

.input-select {
  cursor: pointer;
  padding: 0.625rem;
  display: flex;
  gap: 8px;

  img {
    width: 1.5rem;
  }
}

.img-select {
  width: 1.5rem;
}

:deep(.v-field) {
  width: 12.5rem;
  border-radius: 12px;
  border: 1px solid #f4f5f8;
  background: #f6f7f9;
  box-shadow: none;
}
</style>
