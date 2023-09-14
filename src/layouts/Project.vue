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

const menu = ref()

function handleMenuClicked(isMenuOpen: boolean) {
  menu.value = !isMenuOpen
}
</script>

<style lang="scss" scoped>
.project {
  padding: 0;
  width: calc(100% - 7.2rem);
  background: #e9ebef;
  display: grid;
  grid-template-columns: 26.4rem 100%;
  transition: all ease-in-out 300ms;
  @media (max-width: 768px) {
    width: 100%;
  }
  &__menu {
    @media (max-width: 768px) {
    }
  }

  &__content {
    width: calc(100% - 26.4rem);
    background-color: #f8f8f8;
    padding: 2.4rem;
    border-top-left-radius: 3.2rem;
    position: unset;
    @media (max-width: 768px) {
      width: 100%;
    }
  }
}

.project-min {
  padding: 0;
  width: calc(100% - 7.2rem);
  background: #e9ebef;
  display: grid;
  grid-template-columns: 7rem 100%;
  transition: all ease-in-out 300ms;
  @media (max-width: 768px) {
    width: 100%;
    display: unset;
  }
  .project__content {
    width: calc(100% - 7rem);
    background-color: #f8f8f8;
    padding: 2.4rem;
    border-top-left-radius: 3.2rem;
    position: unset;
    @media (max-width: 768px) {
      border-top-left-radius: 0;
      width: 100%;
    }
  }
}
</style>
