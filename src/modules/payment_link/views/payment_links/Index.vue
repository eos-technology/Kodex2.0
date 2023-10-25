<template>
  <section class="payment">
    <Header :title="$t('paymentsLink.header')" :text="$t('paymentsLink.headerBtn')" />
    <div class="card-big">
      <v-card class="pa-4 pa-md-6 rounded-lg elevation-0 border">
        <div class="card-content">
          <div class="card-header">
            <SearchField />
            <FilterBtn />
            <!-- <BaseInput placeholder="Search" class="search" type="search" />
            <FilterBtn /> -->
          </div>

          <!-- view desktop (table) -->
          <div class="table-custom">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>
                    {{ $t('paymentsLink.account') }}
                  </th>
                  <th>
                    {{ $t('paymentsLink.project') }}
                  </th>
                  <th>{{ $t('paymentsLink.type') }}</th>
                  <th>{{ $t('paymentsLink.amount') }}</th>
                  <th>{{ $t('paymentsLink.date') }}</th>
                  <th>{{ $t('paymentsLink.status') }}</th>
                  <th>{{ $t('paymentsLink.active') }}</th>
                  <th>{{ $t('paymentsLink.share') }}</th>
                </tr>
              </thead>
              <tbody v-for="(item, index) in data" :key="index">
                <tr>
                  <td class="payment__link" @click="$router.push({ name: 'config-payments' })">
                    {{ item.id }}
                  </td>
                  <td class="payment__link" @click="$router.push({ name: 'config-payments' })">
                    <div>
                      <p class="b-medium">{{ item.name }}</p>
                      <p class="s-light">{{ item.email }}</p>
                    </div>
                  </td>
                  <td class="payment__link" @click="$router.push({ name: 'config-payments' })">
                    {{ item.project }}
                  </td>
                  <td>{{ item.type }}</td>
                  <td>{{ item.amount }}</td>
                  <td>{{ item.date }}</td>
                  <td>
                    <div class="table-custom__flex">
                      <div
                        class="dot-status"
                        :class="
                          item.status === 'Activo' ? 'dot-status--success' : 'dot-status--disable'
                        "
                      ></div>
                      {{ item.status }}
                    </div>
                  </td>
                  <td>
                    <div class="table-custom__center">
                      <v-switch density="compact" hide-details color="primary" inset></v-switch>
                    </div>
                  </td>
                  <td>
                    <div class="table-custom__center" @click="isOpen = true">
                      <v-dialog width="450">
                        <template v-slot:activator="{ props }">
                          <img
                            v-bind="props"
                            class="share"
                            :src="getFile({ route: 'icons', url: 'save', extension: 'svg' })"
                            alt=""
                          />
                        </template>

                        <template v-slot:default="{ isActive }">
                          <v-card rounded="lg">
                            <div class="modal">
                              <div class="modal__header">
                                <h5 class="h5-bold">{{ $t('paymentsLink.share') }}</h5>
                                <button class="modal__close" @click="isActive.value = false">
                                  <img
                                    :src="
                                      getFile({
                                        route: 'icons/form',
                                        url: 'close',
                                        extension: 'svg'
                                      })
                                    "
                                    alt=""
                                  />
                                </button>
                              </div>
                              <div class="tabs__modal">
                                <v-tabs class="tabs-rounded w-100" v-model="tab">
                                  <v-tab class="w-50" value="one"
                                    ><span class="t-btn">QR</span></v-tab
                                  >
                                  <v-tab class="w-50" value="two"
                                    ><span class="t-btn"
                                      >{{ $t('paymentsLink.email') }}
                                    </span></v-tab
                                  >
                                </v-tabs>
                                <v-window v-model="tab">
                                  <v-window-item class="tabs__content" value="one">
                                    <img
                                      class="img-qr"
                                      :src="
                                        getFile({
                                          route: 'images',
                                          url: 'qr',
                                          extension: 'svg'
                                        })
                                      "
                                      alt=""
                                    />
                                    <label for="copy">
                                      <p class="b-regular mb-1">
                                        {{ $t('paymentsLink.copyShare') }}
                                      </p>
                                      <button class="copy">
                                        <p class="b-medium text-primary text-lowercase">
                                          www.YourLink.com/User
                                        </p>
                                        <i class="icon-copy"></i>
                                      </button>
                                    </label>
                                    <v-btn color="primary" class="btn">{{
                                      $t('download-qr')
                                    }}</v-btn>
                                  </v-window-item>
                                  <v-window-item class="tabs__content" value="two">
                                    <label for="email">
                                      <p class="b-regular mb-1">
                                        {{ $t('paymentsLink.shareByEmail') }}
                                      </p>
                                      <v-text-field
                                        class="inpt"
                                        variant="solo-filled"
                                        placeholder="Example@email.com"
                                        density="compact"
                                        hide-details="auto"
                                        single-line
                                        rounded="lg"
                                        id="email"
                                        type="email"
                                      ></v-text-field>
                                    </label>
                                    <v-btn class="btn" color="primary" @click="step = 2">{{
                                      $t('send')
                                    }}</v-btn>
                                  </v-window-item>
                                </v-window>
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
          <div class="card-custom">
            <div v-for="item in data" :key="item.id" class="card">
              <div class="card-body">
                <div class="card-custom__header">
                  <p @click="$router.push({ name: 'config-payments' })">{{ item.name }}</p>
                  <div class="table-custom__center" @click="isOpen = true">
                    <img
                      class="share"
                      :src="getFile({ route: 'icons', url: 'save', extension: 'svg' })"
                      alt=""
                    />
                  </div>
                </div>

                <div class="card-custom__content">
                  <div class="card-custom__item">
                    <p>{{ $t('paymentsLink.project') }}</p>
                    <p @click="$router.push({ name: 'config-payments' })">{{ item.project }}</p>
                  </div>
                  <div class="card-custom__item">
                    <p>{{ $t('paymentsLink.email') }}</p>
                    <p>{{ item.email }}</p>
                  </div>
                  <div class="card-custom__item">
                    <p>{{ $t('paymentsLink.type') }}</p>
                    <p>{{ item.type }}</p>
                  </div>
                  <div class="card-custom__item">
                    <p>{{ $t('paymentsLink.amount') }}</p>
                    <p>{{ item.amount }}</p>
                  </div>
                  <div class="card-custom__item">
                    <p>{{ $t('paymentsLink.date') }}</p>
                    <p>{{ item.date }}</p>
                  </div>
                  <div class="card-custom__item">
                    <p>{{ $t('paymentsLink.status') }}</p>
                    <div class="d-flex align-center">
                      <div
                        class="dot-status mr-2"
                        :class="
                          item.status === 'Activo' ? 'dot-status--success' : 'dot-status--disable'
                        "
                      ></div>
                      <p>
                        {{ item.status }}
                      </p>
                    </div>
                  </div>
                  <div class="card-custom__item">
                    <p>{{ $t('paymentsLink.active') }}</p>
                    <v-switch hide-details density="compact" inset></v-switch>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <v-pagination
            class="pagination"
            v-model="currentPage"
            :length="rows"
            :total-visible="3"
            align="center"
          ></v-pagination>
        </div>
      </v-card>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import getFile from '@/helpers/getFile'

const isOpen = ref(false)
const step = ref(1)
const tab = ref('one')

const rows = ref(100)
const currentPage = ref(3)
const data = [
  {
    id: 1,
    name: 'Nombre completo',
    email: 'Email@email.com',
    project: 'Nombre proyecto',
    type: 'Type',
    amount: '$0.00',
    date: '00/00/0000',
    status: 'Activo'
  },
  {
    id: 2,
    name: 'Nombre completo',
    email: 'Email@email.com',
    project: 'Nombre proyecto',
    type: 'Type',
    amount: '$0.00',
    date: '00/00/0000',
    status: 'Block'
  }
]

// const switchTab = (content: string) => {
//   const slider = document.querySelector('.v-tab__slider') as HTMLElement;

//   slider.style.setProperty('--content-after', `'${content}'`);
// }
</script>

<style lang="scss" scoped>
.card-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.payment {
  display: grid;
  gap: 1.5rem;

  &__link {
    cursor: pointer;
  }
}

.card-custom {
  display: none;

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    .card {
      overflow: hidden;
      border-radius: 1.25rem;
      border: 0.0625rem solid #dde4ed;
    }

    &__header {
      padding: 0.625rem 1.25rem;
      padding-top: 0.9375rem;
      background-color: #f9fbfc;
      // outline-color: #F9FBFC;
      // outline-width: 1.5rem;
      // outline-style: solid;

      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      p:first-child {
        color: #0a1e8c;
        font-size: 0.875rem;
        font-weight: 500;
      }

      p {
        color: #0a1e8c;
        font-size: 0.75rem;
        font-weight: 300;
      }
    }

    &__content {
      display: flex;
      flex-direction: column;
      gap: 0.3125rem;
      padding: 0.625rem 1.25rem;
      padding-bottom: 0.9375rem;

      :deep(.v-input) {
        flex: none;
      }
    }

    &__item {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      p {
        color: #0a1e8c;
        font-size: 0.875rem;
        font-weight: 400;
      }

      p:first-child {
        font-weight: 500;
      }
    }
  }
}

.share {
  cursor: pointer;
}

.table-custom {
  table {
    border-collapse: collapse !important;
  }

  tr {
    td:first-child,
    td:nth-child(2),
    th {
      color: #051255;
    }
  }
}

.card-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.dot-status {
  display: inline-block;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 100%;
}

.dot-status--success {
  background-color: #00b183;
}

.dot-status--warning {
  background-color: #f2c744;
}

.dot-status--disable {
  background-color: #040919;
}
.dot-status--error {
  background-color: #e01e5a;
}
</style>

<style>
h3 {
  color: #0a1e8c;
}
h5 {
  color: #0a1e8c;
}

.img-qr {
  @media (max-width: 350px) {
    height: 200px;
    width: 200px;
  }
}

.copy {
  display: flex;
  justify-content: space-between;
  height: 44px;
  padding: 12px 16px;
  align-items: center;
  gap: 4px;
  border-radius: 12px;
  border: 1px solid #dde4ed;
  background: #f6f8fa;
  width: 100%;
  &:hover {
    filter: brightness(90%);
  }
}

.icon-copy {
  display: flex;
  padding: 6px;
  align-items: center;
  gap: 7.5px;
  border-radius: 9px;
  border: 0px solid #f4f5f8;
  background: #3587ff;
  color: #fff;
  font-size: 12px;
  cursor: pointer;
}
</style>
