<template>
  <div class="config">
    <div class="config__header">
      <h3 class="h3-bold">{{ $t('payment-methods.title') }}</h3>
    </div>
    <BackDummy @click="$router.back()" />

    <v-card>
      <v-card-item>
        <!-- step 1 -->
        <div v-if="step === 1" class="configureCrypto gap">
          <FormCrypto v-if="currency === 'crypto'" @next="onNext" />

          <FormFiat v-if="currency === 'fiat'" @next="onNext" />
        </div>

        <!-- step 2 -->
        <div v-if="step === 2" class="security-code">
          <div class="security-code__header">
            <h3 class="h3-bold">{{ $t('payment-methods.security-code') }}</h3>
            <p class="l-regular">
              {{ $t('payment-methods.enter-code') }} <span>Google Authenticator</span>
              {{ $t('payment-methods.app') }}
            </p>
          </div>

          <div class="security-code__wallet">
            <VerificationCode />
          </div>

          <div class="security-code__buttons">
            <v-btn @click="onNext" color="primary" class="btn">{{
              $t('payment-methods.verify')
            }}</v-btn>
            <v-btn color="secondary" @click="$router.back()" variant="outlined" class="btn"
              ><p class="text-primary">{{ $t('cancel') }}</p></v-btn
            >
          </div>
        </div>

        <!-- step 3 -->
        <div v-if="step === 3" class="approved-message">
          <img :src="getFile({ route: 'images', url: 'check_3d', extension: 'png' })" />

          <div class="approved-message__message">
            <h1 class="h3-bold">{{ $t('payment-methods.all-ready') }}</h1>
            <p class="l-regular">
              {{ $t('payment-methods.saved-method') }} <span>Tether</span>
              {{ $t('payment-methods.for-user') }} <span>NombreUsuario</span>
              {{ $t('payment-methods.project') }} <span>NombreProyecto</span>
            </p>
          </div>

          <v-btn @click="$router.back()" color="primary" class="btn">{{
            $t('globals.back')
          }}</v-btn>
        </div>
      </v-card-item>
    </v-card>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import getFile from '@/helpers/getFile'

import FormCrypto from './content/Form/FormCrypto.vue'
import FormFiat from './content/Form/FormFiat.vue'
import VerificationCode from './content/VerificationCode.vue'

const router = useRoute()
const currency = router.params.currency.toString()

console.log(router)
console.log(currency)

const step = ref(1)

const onNext = () => {
  step.value++
}
</script>

<style lang="scss" scoped>
.config {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.security-code {
  display: flex;
  flex-direction: column;
  gap: 24px;

  &__header {
    display: flex;
    flex-direction: column;
    gap: 24px;

    span {
      font-weight: 600;
    }

    @media (max-width: 767px) {
      gap: 16px;

      h3 {
        font-size: 27px;
        line-height: normal;
      }

      p {
        font-size: 15px;
      }
    }
  }

  &__buttons {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }
}

.approved-message {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  img {
    width: 120px;
  }

  &__message {
    text-align: center;

    span {
      font-weight: 600;
    }
  }

  button {
    width: 100%;
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

:deep(.v-card) {
  max-width: 500px;
  margin: 0 auto;
  border-radius: 16px;
  padding: 12px;
}
</style>
