<template>
  <section class="dashboard">
    <Header :title="$t('dashboard.dashboard')" />
    <!-- Cards -->
    <ProjectStats :uuid="uuid" />
    <v-card class="pa-4 pa-md-6" rounded="lg">
      <ChartProfits />
      <h5 class="h5-semibold">{{ $t('dashboard.transactions') }}</h5>
      <TransactionsStats class="mt-4" />
    </v-card>
    <!-- Project Detaail and Payments Methods -->
    <PaymentMethods class="project" />
  </section>
</template>

<script lang="ts" setup>
import ProjectStats from '@/components/ProjectStats.vue'
import PaymentMethods from './content/PaymentMethods.vue'
import ChartProfits from '@/modules/report/components/ChartProfits.vue'
import TransactionsStats from '@/modules/report/components/TransactionsStats.vue'

const props = defineProps({
  uuid: {
    required: true,
    type: String
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/sass/mixins';

.dashboard {
  display: flex;
  flex-direction: column;
  gap: 24px;

  &__swiper {
    width: 100%;
    height: 200px;

    img {
      width: 100%;
      height: 200px;
      border-radius: 16px;
    }
  }

  &__cards {
    @include grid(4, 24px);

    &-icon {
      padding: 12px;
      border-radius: 16px;
      background-color: #ebf3ff;
      font-size: 2.4rem;
      color: #001e62;
    }
  }

  .card {
    position: relative;
  }

  &__chart {
    position: absolute;
    top: 0;
    right: 0;
    margin-right: -86px;
  }
}
</style>

<style>
h3 {
  color: #0a1e8c;
}

h4 {
  color: #0a1e8c;
}
h5 {
  color: #0a1e8c;
}
</style>
