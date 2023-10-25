<template>
  <section class="detail">
    <h3 class="h3-bold mb-6">{{ $t('transactions.headerTitle') }}</h3>
    <router-link :to="{ name: 'transactions' }" style="text-decoration: none" class="text-black">
      <BackDummy />
    </router-link>

    <div class="detail__header">
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
        <!-- Content
        <div class="d-info">
          
          
          
          
          
          
          
          
          <div class="d-info__header d-info__account">
            <p>{{ $t('transactions.accountDetail') }}</p>
            <p class="l-medium">Tp5MueB2cZk1f9846ctjdryPt6mMde56giu95</p>
          </div>
          
          

          <div class="d-info__header">
            <p>{{ $t('transactions.statusDetail') }}</p>
            <div class="table__box-status">
              <div class="dot-status bg-warning"></div>
              <p class="fw-bold font-weight-bold">{{ $t('transactions.approved') }}</p>
            </div>
          </div>
          <div class="d-info__header">
            <p>{{ $t('transactions.confirmed') }}</p>
            <p class="fw-bold font-weight-bold">Chain cloud</p>
          </div>
          <div class="d-info__header">
            <p>{{ $t('transactions.block') }}</p>
            <p class="fw-bold font-weight-bold">484685361</p>
          </div>
          <div class="d-info__header">
            <p>{{ $t('transactions.quantitySRS') }}</p>
            <p class="fw-bold font-weight-bold">6</p>
          </div>
          <div class="d-info__header">
            <p>{{ $t('transactions.resources') }}</p>
            <p class="fw-bold font-weight-bold">345 TRX</p>
          </div>
        </div> -->
      </v-card>
    </div>

    <div class="detail__content">
      <v-card class="pa-6 mt-8 rounded-lg">
        <div class="d-info">
          <div class="d-info__group">
            <p>{{ $t('transactions.idTransaction') }}</p>
            <div class="d-info__copy">
              <p class="l-medium">Tp5MueB2cZk1f9846ctjdryPt6mMde56giu95</p>
              <button class="d-info__btn">
                <i class="icon-copy"></i>{{ $t('transactions.btnCopy') }}
              </button>
            </div>
          </div>


          <div class="d-info__header">
            <p>{{ $t('transactions.name') }}</p>
            <p class="l-medium">Alberto Style</p>
          </div>

          <div class="d-info__header">
            <p>{{ $t('transactions.email') }}</p>
            <p class="l-medium">Albertostyle@email.com</p>
          </div>

          <div class="d-info__header">
            <p>{{ $t('transactions.money') }}</p>
            <p class="l-medium">Tether(USDT)</p>
          </div>

          <div class="d-info__header">
            <p>{{ $t('transactions.quantity') }}</p>
            <p class="l-medium">780</p>
          </div>

          <div class="d-info__header">
            <p>{{ $t('transactions.commission') }}</p>
            <p class="l-medium">20</p>
          </div>
        </div>
      </v-card>

      <v-card class="pa-6 mt-8 rounded-lg">
        <div class="d-info">
          <div class="d-info__group">
            <p>{{ $t('transactions.walletDatail') }}</p>
            <div class="d-info__copy">
              <p class="l-medium">Tp5MueB2cZk1f9846ctjdryPt6mMde56giu95</p>
              <button class="d-info__btn">
                <i class="icon-copy"></i>{{ $t('transactions.btnCopy') }}
              </button>
            </div>
          </div>

          <div class="d-info__group">
            <p>Hash</p>
            <div class="d-info__copy">
              <p class="l-medium">Tp5MueB2cZk1f9846ctjdryPt6mMde56giu95</p>
              <button class="d-info__btn">
                <i class="icon-copy"></i>{{ $t('transactions.btnCopy') }}
              </button>
            </div>
          </div>

          <div class="d-info__header">
            <p>{{ $t('transactions.creationDetail') }}</p>
            <p class="l-medium">0000/00/00 00:00</p>
          </div>

          <div class="d-info__header">
            <p>{{ $t('transactions.paymentDate') }}</p>
            <p class="l-medium">0000/00/00 00:00</p>
          </div>

          <div class="d-info__header">
            <p>{{ $t('transactions.result') }}</p>
            <div class="table__box-status">
              <div class="dot-status bg-success"></div>
              <p class="fw-bold font-weight-bold">{{ $t('transactions.approved') }}</p>
            </div>
          </div>
        </div>
      </v-card>
    </div>
  </section>
</template>
<script setup lang="ts"></script>
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
        border: 1px solid #f4f5f8;
        background: #f6f8fa;
      }

      &-btn {
        display: flex;
        padding: 8px 12px;
        align-items: center;
        gap: 10px;
        border-radius: 10px;
        border: 1px solid #f4f5f8;
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
        background: #ebf3ff;
      }

      &-text {
        color: #3587ff;
        font-family: Urbanist;
        font-size: 12px;
        font-style: normal;
        font-weight: 500;
        line-height: 140%;
        text-decoration-line: underline;
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
      // justify-content: space-between;
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

.d-info {
  display: grid;
  gap: 1rem;
  &__header {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    align-items: center;
    @media (max-width: 480px) {
      flex-direction: column;
      align-items: flex-start;
    }
  }
  &__copy {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    p {
      text-align: right;
      @media (max-width: 520px){
        max-width: 60vw;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        width: 100%;
      }
      @media (max-width: 480px) {
        max-width: 40vw;
      }
      @media (max-width: 350px){
        max-width: 30vw;
      }
    }

  }
  &__account {
    @media (max-width: 670px) {
      p {
        max-width: 140px;
      }
    }
  }
  &__btn {
    display: flex;
    padding: 8px 12px;
    align-items: center;
    gap: 10px;
    border-radius: 10px;
    border: 1px solid #f4f5f8;
    i {
      font-size: 1rem;
      color: #001e62;
      background-color: #fff;
      padding: 0;
    }
    @media (max-width: 670px) {
      border: none;
      color: #3587ff;
      font-size: 14px;
      font-weight: 500;
      line-height: 20px;

      i {
        color: #3587ff;
      }
    }
  }
}

.detail__content {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 32px;

  @media (max-width: 1227px){
    flex-direction: column;
    gap: 0;
  }

  :deep(.v-card) {
    flex: 1;
  }
}
</style>
