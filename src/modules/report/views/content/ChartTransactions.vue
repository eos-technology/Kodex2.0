<template>
  <v-card class="pa-6">
    <div class="d-flex justify-space-between">
      <div class="d-flex card__buttons">
        <v-btn variant="outlined" class="card__buttons-approved rounded-lg">
          <div class="dot bg-success mr-2"></div>
          <p class="l-regular text-none"> {{ $t('reports.approved') }}</p>
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
      <div class="ml-4">
        <v-btn variant="outlined" class="card-btn">1M</v-btn>
        <v-btn variant="outlined" class="card-btn">3M</v-btn>
        <v-btn variant="outlined" class="card-btn">6M</v-btn>
        <v-btn variant="outlined" class="card-btn">1Y</v-btn>
        <v-btn variant="outlined" class="card-btn">All</v-btn>
      </div>
    </div>
    <div id="chart">
      <apexchart type="line" height="416" :options="chartOptions" :series="series"></apexchart>
    </div>
    <div class="table-custom">
      <table>
        <thead>
          <tr>
            <th>{{ $t('reports.typeTransaction') }}</th>
            <th>{{ $t('reports.quantity') }}</th>
            <th>TOTAL</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div class="table-custom__flex">
                <div class="dot bg-success"></div>
                {{ $t('reports.approved') }}
              </div>
            </td>
            <td>100</td>
            <td>$100.00</td>
          </tr>
          <tr>
            <td>
              <div class="table-custom__flex">
                <div class="dot bg-yellow"></div>
                {{ $t('reports.earring') }}
              </div>
            </td>
            <td>100</td>
            <td>$100.00</td>
          </tr>
          <tr>
            <td>
              <div class="table-custom__flex">
                <div class="dot bg-red"></div>
                {{ $t('reports.cancel') }}
              </div>
            </td>
            <td>100</td>
            <td>$100.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  </v-card>
</template>

<script setup lang="ts">


const chartOptions = {
  chart: {
    id: "area-chart",
    height: "100%",
    toolbar: {
      show: false,
    },
    stacked: false,
  },
  markers: {
    size: 7,
  },
  legend: {
    show: false
  },
  xaxis: {
    categories: ["ENE", "FEB", "MAR", "ABR", "MAY", "JUN", "JUL", "AGT", "SEP", "OCT", "NOV", "DIC"],
  },
  colors: ["#E01E5A", "#007A5A", "#F2C744"],
  stroke: {
    curve: 'smooth',
    width: 3,
  },

}

const series = [
  {
    name: "Serie 1",
    data: [0, 2000, 1800, 5000, 0, 3000, 5000, 1000, 4800, 0, 1800, 0],
  },
  {
    name: "Serie 2",
    data: [0, 1700, 3800, 3800, 1000, 2300, 5800, 3800, 2500, 100, 2000, 0],
  },
  {
    name: "Serie 3",
    data: [0, 100, 2000, 3800, 4500, 3900, 6100, 5800, 500, 1000, 1300, 0],
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

.card__buttons {
  gap: 8px;

  &-approved {
    height: 50px;
    background-color: rgba(3, 121, 89, 0.05);
    border: none;

  }

  &-approved:hover {
    background-color: #091d8b;
    color: white;
  }

  &-pending {
    height: 50px;
    border: none;
    background-color: rgba(242, 199, 68, 0.05);

  }

  &-pending:hover {
    background-color: #091d8b;
    color: white;
  }

  &-cancel {
    height: 50px;
    border: none;
    background-color: rgba(224, 30, 90, 0.05);
  }

  &-cancel:hover {
    background-color: #091d8b;
    color: white;
  }
}</style>