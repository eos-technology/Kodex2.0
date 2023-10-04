<template>
  <div class="info">
    <div class="info__form">
      <h6 class="h6-semibold">{{ $t('cart.title1') }}</h6>

      <div class="info__control">
        <label class="b-regular" for="name">{{ $t('cart.name') }}</label>
        <input class="b-light" type="text" :placeholder="$t('cart.name')" id="name" />
      </div>
      <div class="info__control">
        <label class="b-regular" for="email">{{ $t('cart.email') }}</label>
        <input class="b-light" type="text" :placeholder="$t('cart.email')" id="email" />
      </div>
      <div class="info__control">
        <label class="b-regular" for="phone">{{ $t('cart.phone') }}</label>
        <input class="b-light" type="text" :placeholder="$t('cart.phone')" id="phone" />
      </div>
    </div>
    <div class="info__resumen">
      <v-card>
        <v-card-item>
          <div class="info__resumen-content">
            <div class="info__inversion">
              <h6 class="h6-semibold">{{ $t('cart.resumen') }}</h6>
              <div class="info__inversion-item">
                <p class="b-light">{{ $t('cart.item1') }}</p>
                <p class="b-light">$0.00</p>
              </div>
              <div class="info__inversion-item">
                <p class="b-light">{{ $t('cart.item2') }}</p>
                <p class="b-light">$0.00</p>
              </div>
              <div class="info__inversion-item">
                <p class="b-light">{{ $t('cart.item3') }}</p>
                <p class="b-light">$0.00</p>
              </div>
            </div>

            <v-divider></v-divider>

            <div class="info__total">
              <p class="l-semibold">{{ $t('cart.total') }}</p>
              <p class="l-semibold">$0.00</p>
            </div>

            <v-btn variant="flat" color="primary" @click="emit('next')">{{ $t('cart.pay') }}</v-btn>
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
.info {
  display: flex;
  flex-direction: row;
  gap: 24px;
  justify-content: space-between;

  @media (max-width: 480px) {
    flex-direction: column;
  }

  &__form {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 50%;

    @media (max-width: 480px) {
      width: 100%;
    }
  }

  &__control {
    display: flex;
    flex-direction: column;
    gap: 4px;

    input {
      padding: 12px 16px;
      border-radius: 12px;
      border: 1px solid #f4f5f8;
      background: #f6f7f9;

      &:focus-visible {
        outline: none;
      }
    }
  }

  &__resumen {
    width: 40%;

    @media (max-width: 480px) {
      width: 100%;
    }

    :deep(.v-card) {
      padding: 24px;
      border-radius: 16px;
      background: #fafafa;
      border: 1px solid #dde4ed;
    }

    :deep(.v-card--variant-elevated) {
      box-shadow: none;
    }

    &-content {
      display: flex;
      flex-direction: column;
      gap: 24px;

      :deep(.v-btn) {
        padding: 12px 16px;
        height: fit-content;
        border-radius: 16px;
        text-transform: none;
      }
    }
  }

  &__inversion {
    display: flex;
    flex-direction: column;
    gap: 16px;

    &-item {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
  }

  &__total {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
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

.b-light {
  color: #001e62;
}
</style>
