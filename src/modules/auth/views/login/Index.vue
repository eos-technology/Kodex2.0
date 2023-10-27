<template>
  <Form class="login__form" @submit="onLogin" v-slot="{ isSubmitting }">
    <div class="login__main">
      <img class="login__img" src="@/assets/images/logo.svg" alt="" />
      <!-- Info -->
      <div class="login__info">
        <h3 class="h1-bold login__text text-primary">{{ $t('login.welcome') }}</h3>
        <p class="b-light login__text">
          {{ $t('login.data') }}
        </p>
      </div>
      <v-btn class="btn btn-secondary" color="secondary"
        ><img class="mr-2" src="@/assets/icons/google.svg" alt="" /> {{ $t('login.google') }}</v-btn
      >

      <div class="line__container">
        <div class="line"></div>
        <p class="l-medium">{{ $t('login.o') }}</p>
        <div class="line"></div>
      </div>

      <!-- Form -->

      <div class="login__info">
        <label for="email">
          <p class="b-regular">{{ $t('login.mail') }}</p>
          <v-text-field
            class="inpt"
            variant="solo-filled"
            v-model="form.email"
            placeholder="Example@example.com"
            hide-details="auto"
            type="email"
            density="compact"
            id="email"
          ></v-text-field>
        </label>
        <label for="pass"
          ><p class="b-regular">{{ $t('login.pass') }}</p>
          <v-text-field
            class="inpt"
            variant="solo-filled"
            v-model="form.password"
            :placeholder="$t('login.pass')"
            :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
            @click:append-inner="visible = !visible"
            density="compact"
            hide-details="auto"
            flat
            :type="visible ? 'text' : 'password'"
            rounded="lg"
            id="pass"
          ></v-text-field
        ></label>
        <v-checkbox color="primary" :label="$t('login.remember')" class="w-100"></v-checkbox>
      </div>
    </div>

    <!-- Footer -->
    <div class="login__footer">
      <v-btn color="primary" class="btn" type="submit" :loading="isSubmitting">
        {{ $t('login.sesion') }}</v-btn
      >

      <div class="login__links">
        <router-link :to="{ name: 'recover' }" class="link-auth">{{
          $t('login.forget')
        }}</router-link>
        <router-link :to="{ name: 'register' }" class="link-aux text-secondary-darken-1">{{
          $t('login.newAccount')
        }}</router-link>
      </div>
    </div>
  </Form>
</template>

<script setup lang="ts">
import { Form } from 'vee-validate'
import { ref, reactive } from 'vue'
import { useAuthStore } from '../../store/authStore'
import type { loginRequest } from '../../types/storeTypes'
import { useUserStore } from '@/modules/auth/store/userStore'
import { router } from '@/router'

const authStore = useAuthStore()
const userStore = useUserStore()

const visible = ref(false)

let form: loginRequest = reactive({
  email: null,
  password: null,
  remember: false,
  meta: {
    location: '',
    ip: ''
  }
})

const rules = reactive({
  email: [(v: string) => !!v || 'Password is required'],
  password: [
    (v: string) => !!v || 'Password is required',
    (v: string) => (v && v.length <= 15) || 'Password must be less than 10 characters'
  ]
})

const onLogin = async () => {
  await authStore.login(form).then((response: any) => {
    userStore
      .userInfo()
      .then(() => {
        router.push({ name: 'dashboard', replace: true })
      })
      .catch()
  })
}
</script>

<style lang="scss" scoped>
.btn-outline-secondary {
  background: #fafafa;
  border-radius: 0.75rem;
  width: 100%;
  border: 0.0625rem solid #dde4ed;
  padding: 0.75rem 1rem;
}
</style>
