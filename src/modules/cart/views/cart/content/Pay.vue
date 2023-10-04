<template>
  <div class="pay">
    <div class="pay__info">
      <h6 class="h6-semibold">{{ $t('cart.title2') }}</h6>

      <div class="pay__resumen">
        <div class="pay__item">
          <p class="b-light">{{ $t('cart.item4') }}</p>
          <p class="b-semibold">Nombre de compra</p>
        </div>
        <div class="pay__item">
          <p class="b-light">{{ $t('cart.item5') }}</p>
          <p class="b-semibold">$4,500.00</p>
        </div>
        <div class="pay__item2">
          <div class="pay__item">
            <p class="b-light">{{ $t('cart.item6') }}</p>
            <p class="b-semibold">0.94</p>
          </div>
          <v-btn color="#3587FF" variant="plain">{{ $t('cart.copy') }}</v-btn>
        </div>
        <div class="pay__item2">
          <div class="pay__item">
            <p class="b-light">{{ $t('cart.item7') }}</p>
            <p class="b-semibold wrap">TQerdfbNi7SyfTzs6PSgesHjZqL1NVQm5X</p>
          </div>
          <v-btn color="#3587FF" variant="plain">{{ $t('cart.copy') }}</v-btn>
        </div>
      </div>

      <div class="pay__time">
        <h6 class="h6-semibold">{{ $t('cart.scan2') }}</h6>
        <p class="b-light">{{ $t('cart.time') }} <span class="b-semibold">0:00</span> min</p>
      </div>

      <div class="pay__buttons">
        <v-btn variant="flat">{{ $t('cart.cancel') }}</v-btn>
        <v-btn color="primary" variant="flat" @click="emit('next')">{{ $t('cart.check') }}</v-btn>
      </div>
    </div>
    <div class="pay__qr">
      <v-card>
        <v-card-item>
          <div class="pay__qr-content">
            <img class="img_qr" src="@/assets/images/cart-qr.svg" alt="" />
            <div class="pay__scan">
              <img class="img__meta" src="@/assets/images/metamask.png" alt="">
              <p class="l-light">{{ $t('cart.scan') }}</p>
            </div>
          </div>
        </v-card-item>
      </v-card>
    </div>
  </div>
</template>

<script lang="ts" setup>
const emit = defineEmits(['next'])
</script>

<style lang="scss" scoped>
.pay {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 32px;

  @media (max-width: 480px){
    flex-direction: column-reverse;
  }

  &__info{
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 100%;
  }

  &__resumen{
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  &__item{
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  &__item2{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .wrap{
    word-break: break-all;
  }

  &__time{
    width: 100%;
    display: flex;
    padding: 24px;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
    align-self: stretch;
    border-radius: 16px;
    background: linear-gradient(0deg, #F3F7FF 0%, #F3F7FF 100%), #D5DDFE;
  }

  &__buttons{
    display: flex;
    flex-direction: row;
    gap: 16px;

    @media (max-width: 480px){
      flex-direction: column-reverse;
    }

    :deep(.v-btn){
      padding: 12px 16px;
      border-radius: 16px;
      height: fit-content;
      flex: 1;
      text-transform: none;
    }

    :deep(.v-btn:first-child){
      border: 1px solid #F4F5F8;
    }
  }

  &__qr {
    width: fit-content;
    min-width: fit-content;

    @media (max-width: 480px) {
      width: 100%;
    }

    :deep(.v-card) {
      padding: 32px;
      border-radius: 16px;
      background: #fafafa;
      border: 1px solid #dde4ed;
    }

    :deep(.v-card--variant-elevated) {
      box-shadow: none;
    }

    &-content{
      display: flex;
      flex-direction: column;
      gap: 24px;
    }
  }

  .img_qr{
    width: 100%;
  }

  .img__meta{
    width: 32px;
    height: 32px;
  }

  &__scan{
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;

    @media (max-width: 480px){
      flex-direction: column;

      text-align: center;
    }
  }


}



.b-regular {
  color: #1f2d4d;
}

.h6-semibold {
  color: #001e62;
}

.l-semibold {
  color: #001e62;
}

.l-light{
  color: #0A1E8C;
}

.b-light {
  color: #001e62;
}

.b-semibold{
  color: #001E62;
}
</style>
