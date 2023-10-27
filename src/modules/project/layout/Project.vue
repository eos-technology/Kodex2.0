<template>
  <v-app class="app">
    <MenuProject class="app__menu" />
    <v-main class="main-project">
      <div class="project-container">
        <RouterView />
      </div>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import MenuProject from './content/Menu.vue'
</script>
<style lang="scss" scoped>
.main-project {
  background: #f8f8f8;
}
.project-container {
  // max-height: 100vh;
  padding: 24px;
  padding-bottom: 48px;
  @media (max-width: 768px) {
    margin: 0;
    padding: 16px;
  }
}
</style>
<style>
.v-main .v-main-project {
  /* padding-left: 72px !important; */
}
</style>
