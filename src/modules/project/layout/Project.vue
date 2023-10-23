<template>
  <v-app>
    <MenuProject />
    <v-main class="main-project">
      <div class="pa-5 project-container">
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
  overflow-y: scroll;
  max-height: 100vh;
}
</style>
