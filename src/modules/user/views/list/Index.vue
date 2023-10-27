<template>
  <section class="users">
    <div class="d-flex align-center justify-space-between">
      <h3 class="h3-bold">{{ $t('users.header') }}</h3>
      <v-btn color="primary" class="btn" @click="users = true">{{ $t('users.btnUser') }}</v-btn>
    </div>
    <v-card class="pa-4 pa-md-6 rounded-lg border elevation-0">
      <div class="users__content">
        <div class="users__header">
          <v-text-field :placeholder="$t('transactions.search')" variant="solo-filled" hide-details density="compact"
            class="inpt inpt-search">
            <template v-slot:prepend-inner>
              <i class="icon-search"></i>
            </template>
          </v-text-field>
          <v-btn class="btn" color="secondary" variant="outlined">
            <p class="btn-line">{{ $t('transactions.button') }}</p>
          </v-btn>
        </div>
        <!-- view desktop (table) -->
        <div class="table-custom">
          <table>
            <thead>
              <tr>
                <th>
                  <p class="fw-bold">ID</p>
                </th>
                <th>
                  <p class="fw-bold">{{ $t('user.completeName') }}</p>
                </th>
                <th>
                  <p class="fw-bold">{{ $t('user.date') }}</p>
                </th>
                <th>
                  <p class="fw-bold">{{ $t('user.permissions') }}</p>
                </th>
                <th>
                  <p class="fw-bold">FEE</p>
                </th>
                <th>
                  <p class="fw-bold">{{ $t('user.status') }}</p>
                </th>
                <th></th>
              </tr>
            </thead>
            <tbody v-for="(item, index) in data" :key="index">
              <tr>
                <td>
                  <p class="fw-bold">{{ item.id }}</p>
                </td>
                <td>
                  <div>
                    <p class="b-medium fw-bold">{{ item.name }}</p>
                    <p class="s-light">{{ item.email }}</p>
                  </div>
                </td>
                <td>
                  {{ item.date }}
                </td>
                <td>{{ item.permissions }}</td>
                <td>{{ item.fee }}</td>
                <td>
                  <div class="users__box">
                    <div class="dot-status" :class="item.status === 'Aprobada'
                      ? 'bg-success'
                      : item.status === 'Cancelada'
                        ? 'bg-red'
                        : 'bg-yellow'
                      "></div>
                    <p class="fw-bold">{{ item.status }}</p>
                  </div>
                </td>
                <td>
                  <div class="table-custom__center">
                    <v-dialog width="450">
                      <template v-slot:activator="{ props }">
                        <i v-bind="props" class="icon-dots share-btn"></i>
                      </template>

                      <template v-slot:default="{ isActive }">
                        <v-card class="modal__card" rounded="lg">
                          <div class="modal">
                            <div class="modal__header">
                              <h5 class="h5-bold">{{ $t('user.options') }}</h5>
                              <button class="modal__close" @click="isActive.value = false">
                                <img :src="getFile({ route: 'icons/form', url: 'close', extension: 'svg' })
                                  " alt="" />
                              </button>
                            </div>
                            <div class="modal__options">
                              <div class="modal__option" @click="permission = true">
                                <p>{{ $t('user.edit-permissions') }}</p>
                                <span><i class="icon-arrow-right"></i></span>
                              </div>
                              <div class="modal__option" @click="method = true">
                                <p>{{ $t('user.payment-method') }}</p>
                                <span><i class="icon-arrow-right"></i></span>
                              </div>
                              <div class="modal__option">
                                <p>{{ $t('user.delete') }}</p>
                                <span><i class="icon-arrow-right"></i></span>
                              </div>
                            </div>
                          </div>
                        </v-card>
                      </template>
                    </v-dialog>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- view phone (cards) -->
        <div class="cards-custom">
          <v-card v-for="(item, index) in data" :key="index">
            <div class="cards-custom__header">
              <p class="fw-bold">{{ item.name }}</p>

              <v-dialog width="450">
                <template v-slot:activator="{ props }">
                  <v-btn v-bind="props" size="32" flat class="users__btn">
                    <i class="icon-arrow-right"></i>
                  </v-btn>
                </template>

                <template v-slot:default="{ isActive }">
                  <v-card class="modal__card" rounded="lg">
                    <div class="modal">
                      <div class="modal__header">
                        <h5 class="h5-bold">{{ $t('user.options') }}</h5>
                        <button class="modal__close" @click="isActive.value = false">
                          <img :src="getFile({ route: 'icons/form', url: 'close', extension: 'svg' })" alt="" />
                        </button>
                      </div>
                      <div class="modal__options">
                        <div class="modal__option" @click="permission = true">
                          <p>{{ $t('user.edit-permissions') }}</p>
                          <span><i class="icon-arrow-right"></i></span>
                        </div>
                        <div class="modal__option" @click="method = true">
                          <p>{{ $t('user.payment-method') }}</p>
                          <span><i class="icon-arrow-right"></i></span>
                        </div>
                        <div class="modal__option">
                          <p>{{ $t('user.delete') }}</p>
                          <span><i class="icon-arrow-right"></i></span>
                        </div>
                      </div>
                    </div>
                  </v-card>
                </template>
              </v-dialog>
            </div>
            <div class="cards-body">
              <div class="cards-custom__content">
                <div class="cards-custom__item">
                  <p>{{ $t('user.email') }}</p>
                  <p>{{ item.email }}</p>
                </div>
                <div class="cards-custom__item">
                  <p>{{ $t('user.date') }}</p>
                  <p>{{ item.date }}</p>
                </div>
                <div class="cards-custom__item">
                  <p>{{ $t('user.permissions') }}</p>
                  <p>{{ item.permissions }}</p>
                </div>
                <div class="cards-custom__item">
                  <p>FEE</p>
                  <p>{{ item.fee }}</p>
                </div>
                <div class="cards-custom__item">
                  <p>{{ $t('user.status') }}</p>
                  <div class="users__box">
                    <div class="dot-status" :class="item.status === 'Aprobada'
                      ? 'bg-success'
                      : item.status === 'Cancelada'
                        ? 'bg-danger'
                        : 'bg-warning'
                      "></div>
                    <p>{{ item.status }}</p>
                  </div>
                </div>
              </div>
            </div>
          </v-card>
        </div>
        <v-pagination class="pagination" v-model="currentPage" :length="rows" :total-visible="3"
          align="center"></v-pagination>
      </div>
    </v-card>


    <v-dialog width="450" v-model="permission">
      <v-card rounded="lg">
        <div class="modal">
          <div class="modal__header">
            <h5 class="h5-bold">{{ $t('user.edit-permissions') }}</h5>
            <button class="modal__close" @click="permission = false">
              <img :src="getFile({
                route: 'icons/form',
                url: 'close',
                extension: 'svg'
              })
                " alt="" />
            </button>
          </div>
          <div class="rounded-lg d-flex flex-column" v-if="!saved">
            <p class="l-light mt-4">{{ $t('user.permissions-text') }}</p>
            <div class="d-flex flex-column mt-4" v-for="(item, index) in permissions" :key="index">
              <div class="d-flex align-center justify-space-between">
                <p class="l-light">{{ item.name }}</p>
                <div>
                  <v-switch density="compact" hide-details color="primary" inset></v-switch>
                </div>
              </div>
            </div>
            <v-btn class="mt-4 btn" color="primary" @click="saved = true"> {{ $t('user.save') }}</v-btn>
            <router-link :to="{ name: 'user' }">
              <v-btn variant="outlined" class="mt-4 btn w-100" color="secondary">
                <p class="text-primary">{{ $t('users.cancel') }}</p>
              </v-btn>
            </router-link>
          </div>
          <div class=" rounded-lg d-flex flex-column align-center text-center" v-if="saved">
            <div>
              <img src="@/assets/images/ready.webp" alt="" />
            </div>
            <h3 class="h3-bold">{{ $t('reports.allDone') }}</h3>
            <p class="l-light mt-4">
              {{ $t('reports.permission') }} <span class="font-weight-bold">NombreUsuario</span>
              {{ $t('reports.permission2') }}<span class="font-weight-bold"> NombreProyecto</span>
            </p>
            <v-btn class="btn w-100 mt-4" color="primary" @click="permission = false">{{ $t('transactions.back')
            }}</v-btn>
          </div>
        </div>
      </v-card>
    </v-dialog>
    <v-dialog width="450" v-model="method">
      <v-card rounded="lg">
        <div class="modal">
          <div class="modal__header">
            <h5 class="h5-bold">{{ $t('reports.method') }}</h5>
            <button class="modal__close" @click="method = false">
              <img :src="getFile({
                route: 'icons/form',
                url: 'close',
                extension: 'svg'
              })
                " alt="" />
            </button>
          </div>
        </div>
        <div class="d-flex flex-column pa-6" v-if="!selectedMethod">
          <p class="l-light">{{ $t('reports.selectMethod') }}</p>
          <div class="reports__card-box mt-4" v-for="(item, index) in coins" :key="index" @click="selectedMethod = true">
            <div class="reports__card-icon">
              <div>
                <img :src="getFile({ route: 'icons', url: `${item.icon}`, extension: 'png' })" alt="" />
              </div>
              <div>
                <p class="l-medium">{{ item.coin }}</p>
                <p class="s-light text-nowrap">{{ $t(item.value) }}</p>
              </div>
            </div>
            <i class="icon-arrow-right"></i>
          </div>
        </div>
        <div class="d-flex flex-column pa-6" v-if="selectedMethod && !savedMethod">
          <h3 class="h5-bold">Tether USDT</h3>
          <p class="l-light mt-4">{{ $t('users.describe') }}</p>
          <div class="mt-6">
            <label class="b-regular">{{ $t('reports.label') }}</label>
            <v-text-field class="inpt" density="compact" placeholder="Your Wallet" variant="solo-filled"></v-text-field>
          </div>
          <v-btn class="mt-4 w-100 btn" color="primary" @click="savedMethod = true">{{
            $t('reports.generate')
          }}</v-btn>
          <v-btn color="secondary" variant="outlined" class="btn mt-4 w-100">
            <p class="text-primary">{{ $t('reports.btnCancel') }}</p>
          </v-btn>
        </div>
        <div class="d-flex flex-column pa-6 align-center text-center" v-if="savedMethod">
          <div>
            <img src="@/assets/images/ready.webp" alt="" />
          </div>
          <h3 class="h3-bold">{{ $t('reports.allDone') }}</h3>
          <p class="l-light mt-4">
            {{ $t('users.saveWallet') }} <span class="font-weight-bold">Tether USDT</span>
            {{ $t('users.user') }} <span class="font-weight-bold">NombreUsuario</span>
          </p>
          <v-btn class="mt-6 w-100 btn" color="primary" @click="method = false">{{ $t('transactions.back') }}</v-btn>
        </div>
      </v-card>
    </v-dialog>
    <v-dialog width="450" v-model="users">
      <v-card rounded="lg">
        <div class="modal">
          <div class="modal__header">
            <h5 class="h5-bold">{{ $t('users.btnUser') }}</h5>
            <button class="modal__close" @click="users = false">
              <img :src="getFile({
                route: 'icons/form',
                url: 'close',
                extension: 'svg'
              })
                " alt="" />
            </button>
          </div>
        </div>
        <div class="d-flex flex-column pa-6" v-if="!send">
          <p class="l-light">{{ $t('users.description') }}</p>
          <div class="b-regular mt-8">
            <span>{{ $t('users.email') }}</span>
            <v-text-field density="compact" placeholder="Example@mail.com" variant="solo-filled"
              class="inpt"></v-text-field>
          </div>
          <div class="b-regular">
            <span>{{ $t('users.feeProject') }}</span>
            <v-text-field density="compact" placeholder="0.00%" variant="solo-filled" class="inpt"></v-text-field>
          </div>
          <v-btn class="btn" color="primary" @click="send = true"> {{ $t('users.send') }}</v-btn>
          <v-btn variant="outlined" color="secondary" class="btn w-100 mt-6" @click="users = false">
            <p class="text-primary">{{ $t('users.cancel') }}</p>
          </v-btn>
        </div>
        <div class="d-flex flex-column pa-6 align-center" v-if="send">
          <div>
            <img src="@/assets/images/ready.webp" alt="" />
          </div>
          <h3 class="h3-bold">{{ $t('reports.allDone') }}</h3>
          <p class="l-light mt-4">
            {{ $t('reports.sendEmail') }} <span class="font-weight-bold">email@email.com</span>
          </p>
          <v-btn class="btn w-100 mt-6" color="primary" @click="users = false">{{ $t('transactions.back')
          }}</v-btn>
        </div>
      </v-card>
    </v-dialog>



  </section>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { getFile } from '@/helpers/Index'

const permission = ref(false)
const method = ref(false)
const users = ref(false)
const rows = ref(100)
const currentPage = ref(3)

const saved = ref<boolean>(false)
const send = ref<boolean>(false)
const selectedMethod = ref<boolean>(false)
const savedMethod = ref<boolean>(false)




const coins = [
  {
    icon: 'tether',
    coin: 'Tether',
    value: 'USDT'
  },
  {
    icon: 'btc',
    coin: 'Bitcoin',
    value: 'BTC'
  },
  {
    icon: 'bnb',
    coin: 'Binance',
    value: 'BNB'
  },
  {
    icon: 'eth',
    coin: 'Etherium',
    value: 'ETH'
  }
]

const data = [
  {
    id: 1,
    name: 'Alberto Style Cortes',
    email: 'Albertostyle@email.com',
    date: '00/00/0000',
    permissions: 'SuperUsuario',
    fee: 'FEE',
    status: 'Aprobada'
  },
  {
    id: 1,
    name: 'Alberto Style Cortes',
    email: 'Albertostyle@email.com',
    date: '00/00/0000',
    permissions: 'SuperUsuario',
    fee: 'FEE',
    status: 'Aprobada'
  },
  {
    id: 1,
    name: 'Alberto Style Cortes',
    email: 'Albertostyle@email.com',
    date: '00/00/0000',
    permissions: 'SuperUsuario',
    fee: 'FEE',
    status: 'Aprobada'
  }
]

const permissions = [
  {
    name: 'Text'
  },
  {
    name: 'Text'
  },
  {
    name: 'Text'
  },
  {
    name: 'Text'
  },
  {
    name: 'Text'
  },
  {
    name: 'Text'
  }
]
</script>
<style lang="scss" scoped>
.users {
  display: grid;
  gap: 2.4rem;

  &__content {
    display: grid;
    gap: 24px;
    width: 100%;
  }

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    @media (max-width: 450px) {
      flex-direction: column-reverse;

      button {
        width: 100%;
      }
    }
  }

  &__box {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  &__card {
    margin: auto;
    display: flex;
    width: 450px;
    flex-direction: column;
    align-items: flex-start;

    &-ready {
      text-align: center;
    }

    &-box {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1.6rem;
      gap: 1.6rem;
      background: #fafafa;
      border: 1px solid #dde4ed;
      border-radius: 12px;
      cursor: pointer;
    }

    &-icon {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    @media (max-width: 767px) {
      width: 100%;
    }
  }

  &__btn {
    display: flex;
    padding: 8px;
    align-items: center;
    gap: 10px;
    border-radius: 12px;
    border: 1px solid #f4f5f8;
    background: #f6f8fa;
  }

  &__link {
    cursor: pointer;
  }

  @media (max-width: 767px) {
    .table-custom {
      display: none;
    }
  }
}

.cards-custom {
  display: none;

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    .cards {
      &-body {
        padding: 1rem;
      }
    }

    &__header {
      padding: 1rem;
      background-color: #f9fbfc;
      outline-color: #f9fbfc;

      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      p {
        color: #0a1e8c;
        font-size: 14px;
        font-weight: 500;
      }
    }

    &__content {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    &__item {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      p {
        color: #0a1e8c;
        font-size: 14px;
        font-weight: 400;
      }

      p:first-child {
        font-weight: 500;
      }
    }
  }
}

.dot-status {
  width: 8px;
  height: 8px;
  border-radius: 100%;
}

.primary {
  height: 48px;
  border-radius: 16px;
}

.outlined {
  border: 1px solid var(--border-border-input, #f4f5f8);
  background: var(--fondos-blanco, #fff);
  color: #001e62;
}


.reports {

  &__card {
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;


    &-box {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px;
      background: #fafafa;
      border: 1px solid #dde4ed;
      border-radius: 12px;
      cursor: pointer;
    }

    &-icon {
      display: flex;
      align-items: center;
      gap: 8px;
    }
  }
}
</style>
