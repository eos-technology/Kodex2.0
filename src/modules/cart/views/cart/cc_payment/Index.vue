<template>
  <v-card class="pa-6 mx-auto rounded-lg" max-width="960">
    <img src="@/assets/images/logo.svg" alt="" />
    <div class="d-flex justify-space-between align-center my-4">
      <h3 class="h3-semibold">Información de pago</h3>
      <h3 class="h3-semibold text-secondary-darken-1">Paso 1/2</h3>
    </div>
    <div class="grid">
      <div class="grid__left">
        <h6 class="h6-semibold">Información de pago</h6>
        <div class="info__control">
          <label class="b-regular" for="email">Fecha de expiración</label>
          <input class="b-light" type="text" placeholder="07/28" id="email" />
        </div>
        <div class="info__control">
          <label class="b-regular" for="email">Código de seguridad</label>
          <input class="b-light" type="text" placeholder="***" id="email" />
        </div>
        <div class="info__control">
          <label class="b-regular" for="email">Identificación</label>
          <input class="b-light" type="text" placeholder="9.059.990" id="email" />
        </div>
        <div class="info__control">
          <label class="b-regular" for="email">Número de cuotas</label>
          <input class="b-light" type="text" placeholder="4" id="email" />
        </div>
        <v-checkbox color="#091D8B" hide-details
          ><template v-slot:label
            ><p class="b-regular">Acepto los términos y condiciones de KodexPay</p></template
          ></v-checkbox
        >
        <v-btn color="primary" class="rounded-lg" height="48">Pagar</v-btn>
      </div>
      <div class="grid__right">
        <v-card class="pa-6 rounded-lg bg-grey-lighten-4">
          <h6 class="h6-semibold text-primary">Resumen</h6>
          <v-badge content="2" color="grey">
            <v-avatar>
              <v-img :src="'@/assets/images/article.png'"></v-img>
            </v-avatar>
          </v-badge>
        </v-card>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  &__left {
    display: grid;
    gap: 1rem;
  }
}

.info {
  display: flex;
  flex-direction: row;
  gap: 24px;
  justify-content: space-between;

  @media (max-width: 480px) {
    flex-direction: column;
  }

  &__form {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 50%;

    @media (max-width: 480px) {
      width: 100%;
    }
  }

  &__control {
    display: flex;
    flex-direction: column;
    gap: 4px;

    input {
      padding: 12px 16px;
      border-radius: 12px;
      border: 1px solid #f4f5f8;
      background: #f6f7f9;

      &:focus-visible {
        outline: none;
      }
    }
  }

  &__resumen {
    width: 40%;

    @media (max-width: 480px) {
      width: 100%;
    }

    :deep(.v-card) {
      padding: 24px;
      border-radius: 16px;
      background: #fafafa;
      border: 1px solid #dde4ed;
    }

    :deep(.v-card--variant-elevated) {
      box-shadow: none;
    }

    &-content {
      display: flex;
      flex-direction: column;
      gap: 24px;

      :deep(.v-btn) {
        padding: 12px 16px;
        height: fit-content;
        border-radius: 16px;
        text-transform: none;
      }
    }
  }

  &__inversion {
    display: flex;
    flex-direction: column;
    gap: 16px;

    &-item {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
  }

  &__total {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}

.b-regular {
  color: #1f2d4d;
}

.h6-semibold {
  color: #001e62;
}

.l-semibold {
  color: #001e62;
}

.b-light {
  color: #001e62;
}
</style>
