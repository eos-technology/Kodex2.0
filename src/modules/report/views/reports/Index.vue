<template>
  <section class="report d-flex flex-column">
    <div class="report__header">
      <h3 class="h3-bold">{{ $t('reports.header') }}</h3>

      <v-btn @click="$router.push({ name: 'generate' })" color="primary" class="btn" hide-details>{{
        $t('reports.btnReports')
      }}</v-btn>
    </div>
    <!-- Cards -->
    <ProjectStats :uuid="uuid" />
    <v-card class="pa-4 pa-md-6" rounded="lg">
      <ChartProfits />
    </v-card>
    <v-card class="pa-4 pa-md-6" rounded="lg">
      <ChartTransactions class="mb-12" />
      <TransactionsStats class="mt-4" />
    </v-card>
  </section>
</template>
<script setup lang="ts">
import ChartProfits from '@/modules/report/components/ChartProfits.vue'
import ChartTransactions from '@/modules/report/components/ChartTransactions.vue'
import ProjectStats from '@/components/ProjectStats.vue'
import TransactionsStats from '@/modules/report/components/TransactionsStats.vue'

const props = defineProps({
  uuid: {
    required: true,
    type: String
  }
})
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
