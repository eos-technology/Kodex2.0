<template>
  <form @submit.prevent="onSubmit" class="login" v-if="step === 1">
    <div class="login__main">
      <img class="login__img" src="@/assets/images/logo.svg" alt="" />
      <!-- Info -->
      <div class="login__info">
        <h3 class="h1-bold login__text text-primary">{{ $t('login.welcome') }}</h3>
        <p class="b-light login__text">
          {{ $t('login.data') }}
        </p>
      </div>
      <v-btn flat class="w-100 bg-input text-capitalize rounded-lg" size="48"
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
            variant="solo-filled"
            v-model="form.email"
            placeholder="Example@example.com"
            hide-details="auto"
            rounded="lg"
            flat
            type="email"
            density="compact"
            id="email"
          ></v-text-field>
        </label>
        <label for="pass"
          ><p class="b-regular">{{ $t('login.pass') }}</p>
          <v-text-field
            variant="solo-filled"
            v-model="form.pass"
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
        <v-checkbox
          color="primary"
          :label="$t('login.remember')"
          class="w-100"
          v-model="form.check"
        ></v-checkbox>
      </div>
    </div>

    <!-- Footer -->
    <div class="login__footer">
      <v-btn
        color="primary"
        class="w-100 rounded-b-lg text-capitalize"
        size="48"
        type="submit"
        @click="step = 2"
      >
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
  </form>

  <section class="login" v-if="step === 2">
    <div class="login__main">
      <div class="login__back">
        <BackDummy @click="step = 1" />
        <img class="login__img" src="@/assets/images/logo.svg" alt="" />
      </div>
      <div class="login__info">
        <h3 class="h1-bold text-primary">{{ $t('login.validateGoogle') }}</h3>
        <p class="b-light">
          {{ $t('login.validateText') }}
        </p>
      </div>
      <VerificationCode />
      <router-link to="" class="link-under text-secondary-darken-1">{{
        $t('login.resend')
      }}</router-link>
    </div>

    <div class="login__footer">
      <v-btn color="primary" size="48" class="w-100 rounded-lg text-capitalize">
        {{ $t('login.code') }}
      </v-btn>
      <div class="login__links">
        <router-link to="recover" class="link-auth">{{ $t('login.account') }}</router-link>
        <router-link :to="{ name: 'register' }" class="link-aux">{{
          $t('login.newAccount')
        }}</router-link>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const step = ref(1)

const visible = ref(false)

function onSubmit() {
  alert('Submitted')
}

const form = ref({
  pass: '',
  email: '',
  check: false
})
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
