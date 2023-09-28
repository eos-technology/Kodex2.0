<template>
  <section class="dashboard">
    <Header :title="$t('dashboard.dashboard')" />
    <!-- Cards -->
    <div class="cards">
      <Cards icon="coins" :title="$t('dashboard.charged')" value="$0.00" />
      <Cards icon="payment" :title="$t('dashboard.totalTx')" value="0" />
      <Cards icon="money" :title="$t('dashboard.approvedTx')" value="0" />
      <Cards icon="bank-clock" :title="$t('dashboard.txPending')" value="0" />
    </div>
    <!-- Project Detaail and Payments Methods -->
    <ProjectDetail class="project" />
  </section>
</template>

<script lang="ts" setup>
import ProjectDetail from './content/ProjectDetail.vue'
import Cards from '@/components/Cards.vue'
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
