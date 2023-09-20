<template>
  <v-card class="pa-6">
    <div class="d-flex justify-space-between">
      <h4 class="h4-semibold">Transacciones</h4>
      <div class="d-flex">
        <v-select v-model="selectedItem" :items="options" variant="solo" menu-icon="mdi-chevron-down">
          <template #item="{ item }">
            <div class="d-flex align-center input-select" @click="selectedItem = item.value.text">
              <img :src="item.value.icon" alt="">
              <p class="b-medium">{{ item.value.text }}</p>
            </div>
          </template>
          <template v-slot:prepend-inner>
            <div class="d-flex align-center">
              <img class="img-select mr-2" src="@/assets/icons/tether.png" v-if="selectedItem === null">
              <p class="b-medium" style="width: 100px;" v-if="selectedItem === null">
                Tether USDT
              </p>
            </div>
            <div class="d-flex align-center" v-for="icon in options" :key="icon.text">
              <img class="img-select" :src="icon.icon" alt="" v-if="icon.text === selectedItem">
            </div>
          </template>
        </v-select>
        <div class="ml-4">
          <v-btn variant="outlined" class="card-btn">1M</v-btn>
          <v-btn variant="outlined" class="card-btn">3M</v-btn>
          <v-btn variant="outlined" class="card-btn">6M</v-btn>
          <v-btn variant="outlined" class="card-btn">1Y</v-btn>
          <v-btn variant="outlined" class="card-btn">All</v-btn>
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
    id: "area-chart",
    height: "100%",
    width: "100%",
    toolbar: {
      show: false,
    },
  },
  xaxis: {
    categories: ["ENE", "FEB", "MAR", "ABR", "MAY", "JUN"],
  },
  colors: ["#3587FF"],
  stroke: {
    width: 2,
  },
}


const series = [
  {
    name: "Serie 1",
    data: [40, 85, 5, 90, 100, 70],
  },
]


</script>

<style lang="scss" scoped>
.projects-chart {
  height: 100%;
}

.input-select {
  cursor: pointer;
  padding: 10px;
  display: flex;
  gap: .5rem;

  img {
    width: 24px;
  }
}

.img-select {
  width: 24px;

}

:deep(.v-field) {
  width: 200px;

  border-radius: 12px;
  border: 1px solid var(--border-border-input, #F4F5F8);
  background: var(--inputs-fondo-2, #F6F7F9);
  box-shadow: none;
}

.card-btn {
  height: 55px;
  border-radius: 12px;
  border: 1px solid var(--border-border-complementario, #DDE4ED);
  margin-left: 8px;

  @media (max-width: 767px) {
    padding: .75rem 1rem;
  }
}

.card-btn:hover {
  background-color: #3587FF;
  color: white;


}
</style>