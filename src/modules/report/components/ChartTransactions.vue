<template>
  <div class="chart">
    <div class="card__buttons">
      <v-btn variant="outlined" class="card__buttons-approved rounded-lg">
        <div class="dot bg-success mr-2"></div>
        <p class="l-regular text-none">{{ $t('reports.approved') }}</p>
      </v-btn>
      <v-btn variant="outlined" class="card__buttons-pending rounded-lg">
        <div class="dot bg-yellow mr-2"></div>
        <p class="l-regular text-none">{{ $t('reports.earring') }}</p>
      </v-btn>
      <v-btn variant="outlined" class="card__buttons-cancel rounded-lg">
        <div class="dot bg-red mr-2"></div>
        <p class="l-regular text-none">{{ $t('reports.cancel') }}</p>
      </v-btn>
    </div>
    <div class="chart__btns">
      <v-btn size="44" variant="outlined" class="chart__btn">1M</v-btn>
      <v-btn size="44" variant="outlined" class="chart__btn">3M</v-btn>
      <v-btn size="44" variant="outlined" class="chart__btn">6M</v-btn>
      <v-btn size="44" variant="outlined" class="chart__btn">1Y</v-btn>
      <v-btn size="44" variant="outlined" class="chart__btn">All</v-btn>
    </div>
  </div>
  <div id="chart">
    <apexchart type="line" height="416" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

<script setup lang="ts">
const chartOptions = {
  chart: {
    id: 'area-chart',
    height: '100%',
    toolbar: {
      show: false
    },
    stacked: false
  },
  markers: {
    size: 7
  },
  legend: {
    show: false
  },
  xaxis: {
    categories: ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGT', 'SEP', 'OCT', 'NOV', 'DIC']
  },
  colors: ['#E01E5A', '#007A5A', '#F2C744'],
  stroke: {
    curve: 'smooth',
    width: 3
  }
}

const series = [
  {
    name: 'Serie 1',
    data: [0, 2000, 1800, 5000, 0, 3000, 5000, 1000, 4800, 0, 1800, 0]
  },
  {
    name: 'Serie 2',
    data: [0, 1700, 3800, 3800, 1000, 2300, 5800, 3800, 2500, 100, 2000, 0]
  },
  {
    name: 'Serie 3',
    data: [0, 100, 2000, 3800, 4500, 3900, 6100, 5800, 500, 1000, 1300, 0]
  }
]
</script>

<style lang="scss" scoped>
.projects-chart {
  height: 100%;
}

.card-btn {
  height: 55px;
  border-radius: 12px;
  border: 1px solid var(--border-border-complementario, #dde4ed);
  margin-left: 8px;

  @media (max-width: 767px) {
    padding: 0.75rem 1rem;
  }
}

.card-btn:hover {
  background-color: #3587ff;
  color: white;
}

.card__buttons {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  @media (max-width: 530px) {
    width: 100%;
  }
  &-approved {
    height: 46px;
    background-color: rgba(3, 121, 89, 0.05);
    border: none;
    @media (max-width: 530px) {
      width: 100%;
    }
  }

  &-approved:hover {
    background-color: #091d8b;
    color: white;
  }

  &-pending {
    height: 46px;
    border: none;
    background-color: rgba(242, 199, 68, 0.05);
    @media (max-width: 530px) {
      width: 100%;
    }
  }

  &-pending:hover {
    background-color: #091d8b;
    color: white;
  }

  &-cancel {
    height: 46px;
    border: none;
    background-color: rgba(224, 30, 90, 0.05);
    @media (max-width: 530px) {
      width: 100%;
    }
  }

  &-cancel:hover {
    background-color: #091d8b;
    color: white;
  }
}
</style>
