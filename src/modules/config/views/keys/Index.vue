<template>
  <section class="keys">
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
                    variant="solo-filled" v-model="form.name" id="name" type="text"></v-text-field>
                </label>
              </div>

              <label for="domain" class="b-regular">
                <p class="b-regular mb-1">{{ $t('setting.domain') }}</p>
                <v-text-field class="inpt" elevation-0 density="compact" hide-details variant="solo-filled" type="text"
                  v-model="form.domain" id="domain" placeholder="www.example.com"></v-text-field>
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
              <v-btn class="btn" variant="outlined" color="secondary">
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
              <span>{{ form.apiMethod }}</span> {{ $t('newApi-message3') }}
              <span>{{ form.projectName }}</span> {{ $t('newApi-message4') }}
            </p>
          </div>
          <v-btn class="btn" color="primary">{{
            $t('globals.back')
          }}</v-btn>

        </div>
   
    </div>
  </section>
</template>
<script setup lang="ts">
import { getFile } from '@/helpers/Index'
import { reactive, ref } from 'vue'

const saved = ref<boolean>(false)

const form = reactive({
  name: '',
  domain: '',
  apiMethod: '',
  projectName: 'NombreProyecto'
})

const options = ['Pagos por Api', 'Pagos por Modal', 'Pagos por Enlaces']
</script>

<style lang="scss" scoped>
.card {
  width: 450px;
  margin: 0 auto;

  @media (max-width: 767px) {
    width: 100%;

    h1 {
      font-size: 7.5vw;
    }

    .l-regular {
      font-size: 4vw;
      line-height: normal;
    }
  }

  input,
  select {
    width: 100%;
    padding: 8px 12px;
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
}

.l-semibold,
.b-regular,
.text-button {
  color: #001e62;
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
