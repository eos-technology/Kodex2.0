<template>
  <div class="content">
    <img :src="getFile({ route: 'images', url: 'profile_approved', extension: 'png' })" />
    <div class="content__text">
      <h6 class="h6-regular">{{ $t('payment-methods.enable-fiat') }}</h6>
      <p class="b-regular">{{ $t('payment-methods.enable-fiat-text') }}</p>
    </div>

    <v-btn color="primary">{{ $t('configure') }}</v-btn>
  </div>
</template>

<script lang="ts" setup>
import getFile from '@/helpers/getFile'
</script>

<style lang="scss" scoped>
.content {
  display: grid;
  gap: 24px;
  margin: 0 auto;
  text-align: center;
  width: 22.22vw;

  @media (max-width: 767px) {
    width: 100%;
  }

  img {
    width: 93.75px;
    margin: 0 auto;
  }

  &__text {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }
}

.h6-regular{
    color: #0A1E8C;
}

.b-regular{
    color: #091841;
}

</style>
