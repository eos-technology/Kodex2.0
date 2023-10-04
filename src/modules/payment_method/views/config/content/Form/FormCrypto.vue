<template>
  <div class="configureCrypto__header gap">
    <h1 class="h3-bold">{{ $t('payment-methods.configure-crypto') }}</h1>
    <p class="l-regular">{{ $t('payment-methods.configure-fiat-text') }}</p>
  </div>

  <form class="configureCrypto__form gap">
    <div class="configureCrypto__Wallet">
      <label for="wallet"
        ><p class="b-regular mb-1">Wallet</p>

        <v-text-field
          placeholder="Wallet address"
          rounded="lg"
          variant="solo-filled"
          single-line
          density="compact"
          v-model="form.wallet"
        >
        </v-text-field>
      </label>
    </div>

    <div class="configureCrypto__warning">
      <p class="l-regular">
        {{ $t('payment-methods.crypto-warning') }} <a>{{ $t('here') }}</a>
      </p>
    </div>

    <div class="configureCrypto__buttons">
      <v-btn @click="emit('next', form)" color="primary">{{ $t('globals.save') }}</v-btn>
      <v-btn @click="$router.back()" variant="outlined" class="w-btn border-btn">{{
        $t('cancel')
      }}</v-btn>
    </div>
  </form>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const emit = defineEmits(['next'])

const form = reactive({ wallet: '' })
</script>

<style lang="scss" scoped>
.configureCrypto {
  &__header {
    h1 {
      line-height: normal;
    }
    @media (max-width: 767px) {
      h1 {
        font-size: 7.5vw;
        line-height: normal;
      }
    }
  }

  &__Wallet {
    label {
      color: #212837;
    }

    input {
      width: 100%;
      padding: 8px 12px;
      background-color: #f6f7f9;
      border: 1px solid #f4f5f8;
      border-radius: 10px;
      font-size: 14px;
      font-weight: 300;
      line-height: 20px;
      color: #394357;
      &:focus {
        outline: none;
      }
    }
  }

  &__warning {
    border-left: 4px solid #1264a3;
    border-radius: 0.5vw;
    padding: 1vw;
    background-color: rgba(18, 100, 163, 0.05);
    p {
      a {
        cursor: pointer;
        font-weight: bold;
        color: #3587ff;
      }
    }

    @media (max-width: 767px) {
      border-radius: 2vw;
      padding: 3.2vw;
      p {
        font-size: 3.9vw;
        line-height: normal;
      }
    }
  }

  &__buttons {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }
}

.gap {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

:deep(.v-btn) {
  text-transform: none;
  border-radius: 16px;
  height: fit-content;
  padding: 10px 16px;

  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;

  &.border-btn {
    border: 1px solid #f4f5f8;
  }

  &.w-btn {
    background-color: #fff;
  }
}
</style>
