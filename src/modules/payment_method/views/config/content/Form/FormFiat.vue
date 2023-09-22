<template>
  <div class="configureFiat__header gap">
    <h1 class="h3-bold">
      {{ $t('payment-methods.configure-account') }} bancolombia {{ $t('payment-methods.account') }}
    </h1>
    <p class="l-regular">{{ $t('payment-methods.configure-fiat-text') }}</p>
  </div>

  <form class="configureFiat__form gap">
    <div class="configureFiat__Wallet gap gap--form">
      <div>
        <label for="name">{{ $t('payment-methods.name') }}</label
        ><br />
        <input v-model="form.name" type="text" name="name" :placeholder="$t('name')" />
      </div>

      <div>
        <label for="account">{{ $t('payment-methods.account-number') }}</label
        ><br />
        <input
          v-model="form.account"
          type="text"
          name="account"
          :placeholder="$t('payment-methods.account-number')"
        />
      </div>

      <div>
        <label for="AccountType">{{ $t('payment-methods.type-account') }}</label
        ><br />
        <select v-model="form.accountType" name="AccountType">
          <option value="" selected>{{ $t('payment-methods.select-type') }}</option></select
        ><br />
      </div>
      <div>
        <label for="documentType">{{ $t('payment-methods.document-type') }}</label
        ><br />
        <select v-model="form.documentType" name="documentType">
          <option value="" selected>{{ $t('payment-methods.select-document') }}</option></select
        ><br />
      </div>
      <div>
        <label for="document">{{ $t('payment-methods.number-document') }}</label
        ><br />
        <input
          v-model="form.document"
          type="text"
          name="document"
          :placeholder="$t('payment-methods.number-document')"
        />
      </div>
    </div>

    <div class="configureFiat__warning">
      <p class="l-regular">
        {{ $t('payment-methods.warning-message') }} <a>{{ $t('here') }}</a>
      </p>
    </div>

    <div class="configureFiat__buttons">
      <v-btn @click="emit('next', form)" color="primary">{{ $t('globals.save') }}</v-btn>
      <v-btn @click="$router.back()" variant="outlined" class="w-btn border-btn">{{ $t('cancel') }}</v-btn>
    </div>
  </form>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const emit = defineEmits(['cancel', 'next'])

const form = reactive({
  name: '',
  account: '',
  accountType: '',
  documentType: '',
  document: ''
})
</script>

<style lang="scss" scoped>
.configureFiat {
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

    input,
    select {
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
    gap: 1.4rem;
  }
}

.gap {
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  &--form {
    gap: 1.4rem;
  }
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
