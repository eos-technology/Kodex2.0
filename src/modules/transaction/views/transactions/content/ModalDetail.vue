<template>
  <div class="table-custom__center">
    <v-dialog width="450" v-model="isOpen">
      <v-card class="modal__card" rounded="lg">
        <div class="modal">
          <div class="modal__header">
            <h5 class="h5-bold">{{ $t('user.options') }}</h5>
            <button class="modal__close" @click="emits('closeModal')">
              <img :src="getFile({ route: 'icons/form', url: 'close', extension: 'svg' })" alt="" />
            </button>
          </div>
          <div class="modal__options">
            <router-link
              :to="{ name: 'detail', params: { transaction: transaction_uuid } }"
              style="text-decoration: none"
            >
              <div class="modal__option">
                <p>{{ $t('transactions.seeDetail') }}</p>
                <span><i class="icon-arrow-right"></i></span>
              </div>
            </router-link>
            <div class="modal__option" @click="sendCopy = true">
              <p>{{ $t('transactions.sendMail') }}</p>
              <span><i class="icon-arrow-right"></i></span>
            </div>
            <div class="modal__option">
              <p>{{ $t('transactions.downloadTax') }}</p>
              <span><i class="icon-arrow-right"></i></span>
            </div>
          </div>
        </div>
      </v-card>
    </v-dialog>
    <SendCopy
      :transaction_uuid="transaction_uuid"
      v-if="sendCopy"
      @close-modal="sendCopy = false"
    />
  </div>
</template>
<script lang="ts" setup>
import { getFile } from '@/helpers/Index'
import { ref } from 'vue'
import SendCopy from './SendCopy.vue'

const isOpen = true
const sendCopy = ref<boolean>(false)

const props = defineProps({
  transaction_uuid: {
    required: true,
    type: String
  }
})

const emits = defineEmits(['closeModal'])
</script>
