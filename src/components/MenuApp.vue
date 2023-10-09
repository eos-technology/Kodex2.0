<template>
  <div class="menu">
    <img class="menu__logo" src="../assets/icons/logo.svg" alt="logo Kodex" />
    <router-link @click="handleRouteClick" class="menu__route" :to="{ name: 'dashboard' }"
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
  <v-layout class="notification">
    <v-navigation-drawer width="450" v-model="drawer" temporary location="end">
      <v-list-item>
        <div class="notification__header">
          <h5 class="h5-semibold text-primary">Push Notifications</h5>
          <a href="#" class="link-aux">Mark all as read</a>
        </div>

        <div class="notification__card">
          <i class="icon-bell-notification"></i>
          <div>
            <p class="b-semibold">Push Notifications</p>
            <p class="s-light">Enviar automáticamente nuevas notificaciones</p>
          </div>
          <v-switch hide-details density="compact" inset class="switch"></v-switch>
        </div>
      </v-list-item>
      <v-list density="compact" nav>
        <v-list-item v-for="(item, index) in notifications" :key="index">
          <div class="notification__alert">
            <div class="notification__icon" :class="getIconClass(item.icon)">
              <i :class="`icon-${item.icon}`"></i>
            </div>
            <div class="notification__info">
              <p class="l-medium">{{ item.title }}</p>
              <p class="b-light">
                {{ item.text }}
              </p>
              <p class="b-medium">{{ item.date }}</p>
            </div>
          </div>
        </v-list-item>
      </v-list>
    </v-navigation-drawer></v-layout
  >
</template>
<script setup lang="ts">
import { ref } from 'vue'
const emit = defineEmits(['route-value'])

const projects = [{ icon: 'NP', name: 'Project', route: 'project' }]

const drawer = ref(false)

const name = ref(false)

function handleRouteClick() {
  name.value = !name.value
  emit('route-value', name.value)
}

const getIconClass = (iconType: string) => {
  switch (iconType) {
    case 'check':
      return 'check'
    case 'info':
      return 'info'
    case 'bell':
      return 'bell'
    case 'warning':
      return 'warning'
    case 'close-circle':
      return 'error'
    case 'done-circle':
      return 'done'
  }
}

const notifications = [
  {
    icon: 'check',
    title: 'Título de Notificación',
    text: 'Proin tortor est, efficitur quis ullamcorper id, cursus et odio. Nam sit amet lectus vitae ligula pharetra aliquam.',
    date: '2h ago'
  },
  {
    icon: 'info',
    title: 'Título de Notificación',
    text: 'Proin tortor est, efficitur quis ullamcorper id, cursus et odio. Nam sit amet lectus vitae ligula pharetra aliquam.',
    date: '2h ago'
  },
  {
    icon: 'bell',
    title: 'Título de Notificación',
    text: 'Proin tortor est, efficitur quis ullamcorper id, cursus et odio. Nam sit amet lectus vitae ligula pharetra aliquam.',
    date: '2h ago'
  },
  {
    icon: 'warning',
    title: 'Título de Notificación',
    text: 'Proin tortor est, efficitur quis ullamcorper id, cursus et odio. Nam sit amet lectus vitae ligula pharetra aliquam.',
    date: '2h ago'
  },
  {
    icon: 'close-circle',
    title: 'Título de Notificación',
    text: 'Proin tortor est, efficitur quis ullamcorper id, cursus et odio. Nam sit amet lectus vitae ligula pharetra aliquam.',
    date: '2h ago'
  },
  {
    icon: 'done-circle',
    title: 'Título de Notificación',
    text: 'Proin tortor est, efficitur quis ullamcorper id, cursus et odio. Nam sit amet lectus vitae ligula pharetra aliquam.',
    date: '2h ago'
  }
]
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

.notification {
  &__header {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    align-items: center;
  }
  &__card {
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    border-radius: 12px;
    border: 1px solid #dde4ed;
    background: #fafafa;
    margin-top: 1.5rem;
    .icon-bell-notification {
      font-size: 2rem;
    }
  }
  &__alert {
    display: flex;
    gap: 1rem;
    align-items: flex-start;
  }
  &__icon {
    color: #fff;
    font-size: 1.5rem;
    padding: 8px;
    border-radius: 0.75rem;
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
  }
  :deep(.v-switch__track) {
    margin-left: auto;
  }
  :deep(.v-list-item) {
    padding: 24px;
    margin: 0;
    border-bottom: 1px solid #dde4ed;
    border-radius: 0;
  }
  :deep(.v-list--nav) {
    padding: 0;
  }
}

.check {
  background-color: #00b183;
}
.info {
  background-color: #0b4982;
}
.bell {
  background-color: #0b49820d;
  color: #001e62;
}
.warning {
  background-color: #f2c744;
  color: #825a0b;
}
.error {
  background-color: #e01e5a;
}
.done {
  background-color: #0b49820d;
  color: #001e62;
}
</style>
