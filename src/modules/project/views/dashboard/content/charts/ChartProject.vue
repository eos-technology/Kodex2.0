<template>
  <div id="chart">
    <apexchart type="area" height="416" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

<script lang="ts">
import VueApexCharts from "vue3-apexcharts";

export default {
  name: "AreaChart",
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    return {
      chartOptions: {
        chart: {
          id: "area-chart",
          height: "100%",
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
      },
      series: [
        {
          name: "Serie 1",
          data: [60, 80, 50, 90, 100, 70],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.projects-chart {
  height: 100%;
}


</style>
