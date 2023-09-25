<template>
  <section class="cart">
    <div class="cart__logo">
      <img src="../../../../assets/images/logo.svg" alt="" />
    </div>
    <v-card>
      <v-card-item>
        <div class="cart__header">
          <h2 class="h2-bold">{{ $t(`cart.header${step}`) }}</h2>
          <h2 class="h2-bold h-blue">{{ $t('cart.step') }} {{ step }}/3</h2>
        </div>

        <div class="cart__content">
          <custumer-info v-if="step == 1" @next="step++"></custumer-info>
          <pay v-if="step == 2" @next="step++"></pay>
          <finish v-if="step == 3"></finish>
        </div>
      </v-card-item>
    </v-card>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import CustumerInfo from './content/CustomerInfo.vue'
import Pay from './content/Pay.vue'
import Finish from './content/Finish.vue'

const step = ref(1)
</script>

<style lang="scss" scoped>
.cart {
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  :deep(.v-card) {
    width: 100%;
    max-width: 960px;
    border-radius: 16px;
    border: 1px solid #dde4ed;
  }

  :deep(.v-card-item) {
    padding: 0;
  }

  &__header {
    background-image: url('../../../../assets/images/banner.webp');
    background-size: 100% 100%;
    background-position: center;
    padding: 48px 32px;

    color: #fff;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 480px) {
      flex-direction: column-reverse;
      align-items: flex-start;
      padding: 24px 16px;
      .h2-bold {
        font-size: 24px;
        line-height: normal;
      }

      .h-blue {
        font-size: 14px;
      }
    }

    .h-blue {
      color: #3587ff;
    }
  }

  &__content {
    padding: 24px;
  }
}
</style>
