<template>
  <form @submit.prevent="onSubmit" class="login" v-if="step === 1">
    <div class="login__main">
      <img class="login__img" src="@/assets/images/logo.svg" alt="" />
      <!-- Info -->
      <div class="login__info">
        <h3 class="h3-bold login__text">{{ $t('login.welcome') }}</h3>
        <p class="b-light login__text">
          {{ $t('login.data') }}
        </p>
      </div>

      <!-- <b-button variant="outline-secondary"
        ><img src="@/assets/icons/google.svg" alt="" />{{ $t('login.google') }}</b-button
      > -->

      <div class="line__container">
        <div class="line"></div>
        <p class="l-medium">{{ $t('login.o') }}</p>
        <div class="line"></div>
      </div>

      <!-- Form -->

      <div class="login__info">
        <BaseInput
          v-model="form.email"
          :label="$t('login.mail')"
          class="w-100"
          placeholder="Example@email.com"
          type="email"
        />
        <BaseInput
          v-model="form.pass"
          :label="$t('login.pass')"
          :placeholder="$t('login.pass')"
          class="w-100"
          type="password"
        />
        <BaseCheckbox :label="$t('login.remember')" class="w-100" v-model="form.check" />
      </div>
    </div>

    <!-- Footer -->
    <div class="login__footer">
      <b-button variant="primary" class="w-100" type="submit" @click="step = 2">{{
        $t('login.sesion')
      }}</b-button>
      <div class="login__links">
        <router-link :to="{ name: '' }" class="link-auth">{{ $t('login.forget') }}</router-link>
        <router-link :to="{ name: '' }" class="link-aux">{{ $t('login.newAccount') }}</router-link>
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
        <h3 class="h3-bold">{{ $t('login.validateGoogle') }}</h3>
        <p class="b-light">
          {{ $t('login.validateText') }}
        </p>
      </div>
      <VerificationCode />
      <router-link to="" class="link-under">{{ $t('login.resend') }}</router-link>
    </div>

    <div class="login__footer">
      <!-- <b-button variant="primary" class="w-100">{{ $t('login.code') }}</b-button> -->
      <div class="login__links">
        <router-link to="" class="link-auth">{{ $t('login.account') }}</router-link>
        <router-link :to="{ name: 'Register' }" class="link-aux">{{
          $t('login.newAccount')
        }}</router-link>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const step = ref(1)

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
  border-radius: 12px;
  width: 100%;
  border: 1px solid #dde4ed;
  padding: 12px 16px;
}
</style>
