<template>
  <section class="users">
    <div class="d-flex align-center justify-space-between">
      <h3 class="h3-bold">{{ $t('users.header') }}</h3>
      <router-link :to="{ name: 'create-user' }">
        <v-btn color="#091D8B" class="text-none text-white primary">{{
          $t('users.btnUser')
        }}</v-btn>
      </router-link>
    </div>
    <v-card class="pa-6">
      <div class="d-flex">
        <v-text-field
          density="compact"
          class="search"
          :placeholder="$t('transactions.search')"
          variant="solo"
        >
          <template v-slot:prepend-inner>
            <i class="icon-search"></i>
          </template>
        </v-text-field>
        <v-btn class="text-none font-weight-bold primary outlined" variant="outlined"
          >{{ $t('transactions.button') }}
        </v-btn>
      </div>
      <!-- view desktop (table) -->
      <div class="table-custom" v-dragscroll>
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
                  <div
                    class="dot-status"
                    :class="
                      item.status === 'Aprovada'
                        ? 'bg-success'
                        : item.status === 'Cancelada'
                        ? 'bg-red'
                        : 'bg-yellow'
                    "
                  ></div>
                  <p class="fw-bold">{{ item.status }}</p>
                </div>
              </td>
              <td>
                <button class="users__btn" @click="isOpen = true">
                  <i class="icon-dots"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- view phone (cards) -->
      <div class="card-custom">
        <div v-for="(item, index) in data" :key="index" class="card">
          <div class="card-body">
            <div class="card-custom__header">
              <p class="fw-bold">{{ item.name }}</p>
              <button class="users__btn" @click="isOpen = true">
                <i class="icon-arrow-right"></i>
              </button>
            </div>

            <div class="card-custom__content">
              <div class="card-custom__item">
                <p>{{ $t('user.email') }}</p>
                <p>{{ item.email }}</p>
              </div>
              <div class="card-custom__item">
                <p>{{ $t('user.date') }}</p>
                <p>{{ item.date }}</p>
              </div>
              <div class="card-custom__item">
                <p>{{ $t('user.permissions') }}</p>
                <p>{{ item.permissions }}</p>
              </div>
              <div class="card-custom__item">
                <p>FEE</p>
                <p>{{ item.fee }}</p>
              </div>
              <div class="card-custom__item">
                <p>{{ $t('user.status') }}</p>
                <div class="users__box">
                  <div
                    class="dot-status"
                    :class="
                      item.status === 'Aprovada'
                        ? 'bg-success'
                        : item.status === 'Cancelada'
                        ? 'bg-danger'
                        : 'bg-warning'
                    "
                  ></div>
                  <p>{{ item.status }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <v-pagination v-model="page" :length="5" rounded="circle" class="mt-4"></v-pagination>
    </v-card>
  </section>
  <!-- Options modal -->
  <teleport to="body">
    <div class="modal" v-if="isOpen == true">
      <div class="modal__content">
        <div class="modal__header">
          <h5 class="h5-bold">{{ $t('user.options') }}</h5>
          <button class="modal__close" @click="isOpen = false">
            <img :src="getFile({ route: 'icons/form', url: 'close', extension: 'svg' })" alt="" />
          </button>
        </div>

        <div class="modal__options">
          <router-link :to="{ name: 'permissions' }" style="text-decoration: none">
            <div class="modal__option">
              <p>{{ $t('user.edit-permissions') }}</p>
              <span><i class="icon-arrow-right"></i></span>
            </div>
          </router-link>
          <router-link :to="{ name: 'payment-method' }" style="text-decoration: none">
            <div class="modal__option">
              <p>{{ $t('user.payment-method') }}</p>
              <span><i class="icon-arrow-right"></i></span>
            </div>
          </router-link>
          <div class="modal__option">
            <p>{{ $t('user.delete') }}</p>
            <span><i class="icon-arrow-right"></i></span>
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { getFile } from '@/helpers/Index'
const isOpen = ref(false)
const page = ref(3)

const data = [
  {
    id: 1,
    name: 'Alberto Style Cortes',
    email: 'Albertostyle@email.com',
    date: '00/00/0000',
    permissions: 'SuperUsuario',
    fee: 'FEE',
    status: 'Aprovada'
  },
  {
    id: 1,
    name: 'Alberto Style Cortes',
    email: 'Albertostyle@email.com',
    date: '00/00/0000',
    permissions: 'SuperUsuario',
    fee: 'FEE',
    status: 'Aprovada'
  },
  {
    id: 1,
    name: 'Alberto Style Cortes',
    email: 'Albertostyle@email.com',
    date: '00/00/0000',
    permissions: 'SuperUsuario',
    fee: 'FEE',
    status: 'Aprovada'
  }
]
</script>
<style lang="scss" scoped>
.users {
  display: grid;
  gap: 2.4rem;

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 767px) {
      flex-direction: column;
      gap: 2.4rem;
      align-items: flex-start;

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

.card-custom {
  display: none;

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    .card {
      overflow: hidden;
    }

    &__header {
      background-color: #f9fbfc;
      outline-color: #f9fbfc;
      outline-width: 2.4rem;
      outline-style: solid;

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
      padding-top: 16px;
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
</style>
