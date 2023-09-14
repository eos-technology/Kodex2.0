<template>
  <div class="stepper">
    <div v-for="(item, index) in data" :key="index" class="stepper__item">
      <div class="stepper__box">
        <img
          class="stepper__icon"
          :src="getFile({ route: 'icons', url: `${item.icon}`, extension: 'svg' })"
          alt=""
        />
        <h5 class="h5-semibold">{{ item.title }}</h5>
      </div>
      <router-link to="/" class="link-under">{{ item.link }}</router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getFile } from '@/helpers/Index'
const data = [
  { icon: 'stepper', title: 'Validación de celular', link: 'Comenzar' },
  { icon: 'stepper2', title: 'Validación de celular', link: 'Comenzar' },
  { icon: 'stepper3', title: 'Validación de celular', link: 'Comenzar' },
  { icon: 'stepper4', title: 'Validación de celular', link: 'Comenzar' }
]
</script>

<style lang="scss" scoped>
.stepper {
  display: grid;
  gap: 2.4rem;
  &__box {
    display: flex;
    gap: 2.4rem;
    align-items: center;
  }
  &__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__icon {
    cursor: pointer;
  }
}
</style>
