<template>
  <form @submit.prevent="onSubmit">
    <!-- Step 1 -->
    <section class="links" v-if="step === 1">
      <Header :title="$t('payments.paymentLink')" />
      <GoBack />
      <div class="config">
        <div class="config__header">
          <h2 class="h2-bold text-white">{{ $t('payments.setting-payment') }}</h2>
          <h2 class="h2-bold config__header-text">{{ $t('payments.step') }} 1 / 3</h2>
        </div>
        <div class="config__body">
          <div class="config__body-left">
            <!-- Link Name -->
            <div class="config__item">
              <h6 class="h6-semibold">{{ $t('payments.name-link') }}</h6>
              <div class="field-box">
                <label class="text-primart b-regular">{{ $t('payments.name-link-payment') }}</label>
                <v-text-field
                  class="inpt mt-1"
                  elevation-0
                  density="compact"
                  hide-details
                  :placeholder="$t('payments.payment-name')"
                  v-model:modelValue="form.link"
                  variant="solo-filled"
                ></v-text-field>
              </div>
            </div>
            <!-- Link payment type -->
            <div class="config__item">
              <h6 class="h6-semibold">{{ $t('payments.type-paymentLink') }}</h6>

              <v-radio-group
                v-model="form.paymentType"
                name="paymentType"
                :options="paymentType"
                density="compact"
                hide-details
                color="primary"
                inline
              >
                <v-radio :label="$t('paymentsLink.uniquePayment')" value="unique"></v-radio>
                <v-radio :label="$t('paymentsLink.multiPayment')" value="multi"></v-radio>
              </v-radio-group>
              <AddBox v-if="form.paymentType=='multi'"/>
            </div>
            <!-- Payment method -->
            <div class="config__item">
              <h6 class="h6-semibold">{{ $t('payment-methods.title') }}</h6>

              <v-radio-group
                v-model="form.payment"
                name="payment"
                :options="payment"
                density="compact"
                hide-details
                color="primary"
                inline
              >
                <v-radio label="Crypto" value="crypto"></v-radio>
                <v-radio :label="$t('paymentsLink.depositBank')" value="bank"></v-radio>
                <v-radio :label="$t('paymentsLink.userChoose')" value="user"></v-radio>
              </v-radio-group>
              <div class="config__option" v-if="form.payment === 'bank'">
                <AddBox />
                
                <div>
                  <label class="text-primary b-regular">{{ $t('paymentsLink.account-type') }}</label>
                  <v-select
                    class="inpt mt-1"
                    elevation-0
                    density="compact"
                    hide-details
                    variant="solo-filled"
                    v-model="form.bank"
                    :placeholder="$t('paymentsLink.selectBank')"
                    :items="['Bank 1', 'Bank 2']"
                  ></v-select>
                </div>

                <div>
                  <label class="text-primary b-regular">{{ $t('payments.full-name') }}</label>
                  <v-text-field
                    class="inpt mt-1"
                    elevation-0
                    density="compact"
                    hide-details
                    variant="solo-filled"
                    :placeholder="$t('paymentsLink.name')"
                    v-model="form.fullName"
                  ></v-text-field>
                </div>
                <div class="config__item-grid">
                  <div>
                    <label class="text-primary b-regular">{{ $t('payment-methods.account-number') }}</label>
                    <v-text-field
                      class="inpt mt-1"
                      elevation-0
                      density="compact"
                      hide-details
                      :placeholder="$t('paymentsLink.numberAccount')"
                      v-model="form.account"
                      variant="solo-filled"
                      type="number"
                    ></v-text-field>
                  </div>

                  <div>
                    <label class="text-primary b-regular">{{ $t('payment-methods.type-account') }}</label>
                    <v-select
                      class="inpt mt-1"
                      elevation-0
                      density="compact"
                      hide-details
                      variant="solo-filled"
                      :placeholder="$t('paymentsLink.selectAccountType')"
                      v-model="form.accountType"
                      :items="['Corriente', 'Ahorros']"
                    ></v-select>
                  </div>

                  <div>
                    <label class="text-primary b-regular">{{ $t('payment-methods.document-type') }}</label>
                    <v-select
                      class="inpt mt-1"
                      elevation-0
                      density="compact"
                      hide-details
                      variant="solo-filled"
                      :placeholder="$t('paymentsLink.selectDocumentType')"
                      v-model="form.document"
                      :items="['Cedula', 'Pasaporte']"
                    ></v-select>
                  </div>

                  <div>
                    <label class="text-primary b-regular">{{ $t('payments.document-number') }}</label>
                    <v-text-field
                      class="inpt mt-1"
                      elevation-0
                      density="compact"
                      hide-details
                      :placeholder="$t('payments.document-number')"
                      v-model="form.numDocument"
                      type="number"
                      variant="solo-filled"
                    ></v-text-field>
                  </div>
                </div>
              </div>
              <div class="config__option" v-if="form.payment === 'crypto'">
                <div>
                  <label class="text-primery b-regular">{{$t('payments.crypto-type')}}</label>
                  <v-select
                    v-model="form.crypto"
                    select="Select crypto"
                    class="inpt mt-1"
                    elevation-0
                    density="compact"
                    hide-details
                    variant="solo-filled"
                    :placeholder="$t('paymentsLink.selectCrypto')"
                    :items="['BNB', 'BTC', 'USDT']"
                  ></v-select>
                </div>

                <div>
                  <label class="text-primery b-regular">{{ $t('payments.wallet') }}</label>
                  <v-text-field
                    class="inpt mt-1"
                    elevation-0
                    density="compact"
                    hide-details
                    :placeholder="$t('payments.your-wallet')"
                    v-model="form.wallet"
                    variant="solo-filled"
                  ></v-text-field>
                </div>
              </div>
              <div class="config__option" v-else></div>
            </div>
            <!-- Advanced settings -->
            <div class="config__item">
              <h6 class="h6-semibold"> {{ $t('paymentsLink.advancedSettings') }} </h6>
              <div class="config__flex switch-box">
                <p class="b-regular"> {{ $t('paymentsLink.enablePaymentRange') }}</p>
                <v-switch
                  v-model="form.range"
                  density="compact"
                  hide-details
                  color="primary"
                  inset
                ></v-switch>
              </div>
              <div class="config__item-grid">
                <div>
                  <label class="text-primary b-regular">{{ $t('paymentsLink.dateIn') }}</label>
                  <v-text-field
                    class="inpt mt-1"
                    elevation-0
                    density="compact"
                    hide-details
                    variant="solo-filled"
                    type="date"
                    v-model="form.dateIn" 
                  >
                    <template v-slot:prepend-inner>
                      <i class="icon-calendar" style="color: #394357;"></i>
                    </template>
                  </v-text-field>
                </div>

                <div>
                  <label class="text-primary b-regular">{{ $t('paymentsLink.dateOut') }}</label>
                  <v-text-field
                    class="inpt mt-1"
                    elevation-0
                    density="compact"
                    hide-details
                    variant="solo-filled"
                    type="date"
                    v-model="form.dateOut"
                  >
                    <template v-slot:prepend-inner>
                      <i class="icon-calendar" style="color: #394357;"></i>
                    </template>
                  </v-text-field>
                </div>
              </div>
            </div>
          </div>
          <div class="config__body-right">
            <div class="config__card">
              <h6 class="h6-semibold">{{ $t('payments.alias') }}</h6>
              <div>
                <p class="l-semibold">{{ $t('payments.one-use') }}</p>
                <p class="b-light">
                  {{ $t('payments.text1') }}
                </p>
              </div>
              <div>
                <p class="l-semibold">{{ $t('payments.text2') }}</p>
                <p class="b-light">
                  {{ $t('payments.text1') }}
                </p>
              </div>
              <div class="line"></div>
              <h6 class="h6-semibold">{{ $t('payments.type-amount') }}</h6>
              <div>
                <p class="l-semibold">{{ $t('payments.client-choose') }}</p>
                <p class="b-light">
                  {{ $t('payments.text3') }}
                </p>
              </div>
              <div>
                <p class="l-semibold">{{ $t('payments.link-include') }}</p>
                <p class="b-light">
                  {{ $t('payments.text4') }}
                </p>
              </div>
            </div>
          </div>
          <div class="config__btns">
            <v-btn color="secondary" variant="outlined" class="btn">
              <p class="text-primary">{{ $t('cancel') }}</p>
            </v-btn>

            <v-btn class="btn" color="primary" type="submit" @click="step = 2">
              {{ $t('continue') }} 
            </v-btn>
          </div>
        </div>
      </div>
    </section>

    <!-- Step 2 -->
    <section class="links" v-if="step === 2">
      <Header :title="$t('payments.paymentLink')" />
      <BackDummy @click="step = 1" />
      <div class="config">
        <div class="config__header">
          <h2 class="h2-bold text-white">{{ $t('payments.payment-info') }}</h2>
          <h2 class="h2-bold config__header-text">{{ $t('payments.step') }} 2 / 3</h2>
        </div>
        <div class="config__body">
          <div class="config__body-left">
            <!-- Payment Detail -->
            <div class="config__item">
              <h6 class="h6-semibold">{{ $t('payments.detail-payment') }}</h6>

              <div>
                <label class="text-primary b-regular">{{ $t('payments.amount') }}</label>
                <v-text-field
                  class="inpt mt-1"
                  elevation-0
                  density="compact"
                  hide-details  
                  variant="solo-filled"
                  placeholder="$0.00"
                  type="number"
                  v-model="form.amount"
                ></v-text-field>
              </div>

              <div>
                <label class="text-primary b-regular">{{ $t('payments.tax-amount') }}</label>
                <v-text-field
                  class="inpt mt-1"
                  elevation-0
                  density="compact"
                  hide-details
                  variant="solo-filled"
                  placeholder="$0.00"
                  type="number"
                  v-model="form.taxAmount"
                ></v-text-field>
              </div>
              <div class="config__flex switch-box">
                <p class="b-regular">{{ $t('payments.add-discount') }}</p>
                <!-- <b-form-checkbox v-model="form.discount" name="check-button" switch>
                </b-form-checkbox> -->
                <v-switch density="compact" hide-details color="primary" v-model="form.discount" inset></v-switch>

              </div>

              <div v-if="form.discount">
                <label class="text-primary b-regular">{{ $t('payments.discount-amount') }}</label>
                <v-text-field
                  class="inpt mt-1"
                  elevation-0
                  density="compact"
                  hide-details
                  variant="solo-filled"
                  placeholder="$0.00"
                  type="number"
                  v-model="form.discountAmount"
                />
              </div>
            </div>
            <!-- Services and Products -->
            <div class="config__item">
              <h6 class="h6-semibold">{{ $t('payments.products-services') }}</h6>
              <div class="config__flex switch-box">
                <p class="b-regular">{{ $t('payments.enable-products') }}</p>
                <!-- <b-form-checkbox v-model="form.addProducts" name="check-button" switch>
                </b-form-checkbox> -->
                <v-switch density="compact" hide-details color="primary" v-model="form.addProducts" inset></v-switch>
              </div>
              <v-btn
                class="btn"
                variant="outlined"
                color="secondary"
                @click="step = 3"
                style="width: fit-content;"
              >
                <p class="text-primary">{{ $t('payments.new-product') }}</p>
              </v-btn>

              <div class="table-custom" v-if="form.addProducts === true">
                <table>
                  <thead>
                    <tr>
                      <th>{{ $t('payments.product-name') }}</th>
                      <th>{{ $t('payments.quantity') }}</th>
                      <th>{{ $t('payments.amount') }}</th>
                      <th>{{ $t('payments.amount') }}</th>
                    </tr>
                  </thead>
                  <tbody v-for="(item, index) in data" :key="index">
                    <tr>
                      <td>
                        {{ item.name }}
                      </td>
                      <td>
                        {{ item.quantity }}
                      </td>
                      <td>
                        {{ item.amount }}
                      </td>
                      <td class="d-flex align-center justify-center">
                        <button class="config__btn-delete">
                          <img
                            :src="getFile({ route: 'icons', url: 'delete', extension: 'svg' })"
                            alt=""
                          />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <!-- Card -->
          <div class="config__body-right">
            <div class="config__card">
              <h6 class="h6-semibold">{{ $t('payments.resumen') }}</h6>
              <div class="d-flex justify-content-between w-100 gap-2">
                <p class="b-light">{{ $t('payments.amount-products') }}</p>
                <p class="b-light">$0.00</p>
              </div>
              <div class="d-flex justify-content-between w-100 gap-2">
                <p class="b-light">{{ $t('payments.tax') }}</p>
                <p class="b-light">$0.00</p>
              </div>
              <div class="d-flex justify-content-between w-100 gap-2">
                <p class="b-light">{{ $t('payments.discount') }}</p>
                <p class="b-light">$0.00</p>
              </div>
              <div class="line"></div>
              <div class="d-flex justify-content-between w-100 gap-2">
                <p class="l-semibold">{{ $t('payments.total') }}</p>
                <p class="l-semibold">$0.00 USD</p>
              </div>
            </div>
          </div>

          <div class="config__btns">
            <v-btn class="btn" variant="outlined" color="secondary">
              <p class="text-primary">{{ $t('cancel') }}</p>
            </v-btn>

            <v-btn class="btn" color="primary" @click="step = 4">
              {{ $t('payments.generate-link') }}
            </v-btn>
          </div>
        </div>
      </div>
    </section>

    <!-- Step 3 (Add Product or service) -->
    <section class="g-link" v-if="step === 3">
      <BackDummy @click="step = 2" />
      <div class="g-link__card">
        <div class="g-link__item">
          <h3 class="h3-bold">{{ $t('payments.add-products') }}</h3>
          <p class="l-light"> {{ $t('payments.text5') }} </p>
        </div>
        <div class="g-link__item">
          <div>
            <label class="text-primary b-regular">{{ $t('payments.product-name') }}</label>
            <v-text-field
              class="inpt"
              elevation-0
              density="compact"
              hide-details
              variant="solo-filled"
              :placeholder="$t('name')"
            ></v-text-field>
          </div>
          <div>
            <label class="text-primary b-regular">{{ $t('paymentsLink.quantity') }}</label>
            <AddBox class="w mt-1" w100/>
          </div>
          <div>
            <label class="text-primary b-regular">{{ $t('payments.amount') }}</label>
            <v-text-field
              class="inpt"
              elevation-0
              density="compact"
              hide-details
              variant="solo-filled"
              type="number"
              placeholder="$0.00" 
            />
          </div>
          <DropZone />
        </div>
        <div class="g-link__item">
          <v-btn class="btn" color="primary">{{ $t('add') }}</v-btn>
          <v-btn class="btn" variant="outlined" color="secondary">
            <p class="text-primary">{{ $t('cancel') }}</p>
          </v-btn>
        </div>
      </div>
    </section>

    <!-- Step 4 -->
    <section class="links" v-if="step === 4">
      <Header :title="$t('payments.paymentLink')" />
      <BackDummy @click="step = 2" />
      <div class="config">
        <div class="config__header">
          <h2 class="h2-bold text-white">{{ $t('paymentsLink.share') }}</h2>
          <h2 class="h2-bold config__header-text">{{ $t('payments.step') }} 3 / 3</h2>
        </div>
        <div class="config__pad">
          <!-- Card -->
          <div class="config__body-right">
            <div class="config__card">
              <h6 class="h6-semibold">{{ $t('payments.resumen') }}</h6>
              <div class="d-flex justify-content-between w-100 gap-2">
                <p class="b-light">{{ $t('payments.total-products') }}</p>
                <p class="b-light">$0.00</p>
              </div>
              <div class="d-flex justify-content-between w-100 gap-2">
                <p class="b-light">{{ $t('payments.tax') }}</p>
                <p class="b-light">$0.00</p>
              </div>
              <div class="d-flex justify-content-between w-100 gap-2">
                <p class="b-light">{{ $t('payments.discount') }}</p>
                <p class="b-light">$0.00</p>
              </div>
              <div class="line"></div>
              <div class="d-flex justify-content-between w-100 gap-2">
                <p class="l-semibold">{{ $t('payments.total') }}</p>
                <p class="l-semibold">$0.00 USD</p>
              </div>
            </div>
          </div>

          <div class="config__card">
            <div class="config__card-grid">
              <div class="config__card-box">
                <div class="config__card-send">
                  <div style="width: 100%;">
                    <label class="text-primary b-regular">{{ $t('paymentsLink.shareByEmail') }}</label>
                    <v-text-field
                      class="inpt mt-1"
                      elevation-0
                      density="compact"
                      hide-details
                      variant="solo-filled"
                      placeholder="Example@email.com"
                      type="email"
                      v-model="form.sendMail"
                      
                    ></v-text-field>
                  </div>

                  <v-btn class="btn" variant="outlined" color="secondary" style="background-color: #FFF;">
                    <p class="text-primary">{{ $t('send') }}</p>
                  </v-btn>
                </div>
              </div>
              <div class="line vertical"></div>
              <div class="config__card-box">
                <img
                  class="config__qr"
                  :src="getFile({ route: 'images', url: 'qr', extension: 'svg' })"
                  alt=""
                />
                <div class="config__btns-qr">
                  <v-btn class="btn" variant="outlined" color="secondary" style="background-color: #FFF;">
                    <p class="text-primary">{{ $t('payments.download-qr') }}</p>
                  </v-btn>

                  <v-btn class="btn" variant="outlined" color="secondary" style="background-color: #FFF;">
                    <p class="text-primary">Via WhatsApp</p>
                  </v-btn>
                </div>
              </div>
            </div>
          </div>
          <div class="config__btns">
            <v-btn class="btn" variant="outlined" color="secondary">
              <p class="text-primary">{{ $t('cancel') }}</p>
            </v-btn>

            <v-btn class="btn" color="primary">{{ $t('payments.generate-link') }}</v-btn>
          </div>
        </div>
      </div>
    </section>
  </form>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import getFile from '@/helpers/getFile'
import AddBox from './content/AddBox.vue'

const step = ref(1)

const paymentType = [
  { label: 'Un único pago', value: 'unique' },
  { label: 'Varios pagos', value: 'multi' }
]

const payment = [
  { label: 'Crypto', value: 'crypto' },
  { label: 'Déposito bancario', value: 'bank' },
  { label: 'Usuario elige', value: 'user' }
]

const form = ref({
  link: '',
  paymentType: 'unique',
  payment: 'crypto',
  bank: null,
  fullName: '',
  account: '',
  accountType: null,
  document: null,
  numDocument: '',
  dateIn: '',
  dateOut: '',
  crypto: null,
  range: false,
  amount: '',
  taxAmount: '',
  discount: false,
  discountAmount: '',
  addProducts: false,
  sendMail: '',
  wallet: ''
})

const data = [
  { name: 'Nombre del Producto', quantity: 1, amount: '$0.00' },
  { name: 'Nombre del Producto', quantity: 1, amount: '$0.00' }
]

const onSubmit = (event: Event) => {}

watch(form, (newValue, oldValue) => {
  console.log(`Counter changed from ${oldValue} to ${newValue}`)
})

</script>

<style lang="scss" scoped>
.links {
  display: grid;
  gap: 24px;
}

.config {
  display: flex;
  flex-direction: column;
  gap: 24px;
  background: #ffffff;
  border: 1px solid #dde4ed;
  border-radius: 16px;
  overflow: hidden;

  &__pad {
    padding: 0 24px 24px;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 48px 24px;
    gap: 16px;
    height: 155px;

    background: {
      image: url('@/assets/images/banner.webp');
      size: cover;
      repeat: no-repeat;
    }

    &-text {
      color: #3587ff;
    }

    @media (max-width: 767px) {
      display: flex;
      flex-direction: column-reverse;
      justify-content: center !important;
      gap: 0;
      justify-content: normal;
      align-items: normal;
      padding: 0 24px;
      height: 125px;

      h2 {
        font-size: 24px;
        line-height: normal;
      }

      &-text {
        font-size: 14px;
      }
    }
  }

  &__body {
    padding: 24px;
    display: grid;
    grid-template-columns: 60% 1fr;
    gap: 24px;

    &-left {
      display: grid;
      gap: 24px;

      @media (max-width: 767px) {
        width: 100%;
      }
    }

    @media (max-width: 767px) {
      display: grid;
      grid-template: auto / auto;

      div:first-child {
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 2;
        grid-row-end: 3;
      }

      div:last-child {
        grid-column-start: 1;
        grid-column-end: 2;
      }
    }
  }

  &__item {
    display: grid;
    gap: 16px;

    &-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 16px;

      @media (max-width: 767px) {
        display: flex;
        flex-direction: column;
        gap: 16px;
      }
    }

    @media (max-width: 767px) {
      .group {
        display: flex;
        flex-direction: column;
        gap: 16px;
      }
    }
  }

  &__flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__card {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 24px;
    gap: 16px;
    border: 1px solid #dde4ed;
    border-radius: 16px;
    background-color: #fafafa;

    &-grid {
      width: 100%;
      display: grid;
      grid-template-columns: 1fr min-content 1fr;
      gap: 24px;

      @media (max-width: 767px) {
        display: flex;
        flex-direction: column;

        .line.vertical {
          height: 1px;
          width: 100%;
        }
      }
    }

    &-box {
      display: flex;
      align-items: center;
      gap: 16px;

      @media (max-width: 767px) {
        flex-direction: column;
      }
    }

    &-send {
      width: 100%;
      gap: 16px;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: end;
      gap: 1rem;

    }
  }

  &__btns {
    grid-column: 2/3;
    display: flex;
    justify-content: flex-end;
    gap: 16px;

    &-qr {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
      width: 100%;
      justify-content: center;
    }

    @media (max-width: 767px) {
      flex: 1;
      display: flex;
      flex-direction: column-reverse;
    }
  }

  &__option {
    display: grid;
    gap: 16px;
  }

  &__btn-delete {
    outline: none;
    border: none;
    background: #f6f8fa;
    border: 1px solid #f4f5f8;
    border-radius: 12px;
    padding: 8px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__qr {
    width: 100px;
    height: 100px;
  }
}

.table-custom {
  table {
    border-collapse: collapse;
  }
}

.l-semibold {
  color: #091841;
}

.g-link {
  display: grid;
  gap: 24px;

  &__card {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 450px;
    padding: 24px;
    gap: 32px;
    background: #ffffff;
    border: 1px solid #dde4ed;
    border-radius: 16px;
  }

  &__item {
    display: grid;
    gap: 16px;
    width: 100%;
  }
}

.justify-content-between {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.secondary-btn {
  border: 1px solid #f4f5f8;
  color: #001e62;
}

.w-btn {
  border: 1px solid #f4f5f8;
  background-color: #fff;
  font-weight: 600;
}

.switch-box {
  :deep(.v-input) {
    display: inline-block;
    flex: none;
  }
}

:deep(.v-selection-control-group--inline){
  gap: 2rem;
  row-gap: 1rem;
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

  input[type=number]::-webkit-inner-spin-button, 
  input[type=number]::-webkit-outer-spin-button { 
    -webkit-appearance: none; 
    margin: 0; 
  }
}

</style>

<style>
h6,
h3,
.b-regular,
.b-light,
.l-light {
  color: #0a1e8c;
}
</style>
