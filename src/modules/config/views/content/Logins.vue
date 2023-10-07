<template>
  <div class="sesion">
    <v-card class="pa-6" v-for="(item, index) in data" :key="index">
      <div class="d-flex align-center justify-space-between">
        <div class="d-flex align-center">
          <i :class="`icon-${item.iconCard} sesion__icon`"></i>
          <p class="l-medium ml-2">{{ item.titleCard }}</p>
        </div>
        <router-link style="color: #3587ff" to="#">{{ $t('logout') }}</router-link>
      </div>
      <div class="line my-6"></div>
      <div class="sesion__info">
        <div class="sesion__box sesion__box--up">
          <i class="icon-user sesion__icon"></i>
          <div>
            <p class="l-light">
              NombreUsuario -
              <span class="l-regular">({{ $t('setting.recent') }})</span>
            </p>
            <p class="b-light">NombreUsuario@email.com</p>
          </div>
        </div>
        <div class="sesion__box">
          <i class="icon-earth sesion__icon"></i>
          <p class="l-light">
            {{ $t('setting.login') }} -
            <span class="l-regular">03/03/2023 00:00</span>
          </p>
        </div>
        <div class="sesion__box">
          <i class="icon-navigation sesion__icon"></i>
          <p class="l-light">
            IP Address -
            <span class="l-regular">104.199.26.19</span>
          </p>
        </div>
        <div class="sesion__box">
          <i class="icon-location sesion__icon"></i>
          <p class="l-light">
            {{ $t('setting.location') }} -
            <span class="l-regular">Bogotá, Colombia</span>
          </p>
        </div>
      </div>

      <div class="d-flex align-center justify-space-between mt-2">
        <p class="l-light">{{ $t('setting.block-ip') }}</p>
        <div>
          <v-switch hide-details inset color="#091D8B"></v-switch>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script lang="ts" setup>
const data = [
  {
    iconCard: 'imac',
    titleCard: 'Apple iMac'
  },
  {
    iconCard: 'imac',
    titleCard: 'Chrome PC (Cadmium)'
  },
  {
    iconCard: 'ipad',
    titleCard: 'Table android Samsung'
  },
  {
    iconCard: 'apple',
    titleCard: 'Mac Mini'
  }
]
</script>

<style lang="scss" scoped>
@import '@/assets/sass/mixins';

.sesion {
  @include grid(3, 24px);

  &__icon {
    font-size: 24px;
    color: #001e62;
  }

  &__box {
    display: flex;
    align-items: center;
    gap: 8px;

    &--up {
      align-items: flex-start;
    }
  }

  &__info {
    display: grid;
    gap: 8px;
  }

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
  }
}
</style>
