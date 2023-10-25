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
                <v-text-field
                  class="inpt"
                  elevation-0
                  density="compact"
                  hide-details
                  :label="$t('payments.name-link-payment')"
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
                <v-radio label="Un único pago" value="unique"></v-radio>
                <v-radio label="Varios pagos" value="multi"></v-radio>
              </v-radio-group>
              <AddBox />
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
                <v-radio label="Un único pago" value="crypto"></v-radio>
                <v-radio label="Varios pagos" value="bank"></v-radio>
                <v-radio label="Varios pagos" value="user"></v-radio>
              </v-radio-group>
              <div class="config__option" v-if="form.payment === 'bank'">
                <AddBox />
                <SelectField
                  :label="$t('paymentsLink.account-type')"
                  select="Select bank"
                  v-model="form.bank"
                  :options="['Bank 1', 'Bank 2']"
                />
                <v-text-field
                  :label="$t('payments.full-name')"
                  placeholder="Nombre"
                  v-model="form.fullName"
                ></v-text-field>
                <div class="config__item-grid">
                  <v-text-field
                    class="inpt"
                    elevation-0
                    density="compact"
                    hide-details
                    :label="$t('payment-methods.account-number')"
                    placeholder="Número de cuenta"
                    v-model="form.account"
                    variant="solo-filled"
                  ></v-text-field>

                  <v-select
                    class="inpt"
                    elevation-0
                    density="compact"
                    hide-details
                    variant="solo-filled"
                    :label="$t('payment-methods.type-account')"
                    select="Select tipo de cuenta"
                    v-model="form.accountType"
                    :items="['Corriente', 'Ahorros']"
                  ></v-select>

                  <v-select
                    class="inpt"
                    elevation-0
                    density="compact"
                    hide-details
                    variant="solo-filled"
                    :label="$t('payment-methods.document-type')"
                    select="Select tipo de documento"
                    v-model="form.document"
                    :items="['Cedula', 'Pasaporte']"
                  ></v-select>

                  <v-text-field
                    class="inpt"
                    elevation-0
                    density="compact"
                    hide-details
                    :label="$t('payments.document-number')"
                    :placeholder="$t('payments.document-number')"
                    v-model="form.numDocument"
                    type="number"
                    variant="solo-filled"
                  ></v-text-field>
                </div>
              </div>
              <div class="config__option" v-if="form.payment === 'crypto'">
                <v-select
                  v-model="form.crypto"
                  select="Select crypto"
                  class="inpt"
                  elevation-0
                  density="compact"
                  hide-details
                  variant="solo-filled"
                  :label="$t('payments.crypto-type')"
                  :items="['BNB', 'BTC', 'USDT']"
                ></v-select>

                <v-text-field
                  class="inpt"
                  elevation-0
                  density="compact"
                  hide-details
                  :label="$t('payments.wallet')"
                  :placeholder="$t('payments.your-wallet')"
                  v-model="form.wallet"
                  variant="solo-filled"
                ></v-text-field>
              </div>
              <div class="config__option" v-else></div>
            </div>
            <!-- Advanced settings -->
            <div class="config__item">
              <h6 class="h6-semibold">Configuración avanzada</h6>
              <div class="config__flex switch-box">
                <p class="b-regular">Habilitar rango de pago</p>
                <v-switch
                  v-model="form.range"
                  density="compact"
                  hide-details
                  color="primary"
                  inset
                ></v-switch>
              </div>
              <div class="config__item-grid">
                <v-text-field label="Fecha de inicio" type="date" v-model="form.dateIn" />
                <v-text-field label="Fecha de finalización" type="date" v-model="form.dateOut" />
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
            <v-btn color="secondary" variant="outlined" class="btn"
              ><p class="text-primary">{{ $t('cancel') }}</p></v-btn
            >
            <v-btn class="btn" color="primary" type="submit" @click="step = 2">{{
              $t('continue')
            }}</v-btn>
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
              <v-text-field
                :label="$t('payments.amount')"
                placeholder="$0.00"
                type="number"
                v-model="form.amount"
              />
              <v-text-field
                :label="$t('payments.tax-amount')"
                placeholder="$0.00"
                type="number"
                v-model="form.taxAmount"
              />
              <div class="config__flex switch-box">
                <p class="b-regular">{{ $t('payments.add-discount') }}</p>
                <!-- <b-form-checkbox v-model="form.discount" name="check-button" switch>
                </b-form-checkbox> -->
                <v-switch v-model="form.discount" inset></v-switch>
              </div>
              <v-text-field
                :label="$t('payments.discount-amount')"
                placeholder="$0.00"
                type="number"
                v-model="form.discountAmount"
              />
            </div>
            <!-- Services and Products -->
            <div class="config__item">
              <h6 class="h6-semibold">{{ $t('payments.products-services') }}</h6>
              <div class="config__flex switch-box">
                <p class="b-regular">{{ $t('payments.enable-products') }}</p>
                <!-- <b-form-checkbox v-model="form.addProducts" name="check-button" switch>
                </b-form-checkbox> -->
                <v-switch v-model="form.addProducts" inset></v-switch>
              </div>
              <v-btn color="primary" variant="text" class="w-btn" @click="step = 3">{{
                $t('payments.new-product')
              }}</v-btn>
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
                      <td>
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
            <v-btn color="primary" variant="text" class="secondary-btn">{{ $t('cancel') }}</v-btn>
            <v-btn color="primary" @click="step = 4">{{ $t('payments.generate-link') }}</v-btn>
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
          <p class="l-light">
            {{ $t('payments.text5') }}
          </p>
        </div>
        <div class="g-link__item">
          <v-text-field :label="$t('payments.product-name')" :placeholder="$t('name')" />
          <AddBox class="w" />
          <v-text-field :label="$t('payments.amount')" type="number" placeholder="$0.00" />
          <DropZone />
        </div>
        <div class="g-link__item">
          <v-btn class="w" color="primary">{{ $t('add') }}</v-btn>
          <v-btn class="w secondary-btn" color="primary" variant="text">{{ $t('cancel') }}</v-btn>
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
                  <v-text-field
                    label="Compartir vía email"
                    placeholder="Example@email.com"
                    type="email"
                    v-model="form.sendMail"
                    class="w-100"
                  />
                  <v-btn color="primary" class="config__send w-btn" variant="outlined">{{
                    $t('send')
                  }}</v-btn>
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
                  <v-btn color="primary" variant="outlined" class="w-btn">{{
                    $t('payments.download-qr')
                  }}</v-btn>
                  <v-btn color="primary" variant="outlined" class="w-btn">Via WhatsApp</v-btn>
                </div>
              </div>
            </div>
          </div>
          <div class="config__btns">
            <v-btn color="primary" variant="text" class="secondary-btn">{{ $t('cancel') }}</v-btn>
            <v-btn color="primary">{{ $t('payments.generate-link') }}</v-btn>
          </div>
        </div>
      </div>
    </section>
  </form>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import getFile from '@/helpers/getFile'

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
  bank: '',
  fullName: '',
  account: '',
  accountType: '',
  document: '',
  numDocument: '',
  dateIn: '',
  dateOut: '',
  crypto: '',
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
      align-items: end;

      @media (max-width: 767px) {
        flex-direction: column;
      }
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
