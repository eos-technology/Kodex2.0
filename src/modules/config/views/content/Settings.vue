<template>
  <v-card class="pa-6">
    <div class="card-body">
      <div class="setting-section">
        <nav class="setting-section__nav">
          <ul class="setting-section__options">
            <li @click="selected = 1" class="l-regular" :class="{ selected: selected == 1 }">
              {{ $t('setting.info') }}
            </li>
            <li @click="selected = 2" class="l-regular" :class="{ selected: selected == 2 }">
              {{ $t('setting.security') }}
            </li>
            <li @click="selected = 3" class="l-regular" :class="{ selected: selected == 3 }">
              {{ $t('setting.api') }}
            </li>
            <li @click="selected = 4" class="l-regular" :class="{ selected: selected == 4 }">
              {{ $t('setting.verificationkyc') }}
            </li>
          </ul>
        </nav>

        <!-- Account tab -->
        <div v-if="selected == 1" class="account-settings">
          <div class="row-setting">
            <h3 class="h3-semibold">{{ $t('setting.myaccount') }}</h3>
            <router-link
              :to="{ name: 'account' }"
              class="b-regular"
              style="color: #3587ff; text-decoration: underline"
            >
              {{ $t('setting.edit') }}
            </router-link>
          </div>
          <div class="account-settings__group">
            <div class="row-setting">
              <p>{{ $t('setting.name-account') }}</p>
              <p>nombre de cuenta</p>
            </div>
            <div class="row-setting">
              <p>{{ $t('setting.email') }}</p>
              <p>example@email.com</p>
            </div>
            <div class="row-setting">
              <p>{{ $t('setting.tolerance') }}</p>
              <p>0.0%</p>
            </div>
            <div class="row-setting">
              <p>{{ $t('setting.state') }}</p>
              <p>
                <span class="dot-status dot-status--in-process"></span>&nbsp; Proceso de verficación
              </p>
            </div>
            <div class="row-setting">
              <p>{{ $t('setting.primary-color') }}</p>
              <p>
                <span class="square"></span>
                #1264A3
              </p>
            </div>
            <div class="row-setting">
              <p>{{ $t('setting.secundary-color') }}</p>
              <p>
                <span class="square"></span>
                #1264A3
              </p>
            </div>
            <div class="row-setting">
              <p>{{ $t('setting.kodex-icon') }}</p>
              <p><span class="dot-status dot-status--enable"></span>&nbsp; Habilitado</p>
            </div>
            <div class="row-setting">
              <p>{{ $t('setting.api-pay') }}</p>
              <p><span class="dot-status dot-status--enable"></span>&nbsp; Habilitado</p>
            </div>
            <div class="row-setting">
              <p>{{ $t('setting.modal-pay') }}</p>
              <p><span class="dot-status dot-status--disable"></span>&nbsp; Deshabilitado</p>
            </div>
            <div class="row-setting">
              <p>{{ $t('setting.link-pay') }}</p>
              <p><span class="dot-status dot-status--enable"></span>&nbsp; Habilitado</p>
            </div>
          </div>
          <hr />
          <div class="account-settings__hook">
            <form>
              <label class="w-100" for="hook"
                ><p class="b-regular mb-1">Web Hook</p>
                <v-text-field
                  density="compact"
                  name="Hook"
                  placeholder="Web Hook Link"
                  variant="solo-filled"
                  hide-details="auto"
                ></v-text-field>
              </label>

              <div class="form-button">
                <v-btn class="primary outlined-add text-none">{{
                  $t('setting.test-connection')
                }}</v-btn>
              </div>
            </form>
            <p>{{ $t('setting.hook-message') }}</p>
          </div>
        </div>

        <!-- Security tab -->
        <div v-if="selected == 2" class="security-settings">
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

        <!-- Api Keys tab -->
        <div v-if="selected == 3" class="api-settings">
          <div class="api-settings__header">
            <h3 class="h3-semibold">Api Keys</h3>
            <router-link :to="{ name: 'keys' }">
              <v-btn class="text-none text-white primary" color="#091D8B">{{
                $t('setting.new-api')
              }}</v-btn>
            </router-link>
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

        <!-- verification tab -->
        <div v-if="selected == 4" class="verification-settings">
          <h3 class="h3-semibold">{{ $t('setting.verificationkyc') }}</h3>

          <div class="verification-settings__section">
            <p class="l-semibold">{{ $t('setting.document-legal') }}</p>
            <p class="b-regular">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum consequuntur cumque
              hic incidunt. Cumque iure nemo veniam porro magnam, vitae harum, ipsa quis esse
              voluptas eius exercitationem possimus tempora beatae.
            </p>

            <DropZone />
          </div>

          <div class="verification-settings__section">
            <p class="l-semibold">{{ $t('setting.identity-document') }}</p>
            <p class="b-regular">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum consequuntur cumque
              hic incidunt. Cumque iure nemo veniam porro magnam, vitae harum, ipsa quis esse
              voluptas eius exercitationem possimus tempora beatae.
            </p>

            <DropZone />
          </div>

          <div class="verification-settings__download">
            <p class="b-regular">
              <span><i class="icon-files document"></i></span>

              {{ $t('setting.account-certificate') }}
            </p>
            <hr />
            <v-btn class="text-none primary outlined" variant="outlined">{{
              $t('setting.validate-view-document')
            }}</v-btn>
          </div>
        </div>
      </div>
    </div>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import VerifyApi from './VerifyApi.vue'
import ApprovedApi from './ApprovedApi.vue'
import DropZone from '@/components/global/ui/DropZone.vue'

const selected = ref(1)

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
</style>
