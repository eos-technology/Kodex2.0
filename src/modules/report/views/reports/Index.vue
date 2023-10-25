<template>
  <section class="report d-flex flex-column">
    <div class="report__header">
      <h3 class="h3-bold">{{ $t('reports.header') }}</h3>

      <v-btn @click="$router.push({ name: 'generate' })" color="primary" class="btn" hide-details>{{
        $t('reports.btnReports')
      }}</v-btn>
    </div>
    <!-- Cards -->
    <div class="cards">
      <Cards icon="coins" :title="$t('reports.profits')" value="$0.00" />
      <Cards icon="dollar-send-arrow" :title="$t('reports.totalTx')" value="0" />
      <Cards icon="money" :title="$t('reports.totalUser')" value="0" />
      <Cards icon="hand-coins-currency" :title="$t('reports.activeMoney')" value="0" />
    </div>
    <ChartTipe />
    <ChartTransactions class="mb-12" />
  </section>
</template>
<script setup lang="ts">
import Cards from '@/components/Cards.vue'
import ChartTipe from '../content/ChartTipe.vue'
import ChartTransactions from '../content/ChartTransactions.vue'
</script>
<style lang="scss" scoped>
.report {
  gap: 24px;
  &__header {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;
  }
}
</style>
