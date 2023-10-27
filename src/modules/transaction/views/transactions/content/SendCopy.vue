<template>
  <div>
    <v-dialog width="450" v-model="isOpen">
      <v-card class="modal__card" rounded="lg">
        <div class="modal">
          <div class="modal__header">
            <h5 class="h5-bold">{{ $t('transactions.send') }}</h5>
            <button class="modal__close" @click="emits('closeModal')">
              <img :src="getFile({ route: 'icons/form', url: 'close', extension: 'svg' })" alt="" />
            </button>
          </div>
          <v-card-text v-if="!sent">
            <p class="l-light">{{ $t('transactions.description') }}</p>
            <div class="b-regular mt-5">
              <span>{{ $t('transactions.email') }}</span>
              <v-text-field
                placeholder="Example@mail.com"
                variant="solo-filled"
                density="compact"
                class="inpt"
              ></v-text-field>
            </div>
            <v-btn block rounded="lg" color="primary" @click="sent = true">{{
              $t('transactions.btnSend')
            }}</v-btn>
            <v-btn
              @click="emits('closeModal')"
              variant="outlined"
              block
              rounded="lg"
              class="mt-4"
              >{{ $t('transactions.btnCancel') }}</v-btn
            >
          </v-card-text>
          <v-card-text class="text-center" v-else>
            <div>
              <img src="@/assets/images/ready.webp" alt="" />
            </div>
            <h3 class="h3-bold">{{ $t('transactions.ready') }}</h3>
            <p class="l-light mt-4">
              {{ $t('transactions.sendCopy') }}
              <span class="font-weight-bold">email@email.com</span>
            </p>
            <v-btn
              color="primary"
              rounded="lg"
              class="mt-4"
              size="large"
              @click="emits('closeModal')"
            >
              {{ $t('transactions.back') }}
            </v-btn>
          </v-card-text>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>
<script lang="ts" setup>
import { getFile } from '@/helpers/Index'
import { ref } from 'vue'
const isOpen = true

const props = defineProps({
  transaction_uuid: {
    required: true,
    type: String
  }
})

const sent = ref<boolean>(false)

const emits = defineEmits(['closeModal'])
</script>
