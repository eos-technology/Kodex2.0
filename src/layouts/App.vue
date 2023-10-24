<template>
  <div class="app">
    <MenuApp class="app__menu" @route-value="isMenuOpen = false" />
    <MenuAppMobile class="app__menu-mobile" />
    <div class="app__content">
      <div class="app__content-int">
        <RouterView></RouterView>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import MenuApp from '@/components/MenuApp.vue'
import MenuAppMobile from '@/components/MenuAppMobile.vue'

const isMenuOpen = ref(false)
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
    margin: 10px 10px 10px 0;
    // margin-left: 72px;
    background-color: #e9ebef;
    border-radius: 32px;
    overflow-y: hidden;

    max-height: calc(100vh - 20px);
    @media (max-width: 768px) {
      margin: 75px 0 0;
      border-top-left-radius: 0;
      width: 100%;
      max-width: unset;
      overflow: unset;
      min-height: calc(100vh - 75px);

      height: 100%;
    }
    &-int {
      position: relative;
      border-top-left-radius: 32px;
      max-height: 100%;
      overflow-y: auto;
      background-color: #f8f8f8;
      width: 100%;
      min-height: 100vh;
      height: 100%;

      &::-webkit-scrollbar {
        width: 0px;
      }
      &::-webkit-scrollbar-thumb {
        background-color: #888;
      }

      @media (max-width: 768px) {
        width: 100%;
        margin-left: 0;
        border-top-left-radius: 0px;
        position: unset;
        min-height: calc(100vh - 75px);
      }
    }
  }
}

.menu-hide {
  /* max-width: calc(100vw - 144px); */
  @media (max-width: 768px) {
    max-width: unset;
  }
}
.menu-show__text {
  max-width: calc(100vw - 336px);
  width: 100%;
  margin-left: 264px;
  @media (max-width: 768px) {
    max-width: unset;
    margin-left: 0;
  }
}
.menu-show {
  max-width: calc(100vw - 72px);
  margin-left: 0;
  @media (max-width: 768px) {
    max-width: unset;
    margin-left: 0;
  }
}
</style>
