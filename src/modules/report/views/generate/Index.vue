<template>
    <section class="reports">
        <h3 class="h3-bold">{{ $t('reports.header') }}</h3>
        <router-link :to="{ name: 'reports' }" style="text-decoration: none;" class="text-black">
            <BackDummy />
        </router-link>
        <div class="card-big reports__card" v-if="!selectedMethod">
            <v-card class="pa-6">
                <h3 class="h3-bold">{{ $t('reports.method') }}</h3>
                <p class="mt-4">{{ $t('reports.selectMethod') }}</p>
                <div class="reports__card-box mt-4" v-for="(item, index) in coins" :key="index"
                    @click="selectedMethod = true">
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
            </v-card>
        </div>
        <div class="card-big reports__card" v-if="selectedMethod">
            <v-card class="pa-6">
                <h3 class="h3-bold">{{ $t('reports.typeReport') }}</h3>
                <p class="l-light">{{ $t('reports.selectCategory') }}</p>
                <div>
                    <label class="b-regular">{{ $t('reports.label') }}</label>
                    <v-select :placeholder="$t('reports.select')" variant="solo" menu-icon="mdi-chevron-down"></v-select>
                </div>
                <div class="reports__date">
                    <h4 class="l-semibold">{{ $t('reports.dateReport') }}</h4>
                    <v-radio-group>

                        <div class="d-flex align-center justify-space-between">
                            <p class="l-light">{{ $t('reports.lastWeek') }}</p>
                            <v-radio value="1"></v-radio>
                        </div>
                        <div class="d-flex align-center justify-space-between">
                            <p class="l-light">{{ $t('reports.lastWeek') }}</p>
                            <v-radio value="1"></v-radio>
                        </div>
                    </v-radio-group>
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
        icon: "tether",
        coin: "Tether",
        value: "USDT",
    },
    {
        icon: "btc",
        coin: "Bitcoin",
        value: "BTC",
    },
    {
        icon: "bnb",
        coin: "Binance",
        value: "BNB"
    },
    {
        icon: "eth",
        coin: "Etherium",
        value: "ETH",
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

:deep(.v-field) {
    border-radius: 12px;
    border: 1px solid var(--border-border-input, #F4F5F8);
    background: var(--inputs-fondo-2, #F6F7F9);
    box-shadow: none;
}
</style>