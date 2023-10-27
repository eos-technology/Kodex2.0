<template>
  <section class="dashboard pa-5">
    <h3 class="h3-bold">{{ $t('dashboard.panelTitle') }}</h3>
    <!-- Banner -->
    <div class="dashboard__swiper">
      <swiper :pagination="true" :modules="modules" class="swiper">
        <swiper-slide
          ><img :src="getFile({ route: 'images', url: 'banner', extension: 'webp' })" alt=""
        /></swiper-slide>
        <swiper-slide
          ><img :src="getFile({ route: 'images', url: 'banner', extension: 'webp' })" alt=""
        /></swiper-slide>
        <swiper-slide
          ><img :src="getFile({ route: 'images', url: 'banner', extension: 'webp' })" alt=""
        /></swiper-slide>
        <swiper-slide
          ><img :src="getFile({ route: 'images', url: 'banner', extension: 'webp' })" alt=""
        /></swiper-slide>
      </swiper>
    </div>

    <!-- Cards -->
    <div class="cards">
      <Cards icon="coins" :title="$t('dashboard.projects')" value="1" />
      <Cards icon="payment" :title="$t('dashboard.totalTx')" value="0" />
      <Cards icon="money" :title="$t('dashboard.gain')" value="$0.00" />
      <Cards icon="bank-clock" :title="$t('dashboard.activeTokens')" value="0" />
    </div>
    <!-- Validation -->
    <v-card class="pa-4 pa-md-6 rounded-lg border elevation-0">
      <div class="card-big">
        <div class="card-header">
          <div>
            <h6 class="h6-light">{{ $t('dashboard.validationPercentage') }}</h6>
            <h3 class="h3-bold">{{ $t('dashboard.acount') }}</h3>
          </div>
          <div class="dashboard__chart"><ChartAccount /></div>
        </div>
        <div class="line"></div>
        <StepperView />
      </div>
    </v-card>
    <!-- Project Detaail and Payments Methods -->
    <ProjectDetail class="project" />
    <!-- Sesion -->
    <SesionsView />
  </section>
</template>

<script setup lang="ts">
import Cards from '@/components/Cards.vue'
import ChartAccount from './charts/ChartAccount.vue'
import StepperView from './content/StepperView.vue'
import ProjectDetail from './content/ProjectDetail.vue'
import { getFile } from '@/helpers/Index'
import SesionsView from './content/SesionsView.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/scss'
import 'swiper/scss/pagination'
import { Pagination } from 'swiper/modules'

const modules = [Pagination]

// const cards = [
//   { icon: 'coins', title: 'dashboard.projects', value: '1' },
//   { icon: 'payment', title: 'dashboard.totalTx', value: '0' },
//   { icon: 'money', title: 'dashboard.gain', value: '$0.00' },
//   { icon: 'bank-clock', title: 'dashboard.activeTokens', value: '0' }
// ]
</script>

<style lang="scss" scoped>
.dashboard {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  &__swiper {
    width: 100%;
    height: 12.5rem;
    img {
      width: 100%;
      height: 12.5rem;
      border-radius: 1rem;
    }
  }

  .card {
    position: relative;
    &-header {
      flex-wrap: wrap;
      @media (max-width: 380px) {
        justify-content: center;
      }
    }
  }

  .card-big {
    display: grid;
    gap: 1.5rem;
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
