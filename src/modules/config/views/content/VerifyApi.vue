<template>
  <div class="verify-api">
    <v-card class="pa-6">
      <div class="card-body">
        <div class="verify-api__header">
          <div class="api-name">
            <h5 class="l-semibold">{{ apiKey?.name }}</h5>
            <p class="b-regular">{{ $t(apiKey?.method) }}</p>
          </div>
          <div class="api-status">
            <p>
              <span class="dot-status dot-status--in-process"></span>&nbsp;&nbsp;
              {{ $t('setting.verificaton-process') }}
            </p>
          </div>
        </div>

        <label for="code" class="verify-api__content mt-4">
          <p class="b-regular">{{ $t('setting.verification-code') }}</p>
          <v-text-field
            hide-details
            id="code"
            :placeholder="$t('setting.code')"
            variant="solo-filled"
            density="compact"
            class="inpt"
          ></v-text-field>
          <p class="b-regular message mt-2">{{ $t('settings.email-code') }} example@email.com</p>
        </label>

        <div class="verify-api__buttons mt-8">
          <p class="b-regular b-regular--red">{{ $t('setting.delete-key') }}</p>
          <div class="buttons">
            <p>{{ $t('setting.resend-code') }}</p>
            <v-btn variant="outlined" class="btn" color="primary">
              {{ $t('setting.validate-api') }}</v-btn
            >
          </div>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  apiKey: Object
})
</script>

<style lang="scss" scoped>
.verify-api {
  &__header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 767px) {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 6px;

      .api-status {
        margin: 0;
      }
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
  }

  &__buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .buttons p {
      cursor: pointer;
      text-decoration: underline;
      color: #3587ff;
    }

    .buttons {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 24px;

      @media (max-width: 767px) {
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        gap: 16px;
        width: 100%;
      }
    }

    @media (max-width: 767px) {
      display: flex;
      flex-direction: column-reverse;
      gap: 16px;
      width: 100%;
    }
  }

  .l-semibold,
  .b-regular {
    color: #001e62;
  }

  .message {
    font-weight: 300;
  }

  .b-regular--red {
    color: #ef4444;
    cursor: pointer;
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
