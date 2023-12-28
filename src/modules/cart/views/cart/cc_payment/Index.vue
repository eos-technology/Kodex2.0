<template>
  <div class="content">
    <v-card class="pa-6 mx-auto rounded-lg" min-width="960">
      <img src="@/assets/images/logo.svg" alt="" />
      <div
        class="d-flex flex-column flex-sm-row justify-space-between align-start align-sm-center my-4"
      >
        <h3 class="h3-semibold">{{ step == 1 ? 'Información de pago' : 'Finalizar' }}</h3>
        <h3 class="h3-semibold text-secondary-darken-1">Paso {{ step }}/2</h3>
      </div>
      <div v-if="step === 1" class="d-flex flex-column-reverse flex-sm-row gap-24">
        <div class="grid__left flex-grow-1">
          <h6 class="h6-semibold">Información de pago</h6>
          <div class="info__control">
            <label class="b-regular" for="card">Tarjeta de crédito</label>
            <div class="inpt">
              <v-select
                v-model="selectedItem"
                density="compact"
                :items="options"
                variant="solo-filled"
                menu-icon="mdi-chevron-down"
                hide-details="auto"
              >
                <template #item="{ item }">
                  <div
                    class="d-flex align-center input-select"
                    @click="selectedItem = item.value.text"
                  >
                    <img :src="item.value.icon" :alt="item.value.text" />
                    <p class="b-medium">{{ item.value.text }}</p>
                  </div>
                </template>
                <template v-slot:prepend-inner>
                  <div class="d-flex align-center">
                    <img
                      class="img-select ml-2 mr-2"
                      src="@/assets/images/master.svg"
                      v-if="selectedItem === null"
                    />
                  </div>
                  <div class="d-flex align-center" v-for="icon in options" :key="icon.text">
                    <img
                      class="img-select"
                      :src="icon.icon"
                      alt=""
                      v-if="icon.text === selectedItem"
                    />
                  </div>
                </template>
              </v-select>
              <input class="b-light" type="text" placeholder="5106 9697 9059 5990" id="card" />
            </div>
          </div>
          <div class="info__control">
            <label class="b-regular" for="date">Fecha de expiración</label>
            <input class="b-light" type="text" placeholder="07/28" id="date" />
          </div>
          <div class="info__control">
            <label class="b-regular" for="code">Código de seguridad</label>
            <input class="b-light" type="text" placeholder="***" id="code" />
          </div>
          <div class="info__control">
            <label class="b-regular" for="id">Identificación</label>
            <div class="inpt">
              <v-select
                height="48"
                hide-details
                variant="solo-filled"
                flat
                rounded="lg"
                :items="['C.C', 'T.I']"
              ></v-select>
              <input class="b-light" type="text" placeholder="9.059.990" id="id" />
            </div>
          </div>
          <div class="info__control">
            <label class="b-regular" for="nums">Número de cuotas</label>
            <input class="b-light" type="text" placeholder="4" id="nums" />
          </div>
          <v-checkbox color="#091D8B" hide-details
            ><template v-slot:label
              ><p class="b-regular">Acepto los términos y condiciones de KodexPay</p></template
            ></v-checkbox
          >
          <v-btn color="primary" class="rounded-lg" height="48" @click="step++">Pagar</v-btn>
        </div>
        <div class="grid__right h-100 flex-grow-1">
          <v-card variant="outlined" color="border" class="pa-6 rounded-lg bg-grey-lighten-4">
            <div>
              <div class="d-flex flex-column gap-16">
                <h6 class="h6-semibold text-primary">Resumen</h6>
                <div class="d-flex align-center gap-16">
                  <v-badge content="1" color="grey">
                    <v-avatar rounded>
                      <v-img width="50" src="/src/assets/images/article.png"></v-img>
                    </v-avatar>
                  </v-badge>
                  <div>
                    <p class="b-medium">Artículo particular</p>
                    <p class="b-light">Artículo particular</p>
                  </div>
                  <div class="flex-grow-1">
                    <p class="l-semibold text-right">$0.0000</p>
                  </div>
                </div>
                <div class="d-flex align-center justify-space-between">
                  <p class="b-light">Cantidad de artículos</p>
                  <p class="b-light">1</p>
                </div>
                <div class="d-flex align-center justify-space-between">
                  <p class="b-light">Nombre</p>
                  <p class="b-light">Lucas Modric</p>
                </div>
                <div class="d-flex align-center justify-space-between">
                  <p class="b-light">Correo electrónico</p>
                  <p class="b-light">email@mail.com</p>
                </div>
                <div class="d-flex align-center justify-space-between">
                  <p class="b-light">Impuesto</p>
                  <p class="b-light">$0.00</p>
                </div>
                <div class="d-flex align-center justify-space-between">
                  <p class="b-light">Descuento</p>
                  <p class="b-light">$0.00</p>
                </div>
              </div>
              <v-divider class="my-6 border-opacity-0" color="border"></v-divider>
              <div class="d-flex align-center justify-space-between">
                <p class="l-semibold">Total a pagar</p>
                <p class="l-semibold">$0.00 USD</p>
              </div>
            </div>
          </v-card>
          <div class="d-flex align-end justify-end mt-8">
            <div>
              <v-img width="100" src="/src/assets/images/certified.png"></v-img>
            </div>
          </div>
        </div>
      </div>
      <div v-if="step === 2" class="d-flex flex-column gap-32">
        <div class="d-flex flex-column align-center justify-center gap-16">
          <img src="/src/assets/images/coin-aprov.png" />
          <p class="h3-bold">Todo listo</p>
          <div class="text-center">
            <p class="l-medium">Su compra de <b>NombreCompra</b> realizada con éxito.</p>
          </div>
        </div>
        <div class="d-flex flex-column align-center justify-center gap-16">
          <v-btn height="48" color="primary" class="rounded-lg" variant="flat">Nuevo Pago</v-btn>
          <v-btn height="48" class="rounded-lg" variant="tonal">Descargar comprobante</v-btn>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const selectedItem = ref(null)

const options = [{ icon: '@/assets/images/master.svg', text: 'MasterCard' }]

const step = ref(1)
</script>

<style lang="scss" scoped>
.content {
  min-height: 100vh;
  height: 100%;
  display: grid;
  place-content: center;
}
.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  &__left {
    display: grid;
    gap: 1rem;
  }
}

.inpt {
  display: grid;
  gap: 1rem;
  grid-template-columns: 80px 1fr;
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

.b-medium,
.l-medium {
  color: #001e62;
}

.h3-bold {
  color: #0a1e8c;
}
</style>
