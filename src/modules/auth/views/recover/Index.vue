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
          type="email"
          variant="solo-filled"
          id="email"
          class="inpt"
          density="compact"
          v-model="form.email"
          :placeholder="$t('login.mail')"
        >
        </v-text-field>
      </label>
    </div>

    <div class="login__footer">
      <v-btn color="primary" class="btn" @click="step = 2">{{ $t('login.resetPass') }}</v-btn>
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
          class="inpt"
          density="compact"
          hide-details="auto"
          :type="visible ? 'text' : 'password'"
          id="pass"
        ></v-text-field
      ></label>
      <label for="confirmPass"
        ><p class="b-regular">{{ $t('login.confirmPass') }}</p>
        <v-text-field
          class="inpt"
          density="compact"
          variant="solo-filled"
          v-model="form.confirmpass"
          :placeholder="$t('login.pass')"
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          @click:append-inner="visible = !visible"
          hide-details="auto"
          :type="visible ? 'text' : 'password'"
          id="confirmPass"
        ></v-text-field
      ></label>
    </div>

    <div class="login__footer">
      <v-btn color="primary" class="btn" @click="step = 3">{{ $t('login.resetPass') }}</v-btn>
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
        <v-btn color="primary" class="btn" @click="step = 1">{{ $t('login.goBack') }}</v-btn>
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
