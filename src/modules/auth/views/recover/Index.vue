<template>
  <!-- Step 1 -->
  <section class="login" v-if="step === 1">
    <div class="login__main">
      <div class="login__back">
        <GoBack />
        <img class="login__img" src="@/assets/images/logo.svg" alt="" />
      </div>
      <div class="login__info">
        <h3 class="h1-bold text-primary login__text">{{ $t('login.forget') }}</h3>
        <p class="b-light login__text">
          {{ $t('login.forgetText') }}
        </p>
      </div>
      <label for="email">
        <p class="regular">{{ $t('login.mail') }}</p>
        <v-text-field
          hide-details="auto"
          rounded="lg"
          flat
          type="email"
          variant="solo-filled"
          density="compact"
          id="email"
          v-model="form.email"
          :placeholder="$t('login.mail')"
        >
        </v-text-field>
      </label>
    </div>

    <div class="login__footer">
      <v-btn
        size="48"
        flat
        color="primary"
        class="w-100 rounded-lg text-capitalize"
        @click="step = 2"
        >{{ $t('login.resetPass') }}</v-btn
      >
      <div class="login__links">
        <router-link to="register" class="link-auth">{{ $t('login.account') }}</router-link>
        <router-link :to="{ name: 'register' }" class="link-aux">{{
          $t('login.newAccount')
        }}</router-link>
      </div>
    </div>
  </section>
  <!-- Step 2 -->
  <section class="login" v-if="step === 2">
    <div class="login__main">
      <div class="login__back">
        <BackDummy @click="step = 1" />
        <img class="login__img" src="@/assets/images/logo.svg" alt="" />
      </div>
      <div class="login__info">
        <h3 class="h1-bold login__text text-primary">{{ $t('login.passwordReset') }}</h3>
        <p class="b-light login__text">
          {{ $t('login.sendEmail') }}
        </p>
      </div>
      <label for="pass"
        ><p class="b-regular">{{ $t('login.pass') }}</p>
        <v-text-field
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
      <label for="confirmPass"
        ><p class="b-regular">{{ $t('login.confirmPass') }}</p>
        <v-text-field
          variant="solo-filled"
          v-model="form.confirmpass"
          :placeholder="$t('login.pass')"
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          @click:append-inner="visible = !visible"
          density="compact"
          hide-details="auto"
          flat
          :type="visible ? 'text' : 'password'"
          rounded="lg"
          id="confirmPass"
        ></v-text-field
      ></label>
    </div>

    <div class="login__footer">
      <v-btn
        flat
        size="48"
        color="primary"
        class="w-100 text-capitalize"
        rounded="lg"
        @click="step = 3"
        >{{ $t('login.resetPass') }}</v-btn
      >
      <div class="login__links">
        <router-link to="register" class="link-auth">{{ $t('login.account') }}</router-link>
        <router-link :to="{ name: 'register' }" class="link-aux">{{
          $t('login.newAccount')
        }}</router-link>
      </div>
    </div>
  </section>
  <!-- Step 3 -->
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
          flat
          size="48"
          color="primary"
          class="w-100 text-capitalize"
          rounded="lg"
          @click="step = 1"
          >{{ $t('login.goBack') }}</v-btn
        >
        <div class="login__links">
          <router-link to="" class="link-auth">{{ $t('login.account') }}</router-link>
          <router-link :to="{ name: 'register' }" class="link-aux">{{
            $t('login.newAccount')
          }}</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const visible = ref(false)

const step = ref<number>(2)

const form = ref({
  email: '',
  password: '',
  confirmpass: ''
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
