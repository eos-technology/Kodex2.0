<template>
  <Error />
  <section class="auth">
    <div class="auth__content">
      <RouterView></RouterView>
    </div>

    <div class="auth__slider">
      <swiper :pagination="true" :modules="modules" class="myswiper">
        <swiper-slide
          ><p class="myswiper__text">
            {{ $t('login.swiper') }}
          </p></swiper-slide
        >
        <swiper-slide
          ><p class="myswiper__text">
            {{ $t('login.swiper') }}
          </p></swiper-slide
        >
        <swiper-slide
          ><p class="myswiper__text">
            {{ $t('login.swiper') }}
          </p></swiper-slide
        >
      </swiper>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/scss'
import 'swiper/scss/pagination'
import { Pagination } from 'swiper/modules'

const modules = [Pagination]
</script>

<style lang="scss" scoped>
.auth {
  padding: 0;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  height: 100%;
  min-height: 100vh;
  @media (min-width: 900px) {
    padding: 24px;
    display: grid;
    grid-template-columns: 1fr 55%;
  }
  &__content {
    padding: 48px 24px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    width: 100%;
    height: 100%;
    @media (min-width: 900px) {
      min-height: unset;
      padding: 0 56px 0 42px;
      align-items: flex-start;
    }
    @media (min-width: 1200px) {
      padding: 0 96px 0 72px;
      align-items: flex-start;
    }
  }
  &__slider {
    display: none;
    height: 100%;
    overflow: hidden;
    border-radius: 32px;

    @media (min-width: 900px) {
      display: unset;
      min-width: 50%;
      width: 100%;
      height: 100%;
    }
  }
}

.myswiper {
  width: 100%;
  height: 100%;
  --swiper-pagination-bullet-inactive-color: rgba(255, 255, 255, 0.3);
  --swiper-pagination-color: #ffffff;
  --swiper-pagination-bullet-width: 160px;
  --swiper-pagination-bullet-height: 10px;
  --swiper-pagination-bullet-border-radius: 5px;
  --swiper-pagination-bottom: 56px;
  --swiper-pagination-bullet-horizontal-gap: 8px;
  &__text {
    font-size: 24px;
    font-style: italic;
    font-weight: 500;
    line-height: 34px;
    letter-spacing: 0em;
    text-align: center;
    color: #fff;
    padding: 120px 15%;
  }
  .swiper {
    &-slide {
      background-image: url('@/assets/images/swiper-login.webp');
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      text-align: center;
      font-size: 18px;
      /* Center slide text vertically */
      display: flex;
      justify-content: center;
      align-items: flex-end;
    }
  }
}
</style>
