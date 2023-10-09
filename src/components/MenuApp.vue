<template>
  <div class="menu">
    <img class="menu__logo" src="../assets/icons/logo.svg" alt="logo Kodex" />
    <router-link class="menu__route" :to="{ name: 'dashboard' }"
      ><i class="icon-dashboard menu__icon"></i>
      <v-tooltip activator="parent" location="end">Dashboard</v-tooltip></router-link
    >
    <button class="menu__route" @click.stop="drawer = !drawer">
      <i class="icon-bell menu__icon"></i>
      <v-tooltip activator="parent" location="end">Notifications</v-tooltip>
    </button>

    <div class="menu__line line"></div>

    <router-link
      class="menu__route menu__route--text l-semibold"
      v-for="(item, index) in projects"
      :key="index"
      :to="{ name: `${item.route}` }"
      >{{ item.icon }}
      <v-tooltip activator="parent" location="end">Nombre proyecto</v-tooltip>
    </router-link>
    <div class="menu__line line"></div>

    <button class="menu__plus" @click="$router.push({ name: 'new_project' })">
      <img src="../assets/icons/plus.svg" alt="" />
      <v-tooltip activator="parent" location="end">Crear nuevo proyecto</v-tooltip>
    </button>
  </div>
  <v-layout class="notifications">
    <v-navigation-drawer v-model="drawer" temporary>
      <v-list-item
        prepend-avatar="https://randomuser.me/api/portraits/men/78.jpg"
        title="John Leider"
      ></v-list-item>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item prepend-icon="mdi-view-dashboard" title="Home" value="home"></v-list-item>
        <v-list-item prepend-icon="mdi-forum" title="About" value="about"></v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-layout>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const projects = [{ icon: 'NP', name: 'Project', route: 'project' }]

const drawer = ref(false)
</script>

<style lang="scss" scoped>
.menu {
  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 72px;

  &__logo {
    margin-bottom: 1rem;
  }
  a {
    text-decoration: none;
  }
  &__plus {
    min-height: 2.5rem;
    min-width: 2.5rem;
    background-color: #fff;
    border-radius: 12px;
  }
  &__route {
    padding: 8px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 12px;
    height: 2.5rem;
    width: 2.5rem;
    outline: none;
    border: none;
    &.active {
      background: #3587ff;
    }
    &--text {
      color: #fff;
      font-size: 17px;
      text-align: center;
    }
  }
  &__icon {
    font-size: 1.5rem;
    color: #fff;
  }
  &__line {
    opacity: 0.2;
    margin: 8px 0;
  }
}

.notifications {
  display: absolute;
  left: 72px;
}
</style>
