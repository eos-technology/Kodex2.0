<template>
  <section class="report d-flex flex-column">
    <div class="d-flex align-center justify-space-between">
      <h3 class="h3-bold">{{ $t('reports.header') }}</h3>
      <router-link :to="{ name: 'generate' }">
        <v-btn color="#091D8B" class="text-none text-white primary">{{
          $t('reports.btnReports')
        }}</v-btn>
      </router-link>
    </div>
    <!-- Cards -->
    <div class="cards">
      <Cards icon="coins" :title="$t('reports.profits')" value="$0.00" />
      <Cards icon="dollar-send-arrow" :title="$t('reports.totalTx')" value="0" />
      <Cards icon="money" :title="$t('reports.totalUser')" value="0" />
      <Cards icon="hand-coins-currency" :title="$t('reports.activeMoney')" value="0" />
    </div>
    <ChartTipe />
    <ChartTransactions />
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
}
.primary {
  height: 48px;
  border-radius: 16px;
}
</style>
