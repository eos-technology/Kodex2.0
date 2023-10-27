<template>
  <section class="reports">
    <h3 class="h3-bold">{{ $t('reports.header') }}</h3>
    <router-link :to="{ name: 'reports' }" style="text-decoration: none" class="text-black">
      <BackDummy />
    </router-link>
    <v-card class="pa-4 pa-md-6 rounded-lg border elevation-0">
      <div class="d-flex align-center justify-space-between">
        <v-text-field
          class="inpt inpt-search"
          :placeholder="$t('transactions.search')"
          elevation-0
          density="compact"
          hide-details
          variant="solo-filled"
          clearable 
        >
          <template v-slot:prepend-inner>
            <i class="icon-search"></i>
          </template>
        </v-text-field>
        <div class="filter d-flex align-center btn-actions">
          <router-link
            style="text-decoration: none"
            class="text-black"
            :to="{ name: 'send_report' }"
          >
            <v-btn class="btn" variant="outlined" color="secondary">
              <p class="text-primary">{{ $t('reports.sendReport') }}</p>
            </v-btn>
          </router-link>
          <v-btn class="btn" color="primary">{{ $t('reports.sendDownload') }}</v-btn>
        </div>
      </div>
      <!-- desktop view (table) -->
      <div class="table-custom mt-6" v-dragscroll>
        <table>
          <thead>
            <tr>
              <th>
                <p class="fw-bold">ID</p>
              </th>
              <th>
                <p class="fw-bold">{{ $t('reports.name') }}</p>
              </th>
              <th>
                <p class="fw-bold">{{ $t('reports.reference') }}</p>
              </th>
              <th>
                <p class="fw-bold">{{ $t('reports.product') }}</p>
              </th>
              <th>
                <p class="fw-bold">{{ $t('reports.date') }}</p>
              </th>
              <th>
                <p class="fw-bold">{{ $t('reports.amount') }}</p>
              </th>
              <th>
                <p class="fw-bold">{{ $t('reports.state') }}</p>
              </th>
            </tr>
          </thead>
          <tbody >
            <tr v-for="(item, index) in data" :key="index">
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
                {{ item.reference }}
              </td>
              <td>{{ item.product }}</td>
              <td>{{ item.date }}</td>
              <td>{{ item.amount }}</td>
              <td>
                <div class="d-flex align-center">
                  <div
                    class="dot-status mr-2"
                    :class="
                      item.status === 'Aprovada'
                        ? 'bg-success'
                        : item.status === 'Cancelado'
                        ? 'bg-red'
                        : 'bg-yellow'
                    "
                  ></div>
                  <p class="font-weight-bold">{{ $t(item.status) }}</p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- phone view (cards) -->
      <div class="card-custom">
        <div v-for="(item, index) in data" :key="index" class="card">
          <div class="card-body">
            <div class="card-custom__header">
              <p>{{ item.name }}</p>
              <p>{{ item.email }}</p>
            </div>

            <div class="card-custom__content">
              <div class="card-custom__item">
                <p>{{ $t('reports.reference') }}</p>
                <p>{{ item.reference }}</p>
              </div>
              <div class="card-custom__item">
                <p>{{ $t('reports.product') }}</p>
                <p>{{ item.product }}</p>
              </div>
              <div class="card-custom__item">
                <p>{{ $t('reports.date') }}</p>
                <p>{{ item.date }}</p>
              </div>
              <div class="card-custom__item">
                <p>{{ $t('reports.amount') }}</p>
                <p>{{ item.amount }}</p>
              </div>
              <div class="card-custom__item">
                <p>{{ $t('reports.status') }}</p>

                <div
                  class="dot-status"
                  :class="
                    item.status === 'Aprovada'
                      ? 'bg-success'
                      : item.status === 'Cancelado'
                      ? 'bg-danger'
                      : 'bg-warning'
                  "
                ></div>
                <p>
                  {{ item.status }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <v-pagination v-model="page" :length="5"  class="mt-4 pagination"></v-pagination>
    </v-card>
  </section>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const page = ref(3)
const data = [
  {
    id: 1,
    name: 'Alberto Style Cortes',
    email: 'Albertostyle@email.com',
    reference: '87123689789123',
    product: 'Producto',
    date: '00/00/0000',
    amount: '$0.00',
    status: 'Aprovada'
  },
  {
    id: 1,
    name: 'Alberto Style Cortes',
    email: 'Albertostyle@email.com',
    reference: '87123689789123',
    product: 'Producto',
    date: '00/00/0000',
    amount: '$0.00',
    status: 'Pendiente'
  },
  {
    id: 1,
    name: 'Alberto Style Cortes',
    email: 'Albertostyle@email.com',
    reference: '87123689789123',
    product: 'Producto',
    date: '00/00/0000',
    amount: '$0.00',
    status: 'Cancelado'
  },
  {
    id: 1,
    name: 'Alberto Style Cortes',
    email: 'Albertostyle@email.com',
    reference: '87123689789123',
    product: 'Producto',
    date: '00/00/0000',
    amount: '$0.00',
    status: 'Pendiente'
  },
  {
    id: 1,
    name: 'Alberto Style Cortes',
    email: 'Albertostyle@email.com',
    reference: '87123689789123',
    product: 'Producto',
    date: '00/00/0000',
    amount: '$0.00',
    status: 'Cancelado'
  }
]
</script>
<style lang="scss" scoped>
.reports {
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 767px) {
      display: flex;
      flex-direction: column;
      gap: 2.4rem;
      align-items: flex-start;

      button {
        width: 100%;
      }
    }
  }

  &__card {
    margin: auto;
    display: flex;

    flex-direction: column;
    align-items: flex-start;

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
  }

  &__text {
    text-align: center;
  }

  &__date {
    display: flex;
    flex-direction: column;
    gap: 16px;

    &-inputs {
      display: flex;
      align-items: center;
      gap: 16px;

      @media (max-width: 767px) {
        flex-direction: column;
      }
    }

    &-base {
      width: 100%;
    }
  }

  .header-table {
    @media (max-width: 767px) {
      display: flex;
      flex-direction: column-reverse;

      .header-buttons {
        display: flex;
        flex-direction: column;
        gap: 2.4rem;
        width: 100%;

        button {
          width: 100%;
        }
      }
    }
  }

  .table-custom {
    table tr:nth-child(2n){
      background-color: #F8F9FB;
    }
    
    td{
      color: #0A1E8C;
    }

    td:last-child{
      display: flex;
      justify-content: center;
      align-items: center;
    }

    @media (max-width: 767px) {
      display: none;
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
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;

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

.btn-actions{
  gap: 1rem;
}
</style>
