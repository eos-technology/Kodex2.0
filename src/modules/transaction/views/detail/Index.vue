<template>
    <section class="detail">
        <h3 class="h3-bold mb-6">{{ $t('transactions.headerTitle') }}</h3>
        <router-link :to="{ name: 'transactions' }" style="text-decoration: none;" class="text-black">
            <BackDummy />
        </router-link>

        <v-card class="pa-6 mt-8 rounded-lg">
            <div class="card-header detalle">
                <h3 class="h3-bold">{{ $t('transactions.detailTransaction') }}</h3>
                <div class="transaction__table-box detalle">
                    <div class="transaction__table-link detalle__box">
                        <button class="transaction__table-link-btn">
                            <i class="icon-bell"></i>
                        </button>
                        <p class="transaction__table-link-text">{{ $t('transactions.notification') }}</p>
                    </div>
                    <div class="transaction__table-link detalle__box">
                        <button class="transaction__table-link-btn">
                            <i class="icon-bank-send"></i>
                        </button>
                        <p class="transaction__table-link-text">{{ $t('transactions.sent') }}</p>
                    </div>
                    <div class="transaction__table-link detalle__box">
                        <button class="transaction__table-link-btn">
                            <i class="icon-bank-warning"></i>
                        </button>
                        <p class="transaction__table-link-text">{{ $t('transactions.validate') }}</p>
                    </div>
                </div>
            </div>
            <div class="">
                <div class="d-flex align-center justify-space-between mt-10">
                    <p>{{ $t('transactions.idTransaction') }}</p>
                    <div class="d-flex align-center">
                        <button class="transaction__table-box-btn mr-6"><i class="icon-copy"></i>{{
                            $t('transactions.btnCopy')
                        }}</button>
                        <p class="fw-bold  table__box-copy-value font-weight-bold">Tp5MueB2cZk1f9846ctjdryPt6mMde56giu95</p>
                    </div>
                </div>
                <div class="d-flex align-center justify-space-between mt-2">
                    <p>{{ $t('transactions.name') }}</p>
                    <p class="fw-bold font-weight-bold">Alberto Style</p>
                </div>
                <div class="d-flex align-center justify-space-between mt-2">
                    <p>{{ $t('transactions.email') }}</p>
                    <p class="fw-bold table__box-copy-value font-weight-bold">Albertostyle@email.com</p>
                </div>
                <div class="d-flex align-center justify-space-between mt-2">
                    <p>{{ $t('transactions.money') }}</p>
                    <p class="fw-bold font-weight-bold">Tether(USDT)</p>
                </div>
                <div class="d-flex align-center justify-space-between mt-2">
                    <p>{{ $t('transactions.quantity') }}</p>
                    <p class="fw-bold font-weight-bold">780</p>
                </div>
                <div class="d-flex align-center justify-space-between mt-2">
                    <p>{{ $t('transactions.commission') }}</p>
                    <p class="fw-bold font-weight-bold">20</p>
                </div>
                <div class="d-flex align-center justify-space-between mt-2">
                    <p>{{ $t('transactions.walletDatail') }}</p>
                    <div class="d-flex align-center">
                        <button class="transaction__table-box-btn mr-6"><i class="icon-copy"></i>{{
                            $t('transactions.btnCopy')
                        }}</button>
                        <p class="fw-bold table__box-copy-value font-weight-bold">Tp5MueB2cZk1f9846ctjdryPt6mMde56giu95</p>
                    </div>
                </div>
                <div class="d-flex align-center justify-space-between mt-2">
                    <p>{{ $t('transactions.creationDetail') }}</p>
                    <p class="fw-bold font-weight-bold">0000/00/00 00:00</p>
                </div>
                <div class="d-flex align-center justify-space-between mt-2">
                    <p>{{ $t('transactions.paymentDate') }}</p>
                    <p class="fw-bold font-weight-bold">0000/00/00 00:00</p>
                </div>
                <div class="d-flex align-center justify-space-between mt-2">
                    <p>{{ $t('transactions.accountDetail') }}</p>
                    <p class="fw-bold table__box-copy-value font-weight-bold">Tp5MueB2cZk1f9846ctjdryPt6mMde56giu95</p>
                </div>
                <div class="d-flex align-center justify-space-between mt-2">
                    <p>Hash</p>
                    <div class="d-flex align-center">
                        <button class="transaction__table-box-btn mr-6"><i class="icon-copy"></i>{{
                            $t('transactions.btnCopy')
                        }}</button>
                        <p class="fw-bold table__box-copy-value font-weight-bold">Tp5MueB2cZk1f9846ctjdryPt6mMde56giu95</p>
                    </div>
                </div>
                <div class="d-flex align-center justify-space-between mt-2">
                    <p>{{ $t('transactions.result') }}</p>
                    <div class="table__box-status">
                        <div class="dot-status bg-success"></div>
                        <p class="fw-bold font-weight-bold">{{ $t('transactions.approved') }}</p>
                    </div>
                </div>
                <div class="d-flex align-center justify-space-between mt-2">
                    <p>{{ $t('transactions.statusDetail') }}</p>
                    <div class="table__box-status">
                        <div class="dot-status bg-warning"></div>
                        <p class="fw-bold font-weight-bold">{{ $t('transactions.approved') }}</p>
                    </div>
                </div>
                <div class="d-flex align-center justify-space-between mt-2">
                    <p>{{ $t('transactions.confirmed') }}</p>
                    <p class="fw-bold font-weight-bold">Chain cloud</p>
                </div>
                <div class="d-flex align-center justify-space-between mt-2">
                    <p>{{ $t('transactions.block') }}</p>
                    <p class="fw-bold font-weight-bold">484685361</p>
                </div>
                <div class="d-flex align-center justify-space-between mt-2">
                    <p>{{ $t('transactions.quantitySRS') }}</p>
                    <p class="fw-bold font-weight-bold">6</p>
                </div>
                <div class="d-flex align-center justify-space-between mt-2">
                    <p>{{ $t('transactions.resources') }}</p>
                    <p class="fw-bold font-weight-bold">345 TRX</p>
                </div>
            </div>
        </v-card>
    </section>
</template>
<script setup lang="ts">


</script>
<style lang="scss" scoped>

.transaction {
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
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
      gap: 24px;

    }

    &-box {
      display: flex;
      align-items: center;
      gap: 8px;




      &-dots {
        display: flex;
        padding: 8px;
        align-items: center;
        gap: 10px;
        border-radius: 12px;
        border: 1px solid #F4F5F8;
        background: #F6F8FA;

      }

      &-btn {
        display: flex;
        padding: 8px 12px;
        align-items: center;
        gap: 10px;
        border-radius: 10px;
        border: 1px solid #F4F5F8;
      }
    }

    &-link {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 4px;

      &-btn {
        display: flex;
        padding: 6px;
        align-items: center;
        gap: 10px;
        border-radius: 10px;
        border: none;
        background: #EBF3FF;


      }

      &-text {
        color: #3587FF;
        font-family: Urbanist;
        font-size: 12px;
        font-style: normal;
        font-weight: 500;
        line-height: 140%;
        text-decoration-line: underline;
      }
    }

  }



  .filter {
    display: flex;
    gap: 16px;

    @media (max-width: 600px) {
      width: 100%;


    }

  }

  .table {
    display: flex;
    flex-direction: column;
    gap: 16px;

    &__box {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;


      &-copy {
        display: flex;
        align-items: center;
        gap: 16px;

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
        gap: 8px;
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
    gap: 24px;

    @media (max-width: 600px) {
      flex-direction: column;
    }

    &__box {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 8px;
    }

  }

  .card-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }



}
.detalle {
    display: flex;
    justify-content: space-between;
    gap: 24px;

    @media (max-width: 600px) {
      flex-direction: column;
    }

    &__box {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 8px;
    }

  }


</style>