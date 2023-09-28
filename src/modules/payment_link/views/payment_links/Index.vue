<template>
  <section class="payment">
    <Header :title="$t('paymentsLink.header')" :text="$t('paymentsLink.headerBtn')" />
    <div class="card-big">
      <v-card>
        <div class="card-content">
          <div class="card-header">
            <SearchField />
            <FilterBtn />
            <!-- <BaseInput placeholder="Search" class="search" type="search" />
            <FilterBtn /> -->
          </div>

          <!-- view desktop (table) -->
          <div class="table-custom" v-dragscroll>
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
                      <v-switch inset></v-switch>
                    </div>
                  </td>
                  <td>
                    <div class="table-custom__center" @click="isOpen = true">
                      <img
                        class="share"
                        :src="getFile({ route: 'icons', url: 'save', extension: 'svg' })"
                        alt=""
                      />
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
                    <p>
                      {{ item.status }}
                    </p>
                    <div
                      class="dot-status"
                      :class="
                        item.status === 'Activo' ? 'dot-status--success' : 'dot-status--disable'
                      "
                    ></div>
                  </div>
                  <div class="card-custom__item">
                    <p>{{ $t('paymentsLink.active') }}</p>
                    <v-switch inset></v-switch>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <v-pagination
            v-model="currentPage"
            :length="rows"
            :total-visible="7"
            align="center"
          ></v-pagination>
        </div>
      </v-card>
    </div>
  </section>

  <!-- Modal -->
  <teleport to="body">
    <div class="modal" v-if="isOpen">
      <div class="modal__content" v-if="step === 1">
        <div class="modal__header">
          <h5 class="h5-bold">{{ $t('paymentsLink.share') }}</h5>
          <button class="modal__close" @click="isOpen = false">
            <img :src="getFile({ route: 'icons/form', url: 'close', extension: 'svg' })" alt="" />
          </button>
        </div>

        <div class="tabs__modal">
          <v-tabs v-model="tab">
            <v-tab value="one"><span class="t-btn">QR</span></v-tab>
            <v-tab value="two"
              ><span class="t-btn">{{ $t('paymentsLink.email') }} </span></v-tab
            >
          </v-tabs>

          <v-window v-model="tab">
            <v-window-item value="one">
              <img :src="getFile({ route: 'images', url: 'qr', extension: 'svg' })" alt="" />
              <label for="email">{{ $t('paymentsLink.copyShare') }}</label
              ><br />
              <input type="text" class="modal__input" placeholder="www.YourLink.com/User" />
              <!-- <BaseInput label="Copia y comparte su Link" class="modal__input" placeholder="www.YourLink.com/User" /> -->
              <v-btn color="primary" class="w-100 mt-5 py-3 px-4">{{ $t('download-qr') }}</v-btn>
            </v-window-item>

            <v-window-item value="two">
              <label for="email">{{ $t('paymentsLink.shareByEmail') }}</label
              ><br />
              <input type="text" class="modal__input" placeholder="Example@email.com" />
              <!-- <BaseInput label="Compartir vía email" class="modal__input" placeholder="Example@email.com" /> -->
              <v-btn color="primary" class="w-100 mt-5 py-3 px-4" @click="step = 2">{{
                $t('send')
              }}</v-btn>
            </v-window-item>
          </v-window>
        </div>
      </div>
    </div>
  </teleport>
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

.table-custom {
  @media (max-width: 767px) {
    display: none;
  }
}

.modal {
  position: absolute;
  top: 0;
  left: 0;
  background-color: #000000c5;
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

  .tabs__modal {
    img {
      display: block;
      margin: 0 auto 32px;
    }

    :deep(.v-btn) {
      flex: 1;
      border: none;
      font-weight: 300;
      color: #fff;
      font-size: 14px;

      &::after {
        display: none;
      }
    }

    :deep(.v-btn.v-slide-group-item--active.v-tab--selected) {
      background-color: #fff;
      border-radius: 100px;
      box-shadow: 0px 10px 15px -3px rgba(16, 24, 40, 0.1), 0px 4px 6px -4px rgba(16, 24, 40, 0.1);
      font-weight: 500;
    }
  }

  .t-btn {
    color: #0a1e8c;
  }

  &__input {
    width: 400px;
    border-radius: 12px;
    border: 1px solid #dde4ed;
    background: linear-gradient(0deg, #f6f7f7 0%, #f6f7f7 100%), #f6f8fa;
    padding: 12px 16px;
    font-size: 14px;

    &:focus-visible {
      outline: none;
    }

    @media (max-width: 767px) {
      width: 85vw;
    }
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
    gap: 32px;
    background-color: #fff;
    padding: 24px;
    border-radius: 16px;

    @media (max-width: 767px) {
      border-radius: 16px 16px 0 0;
    }
  }
}

.payment {
  display: grid;
  gap: 24px;

  &__link {
    cursor: pointer;
  }
}

.card-custom {
  display: none;

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    gap: 24px;

    .card {
      overflow: hidden;
      border-radius: 20px;
      border: 1px solid #dde4ed;
    }

    &__header {
      padding: 10px 20px;
      padding-top: 15px;
      background-color: #f9fbfc;
      // outline-color: #F9FBFC;
      // outline-width: 24px;
      // outline-style: solid;

      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      p:first-child {
        color: #0a1e8c;
        font-size: 14px;
        font-weight: 500;
      }

      p {
        color: #0a1e8c;
        font-size: 12px;
        font-weight: 300;
      }
    }

    &__content {
      display: flex;
      flex-direction: column;
      gap: 5px;
      padding: 10px 20px;
      padding-bottom: 15px;

      :deep(.v-input) {
        flex: none;
      }

      :deep(.v-selection-control__input) {
        height: fit-content;
      }

      :deep(.v-switch.v-switch--inset .v-selection-control__wrapper) {
        height: fit-content;
      }

      :deep(.v-switch .v-selection-control) {
        min-height: auto;
      }
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
  gap: 24px;
}

.dot-status {
  display: inline-block;
  width: 8px;
  height: 8px;
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

:deep(.v-card) {
  padding: 24px;
  border-radius: 16px;
  border: 1px solid #dde4ed;
}

:deep(.v-tab--selected .v-tab__slider) {
  display: none;
}

:deep(.v-slide-group__content) {
  background: #f6f8fa;
  border-radius: 100px;
  padding: 4px;
  overflow: hidden;
}

:deep(.v-pagination__item.v-pagination__item--is-active .v-btn) {
  background: #051255 !important;
  color: #fff;
}

:deep(.v-switch__track) {
  background-color: #e9ecf1;
  opacity: 1;
}

:deep(.v-selection-control--dirty .v-switch__thumb) {
  color: #fff;
}

:deep(.v-input__details) {
  display: none;
}

:deep(
    .v-selection-control.v-selection-control--dirty.v-selection-control--density-default
      .v-switch__track
  ) {
  background-color: #091d8b;
}

:deep(.v-window) {
  margin-top: 32px;
}

:global(.v-card--variant-elevated) {
  box-shadow: none !important;
}
</style>

<style>
h3 {
  color: #0a1e8c;
}
h5 {
  color: #0a1e8c;
}
</style>
