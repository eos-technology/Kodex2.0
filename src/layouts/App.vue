<template>
  <div class="app">
    <MenuApp class="app__menu" @route-value="isMenuOpen = false" />
    <MenuAppMobile class="app__menu-mobile" />
    <div class="app__content">
      <MenuProjects v-if="$route.name != 'dashboard'" @menu-clicked="handleMenuClicked" />
      <div class="app__content-int" :class="contentClass">
        <RouterView></RouterView>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import MenuApp from '@/components/MenuApp.vue'
import MenuProjects from '@/components/MenuProjects.vue'
import { useRoute } from 'vue-router'
import MenuAppMobile from '@/components/MenuAppMobile.vue'
const route = useRoute()

const isMenuOpen = ref(false)

function handleMenuClicked(isOpen: boolean) {
  isMenuOpen.value = isOpen
}

const contentClass = computed(() => {
  if (isMenuOpen.value) {
    return 'menu-show__text'
  } else {
    if (route.name === 'dashboard') {
      return 'menu-show'
    } else {
      return 'menu-hide'
    }
  }
})

console.log(route.name)
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
    // margin-left: 72px;
    background-color: #e9ebef;
    border-top-left-radius: 32px;
    overflow: hidden;
    min-height: 100vh;
    height: 100%;
    @media (max-width: 768px) {
      margin: 75px 0 0;
      border-top-left-radius: 0;
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

      @media (max-width: 768px) {
        width: 100%;
        max-width: unset;
        margin-left: 0;
        border-top-left-radius: 0px;
        max-height: 100vh;
        position: unset;
        overflow-y: unset;
      }
    }
  }
}

.menu-hide {
  max-width: calc(100vw - 144px);
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
