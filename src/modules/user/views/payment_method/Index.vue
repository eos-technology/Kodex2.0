<template>
  <section class="reports">
    <h3 class="h3-bold">{{ $t('users.header') }}</h3>
    <router-link :to="{ name: 'user' }" style="text-decoration: none" class="text-black">
      <BackDummy />
    </router-link>
    <div class="card-big reports__card" v-if="!selectedMethod">
      <v-card class="pa-6">
        <h3 class="h3-bold">{{ $t('reports.method') }}</h3>
        <p class="mt-4">{{ $t('reports.selectMethod') }}</p>
        <div
          class="reports__card-box mt-4"
          v-for="(item, index) in coins"
          :key="index"
          @click="selectedMethod = true"
        >
          <div class="reports__card-icon">
            <div>
              <img
                :src="getFile({ route: 'icons', url: `${item.icon}`, extension: 'png' })"
                alt=""
              />
            </div>
            <div>
              <p class="l-medium">{{ item.coin }}</p>
              <p class="s-light text-nowrap">{{ $t(item.value) }}</p>
            </div>
          </div>
          <i class="icon-arrow-right"></i>
        </div>
      </v-card>
    </div>
    <div class="card-big reports__card" v-if="selectedMethod && !saved">
      <v-card class="pa-6" style="max-width: 450px">
        <h3 class="h3-bold">Tether USDT</h3>
        <p class="l-light mt-4">{{ $t('users.describe') }}</p>
        <div class="mt-6">
          <label class="b-regular">{{ $t('reports.label') }}</label>
          <v-text-field density="compact" placeholder="Your Wallet" variant="solo"></v-text-field>
        </div>
        <v-btn
          class="text-none text-white mt-4 w-100 primary"
          color="#091D8B"
          @click="saved = true"
          >{{ $t('reports.generate') }}</v-btn
        >
        <router-link :to="{ name: 'user' }">
          <v-btn variant="outlined" class="text-none mt-4 w-100 primary outlined">{{
            $t('reports.btnCancel')
          }}</v-btn>
        </router-link>
      </v-card>
    </div>
    <div class="card-big reports__card d-flex flex-column align-center text-center" v-if="saved">
      <v-card class="pa-6" style="max-width: 450px">
        <div>
          <img src="@/assets/images/ready.webp" alt="" />
        </div>
        <h3 class="h3-bold">{{ $t('reports.allDone') }}</h3>
        <p class="l-light mt-4">
          {{ $t('users.saveWallet') }} <span class="font-weight-bold">Tether USDT</span>
          {{ $t('users.user') }} <span class="font-weight-bold">NombreUsuario</span>
        </p>
        <router-link :to="{ name: 'user' }" class="w-100">
          <v-btn class="text-none text-white mt-6 w-100 primary" color="#091D8B">{{
            $t('transactions.back')
          }}</v-btn>
        </router-link>
      </v-card>
    </div>
  </section>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { getFile } from '@/helpers/Index'

const selectedMethod = ref<boolean>(false)
const saved = ref<boolean>(false)

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
</script>
<style lang="scss" scoped>
.reports {
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

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
