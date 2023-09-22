<template>
  <div :class="menu ? 'menu' : 'menu-min'">
    <div class="menu__header">
      <div>
        <p class="menu__text l-bold">Nombre del proyecto</p>
        <p class="menu__text b-semibold text-success">Nombre del proyecto</p>
      </div>
      <div class="menu__arrow" @click="handleMenuClick">
        <img src="../assets/icons/arrow-right.svg" alt="" />
      </div>
    </div>
    <div class="line"></div>
    <router-link
      class="menu__route"
      v-for="(item, index) in routes"
      :key="index"
      :to="{ name: `${item.route}` }"
    >
      <i :class="`icon-${item.icon} menu__icon`"></i>
      <p class="menu__name">{{ item.name }}</p>
      <v-tooltip activator="parent" location="end">{{ item.name }}</v-tooltip>
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const menu = ref(false)

function handleMenuClick() {
  menu.value = !menu.value
  emit('menu-clicked', menu.value)
}

const emit = defineEmits(['menu-clicked'])

const routes = [
  { icon: 'dash', name: 'Dashboard', route: 'project' },
  { icon: 'link', name: 'Enlaces de pago', route: 'payment_links' },
  { icon: 'transaction', name: 'Transaction', route: 'transactions' },
  { icon: 'clock', name: 'Reports', route: 'reports' },
  { icon: 'bank', name: 'Métodos de pago', route: '' },
  { icon: 'user', name: 'Usuarios', route: '' },
  { icon: 'setting', name: 'Configuración', route: '' }
]
</script>

<style lang="scss" scoped>
.menu {
  padding: 24px;
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: fixed;
  width: 264px;
  transition: all ease-in-out 200ms;
  &__name {
    color: #061461;
  }
  &__header {
    display: flex;
    gap: 8px;
    align-items: center;
    justify-content: space-between;
  }
  &__arrow {
    display: grid;
    place-content: center;
    height: 32px;
    width: 32px;
    padding: 4px;
    background: #fafafa;
    border-radius: 12px;
    cursor: pointer;
    transition: all ease-in-out 300ms;
    transform: rotate(180deg);
  }
  &__logo {
    margin-bottom: 16px;
  }
  a {
    text-decoration: none;
  }
  &__route {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 14px;
    font-weight: 300;
    line-height: 20px;
    &.active {
      font-weight: 700;
      .menu__icon {
        padding: 8px;
        background: #061461;
        border-radius: 12px;
        color: #fff;
      }
    }
    &--text {
      color: #fff;
      font-size: 1.7rem;
      text-align: center;
    }
  }
  &__icon {
    padding: 8px;
    font-size: 16px;
    color: #001e62;
  }
  &__line {
    opacity: 0.2;
    margin: 8px 0;
  }
  &__text {
    transform: translateX(0%);
    opacity: 1;
  }
}

.menu-min {
  padding: 31px 19px;
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: fixed;
  @media (max-width: 768px) {
    display: none;
  }
  a {
    text-decoration: none;
  }
  .menu {
    width: 7rem;
  }
  .menu__header {
    justify-content: center;
    gap: unset;
  }
  .menu__text {
    display: none;
    transform: translateX(-100%);
    transition: transform 1s ease-in-out;
    opacity: 0;
  }
  .menu__name {
    display: none;
  }
  .menu__arrow {
    transform: rotate(0deg);
  }
}
</style>
