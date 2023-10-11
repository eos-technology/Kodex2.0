<template>
  <div class="approved-api">
    <v-card class="pa-6" :class="{ block: isBlocked }">
      <div class="card-body">
        <div class="approved-api__header">
          <div class="api-name">
            <h5 class="l-semibold">{{ apiKey?.name }}</h5>
            <p class="b-regular">{{ $t(apiKey?.method) }}</p>
          </div>
          <div class="api-status">
            <p>
              <span class="dot-status dot-status--enable"></span>&nbsp;&nbsp;
              {{ $t('setting.aproved') }}
            </p>
          </div>
        </div>

        <div class="approved-api__form mt-4">
          <input :type="checked ? 'password' : 'text'" :value="apiKey?.apiKey" disabled />

          <div class="eye">
            <input
              class="check"
              :id="apiKey?.apiKey"
              @change="checked = !checked"
              type="checkbox"
            />
            <label :for="apiKey?.apiKey"><i class="icon-eye"></i></label>
          </div>
        </div>

        <div class="approved-api__block mt-6">
          <p class="b-regular">{{ $t('setting.block-api') }}</p>
          <div>
            <v-switch
              v-model="isBlocked"
              hide-details
              inset
              color="#091D8B"
              name="check-button"
            ></v-switch>
          </div>
        </div>

        <div class="approved-api__buttons mt-8">
          <p class="b-regular b-regular--red">{{ $t('setting.delete-key') }}</p>
          <div class="approved-api__flex">
            <i class="icon-copy"></i>
            <p>{{ $t('setting.copy-api') }}</p>
          </div>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

defineProps({
  apiKey: Object
})

const checked = ref(true)
const isBlocked = ref(true)
</script>

<style lang="scss" scoped>
.approved-api {
  &__header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 767px) {
      flex-direction: column;
      align-items: flex-start;
    }
  }
  &__flex {
    display: flex;
    gap: 8px;
    align-items: center;
  }

  &__form {
    display: flex;
    flex-direction: row;
    align-items: center;

    width: 100%;
    padding: 8px 12px;
    background-color: #f9fafb;
    border: 1px solid #dde4ed;
    border-radius: 10px;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    color: #394357;

    .eye {
      label {
        cursor: pointer;
        font-size: 17px;
      }

      input[type='checkbox'] {
        appearance: none;
        display: none;
      }
    }

    input {
      width: 100%;
      appearance: none;
      background: transparent;
      border: none;
      outline: 0;
    }
  }

  &__block {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  &__buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    p:last-child {
      cursor: pointer;
      text-decoration: underline;
      color: #3587ff;
    }

    @media (max-width: 767px) {
      flex-direction: column-reverse;
      gap: 1.4rem;
    }
    .icon-copy {
      color: #3587ff;
      text-decoration: none;
      background: none;
      font-size: 1rem;
    }
  }

  .block {
    background-color: #f9fafb;
  }

  .l-semibold,
  .b-regular {
    color: #001e62;
  }

  .b-regular--red {
    color: #ef4444;
    cursor: pointer;
  }
}
</style>
