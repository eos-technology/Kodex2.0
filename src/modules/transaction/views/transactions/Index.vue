<template>
  <section class="transactions">
    <h3 class="h3-bold mb-6">{{ $t('transactions.headerTitle') }}</h3>
    <!-- Cards -->
    <div class="cards">
      <Cards
        class="cards__item"
        icon="coins"
        :title="$t('transactions.availableBalance')"
        value="1"
      />
      <Cards class="cards__item" icon="payment" :title="$t('transactions.totalTx')" value="0" />
      <Cards
        class="cards__item"
        icon="money"
        :title="$t('transactions.txApproved')"
        value="$0.00"
      />
      <Cards
        class="cards__item"
        icon="bank-clock"
        :title="$t('transactions.txEarrings')"
        value="0"
      />
    </div>

    <v-card class="card-table pa-4 pa-md-6 rounded-lg">
      <div class="transactions__header">
        <v-text-field :placeholder="$t('transactions.search')" variant="solo" hide-details="auto">
          <template v-slot:prepend-inner>
            <i class="icon-search"></i>
          </template>
        </v-text-field>
        <div class="transactions__box">
          <FilterBtn />
          <v-btn class="outline-btn text-none rounded-lg" variant="outlined">{{
            $t('transactions.button')
          }}</v-btn>
        </div>
      </div>

      <!-- Cards 37.5rem-->
      <div class="table-custom container" v-for="(item, index) in data" :key="index">
        <div class="container__header">
          <div>
            <p class="l-medium">{{ item.account }}</p>
          </div>
          <div>
            <!-- <b-button variant="outline" class="container__button"><img src="../../../../assets/icons/ArrowNext.png"
                  alt=""></b-button> -->
          </div>
        </div>
        <div class="container__body">
          <div class="container__body-info">
            <div class="container__body-rows">
              <p class="l-medium">{{ $t('transactions.wallet') }}</p>
              <p class="l-medium">Your Wallet</p>
            </div>
            <div class="container__body-rows">
              <p class="l-medium">{{ $t('transactions.type') }}</p>
              <p class="l-medium">{{ item.type }}</p>
            </div>
            <div class="container__body-rows">
              <p class="l-medium">{{ $t('transactions.date') }}</p>
              <p class="l-medium">{{ item.date }}</p>
            </div>
            <div class="container__body-rows">
              <p class="l-medium">{{ $t('transactions.status') }}</p>
              <div class="transaction__table-box">
                <div class="transaction__table-box">
                  <div
                    class="dot-status"
                    :class="
                      $t(item.status) === $t('transactions.approved')
                        ? 'bg-success'
                        : $t(item.status) === $t('transactions.pending')
                        ? 'bg-danger'
                        : 'bg-warning'
                    "
                  ></div>
                  <p class="font-weight-bold">{{ $t(item.status) }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="container__body-links">
            <div class="transaction__table-link">
              <router-link :to="{ name: 'detail' }">
                <button class="transaction__table-link-btn">
                  <i class="icon-bell"></i>
                </button>
              </router-link>
              <p class="transaction__table-link-text">{{ $t(item.notification) }}</p>
            </div>
            <div class="transaction__table-link">
              <button class="transaction__table-link-btn">
                <i class="icon-bank-send"></i>
              </button>
              <p class="transaction__table-link-text">{{ $t(item.send) }}</p>
            </div>
            <div class="transaction__table-link">
              <button class="transaction__table-link-btn">
                <i class="icon-bank-warning"></i>
              </button>
              <p class="transaction__table-link-text">{{ $t(item.validate) }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Table -->
      <div class="table-custom transaction__table" v-dragscroll>
        <table class="">
          <thead class="">
            <tr>
              <th>{{ $t('transactions.id') }}</th>
              <th>{{ $t('transactions.account') }}</th>
              <th>{{ $t('transactions.wallet') }}</th>
              <th>{{ $t('transactions.type') }}</th>
              <th>{{ $t('transactions.date') }}</th>
              <th>{{ $t('transactions.status') }}</th>
              <th>{{ $t('transactions.detail') }}</th>
              <th></th>
            </tr>
          </thead>
          <tbody v-for="(item, index) in data" :key="index">
            <tr>
              <td>
                <p class="l-medium">{{ item.id }}</p>
              </td>
              <td>{{ item.account }}</td>
              <td>{{ item.walletTo }}</td>
              <td>
                <div class="transaction__table-box">
                  <img
                    :src="getFile({ route: 'icons', url: `${item.icon}`, extension: 'png' })"
                    alt=""
                  />
                  <div>
                    <p class="l-medium">{{ item.type }}</p>
                    <p class="s-light text-nowrap">{{ $t(item.value) }}</p>
                  </div>
                </div>
              </td>
              <td>{{ item.date }}</td>
              <td>
                <div class="transaction__table-box">
                  <div
                    class="dot-status"
                    :class="
                      $t(item.status) === $t('transactions.approved')
                        ? 'bg-success'
                        : $t(item.status) === $t('transactions.pending')
                        ? 'bg-yellow'
                        : 'bg-red'
                    "
                  ></div>
                  <p class="font-weight-bold">{{ $t(item.status) }}</p>
                </div>
              </td>
              <td>
                <div class="transaction__table-links">
                  <div class="transaction__table-link">
                    <router-link
                      :to="{ name: 'send_copy' }"
                      style="text-decoration: none"
                      class="text-black"
                    >
                      <button class="transaction__table-link-btn">
                        <i class="icon-bell"></i>
                      </button>
                    </router-link>
                    <v-tooltip activator="parent" location="bottom">{{
                      $t(item.notification)
                    }}</v-tooltip>
                    <!-- <p class="transaction__table-link-text">{{ $t(item.notification) }}</p> -->
                  </div>
                  <div class="transaction__table-link">
                    <router-link
                      :to="{ name: 'detail' }"
                      style="text-decoration: none"
                      class="text-black"
                    >
                      <button class="transaction__table-link-btn">
                        <i class="icon-bank-send"></i>
                      </button>
                    </router-link>
                    <v-tooltip activator="parent" location="bottom">{{ $t(item.send) }}</v-tooltip>
                    <!-- <p class="transaction__table-link-text">{{ $t(item.send) }}</p> -->
                  </div>
                  <div class="transaction__table-link">
                    <button class="transaction__table-link-btn">
                      <i class="icon-bank-warning"></i>
                    </button>
                    <v-tooltip activator="parent" location="bottom">{{
                      $t(item.validate)
                    }}</v-tooltip>
                    <!-- <p class="transaction__table-link-text">{{ $t(item.validate) }}</p> -->
                  </div>
                </div>
              </td>
              <td>
                <button class="transaction__table-box-dots" @click="isOpen = true">
                  <i class="icon-dots"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </v-card>
  </section>
  <!-- Options modal -->
  <teleport to="body">
    <div class="modal" v-if="isOpen === true">
      <div class="modal__content">
        <div class="modal__header">
          <h5 class="h5-bold">{{ $t('user.options') }}</h5>
          <button class="modal__close" @click="isOpen = false">
            <img :src="getFile({ route: 'icons/form', url: 'close', extension: 'svg' })" alt="" />
          </button>
        </div>

        <div class="modal__options">
          <router-link :to="{ name: 'detail' }" style="text-decoration: none">
            <div class="modal__option">
              <p>{{ $t('transactions.seeDetail') }}</p>
              <span><i class="icon-arrow-right"></i></span>
            </div>
          </router-link>
          <router-link :to="{ name: 'send_copy' }" style="text-decoration: none">
            <div class="modal__option">
              <p>{{ $t('transactions.sendMail') }}</p>
              <span><i class="icon-arrow-right"></i></span>
            </div>
          </router-link>
          <div class="modal__option">
            <p>{{ $t('transactions.downloadTax') }}</p>
            <span><i class="icon-arrow-right"></i></span>
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import Cards from '@/components/Cards.vue'
import { getFile } from '@/helpers/Index'

const isOpen = ref(false)

const data = [
  {
    id: 1,
    account: '000000001',
    walletTo: '00000000000',
    icon: 'tether',
    type: 'Tether',
    value: 'USDT',
    date: '00/00/0000',
    status: 'transactions.approved',
    notification: 'transactions.notification',
    send: 'transactions.sent',
    validate: 'transactions.validate'
  },
  {
    id: 1,
    account: '000000001',
    walletTo: '00000000000',
    icon: 'tether',
    type: 'Tether',
    value: 'USDT',
    date: '00/00/0000',
    status: 'transactions.pending',
    notification: 'transactions.notification',
    send: 'transactions.sent',
    validate: 'transactions.validate'
  },
  {
    id: 1,
    account: '000000001',
    walletTo: '00000000000',
    icon: 'tether',
    type: 'Tether',
    value: 'USDT',
    date: '00/00/0000',
    status: 'transactions.cancel',
    notification: 'transactions.notification',
    send: 'transactions.sent',
    validate: 'transactions.validate'
  },
  {
    id: 1,
    account: '000000001',
    walletTo: '00000000000',
    icon: 'tether',
    type: 'Tether',
    value: 'USDT',
    date: '00/00/0000',
    status: 'transactions.approved',
    notification: 'transactions.notification',
    send: 'transactions.sent',
    validate: 'transactions.validate'
  }
]
</script>
<style lang="scss" scoped>
.transactions {
  display: grid;
  gap: 24px;
  &__header {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    flex-wrap: nowrap;
    height: 44px;
    :deep(.v-field--variant-solo) {
      border-radius: 0.75rem;
      border: 0.0625rem solid #f4f5f8;
      background: #f6f7f9;
      box-shadow: none;
      color: #394357;
      max-width: 250px;
      min-width: 200px;
      width: 100%;
      padding: 12px 16px;
    }
    :deep(.v-field__input) {
      padding: 0;
      margin: 0;
      min-height: unset;
      align-items: center;
    }
    :deep(.v-text-field input) {
      margin: 0;
      margin-left: 8px;
      height: 20px;
    }
  }
  &__box {
    display: flex;
    gap: 1rem;
    flex-wrap: nowrap;
  }
}
.transaction {
  display: flex;
  flex-direction: column;

  overflow: hidden;

  @media (max-width: 37.5rem) {
    height: 100vh;
    overflow-y: scroll;
  }

  &__header {
    @media (max-width: 37.5rem) {
      flex-direction: column;
      flex-direction: column-reverse;
    }

    &-search {
      @media (max-width: 37.5rem) {
        width: 100%;
      }
    }

    &-input {
      @media (max-width: 37.5rem) {
        width: 100%;
      }
    }
  }

  &__table {
    @media (max-width: 37.5rem) {
      display: none;
    }

    &-links {
      display: flex;
      align-items: center;
      gap: 1.25rem;
      /* Convertido de 384px a 15rem */
    }

    &-box {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      /* Convertido de 128px a 5rem */

      &-dots {
        display: flex;
        padding: 0.5rem;
        /* Convertido de 128px a 5rem */
        align-items: center;
        border-radius: 0.75rem;
        /* Convertido de 192px a 7.5rem */
        border: 0.0625rem solid #f4f5f8;
        /* Convertido de 16px a .625rem */
        background: #f6f8fa;
      }

      &-btn {
        display: flex;
        padding: 7.5rem 7.5rem;
        /* Convertido de 192px a 7.5rem */
        align-items: center;
        gap: 6.25rem;
        /* Convertido de 160px a 6.25rem */
        border-radius: 0.75rem;
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
      gap: 0.625rem;
      /* Convertido de 64px a 2.5rem */

      &-btn {
        display: flex;
        padding: 0.625rem;
        /* Convertido de 96px a 3.75rem */
        align-items: center;
        gap: 6.25rem;
        /* Convertido de 160px a 6.25rem */
        border-radius: 0.875rem;
        /* Convertido de 160px a 6.25rem */
        border: none;
        background: #ebf3ff;
      }

      &-text {
        color: #3587ff;
        text-decoration-line: underline;
      }
    }
  }

  .table {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10rem;
    /* Convertido de 256px a 10rem */

    &__box {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;

      &-copy {
        display: flex;
        align-items: center;
        gap: 10rem;
        /* Convertido de 256px a 10rem */

        @media (max-width: 37.5rem) {
          flex-direction: column;
          flex-direction: column-reverse;
          align-items: end;
        }

        &-value {
          @media (max-width: 37.5rem) {
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

    @media (max-width: 37.5rem) {
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

  @media (max-width: 37.5rem) {
    display: flex;
  }

  &__button {
    background: #f6f8fa;
  }

  &__header {
    display: flex;
    padding: 10rem;
    /* Convertido de 256px a 10rem */
    justify-content: space-between;
    align-items: center;
    gap: 5rem;
    /* Convertido de 128px a 5rem */
    border-bottom: 0.625rem solid #f4f5f8;
    /* Convertido de 16px a .625rem */
    background: #f9fbfc;
  }

  &__body {
    display: flex;
    padding: 10rem;
    /* Convertido de 256px a 10rem */
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 10rem;
    /* Convertido de 256px a 10rem */

    &-info {
      display: flex;
      flex-direction: column;
      gap: 5rem;
      /* Convertido de 128px a 5rem */
      width: 100%;
    }

    &-rows {
      display: flex;
      justify-content: space-between;
      gap: 0.5rem;
    }

    &-links {
      width: 100%;
      display: flex;
      padding-top: 1rem;
      justify-content: space-around;
      align-items: center;
      gap: 0.5rem;
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
  width: 0.5rem;
  height: 0.5rem;
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

.outline-btn {
  border-radius: 12px;
  border: 1px solid #f4f5f8;
  color: #051255;
  width: fit-content;
  height: 44px;
  padding: 10px 16px;
  font-size: 17px;
  font-weight: 600;
  line-height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: capitalize;
}

.modal {
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.774);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 767px) {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    align-items: flex-end;
  }

  &__header {
    display: flex;
    justify-content: space-between;
  }

  &__close {
    display: grid;
    place-content: center;
    padding: 8px;
    background: #f6f8fa;
    border-radius: 100px;
    border: none;
    width: 32px;
    height: 32px;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 24px;
    background-color: #fff;
    padding: 24px;
    border-radius: 1.6rem;
    width: 450px;

    @media (max-width: 767px) {
      border-radius: 1.6rem 1.6rem 0 0;
      width: 100vw;
    }
  }

  &__options {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
  }

  &__option {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

    p {
      color: #001e62;
      font-weight: 300;
    }
  }
}
</style>
