<template>
  <div class="app">
    <MenuApp class="app__menu" />
    <!-- <MenuAppMobile class="app__menu-mobile" /> -->
    <div class="app__content">
      <MenuProjects v-if="$route.name != 'dashboard'" />
      <div class="app__content-int" :class="$route.name != 'dashboard' ? 'menu-hide' : 'menu-show'">
        <RouterView></RouterView>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// import { ref } from 'vue'
import MenuApp from '@/components/MenuApp.vue'
import MenuProjects from '@/components/MenuProjects.vue'

// const menu = ref(false)

// function handleMenuClicked(isMenuOpen: boolean) {
//   menu.value = !isMenuOpen
// }

// import MenuAppMobile from '@/components/MenuAppMobile.vue'
</script>

<style lang="scss" scoped>
.app {
  display: flex;
  height: 100%;
  min-height: 100vh;
  background-color: #051255;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  &__menu {
    width: fit-content;
    background-color: #051255;
    height: 100%;
    min-height: 100vh;
    position: fixed;

    @media (max-width: 768px) {
      display: none;
    }
    &-mobile {
      @media (min-width: 768px) {
        display: none;
      }
    }
  }
  &__content {
    width: 100%;
    margin-left: 72px;
    background-color: #e9ebef;
    border-top-left-radius: 32px;
    overflow: hidden;
    min-height: 100vh;
    height: 100%;
    @media (max-width: 768px) {
      margin-top: 65px;
      border-top-left-radius: 0;
      margin-left: 0;
      width: 100%;
      max-width: unset;
    }
    &-int {
      border-top-left-radius: 32px;
      position: fixed;
      max-height: 100%;
      overflow-y: auto;
      background-color: #f8f8f8;
      padding: 1.5rem;
      margin-left: 72px;

      width: 100%;
      min-height: 100vh;
      height: 100%;
      &::-webkit-scrollbar {
        width: 0px;
      }
      &::-webkit-scrollbar-thumb {
        background-color: #888;
      }
    }
  }
}

.menu-hide {
  max-width: calc(100vw - 144px);
}
.menu-show {
  max-width: calc(100vw - 72px);
  margin-left: 0;
}
</style>
