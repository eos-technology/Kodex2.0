<template>
  <section class="reports">
    <h3 class="h3-bold">{{ $t('reports.header') }}</h3>
    <router-link :to="{ name: 'reports' }" style="text-decoration: none" class="text-black">
      <BackDummy />
    </router-link>
    <div class="card-big reports__card" v-if="!selectedMethod">
      <v-card class="pa-4 pa-md-6 rounded-lg border elevation-0">
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
          <i class="icon-arrow-right" style="font-size: 1.5rem;"></i>
        </div>
      </v-card>
    </div>
    <div class="card-big reports__card" v-if="selectedMethod">
      <v-card class="pa-4 pa-md-6 rounded-lg border elevation-0">
        <h3 class="h3-bold">{{ $t('reports.typeReport') }}</h3>
        <p class="l-light mt-4">{{ $t('reports.selectCategory') }}</p>
        <div class="mt-6">
          <label class="b-regular">{{ $t('reports.label') }}</label>
          <v-select
            density="compact"
            class="inpt mt-1"
            :placeholder="$t('reports.select')"
            variant="solo-filled"
            menu-icon="mdi-chevron-down"
          ></v-select>
        </div>
        <div class="reports__date">
          <h4 class="l-semibold mb-4">{{ $t('reports.dateReport') }}</h4>
          <v-radio-group>
            <div class="d-flex align-center justify-space-between">
              <p class="l-light">{{ $t('reports.lastWeek') }}</p>
              <div>
                <v-radio value="1" color="#091D8B"></v-radio>
              </div>
            </div>
            <div class="d-flex align-center justify-space-between">
              <p class="l-light">{{ $t('reports.monthly') }}</p>
              <div>
                <v-radio value="2" color="#091D8B"></v-radio>
              </div>
            </div>
            <div class="d-flex align-center justify-space-between">
              <p class="l-light">{{ $t('reports.quarterly') }}</p>
              <div>
                <v-radio value="3" color="#091D8B"></v-radio>
              </div>
            </div>
            <div class="d-flex align-center justify-space-between">
              <p class="l-light">{{ $t('reports.biannual') }}</p>
              <div>
                <v-radio value="4" color="#091D8B"></v-radio>
              </div>
            </div>
            <div class="d-flex align-center justify-space-between">
              <p class="l-light">{{ $t('reports.dateRange') }}</p>
              <div>
                <v-radio value="5" color="#091D8B"></v-radio>
              </div>
            </div>
          </v-radio-group>
          <div class="d-flex align-center justify-space-between">
            <div class="w-100 mr-4 date-box">
              <label class="b-regular">{{ $t('reports.startDate') }}</label>
              <v-text-field
                class="inpt"
                density="compact"
                type="date"
                variant="solo-filled"
              >
                <template v-slot:prepend-inner>
                  <i class="icon-calendar" style="color: #394357;"></i>
                </template>
              </v-text-field>
            </div>
            <div class="w-100 date-box">
              <label class="b-regular">{{ $t('reports.endDate') }}</label>
              <v-text-field
                class="inpt"
                density="compact"
                type="date"
                variant="solo-filled"
              >
                <template v-slot:prepend-inner>
                  <i class="icon-calendar" style="color: #394357;"></i>
                </template>
              </v-text-field>
            </div>
          </div>

          <v-btn @click="$router.push({ name: 'details' })" class="btn w-100" color="primary">{{
            $t('reports.generateBtn')
          }}</v-btn>

          <v-btn
            @click="$router.push({ name: 'reports' })"
            color="secondary"
            variant="outlined"
            class="btn w-100 mt-4"
            ><p class="text-primary">{{ $t('reports.btnCancel') }}</p></v-btn
          >
        </div>
      </v-card>
    </div>
  </section>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { getFile } from '@/helpers/Index'

const selectedMethod = ref<boolean>(false)

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

:deep(.v-field__field){
  input[type=date]{
    flex-direction: row-reverse;
    gap: 0.5rem;
    margin-left: -25px;
  }

  input[type=date]::-webkit-calendar-picker-indicator{
    color: transparent;
    opacity: 0;
  }
}
</style>
