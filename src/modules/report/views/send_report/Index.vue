<template>
  <section class="send">
    <h3 class="h3-bold mb-6">{{ $t('reports.header') }}</h3>
    <router-link :to="{ name: 'reports' }" style="text-decoration: none" class="text-black">
      <BackDummy />
    </router-link>
    <v-card class="card-transaction pa-4 rounded-lg d-flex flex-column" v-if="!send">
      <h3 class="h3-bold">{{ $t('reports.sendCopy') }}</h3>
      <p class="l-light mt-4">{{ $t('reports.description') }}</p>
      <div class="b-regular mt-8">
        <span>{{ $t('reports.email') }}</span>
        <v-text-field
          density="compact"
          placeholder="Example@mail.com"
          variant="solo"
          class="rounded-lg"
        ></v-text-field>
      </div>
      <v-btn class="text-none text-white mt-4 primary" color="#091D8B" @click="send = true">{{
        $t('transactions.btnSend')
      }}</v-btn>
      <router-link :to="{ name: 'reports' }">
        <v-btn variant="outlined" class="text-none mt-4 w-100 primary outlined">{{
          $t('transactions.btnCancel')
        }}</v-btn>
      </router-link>
    </v-card>
    <v-card class="card-transaction pa-4 rounded-lg d-flex flex-column align-center" v-if="send">
      <div>
        <img src="@/assets/images/ready.webp" alt="" />
      </div>
      <h3 class="h3-bold">{{ $t('reports.allDone') }}</h3>
      <p class="l-light mt-4">
        {{ $t('reports.sendEmail') }} <span class="font-weight-bold">email@email.com</span>
      </p>
      <router-link :to="{ name: 'reports' }" class="w-100">
        <v-btn class="text-none text-white mt-6 w-100 primary" color="#091D8B">{{
          $t('transactions.back')
        }}</v-btn>
      </router-link>
    </v-card>
  </section>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const send = ref<boolean>(false)
</script>
<style lang="scss" scoped>
.card-transaction {
  margin: auto;
  width: 450px;

  @media (max-width: 500px) {
    width: 100%;
  }
}

:deep(.v-field--variant-solo) {
  border-radius: 12px;
  border: 1px solid var(--border-border-input, #f4f5f8);
  background: var(--inputs-fondo-2, #f6f7f9);
  box-shadow: none;
  color: #394357;
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
