<template>
  <v-card class="card-table pa-4 pa-md-6 rounded-lg">
    <div class="transactions__header">
      <v-text-field
        :placeholder="$t('transactions.search')"
        variant="solo-filled"
        hide-details
        density="compact"
        class="inpt inpt-search"
        v-model="payload.search"
        @keyup.enter="getTransactions()"
      >
        <template v-slot:prepend-inner>
          <i class="icon-search"></i>
        </template>
      </v-text-field>
      <div class="transactions__box">
        <FilterBtn
          @setPrices="setAmounts"
          @setStatuses="setStatus"
          @setDates="setDates"
          :excludes="[5, 6, 7]"
        />
        <v-btn class="btn" color="secondary" variant="outlined"
          ><p class="btn-line">{{ $t('transactions.button') }}</p></v-btn
        >
      </div>
    </div>
    <!-- Table -->
    <div class="table-custom transaction__table">
      <table class="">
        <thead class="">
          <tr>
            <th>{{ $t('transactions.id') }}</th>
            <th>Usuario</th>
            <th>Medio de pago</th>
            <th>Valor</th>
            <th>Fecha</th>
            <th>Estado</th>
            <th>{{ $t('transactions.detail') }}</th>
            <th></th>
          </tr>
        </thead>
        <tbody v-if="transactions">
          <tr v-for="(item, index) in transactions.data" :key="index">
            <td>
              <p class="l-medium suspensive d-flex" style="max-width: 150px; gap: 5px">
                <CopyButton :text="item.uuid" :hideText="true" />
                <router-link
                  class="mt-2"
                  :to="{ name: 'detail', params: { transaction: item.uuid } }"
                >
                  {{ item.uuid }}
                </router-link>
              </p>
            </td>
            <td>
              <p class="suspensive" style="max-width: 150px">
                {{ item.purchase_email }}
              </p>
              <v-tooltip v-if="item.purchase_names" activator="parent" location="bottom">
                {{ item.purchase_names }}
              </v-tooltip>
            </td>
            <td>
              <div class="transaction__table-box">
                <img :src="item.payment_logo" alt="" />
                <div class="text-left">
                  <p class="l-medium">{{ item.payment_method }}</p>
                  <p class="s-light text-nowrap">{{ item.payment_network }}</p>
                </div>
              </div>
            </td>
            <td>
              <strong>
                {{ formatCurrency()(item.received, item.payment_round) }} {{ item.payment_symbol }}
              </strong>
            </td>
            <td>{{ formatDate()(item.created_at, 'dd.MM.yyyy HH:mm:ss') }}</td>
            <td>
              <div class="transaction__table-box">
                <div
                  class="dot-status"
                  :class="
                    item.status == 'Complete'
                      ? 'bg-success'
                      : item.status == 'Incomplete'
                      ? 'bg-yellow'
                      : item.status == 'Cancel'
                      ? 'bg-red'
                      : ''
                  "
                ></div>
                <p class="font-weight-bold">{{ item.status }}</p>
              </div>
            </td>
            <td>
              <div class="transaction__table-links">
                <div class="transaction__table-link">
                  <button
                    class="transaction__table-link-btn"
                    :class="item.was_notified ? 'active' : ''"
                  >
                    <i class="icon-bell"></i>
                  </button>
                  <v-tooltip activator="parent" location="bottom">
                    Se notificó al sistema <br />
                    {{ $t('transactions.notification') }}
                  </v-tooltip>
                </div>
                <div class="transaction__table-link">
                  <button class="transaction__table-link-btn">
                    <i class="icon-bank-send"></i>
                  </button>
                  <v-tooltip activator="parent" location="bottom">{{
                    $t('transactions.sent')
                  }}</v-tooltip>
                </div>
                <div class="transaction__table-link">
                  <button class="transaction__table-link-btn">
                    <i class="icon-bank-warning"></i>
                  </button>
                  <v-tooltip activator="parent" location="bottom">{{
                    $t('transactions.validate')
                  }}</v-tooltip>
                </div>
              </div>
            </td>
            <td>
              <button class="transaction__table-box-dots mx-auto" @click="setDetail(item.uuid)">
                <i class="icon-dots"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- Table Mobile-->
    <div v-if="transactions && transactions.data">
      <div class="table-custom container" v-for="(item, index) in transactions.data" :key="index">
        <div class="container__body">
          <div class="container__body-info">
            <div class="container__body-rows">
              <p class="l-medium">Usuario</p>
              <router-link :to="{ name: 'detail', params: { transaction: item.uuid } }">
                <p class="l-medium suspensive" style="max-width: 150px">
                  {{ item.purchase_email }}
                </p>
              </router-link>
            </div>
            <div class="container__body-rows">
              <p class="l-medium">Medio de pago</p>
              <p class="l-medium">{{ item.payment_method }}</p>
            </div>
            <div class="container__body-rows">
              <p class="l-medium">Valor</p>
              <p class="l-medium">
                {{ formatCurrency()(item.received, item.payment_round) }} {{ item.payment_symbol }}
              </p>
            </div>
            <div class="container__body-rows">
              <p class="l-medium">Fecha</p>
              <p class="l-medium">
                {{ formatDate()(item.created_at, 'dd.MM.yy HH:mm:ss') }}
              </p>
            </div>
            <div class="container__body-rows">
              <p class="l-medium">{{ $t('transactions.status') }}</p>
              <div class="transaction__table-box">
                <div class="transaction__table-box">
                  <div
                    class="dot-status"
                    :class="
                      item.status == 'Complete'
                        ? 'bg-success'
                        : item.status == 'Incomplete'
                        ? 'bg-yellow'
                        : item.status == 'Cancel'
                        ? 'bg-red'
                        : ''
                    "
                  ></div>
                  <p class="font-weight-bold">{{ item.status }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="container__body-links">
            <div class="transaction__table-link">
              <button class="transaction__table-link-btn">
                <i class="icon-bell"></i>
              </button>
            </div>
            <div class="transaction__table-link">
              <button class="transaction__table-link-btn">
                <i class="icon-bank-send"></i>
              </button>
            </div>
            <div class="transaction__table-link">
              <button class="transaction__table-link-btn">
                <i class="icon-bank-warning"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <v-pagination
      v-if="transactions && transactions.meta"
      v-model="payload.page"
      :length="transactions.meta.last_page"
      rounded="circle"
    ></v-pagination>
  </v-card>
  <ModalDetail v-if="isOpen && temp" :transaction_uuid="temp" @close-modal="isOpen = false" />
</template>
<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import Cards from '@/components/Cards.vue'
import ModalDetail from './ModalDetail.vue'
import { getFile, formatCurrency, formatDate } from '@/helpers/Index'
import { useTransactionStore } from '@/modules/transaction/store/transactionStore'
const transactionStore = useTransactionStore()

const props = defineProps({
  uuid: {
    required: true,
    type: String
  }
})

let payload = ref<any>({
  uuid: props.uuid,
  from: null,
  to: null,
  low: null,
  high: null,
  tokens: null,
  statuses: null,
  page: 1,
  search: null
})

const loading = ref<boolean>(false)
const transactions = ref<any>([])
const getTransactions = async () => {
  loading.value = true
  await transactionStore.getTransactions(payload.value).then((response: any) => {
    transactions.value = response
    loading.value = false
  })
}

watch(payload.value, () => {
  getTransactions()
})

const setStatus = (data: any) => {
  payload.value.statuses = data
}

const setDates = (data: any) => {
  payload.value.from = data.from
  payload.value.to = data.to
}

const setAmounts = (data: any) => {
  payload.value.low = data.low
  payload.value.high = data.high
}

onMounted(() => {
  getTransactions()
})

const isOpen = ref(false)
const temp = ref<string | null>(null)

const setDetail = (uuid: string) => {
  temp.value = uuid
  isOpen.value = true
}
</script>
<style lang="scss" scoped>
.transactions {
  display: grid;
  gap: 24px;
  &__header {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    flex-wrap: wrap;
  }
  &__box {
    display: flex;
    gap: 1rem;
    flex-wrap: nowrap;
  }
  &__container {
    display: grid;
    gap: 1rem;
  }
}
.transaction {
  display: flex;
  flex-direction: column;

  @media (max-width: 767px) {
    height: 100vh;
    overflow-y: scroll;
  }

  &__header {
    @media (max-width: 767px) {
      flex-direction: column;
      flex-direction: column-reverse;
    }

    &-search {
      @media (max-width: 767px) {
        width: 100%;
      }
    }

    &-input {
      @media (max-width: 767px) {
        width: 100%;
      }
    }
  }

  &__table {
    @media (max-width: 767px) {
      display: none;
    }

    &-links {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
      @media (max-width: 1060px) {
        height: 24px;
        width: 24px;
        justify-content: unset;
      }
    }

    &-box {
      display: flex;
      align-items: center;
      gap: 8px;

      img {
        max-width: 40px;
        @media (max-width: 1060px) {
          height: 24px;
          width: 24px;
        }
      }

      &-dots {
        display: flex;
        padding: 8px;
        align-items: center;
        border-radius: 12px;
        border: 1px solid #f4f5f8;
        background: #f6f8fa;
        @media (max-width: 1160px) {
          padding: 6px;
          border-radius: 6px;
        }
      }

      &-btn {
        display: flex;
        padding: 7.5rem 7.5rem;
        /* Convertido de 192px a 7.5rem */
        align-items: center;
        gap: 10px;
        /* Convertido de 160px a 6.25rem */
        border-radius: 12px;
        /* Convertido de 160px a 6.25rem */
        border: 1px solid #f4f5f8;
        /* Convertido de 16px a .625rem */
      }
    }

    &-link {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;
      /* Convertido de 64px a 2.5rem */

      .active {
        background: #061461;
        color: white;
      }

      &-btn {
        display: flex;
        padding: 10px;
        /* Convertido de 96px a 3.75rem */
        align-items: center;
        gap: 6.25rem;
        /* Convertido de 160px a 6.25rem */
        border-radius: 0.875rem;
        /* Convertido de 160px a 6.25rem */
        border: none;
        background: #ebf3ff;
        @media (max-width: 1160px) {
          padding: 6px;
          border-radius: 6px;
        }
      }

      &-text {
        color: #3587ff;
        font-size: 12px;
        text-decoration-line: underline;
        @media (max-width: 330px) {
        }
      }
    }
  }

  .table {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    /* Convertido de 256px a 10px */

    &__box {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;

      &-copy {
        display: flex;
        align-items: center;
        gap: 10px;
        /* Convertido de 256px a 10px */

        @media (max-width: 767px) {
          flex-direction: column;
          flex-direction: column-reverse;
          align-items: end;
        }

        &-value {
          @media (max-width: 767px) {
            max-width: 8.125rem;
          }
        }
      }

      &-status {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5rem;
        /* Convertido de 128px a 5rem */
      }
    }
  }

  .card-transaction {
    margin: auto;
    width: 28.125rem;

    @media (max-width: 31.25rem) {
      width: 100%;
    }
  }

  .detalle {
    display: flex;
    align-items: flex-start;
    gap: 15rem;
    /* Convertido de 384px a 15rem */

    @media (max-width: 767px) {
      flex-direction: column;
    }

    &__box {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 5rem;
      /* Convertido de 128px a 5rem */
    }
  }

  .card-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.container {
  display: none;
  flex-direction: column;
  padding: 0;
  margin-bottom: 10px;

  @media (max-width: 767px) {
    display: flex;
  }

  &__button {
    cursor: pointer;
    display: flex;
    padding: 8px;
    align-items: center;
    gap: 10px;
    border-radius: 12px;
    border: 1px solid #f4f5f8;
    background: #f6f8fa;
    &:hover {
      filter: brightness(90%);
    }
  }

  &__header {
    display: flex;
    padding: 16px;
    /* Convertido de 256px a 10px */
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    /* Convertido de 128px a 5rem */
    border-bottom: 1px solid #f4f5f8;
    /* Convertido de 16px a .625rem */
    background: #f9fbfc;
  }

  &__body {
    display: flex;
    padding: 16px;
    /* Convertido de 256px a 10px */
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 10px;
    /* Convertido de 256px a 10px */

    &-info {
      display: flex;
      flex-direction: column;
      gap: 8px;
      /* Convertido de 128px a 5rem */
      width: 100%;
    }

    &-rows {
      display: flex;
      justify-content: space-between;
      gap: 8px;
    }

    &-links {
      width: 100%;
      display: flex;
      padding-top: 1rem;
      justify-content: space-around;
      align-items: center;
      gap: 8px;
      border-top: 0.0625rem solid #f4f5f8;
    }
  }
}

.card-table {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.dot-status {
  width: 8px;
  height: 8px;
  border-radius: 100%;
}

.primary {
  height: 3rem;
  border-radius: 1rem;
}

.table-custom.transaction__table {
  table {
    border-collapse: collapse;
  }
  td,
  th {
    @media (max-width: 1160px) {
      padding: 8px;
      font-size: 12px;
    }
  }
  td,
  th {
    @media (max-width: 850px) {
      padding: 6px;
      font-size: 10px;
    }
  }
}

.transaction__table-link-btn {
  display: flex;
  justify-content: center;
  align-items: center;

  i {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
