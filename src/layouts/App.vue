<template>
  <div class="app">
    <MenuApp class="app__menu" />
    <!-- <MenuAppMobile class="app__menu-mobile" /> -->
    <RouterView class="app__content"></RouterView>
  </div>
</template>

<script setup lang="ts">
import MenuApp from '@/components/MenuApp.vue'
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
    // min-width: 100vw;
    width: 100%;
    margin-left: 72px;
    background-color: #f8f8f8;
    border-top-left-radius: 2rem;
    @media (max-width: 768px) {
      margin-top: 65px;
      border-top-left-radius: 0;
      margin-left: 0;
      width: 100%;
    }
  }
}
</style>
