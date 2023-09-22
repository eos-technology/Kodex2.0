<template>
<section class="report d-flex flex-column">
    <div class="d-flex align-center justify-space-between">
        <h3 class="h3-bold">{{ $t('reports.header') }}</h3>
        <router-link :to="{ name: 'generate' }">
            <v-btn color="#091D8B" class="text-none text-white primary">{{ $t('reports.btnReports') }}</v-btn>
        </router-link>
    </div>
     <!-- Cards -->
     <Cards icon="coins" :title="$t('reports.profits')" value="$0.00" icon1="dollar-send-arrow"
      :title1="$t('reports.totalTx')" value1="0" icon2="money" :title2="$t('reports.totalUser')" value2="0"
      icon3="hand-coins-currency" :title3="$t('reports.activeMoney')" value3="0" />
      <ChartTipe/>
      <ChartTransactions/>
</section>
</template>
<script setup lang="ts">
import Cards from '@/components/Cards.vue';
import ChartTipe from '../content/ChartTipe.vue'
import ChartTransactions from '../content/ChartTransactions.vue'
</script>
<style lang="scss" scoped>
.report{
    gap: 24px;
}
.primary {
    height: 48px;
    border-radius: 16px;
}


</style>