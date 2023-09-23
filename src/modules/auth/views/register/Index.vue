<template>
  <form @submit.prevent="onSubmit" class="login" v-if="step === 1">
    <div class="login__main">
      <div class="login__back">
        <GoBack />
        <img class="login__img" src="@/assets/images/logo.svg" alt="" />
      </div>
      <!-- Info -->
      <div class="login__info">
        <h3 class="h1-bold text-primary login__text">{{ $t('login.register') }}</h3>
        <p class="b-light login__text">
          {{ $t('login.accountCreate') }}
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
        <div class="login__grid">
          <label for="name">
            <p class="b-regular">{{ $t('login.name') }}</p>
            <v-text-field
              variant="solo-filled"
              v-model="form.name"
              :placeholder="$t('login.yourName')"
              hide-details="auto"
              rounded="lg"
              flat
              density="compact"
              id="name"
            ></v-text-field>
          </label>
          <label for="lastName">
            <p class="b-regular">{{ $t('login.lastname') }}</p>
            <v-text-field
              variant="solo-filled"
              v-model="form.lastName"
              :placeholder="$t('login.yourLastnames')"
              hide-details="auto"
              rounded="lg"
              flat
              density="compact"
              id="lastName"
            ></v-text-field>
          </label>
        </div>
        <label for="email">
          <p class="b-regular">{{ $t('login.mail') }}</p>
          <v-text-field
            variant="solo-filled"
            v-model="form.email"
            placeholder="Example@email.com"
            hide-details="auto"
            rounded="lg"
            flat
            type="email"
            density="compact"
            id="email"
          ></v-text-field>
        </label>
        <!-- Tel input -->
        <FlagInput :label="$t('login.phone')" v-model="form.phone" />
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
        {{ $t('login.continue') }}</v-btn
      >

      <div class="login__links">
        <router-link :to="{ name: 'recover' }" class="link-auth">{{
          $t('login.forget')
        }}</router-link>
        <router-link :to="{ name: 'login' }" class="link-aux">{{ $t('login.sesion') }}</router-link>
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
        <h3 class="h1-bold text-primary">{{ $t('login.register') }}</h3>
        <p class="b-light">
          {{ $t('login.accountCreate') }}
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

      <label for="pass"
        ><p class="b-regular">{{ $t('login.pass') }}</p>
        <v-text-field
          variant="solo-filled"
          v-model="form.pass"
          :placeholder="$t('login.enterPass')"
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

      <label for="pass"
        ><p class="b-regular">{{ $t('login.passConfirm') }}</p>
        <v-text-field
          variant="solo-filled"
          v-model="form.passConfirm"
          :placeholder="$t('login.enterPass')"
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
        label="Sí, entiendo y acepto los Términos de Servicio de Kodex"
        class="w-100"
        v-model="form.check"
      ></v-checkbox>
    </div>

    <div class="login__footer">
      <v-btn
        color="primary"
        class="w-100 rounded-b-lg text-capitalize"
        size="48"
        type="submit"
        @click="step = 3"
      >
        {{ $t('login.newAccount') }}</v-btn
      >

      <div class="login__links">
        <router-link to="" class="link-auth">{{ $t('login.forget') }}</router-link>
        <router-link to="" class="link-aux">{{ $t('login.sesion') }}</router-link>
      </div>
    </div>
  </section>

  <section class="login" v-if="step === 3">
    <div class="login__main">
      <img class="login__img" src="@/assets/images/logo.svg" alt="" />

      <div class="login__info">
        <img class="login__success" src="@/assets/icons/form/success.svg" alt="" />
        <h3 class="h1-bold text-primary text-center">{{ $t('login.ok') }}</h3>
        <p class="b-light text-center">
          {{ $t('login.okPass') }}
        </p>
      </div>
      <div class="login__footer">
        <v-btn
          color="primary"
          class="w-100 rounded-b-lg text-capitalize"
          size="48"
          type="submit"
          @click="step = 1"
        >
          {{ $t('login.goBack') }}</v-btn
        >

        <div class="login__links">
          <router-link to="" class="link-auth">{{ $t('login.account') }}</router-link>
          <router-link :to="{ name: 'register' }" class="link-aux">{{
            $t('login.sesion')
          }}</router-link>
        </div>
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
  name: '',
  lastName: '',
  email: '',
  phone: '',
  pass: '',
  passConfirm: '',
  check: false
})
</script>

<style lang="scss" scoped>
.btn-outline-secondary {
  background: #fafafa;
  border-radius: 12px; /* 1.2rem = 12px */
  width: 100%;
  border: 1px solid #dde4ed;
  padding: 12px 16px; /* 1.2rem = 12px, 1.6rem = 16px */
}
</style>
