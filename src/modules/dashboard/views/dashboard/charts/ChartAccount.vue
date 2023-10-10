<template>
  <div id="chart">
    <apexchart
      type="radialBar"
      height="80"
      width="80"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<script setup lang="ts">
const series = [16]

const chartOptions = {
  chart: {
    type: 'radialBar',
    sparkline: {
      enabled: true
    }
  },
  plotOptions: {
    radialBar: {
      hollow: {
        padding: 0,
        margin: 0,
        size: '45%'
      },
      track: {
        show: true,
        startAngle: undefined,
        endAngle: undefined,
        background: '#EBF3FF',
        strokeWidth: '98%',
        opacity: 1,
        margin: 5
      },
      dataLabels: {
        showOn: 'always',
        name: {
          show: false,
          color: '#888',
          fontSize: '10px'
        },
        value: {
          offsetY: 5,
          color: '#091841',
          fontSize: '16px',
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
