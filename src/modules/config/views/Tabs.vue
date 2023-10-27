<template>
  <v-card rounded="lg" class="pa-6 mb-12">
    <div class="card-body">
      <div class="setting-section">
        <v-tabs class="tabs-line" v-model="tab">
          <v-tab value="1">Información de la cuenta</v-tab>
          <v-tab value="2">Seguridad</v-tab>
          <v-tab value="3">Api Keys</v-tab>
          <v-tab value="4">Verificación KYC</v-tab>
        </v-tabs>

        <v-window v-model="tab">
          <v-window-item value="1">
            <!-- Account tab -->
            <div class="account-settings">
              <div class="row-setting">
                <h3 class="h3-semibold">{{ $t('setting.myaccount') }}</h3>
                <p @click="isOpen = true" style="color: #3587ff; text-decoration: underline; cursor: pointer;">
                  {{ $t('setting.edit') }}
                </p>
              </div>
              <div class="account-settings__group">
                <div class="row-setting">
                  <p class="l-light">{{ $t('setting.name-account') }}</p>
                  <p class="l-medium">nombre de cuenta</p>
                </div>
                <div class="row-setting">
                  <p class="l-light">{{ $t('setting.email') }}</p>
                  <p class="l-medium">example@email.com</p>
                </div>
                <div class="row-setting">
                  <p class="l-light">{{ $t('setting.tolerance') }}</p>
                  <p class="l-medium">0.0%</p>
                </div>
                <div class="row-setting">
                  <p class="l-light">{{ $t('setting.state') }}</p>
                  <p class="l-medium">
                    <span class="dot-status dot-status--in-process"></span>&nbsp; Proceso de
                    verficación
                  </p>
                </div>
                <div class="row-setting">
                  <p class="l-light">{{ $t('setting.primary-color') }}</p>
                  <p class="l-medium">
                    <span class="square"></span>
                    #1264A3
                  </p>
                </div>
                <div class="row-setting">
                  <p class="l-light">{{ $t('setting.secundary-color') }}</p>
                  <p class="l-medium">
                    <span class="square"></span>
                    #1264A3
                  </p>
                </div>
                <div class="row-setting">
                  <p class="l-light">{{ $t('setting.kodex-icon') }}</p>
                  <p class="l-medium"><span class="dot-status dot-status--enable"></span>&nbsp; Habilitado</p>
                </div>
                <div class="row-setting">
                  <p class="l-light">{{ $t('setting.api-pay') }}</p>
                  <p class="l-medium"><span class="dot-status dot-status--enable"></span>&nbsp; Habilitado</p>
                </div>
                <div class="row-setting">
                  <p class="l-light">{{ $t('setting.modal-pay') }}</p>
                  <p class="l-medium"><span class="dot-status dot-status--disable"></span>&nbsp; Deshabilitado</p>
                </div>
                <div class="row-setting">
                  <p class="l-light">{{ $t('setting.link-pay') }}</p>
                  <p class="l-medium"><span class="dot-status dot-status--enable"></span>&nbsp; Habilitado</p>
                </div>
              </div>
              <hr />
              <div class="account-settings__hook">
                <form>
                  <label class="w-100" for="hook">
                    <p class="b-regular mb-1">Web Hook</p>
                    <v-text-field class="inpt" density="compact" name="Hook" placeholder="Web Hook Link"
                      variant="solo-filled" hide-details="auto"></v-text-field>
                  </label>

                  <div class="form-button">
                    <v-btn variant="outlined" color="primary" class="btn">{{
                      $t('setting.test-connection')
                    }}</v-btn>
                  </div>
                </form>
                <p class="b-light mt-2">{{ $t('setting.hook-message') }}</p>
              </div>
            </div>
          </v-window-item>
          <v-window-item value="2"><!-- Security tab -->
            <div class="security-settings">
              <h3 class="h3-semibold">{{ $t('setting.security') }}</h3>

              <div class="security-settings__options">
                <router-link :to="{ name: 'timeline' }" style="text-decoration: none">
                  <div class="security-settings__option">
                    <p class="l-semibold">Timeline</p>
                    <i class="icon-arrow-right l-semibold"></i>
                  </div>
                </router-link>
                <router-link :to="{ name: 'restrictions' }" style="text-decoration: none">
                  <div class="security-settings__option">
                    <p class="l-semibold">{{ $t('setting.restrictions') }}</p>
                    <i class="icon-arrow-right l-semibold"></i>
                  </div>
                </router-link>
              </div>
            </div>
          </v-window-item>
          <v-window-item value="3">
            <!-- Api Keys tab -->
            <div class="api-settings">
              <div class="api-settings__header">
                <h3 class="h3-semibold">Api Keys</h3>

                <v-btn class="btn" color="primary" @click="newApi = true">{{ $t('setting.new-api') }}</v-btn>

              </div>

              <!-- Verify api -->
              <div v-if="newApiKeys" class="api-settings__verify-api">
                <VerifyApi v-for="(apiKey, index) in newApiKeys" :key="index" :apiKey="apiKey" />
              </div>

              <!-- Aproved api -->
              <div v-if="apiKeys" class="api-settings__aproved-api">
                <ApprovedApi v-for="(apiKey, index) in apiKeys" :key="index" :apiKey="apiKey" />
              </div>
            </div>
          </v-window-item>
          <v-window-item value="4"><!-- verification tab -->
            <div class="verification-settings">
              <h3 class="h3-semibold">{{ $t('setting.verificationkyc') }}</h3>

              <div class="verification-settings__section">
                <p class="l-semibold">{{ $t('setting.document-legal') }}</p>
                <p class="b-regular">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum consequuntur
                  cumque hic incidunt. Cumque iure nemo veniam porro magnam, vitae harum, ipsa quis
                  esse voluptas eius exercitationem possimus tempora beatae.
                </p>

                <DropZone />
              </div>

              <div class="verification-settings__section">
                <p class="l-semibold">{{ $t('setting.identity-document') }}</p>
                <p class="b-regular">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum consequuntur
                  cumque hic incidunt. Cumque iure nemo veniam porro magnam, vitae harum, ipsa quis
                  esse voluptas eius exercitationem possimus tempora beatae.
                </p>

                <DropZone />
              </div>

              <div class="verification-settings__download">
                <p class="b-regular">
                  <span><i class="icon-files document"></i></span>

                  {{ $t('setting.account-certificate') }}
                </p>
                <hr />
                <v-btn class="btn" variant="outlined" color="secondary">
                  <p class="text-primary">{{
                    $t('setting.validate-view-document')
                  }}</p>
                </v-btn>
                
              </div>
            </div>
          </v-window-item>
        </v-window>
      </div>
    </div>
  </v-card>
  <v-dialog width="450" v-model="isOpen">
    <v-card rounded="lg">
      <div class="modal">
        <div class="modal__header">
          <h5 class="h5-bold">{{ $t('setting.info') }}</h5>
          <button class="modal__close" @click="isOpen = false">
            <img :src="getFile({
              route: 'icons/form',
              url: 'close',
              extension: 'svg'
            })
              " alt="" />
          </button>
        </div>
        <div class="card rounded-lg">
          <div class="card-body big-gap">
            <div class="small-gap">
              <p class="l-regular">{{ $t('setting.info-description') }}</p>
            </div>

            <form class="big-gap mt-2">
              <div class="small-gap">
                <p class="l-semibold">{{ $t('setting.info-account') }}</p>

                <div class="toggle">
                  <label class="b-regular l-font">{{ $t('setting.show-icon') }}</label>
                  <div>

                    <v-switch v-model="form.showIcon" name="check-button" density="compact" hide-details color="primary"
                      inset></v-switch>
                  </div>
                </div>

                <label for="name">
                  <p class="b-regular mb-1">{{ $t('setting.name-account') }}</p>
                  <v-text-field variant="solo-filled" density="compact" class="inpt" :placeholder="$t('setting.name')"
                    id="name" v-model="form.name" hide-details></v-text-field>
                </label>

                <label for="email">
                  <p class="b-regular mb-1">{{ $t('setting.email') }}</p>

                  <v-text-field variant="solo-filled" density="compact" class="inpt" placeholder="Example@email.com"
                    id="email" v-model="form.email" hide-details></v-text-field>
                </label>

                <label for="telerance">
                  <p class="b-regular mb-1">{{ $t('setting.tolerance') }}</p>

                  <v-text-field variant="solo-filled" density="compact" class="inpt" type="number" placeholder="0.0%"
                    id="telerance" v-model="form.tolerance" hide-details></v-text-field>
                  <p class="b-regular message mt-2">{{ $t('setting.tolerance-message') }} $0.00</p>
                </label>
              </div>

              <div class="small-gap">
                <p class="l-semibold">{{ $t('setting.customize-color') }}</p>

                <div class="primary-colors">
                  <label for="primaryColor">{{ $t('setting.primary-color') }}</label>
                  <div class="input-modificate">
                    <input class="color" type="color" v-model="form.primaryColor" />
                    <input class="b-regular colors" type="text" :value="form.primaryColor" disabled />
                  </div>
                </div>

                <label class="secundary-colors" for="secundaryColor">{{ $t('setting.secundary-color') }}

                  <div class="input-modificate">
                    <input class="color" type="color" v-model="form.secundaryColor" />
                    <input class="b-regular colors" type="text" :value="form.secundaryColor" disabled />
                  </div>
                </label>
              </div>

              <div class="small-gap">
                <p class="l-semibold">{{ $t('setting.pays') }}</p>

                <div class="toggle">
                  <label class="b-regular l-font">{{ $t('setting.api-pay') }}</label>
                  <div>
                    <v-switch v-model="form.apiPay" name="check-button" density="compact" hide-details color="primary"
                      inset></v-switch>
                  </div>
                </div>

                <div class="toggle">
                  <label class="b-regular l-font">{{ $t('setting.modal-pay') }}</label>
                  <div>
                    <v-switch v-model="form.modalPay" name="check-button" density="compact" hide-details color="primary"
                      inset></v-switch>
                  </div>
                </div>

                <div class="toggle">
                  <label class="b-regular l-font">{{ $t('setting.link-pay') }}</label>
                  <div>
                    <v-switch v-model="form.linkPay" name="check-button" density="compact" hide-details color="primary"
                      inset></v-switch>
                  </div>
                </div>
              </div>
              <div class="small-gap">
                <v-btn class="mt-4 w-100 btn" color="primary" @click="isOpen = false">{{ $t('setting.save') }}</v-btn>
                <v-btn variant="outlined" color="secondary" class="w-100 btn" @click="isOpen = false">
                  <p class="text-primary">{{ $t('setting.cancel') }}</p>
                </v-btn>
              </div>
            </form>
          </div>
        </div>

      </div>
    </v-card>
  </v-dialog>
  <v-dialog width="450" v-model="newApi">
    <v-card rounded="lg">
      <div class="modal">
        <div class="modal__header">
          <h5 class="h5-bold">{{ $t('setting.info') }}</h5>
          <button class="modal__close" @click="newApi = false">
            <img :src="getFile({
              route: 'icons/form',
              url: 'close',
              extension: 'svg'
            })
              " alt="" />
          </button>
        </div>
      </div>
      <div class="pa-6">

        <!-- Step 1 -->
        <div v-if="!saved" class="big-gap">
          <div class="small-gap">
            <h1 class="h4-bold">{{ $t('setting.create-api') }}</h1>
            <p class="l-regular">{{ $t('setting.info-description') }}</p>
          </div>

          <form class="big-gap">
            <div class="small-gap">
              <div>
                <label for="name">
                  <p class="b-regular mb-1">{{ $t('setting.name-api') }}</p>
                  <v-text-field class="inpt" elevation-0 density="compact" hide-details :label="$t('setting.name')"
                    variant="solo-filled" v-model="dataApi.name" id="name" type="text"></v-text-field>
                </label>
              </div>

              <label for="domain" class="b-regular">
                <p class="b-regular mb-1">{{ $t('setting.domain') }}</p>
                <v-text-field class="inpt" elevation-0 density="compact" hide-details variant="solo-filled" type="text"
                  v-model="dataApi.domain" id="domain" placeholder="www.example.com"></v-text-field>
              </label>

              <label>
                <p class="b-regular mb-1">{{ $t('setting.use-type') }}</p>
                <v-select class="inpt" elevation-0 density="compact" hide-details variant="solo-filled" label="Select"
                  :items="options"></v-select>
              </label>
            </div>

            <div class="small-gap">
              <v-btn @click="saved = true" class="btn" color="primary">{{
                $t('setting.save') }}</v-btn>
              <v-btn class="btn" variant="outlined" color="secondary" @click="newApi = false">
                <p class="text-primary">{{
                  $t('setting.cancel')
                }}</p>
              </v-btn>
            </div>
          </form>
        </div>
        <!-- Step 2 -->
        <div v-if="saved" class="approved-message">
          <img class="image" :src="getFile({ route: 'images', url: 'check_3d', extension: 'png' })" alt="" />
          <div class="approved-message__message">
            <h1 class="h3-bold">{{ $t('payment-methods.all-ready') }}</h1>
            <p class="l-regular">
              {{ $t('newApi-message1') }} <span>ApiKey</span> {{ $t('newApi-message2') }}
              <span>{{ dataApi.apiMethod }}</span> {{ $t('newApi-message3') }}
              <span>{{ dataApi.projectName }}</span> {{ $t('newApi-message4') }}
            </p>
          </div>
          <v-btn class="btn" color="primary" @click="newApi = false">{{
            $t('globals.back')
          }}</v-btn>
        </div>
      </div>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import VerifyApi from './content/VerifyApi.vue'
import ApprovedApi from './content/ApprovedApi.vue'
import DropZone from '@/components/global/ui/DropZone.vue'
import { getFile } from '@/helpers/Index'
import { reactive } from 'vue'

const tab = ref()

const isOpen = ref(false)
const newApi = ref(false)

const form = reactive({
  showIcon: false,
  name: '',
  email: '',
  tolerance: null,
  primaryColor: '#1264A3',
  secundaryColor: '#1264A3',
  apiPay: false,
  modalPay: false,
  linkPay: false
})

const saved = ref<boolean>(false)

const dataApi = reactive({
  name: '',
  domain: '',
  apiMethod: '',
  projectName: 'NombreProyecto'
})

const options = ['Pagos por Api', 'Pagos por Modal', 'Pagos por Enlaces']


const apiKeys = [
  {
    name: 'Nombre de la ApiKey',
    method: 'setting.link-pay',
    apiKey: 'g#uyro*&xl3tn(!u%eo5*r^+ayyr7y3np2h$^j)u-rt7a#8$)8'
  },
  {
    name: 'Nombre de la ApiKey',
    method: 'setting.api-pay',
    apiKey: 'dg(2tx!c0%#f&6$&hdpy6(b#n-%8@y9e!qgg@cf0uvgc8q+2ft'
  }
]

const newApiKeys = [
  {
    name: 'Nombre de la ApiKey',
    method: 'setting.modal-pay'
  }
]
</script>

<style lang="scss" scoped>
.setting-section {
  display: flex;
  flex-direction: column;
  gap: 24px;

  &__nav {
    overflow-x: scroll;
    overflow-y: visible;
    height: 40px;
  }

  &__nav::-webkit-scrollbar {
    display: none;
  }

  &__options {
    display: flex;
    flex-direction: row;
    gap: 30px;
    height: 35px;
    white-space: nowrap;

    li {
      list-style: none;
      cursor: pointer;
    }

    hr {
      width: 100%;
    }
  }
}

.selected {
  font-weight: bold;
  border-bottom: 2px solid #091d8b;
}

.account-settings {
  display: flex;
  flex-direction: column;
  gap: 24px;

  &__group {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  &__hook {
    form {
      display: flex;
      grid-template-columns: 1fr 15%;
      align-items: flex-end;
      gap: 1rem;

      @media (max-width: 767px) {
        display: flex;
        flex-direction: column;
        gap: 16px;
      }
    }

    .from-input {
      display: flex;
      flex-direction: column;
      gap: 8px;

      input {
        width: 100%;
        padding: 8px 12px;
        background-color: #f6f7f9;
        border: 1px solid #f4f5f8;
        border-radius: 10px;
        font-size: 14px;
        font-weight: 300;
        line-height: 20px;
        color: #394357;

        &:focus {
          outline: none;
        }
      }
    }

    .form-button {
      @media (max-width: 767px) {
        margin: 0;
        width: 100%;

        .text-button {
          width: 100%;
          border-radius: 3.5vw;
          font-size: 14px;
        }
      }
    }
  }

  .row-setting {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    a {
      cursor: pointer;
    }
  }

  .square {
    display: inline-block;
    background-color: #1264a3;
    border-radius: 15%;
    width: 11px;
    height: 11px;
  }

  .text-button {
    font-size: 1.18vw;
    font-weight: 400;
    padding: 0.83vw 1.11vw;
    border-radius: 1.2vw;
    min-width: 35px;
    min-height: 35px;
    white-space: nowrap;
  }

  @media (max-width: 767px) {
    h3 {
      font-size: 7.5vw;
      line-height: normal;
    }
  }
}

.api-settings {
  display: flex;
  flex-direction: column;
  gap: 24px;

  &__header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;

    @media (max-width: 767px) {
      h3 {
        font-size: 7.5vw;
      }
    }
  }

  &__verify-api {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  &__aproved-api {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
}

.security-settings {
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 767px) {
    h3 {
      font-size: 7.5vw;
    }
  }

  &__options {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  &__option {
    width: 100%;
    padding: 1.4rem;
    background-color: #f6f7f9;
    border: 1px solid #dde4ed;
    border-radius: 10px;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    color: #394357;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    cursor: pointer;
  }

  .l-semibold {
    color: #001e62;
  }
}

.verification-settings {
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  &__section {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  &__download {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    padding: 1rem;
    background-color: #f9fafb;
    border: 1px solid #dde4ed;
    border-radius: 1rem;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;

    .b-regular {
      font-weight: 600;
    }

    @media (max-width: 767px) {
      flex-direction: column;
      gap: 1rem;

      p {
        line-height: normal;
        display: flex;
        align-items: center;
      }

      hr {
        display: block;
        width: 100%;
      }
    }
  }

  .l-semibold,
  .b-regular {
    color: #001e62;
  }

  .document {
    font-size: 18px;
    display: inline-block;
    padding: 10px;
    background-color: white;
    border-radius: 12px;
    border: 1px solid #dde4ed;
    margin-right: 1rem;
  }

  @media (max-width: 767px) {
    h3 {
      font-size: 7.5vw;
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

.outlined-add {
  color: #091d8b;
  border: 1px solid var(--button-primario-primario, #091d8b);
  height: 44px;
}

.card {


  .input-modificate {
    width: 100%;
    padding: 11px 16px;
    background-color: #f9fafb;
    border: 1px solid #dde4ed;
    border-radius: 10px;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    color: #394357;
  }

  input:focus-visible {
    outline: none;
  }

  .input-modificate {
    display: flex;
    align-items: center;
    gap: 8px;

    input {
      appearance: none;
      background: transparent;
      border: none;
      outline: 0;
    }

    .color {
      padding: 0;
      min-height: 16px;
      min-width: 16px;
      width: 24px;
    }
  }

  @media (max-width: 767px) {
    width: 100%;
  }
}

.big-gap {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.small-gap {
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 767px) {
    h1 {
      font-size: 6.5vw;
      line-height: normal;
    }

    p {
      font-size: 3.5vw;
      line-height: normal;
    }
  }
}

.l-semibold,
.b-regular {
  color: #001e62;
}

.toggle {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.approved-message {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  img {
    width: 120px;
  }

  &__message {
    text-align: center;

    span {
      font-weight: 600;
    }
  }

  button {
    width: 100%;
  }
}
</style>
