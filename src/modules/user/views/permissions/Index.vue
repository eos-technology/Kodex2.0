<template>
  <section class="send">
    <h3 class="h3-bold mb-6">{{ $t('users.header') }}</h3>
    <router-link :to="{ name: 'user' }" style="text-decoration: none" class="text-black">
      <BackDummy />
    </router-link>
    <v-card class="card-transaction pa-4 rounded-lg d-flex flex-column" v-if="!saved">
      <h3 class="h3-bold">{{ $t('user.edit-permissions') }}</h3>
      <p class="l-light mt-4">{{ $t('user.permissions-text') }}</p>
      <div class="d-flex flex-column mt-4" v-for="(item, index) in permissions" :key="index">
        <div class="d-flex align-center justify-space-between">
          <p class="l-light">{{ item.name }}</p>
          <div>
            <v-switch hide-details inset color="#091D8B"></v-switch>
          </div>
        </div>
      </div>
      <v-btn class="text-none text-white mt-4 primary" color="#091D8B" @click="saved = true">
        {{ $t('user.save') }}</v-btn
      >
      <router-link :to="{ name: 'user' }">
        <v-btn variant="outlined" class="text-none mt-4 w-100 primary outlined">
          {{ $t('users.cancel') }}</v-btn
        >
      </router-link>
    </v-card>
    <v-card
      class="card-transaction pa-4 rounded-lg d-flex flex-column align-center text-center"
      v-if="saved"
    >
      <div>
        <img src="@/assets/images/ready.webp" alt="" />
      </div>
      <h3 class="h3-bold">{{ $t('reports.allDone') }}</h3>
      <p class="l-light mt-4">
        {{ $t('reports.permission') }} <span class="font-weight-bold">NombreUsuario</span>
        {{ $t('reports.permission2') }}<span class="font-weight-bold"> NombreProyecto</span>
      </p>
      <router-link :to="{ name: 'user' }" class="w-100">
        <v-btn class="text-none text-white mt-6 w-100 primary" color="#091D8B">{{
          $t('transactions.back')
        }}</v-btn>
      </router-link>
    </v-card>
  </section>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const saved = ref<boolean>(false)

const permissions = [
  {
    name: 'Text'
  },
  {
    name: 'Text'
  },
  {
    name: 'Text'
  },
  {
    name: 'Text'
  },
  {
    name: 'Text'
  },
  {
    name: 'Text'
  }
]
</script>
<style lang="scss" scoped>
.card-transaction {
  margin: auto;
  width: 450px;

  @media (max-width: 500px) {
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
