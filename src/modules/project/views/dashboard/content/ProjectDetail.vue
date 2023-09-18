<template>
  <div class="card-big">
    <v-card>
      <div class="main-content">
        <!-- Poject Detail -->
        <div class="card-header">
          <h4 class="h4-semibold">{{ $t("dashboard.detailProject") }}</h4>
        </div>
        <div class="project-chart">
          <ChartProject />
        </div>
        <h5 class="h5-semibold">{{ $t("dashboard.transactions") }}</h5>
        <div class="table-custom">
          <table>
            <thead>
              <tr>
                <th>{{ $t("dashboard.transactionsType") }}</th>
                <th>{{ $t("dashboard.amount") }}</th>
                <th>{{ $t("dashboard.total") }}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div class="table-custom__flex">
                    <div class="dot-status dot-status--success"></div>
                    {{ $t("dashboard.approved") }}
                  </div>
                </td>
                <td>100</td>
                <td>$100.00</td>
              </tr>
              <tr>
                <td>
                  <div class="table-custom__flex">
                    <div class="dot-status dot-status--warning"></div>
                    {{ $t("dashboard.pending") }}
                  </div>
                </td>
                <td>100</td>
                <td>$100.00</td>
              </tr>
              <tr>
                <td>
                  <div class="table-custom__flex">
                    <div class="dot-status dot-status--error"></div>
                    {{ $t("dashboard.cancel") }}
                  </div>
                </td>
                <td>100</td>
                <td>$100.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </v-card>

    <v-card>
      <div class="main-content">
        <!-- Payment Methods -->
        <h5 class="h5-semibold">{{ $t("dashboard.payments") }}</h5>
  
        <div v-for="(item, index) in coins" :key="index" class="payments">
          <div class="payments__coin">
            <img :src="getFile({ route: 'icons', url: `${item.icon}`, extension: 'png' })" alt="" />
            <div>
              <p class="l-medium">{{ item.coin }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
              <p class="s-light text-nowrap">{{ $t(item.value) }}</p>
            </div>
          </div>
  
          <div class="payments__box">
            <p class="s-light">{{ $t(item.transactions) }}</p>
            <p class="l-medium">{{ item.valueTran }}</p>
          </div>
          <div class="payments__box">
            <p class="s-light">{{ $t(item.dollars) }}</p>
            <p class="l-medium">{{ item.valueDollars }}</p>
          </div>
          <div class="payments__box">
            <p class="s-light">{{ $t(item.ammount) }}</p>
            <p class="l-medium">{{ item.ammountValue }}</p>
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
</template>

<script lang="ts" setup>
import { ref } from "vue";
import ChartProject from "./charts/ChartProject.vue";
import getFile from "@/helpers/getFile";
const rows = ref(100);
const currentPage = ref(3);


const coins = [
  {
    icon: "tether",
    coin: "Tether",
    value: "USDT(ERC20)",
    transactions: "dashboard.totalTransactions",
    valueTran: "0",
    dollars: "dashboard.dollarAmount",
    valueDollars: "$0.00",
    ammount: "dashboard.amountTether",
    ammountValue: "$0.00",
  },
  {
    icon: "btc",
    coin: "Bitcoin",
    value: "BTC",
    transactions: "dashboard.totalTransactions",
    valueTran: "0",
    dollars: "dashboard.dollarAmount",
    valueDollars: "$0.00",
    ammount: "dashboard.amountbtc",
    ammountValue: "$0.00",
  },
  {
    icon: "bnb",
    coin: "Binance",
    value: "BNB",
    transactions: "dashboard.totalTransactions",
    valueTran: "0",
    dollars: "dashboard.dollarAmount",
    valueDollars: "$0.00",
    ammount: "dashboard.amountbtc",
    ammountValue: "$0.00",
  },
  {
    icon: "bancolombia",
    coin: "Bancolombia",
    value: "dashboard.saving",
    transactions: "dashboard.totalTransactions",
    valueTran: "0",
    dollars: "dashboard.dollarAmount",
    valueDollars: "$0.00",
    ammount: "dashboard.amountCop",
    ammountValue: "$0.00",
  },
  {
    icon: "bbva",
    coin: "BBVA",
    value: "dashboard.saving",
    transactions: "dashboard.totalTransactions",
    valueTran: "0",
    dollars: "dashboard.dollarAmount",
    valueDollars: "$0.00",
    ammount: "dashboard.amountCop",
    ammountValue: "$0.00",
  },
  {
    icon: "davivienda",
    coin: "Davivienda",
    value: "dashboard.saving",
    transactions: "dashboard.totalTransactions",
    valueTran: "0",
    dollars: "dashboard.dollarAmount",
    valueDollars: "$0.00",
    ammount: "dashboard.amountCop",
    ammountValue: "$0.00",
  },
];
</script>

<style lang="scss" scoped>
.payments {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  padding: 16px;
  gap: 16px;
  background: #fafafa;
  border: 1px solid #dde4ed;
  border-radius: 12px;
  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
  &__coin {
    display: flex;
    gap: 16px;
    align-items: center;
    width: 32px;
    height: 32px;
    flex: 1;
  }
  &__box {
    flex: 1;
  }
  p{
    color: #0A1E8C;
    width: 100%;
  }
}


/* Table */
.table-custom {
  // overflow-x: scroll;
  overflow: hidden;
  border: 1px solid #dde4ed;
  border-radius: 16px;
  table {
    width: 100%;
    border-collapse: collapse;
  }

  tr:nth-child(even){
    background-color: #f9fbfc;

  }
  th,
  td {
    padding: 16px;
  }
  th,
  td {
   text-align: center;
  }
  th:first-child {
    text-align: left;
  }
  th {
    background-color: #f9fbfc;
    color: #0a1e8c;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 600;
    line-height: 17px;
    border-bottom: 1px solid  #F4F5F8;
  }
  &__flex {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  &__center {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 767px){
    
    th,
    td {
      padding: 16px 2px;
    }

    tr {
      th:first-child,td:first-child {
        padding-left: 16px;
      }
      th:last-child,td:last-child {
        padding-right: 16px;
      }
    }
  }
}

.dot-status {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 100%;
}

.dot-status--success{
  background-color: #00B183;
}

.dot-status--warning{
  background-color: #F2C744;
}

.dot-status--disable{
  background-color: #040919;
}
.dot-status--error{
  background-color: #E01E5A;
}
.project {
  &-chart {
    height: 416px;
  }
}

.main-content{
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-self: stretch;

}

.card-big{
  display: flex;
  flex-direction: column;
  gap: 24px;
}

:deep(.v-card){
  padding: 24px;
  border-radius: 16px;
  border: 1px solid #DDE4ED;
}

:deep(.v-btn){
  border-radius: 12px;
  border: 1px solid #F4F5F8;
  color: #001E62;
  width: 40px;
  height: 40px;
  padding: 10px;
  font-size: 14px;

  display: flex;
  justify-content: center;
  align-items: center;
}

:deep(.v-pagination__item.v-pagination__item--is-active .v-btn){
  background: #051255 !important;
  color: #FFF;
}

:global(.v-card--variant-elevated){
  box-shadow: none;
}
</style>
