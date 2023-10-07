<template>
  <section class="images">
    <h3 class="h3-bold mb-6">{{ $t('setting.title') }}</h3>
    <router-link :to="{ name: 'config' }" style="text-decoration: none" class="text-black">
      <BackDummy />
    </router-link>
    <v-card class="card pa-6">
      <div class="card-body big-gap">
        <div class="small-gap">
          <h1 class="h4-bold">{{ $t('setting.info') }}</h1>
          <p class="l-regular">{{ $t('setting.info-description') }}</p>
        </div>

        <form class="big-gap">
          <div class="small-gap">
            <p class="l-semibold">{{ $t('setting.info-account') }}</p>

            <div class="toggle">
              <label class="b-regular l-font">{{ $t('setting.show-icon') }}</label>
              <div>
                <v-switch hide-details v-model="form.showIcon" name="check-button" inset></v-switch>
              </div>
            </div>

            <label for="name"
              ><p class="b-regular mb-1">{{ $t('setting.name-account') }}</p>
              <v-text-field
                variant="solo-filled"
                density="compact"
                :placeholder="$t('setting.name')"
                id="name"
                v-model="form.name"
                hide-details
              ></v-text-field>
            </label>

            <label for="email"
              ><p class="b-regular mb-1">{{ $t('setting.email') }}</p>

              <v-text-field
                variant="solo-filled"
                density="compact"
                placeholder="Example@email.com"
                id="email"
                v-model="form.email"
                hide-details
              ></v-text-field>
            </label>

            <label for="telerance"
              ><p class="b-regular mb-1">{{ $t('setting.tolerance') }}</p>

              <v-text-field
                variant="solo-filled"
                density="compact"
                type="number"
                placeholder="0.0%"
                id="telerance"
                v-model="form.tolerance"
                hide-details
              ></v-text-field>
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

            <label class="secundary-colors" for="secundaryColor"
              >{{ $t('setting.secundary-color') }}

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
                <v-switch
                  hide-details
                  v-model="form.apiPay"
                  name="check-button"
                  inset
                  color="#091D8B"
                ></v-switch>
              </div>
            </div>

            <div class="toggle">
              <label class="b-regular l-font">{{ $t('setting.modal-pay') }}</label>
              <div>
                <v-switch
                  hide-details
                  v-model="form.modalPay"
                  name="check-button"
                  inset
                  color="#091D8B"
                ></v-switch>
              </div>
            </div>

            <div class="toggle">
              <label class="b-regular l-font">{{ $t('setting.link-pay') }}</label>
              <div>
                <v-switch
                  hide-details
                  v-model="form.linkPay"
                  name="check-button"
                  inset
                  color="#091D8B"
                ></v-switch>
              </div>
            </div>
          </div>

          <div class="small-gap">
            <router-link :to="{ name: 'config' }">
              <v-btn class="text-none text-white mt-4 w-100 primary" color="#091D8B">{{
                $t('setting.save')
              }}</v-btn>
            </router-link>
            <router-link :to="{ name: 'config' }">
              <v-btn variant="outlined" class="text-none w-100 primary outlined">{{
                $t('setting.cancel')
              }}</v-btn>
            </router-link>
          </div>
        </form>
      </div>
    </v-card>
  </section>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

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
</script>

<style lang="scss" scoped>
.card {
  width: 31.25vw;
  margin: 0 auto;

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

.l-font {
  font-size: 17px;

  @media (max-width: 767px) {
    font-size: 3.9vw;
  }
}

.message {
  font-weight: 300;
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
</style>
