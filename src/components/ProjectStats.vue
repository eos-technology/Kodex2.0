<template>
  <v-row>
    <v-col md="3">
      <Cards
        :loading="loading"
        icon="coins"
        :title="$t('dashboard.charged')"
        :value="`$${formatCurrency()(stats.total)}`"
      />
    </v-col>
    <v-col md="3">
      <Cards
        :loading="loading"
        icon="payment"
        :title="$t('dashboard.totalTx')"
        :value="stats.transactions"
      />
    </v-col>

    <v-col md="3">
      <Cards
        :loading="loading"
        icon="money"
        :title="$t('dashboard.approvedTx')"
        :value="stats.transactions_success"
      />
    </v-col>

    <v-col md="3">
      <Cards
        :loading="loading"
        icon="bank-clock"
        :title="$t('dashboard.txPending')"
        :value="stats.transactions_pending"
      />
    </v-col>
  </v-row>
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue'

import { useTransactionStore } from '@/modules/transaction/store/transactionStore'
const transactionStore = useTransactionStore()

import Cards from './Cards.vue'
import { formatCurrency } from '@/helpers/Index'

const props = defineProps({
  uuid: {
    type: String,
    required: true
  }
})

const loading = ref<boolean>(false)
const stats = ref<any>([])
const getStats = async () => {
  loading.value = true
  await transactionStore.getStats({ uuid: props.uuid }).then((response: any) => {
    stats.value = response
    loading.value = false
  })
}

onMounted(() => {
  getStats()
})
</script>
