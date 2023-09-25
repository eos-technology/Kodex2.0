<template>
  <section class="dashboard">
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
    <Cards
      icon="coins"
      :title="$t('dashboard.projects')"
      value="1"
      icon1="payment"
      :title1="$t('dashboard.totalTx')"
      value1="0"
      icon2="money"
      :title2="$t('dashboard.gain')"
      value2="$0.00"
      icon3="bank-clock"
      :title3="$t('dashboard.activeTokens')"
      value3="0"
    />
    <!-- Validation -->
    <v-card class="pa-4 pa-md-6 rounded-lg">
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
@import '@/assets/sass/mixins';
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
  }
  &__chart {
    position: absolute;
    top: 0;
    right: 0;
    margin-right: -86px;
  }
  .card-big {
    display: grid;
    gap: 1.5rem;
  }
}
</style>
