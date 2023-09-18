<template>
  <div :class="menu ? 'project-min' : 'project'">
    <div class="project__menu">
      <MenuProjects @menu-clicked="handleMenuClicked" @click="menu" />
    </div>
    <div class="project__content">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const menu = ref(false)

function handleMenuClicked(isMenuOpen: boolean) {
  menu.value = !isMenuOpen
}
</script>

<style lang="scss" scoped>
.project {
  padding: 0;
  width: calc(100% - 72px);
  background: #e9ebef;
  display: grid;
  grid-template-columns: 264px 1fr;
  transition: all ease-in-out 300ms;
  @media (max-width: 768px) {
    width: 100%;
  }
  &__menu {
    @media (max-width: 768px) {
    }
  }

  &__content {
    width: calc(100% - 264px);
    background-color: #f8f8f8;
    padding: 24px;
    border-top-left-radius: 32px;
    position: unset;
    @media (max-width: 768px) {
      width: 100%;
    }
  }
}

.project-min {
  padding: 0;
  width: calc(100% - 72px);
  background: #e9ebef;
  display: grid;
  grid-template-columns: 72px 1fr;
  transition: all ease-in-out 300ms;
  @media (max-width: 768px) {
    width: 100%;
    display: unset;
  }
  .project__content {
    width: calc(100% - 72px);
    background-color: #f8f8f8;
    padding: 24px;
    border-top-left-radius: 32px;
    position: unset;
    @media (max-width: 768px) {
      border-top-left-radius: 0;
      width: 100%;
    }
  }
}
</style>
