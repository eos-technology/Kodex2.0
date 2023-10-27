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
        <label class="text-primary b-regular">{{ $t('payment-methods.name') }}</label>
        <v-text-field
          class="inpt mt-1"
          elevation-0
          density="compact"
          hide-details
          variant="solo-filled"
          :placeholder="$t('name')"
          v-model="form.name"
        ></v-text-field>
      </div>

      <div>
        <label class="text-primary b-regular">{{ $t('payment-methods.account-number') }}</label>
        <v-text-field
          class="inpt mt-1"
          elevation-0
          density="compact"
          hide-details
          variant="solo-filled"
          :placeholder="$t('payment-methods.account-number')"
          v-model="form.account"
          type="number"
        ></v-text-field>
      </div>

      <div>
        <label class="text-primary b-regular">{{ $t('payment-methods.type-account') }}</label>
        <v-select
          class="inpt mt-1"
          elevation-0
          density="compact"
          hide-details
          variant="solo-filled"
          :items="['item1', 'item2', 'item3', 'item4', 'item5', 'item6']"
          v-model="form.accountType"
          :placeholder="$t('payment-methods.select-type') "
        ></v-select>
      </div>

      <div>
        <label class="text-primary b-regular">{{ $t('payment-methods.document-type') }}</label>
        
        <v-select
          class="inpt mt-1"
          elevation-0
          density="compact"
          hide-details
          variant="solo-filled"
          :items="['item1', 'item2', 'item3', 'item4', 'item5', 'item6']"
          v-model="form.documentType"
          :placeholder="$t('payment-methods.select-document') "
        ></v-select>
      </div>


      <div>
        <label class="text-primary b-regular">{{ $t('payment-methods.number-document') }}</label>
        <v-text-field
          class="inpt mt-1"
          elevation-0
          density="compact"
          hide-details
          variant="solo-filled"
          :placeholder="$t('payment-methods.number-document')"
          v-model="form.document"
          type="number"
        ></v-text-field>
      </div>
    </div>

    <div class="configureFiat__warning">
      <p class="l-regular">
        {{ $t('payment-methods.warning-message') }} <a>{{ $t('here') }}</a>
      </p>
    </div>

    <div class="configureFiat__buttons">
      <v-btn class="btn" color="primary" @click="emit('next', form)">{{ $t('globals.save') }}</v-btn>
      <v-btn class="btn" variant="outlined" color="secondary" @click="$router.back()">
        <p class="text-primary">{{ $t('cancel') }}</p>
      </v-btn>
    </div>
  </form>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const emit = defineEmits(['cancel', 'next'])

const form = reactive({
  name: '',
  account: '',
  accountType: null,
  documentType: null,
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

:deep(.v-field__field){
  input[type=number]::-webkit-inner-spin-button, 
  input[type=number]::-webkit-outer-spin-button { 
    -webkit-appearance: none; 
    margin: 0; 
  }
}
</style>
