<template>
  <div id="chart">
    <apexchart type="radialBar" height="100%" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

<script setup lang="ts">
const series = [16]

const chartOptions = {
  chart: {
    height: '100%',
    type: 'radialBar',
    margin: 0,
    padding: 0
  },
  plotOptions: {
    radialBar: {
      hollow: {
        margin: 0,
        size: '50%'
      },
      dataLabels: {
        showOn: 'always',
        name: {
          show: false,
          color: '#888',
          fontSize: '10px'
        },
        value: {
          offsetY: 6,
          color: '#091841',
          fontSize: '18px',
          fontWeight: 600,
          fontFamily: 'Urbanist',
          show: true
        }
      }
    }
  },
  colors: ['#051255'],
  stroke: {
    lineCap: 'round'
  }
}
</script>

<style lang="scss"></style>
