<template>
    <section class="transactions">
        <h3 class="h3-bold mb-6">{{ $t('transactions.headerTitle') }}</h3>
        <!-- Cards -->
        <Cards icon="coins" :title="$t('transactions.availableBalance')" value="1" icon1="payment"
            :title1="$t('transactions.totalTx')" value1="0" icon2="money" :title2="$t('transactions.txApproved')"
            value2="$0.00" icon3="bank-clock" :title3="$t('transactions.txEarrings')" value3="0" />

        <v-card class="pa-8 rounded-lg mt-8">
            <div class="d-flex align-center justify-space-between">
                <v-text-field class="search" :placeholder="$t('transactions.search')" variant="solo">
                    <template v-slot:prepend-inner>
                        <i class="icon-search"></i>
                    </template>
                </v-text-field>
                <div class="filter d-flex align-center">
                    <FilterBtn />
                    <v-btn class="text-none ml-4 rounded-lg font-weight-bold primary outlined" variant="outlined">{{ $t('transactions.button') }}</v-btn>
                </div>
            </div>

            <!-- Cards 600px-->
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
                            <p class="l-medium">{{ $t("transactions.wallet") }}</p>
                            <p class="l-medium">Your Wallet</p>
                        </div>
                        <div class="container__body-rows">
                            <p class="l-medium">{{ $t("transactions.type") }}</p>
                            <p class="l-medium">{{ item.type }}</p>
                        </div>
                        <div class="container__body-rows">
                            <p class="l-medium">{{ $t("transactions.date") }}</p>
                            <p class="l-medium">{{ item.date }}</p>
                        </div>
                        <div class="container__body-rows">
                            <p class="l-medium">{{ $t("transactions.status") }}</p>
                            <div class="transaction__table-box">
                                <div class="transaction__table-box">
                                    <div class="dot-status" :class="($t(item.status)) === $t('transactions.approved') ? 'bg-success' : ($t(item.status)) === $t('transactions.pending') ? 'bg-danger' : 'bg-warning'
                                        "></div>
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
                            <th>{{ $t("transactions.id") }}</th>
                            <th>{{ $t("transactions.account") }}</th>
                            <th>{{ $t("transactions.wallet") }}</th>
                            <th>{{ $t("transactions.type") }}</th>
                            <th>{{ $t("transactions.date") }}</th>
                            <th>{{ $t("transactions.status") }}</th>
                            <th>{{ $t("transactions.detail") }}</th>
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
                                    <img :src="getFile({route: 'icons', url: `${item.icon}`, extension: 'png'})" alt="" />
                                    <div>
                                        <p class="l-medium">{{ item.type }}</p>
                                        <p class="s-light text-nowrap">{{ $t(item.value) }}</p>
                                    </div>
                                </div>
                            </td>
                            <td>{{ item.date }}</td>
                            <td>
                                <div class="transaction__table-box">
                                    <div class="dot-status" :class="($t(item.status)) === $t('transactions.approved') ? 'bg-success' : ($t(item.status)) === $t('transactions.pending') ? 'bg-red' : 'bg-yellow'
                                        "></div>
                                    <p class="font-weight-bold">{{ $t(item.status) }}</p>
                                </div>
                            </td>
                            <td>
                                <div class="transaction__table-links">
                                    <div class="transaction__table-link">
                                        <router-link :to="{ name: 'send_copy' }" style="text-decoration: none;"
                                            class="text-black">
                                            <button class="transaction__table-link-btn">
                                                <i class="icon-bell"></i>
                                            </button>
                                        </router-link>
                                        <p class="transaction__table-link-text">{{ $t(item.notification) }}</p>
                                    </div>
                                    <div class="transaction__table-link">
                                        <router-link :to="{ name: 'detail' }" style="text-decoration: none;"
                                            class="text-black">
                                            <button class="transaction__table-link-btn">
                                                <i class="icon-bank-send"></i>
                                            </button>
                                        </router-link>
                                        <p class="transaction__table-link-text">{{ $t(item.send) }}</p>
                                    </div>
                                    <div class="transaction__table-link">
                                        <button class="transaction__table-link-btn">
                                            <i class="icon-bank-warning"></i>
                                        </button>
                                        <p class="transaction__table-link-text">{{ $t(item.validate) }}</p>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <button class="transaction__table-box-dots">
                                    <i class="icon-dots"></i>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </v-card>
    </section>
</template>
<script setup lang="ts">
import Cards from '@/components/Cards.vue'
import { getFile } from '@/helpers/Index'



const data = [
    {
        id: 1,
        account: "000000001",
        walletTo: "00000000000",
        icon: "tether",
        type: "Tether",
        value: "USDT",
        date: "00/00/0000",
        status: "transactions.approved",
        notification: "transactions.notification",
        send: "transactions.sent",
        validate: "transactions.validate"
    },
    {
        id: 1,
        account: "000000001",
        walletTo: "00000000000",
        icon: "tether",
        type: "Tether",
        value: "USDT",
        date: "00/00/0000",
        status: "transactions.pending",
        notification: "transactions.notification",
        send: "transactions.sent",
        validate: "transactions.validate"
    },
    {
        id: 1,
        account: "000000001",
        walletTo: "00000000000",
        icon: "tether",
        type: "Tether",
        value: "USDT",
        date: "00/00/0000",
        status: "transactions.cancel",
        notification: "transactions.notification",
        send: "transactions.sent",
        validate: "transactions.validate"
    }, {
        id: 1,
        account: "000000001",
        walletTo: "00000000000",
        icon: "tether",
        type: "Tether",
        value: "USDT",
        date: "00/00/0000",
        status: "transactions.approved",
        notification: "transactions.notification",
        send: "transactions.sent",
        validate: "transactions.validate"
    }



];
</script>
<style lang="scss" scoped>
.transaction {
    display: flex;
    flex-direction: column;

    overflow: hidden;

    @media (max-width: 600px) {
        height: 100vh;
        overflow-y: scroll;
    }

    &__header {
        @media (max-width: 600px) {
            flex-direction: column;
            flex-direction: column-reverse;
        }

        &-search {
            @media (max-width: 600px) {
                width: 100%;
            }
        }

        &-input {
            @media (max-width: 600px) {
                width: 100%;
            }
        }
    }

    &__table {
        @media (max-width: 600px) {
            display: none;
        }

        &-links {
            display: flex;
            align-items: center;
            gap: 20px;
            /* Convertido de 24rem a 240px */
        }

        &-box {
            display: flex;
            align-items: center;
            gap: 8px;
            /* Convertido de 8rem a 80px */

            &-dots {
                display: flex;
                padding: 8px;
                /* Convertido de 8rem a 80px */
                align-items: center;
                border-radius: 12px;
                /* Convertido de 12rem a 120px */
                border: 1px solid #F4F5F8;
                /* Convertido de 1rem a 10px */
                background: #F6F8FA;
            }

            &-btn {
                display: flex;
                padding: 120px 120px;
                /* Convertido de 12rem a 120px */
                align-items: center;
                gap: 100px;
                /* Convertido de 10rem a 100px */
                border-radius: 12px;
                /* Convertido de 10rem a 100px */
                border: 10px solid #F4F5F8;
                /* Convertido de 1rem a 10px */
            }
        }

        &-link {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 10px;
            /* Convertido de 4rem a 40px */

            &-btn {
                display: flex;
                padding: 10px;
                /* Convertido de 6rem a 60px */
                align-items: center;
                gap: 100px;
                /* Convertido de 10rem a 100px */
                border-radius: 14px;
                /* Convertido de 10rem a 100px */
                border: none;
                background: #EBF3FF;
            }

            &-text {
                color: #3587FF;
                text-decoration-line: underline;
            }
        }
    }

    .filter {
        display: flex;
        gap: 40px;
        /* Convertido de 16rem a 160px */

        @media (max-width: 600px) {
            width: 100%;
        }
    }

    .table {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 160px;
        /* Convertido de 16rem a 160px */

        &__box {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;

            &-copy {
                display: flex;
                align-items: center;
                gap: 160px;
                /* Convertido de 16rem a 160px */

                @media (max-width: 600px) {
                    flex-direction: column;
                    flex-direction: column-reverse;
                    align-items: end;
                }

                &-value {
                    @media (max-width: 600px) {
                        max-width: 130px;
                    }
                }
            }

            &-status {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 80px;
                /* Convertido de 8rem a 80px */
            }
        }
    }

    .card-transaction {
        margin: auto;
        width: 450px;

        @media (max-width: 500px) {
            width: 100%;
        }
    }

    .detalle {
        display: flex;
        align-items: flex-start;
        gap: 240px;
        /* Convertido de 24rem a 240px */

        @media (max-width: 600px) {
            flex-direction: column;
        }

        &__box {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            gap: 80px;
            /* Convertido de 8rem a 80px */
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

    @media (max-width: 600px) {
        display: flex;
    }

    &__button {
        background: #F6F8FA;
    }

    &__header {
        display: flex;
        padding: 160px;
        /* Convertido de 16rem a 160px */
        justify-content: space-between;
        align-items: center;
        gap: 80px;
        /* Convertido de 8rem a 80px */
        border-bottom: 10px solid #F4F5F8;
        /* Convertido de 1rem a 10px */
        background: #F9FBFC;
    }

    &__body {
        display: flex;
        padding: 160px;
        /* Convertido de 16rem a 160px */
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 160px;
        /* Convertido de 16rem a 160px */

        &-info {
            display: flex;
            flex-direction: column;
            gap: 80px;
            /* Convertido de 8rem a 80px */
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
            padding-top: 16px;
            justify-content: space-around;
            align-items: center;
            gap: 8px;
            border-top: 1px solid #F4F5F8;


        }

    }

}

.dot-status {
    width: 8px;
    height: 8px;
    border-radius: 100%;
}

:deep(.v-field--variant-solo) {
    border-radius: 12px;
    border: 1px solid var(--border-border-input, #F4F5F8);
    background: var(--inputs-fondo-2, #F6F7F9);
    box-shadow: none;
    color: #394357;
    max-width: 250px;
    width: 100%;

}


.primary {
    height: 48px;
    border-radius: 16px;
}

.outlined {
    border: 1px solid var(--border-border-input, #F4F5F8);
    background: var(--fondos-blanco, #FFF);
    color: #001E62;
}
</style>