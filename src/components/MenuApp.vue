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
      :to="{ name: 'project-dashboard', params: { uuid: `${item.uuid}` } }"
    >
      <img v-if="item.logo" :src="item.logo" alt="" style="max-width: 90%; margin: auto" />
      <span v-else>{{ generateName(item.name) }}</span>
      <v-tooltip activator="parent" location="end">{{ item.name }}</v-tooltip>
    </router-link>
    <div class="menu__line line"></div>

    <button class="menu__plus" @click="$router.push({ name: 'new_project' })">
      <img src="../assets/icons/plus.svg" alt="" />
      <v-tooltip activator="parent" location="end">Crear nuevo proyecto</v-tooltip>
    </button>
    <div class="menu__line line"></div>

    <div class="menu__route-content">
      <router-link
        class="menu__route menu__route--text l-semibold"
        v-for="(item, index) in projects"
        :key="index"
        :to="{ name: 'project-dashboard', params: { uuid: `${item.uuid}` } }"
      >
        <img v-if="item.logo" :src="item.logo" alt="" style="max-width: 90%; margin: auto" />
        <span v-else>{{ generateName(item.name) }}</span>
        <v-tooltip activator="parent" location="end">{{ item.name }}</v-tooltip>
      </router-link>
    </div>
  </div>
  <v-layout class="notification">
    <v-navigation-drawer width="450" v-model="drawer" temporary location="end">
      <v-list-item>
        <div class="notification__header">
          <h5 class="h5-semibold text-primary">Push Notifications</h5>
          <v-btn
            size="small"
            rounded="lg"
            class="link-aux"
            variant="text"
            @click="onDisableNotification(undefined)"
          >
            Mark all as read
          </v-btn>
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
          <div class="notification__alert" @click="onDisableNotification(item.uuid)">
            <div class="notification__icon" :class="getIconClass(item.type)">
              <i :class="`icon-${item.type}`"></i>
            </div>
            <div class="notification__info">
              <p class="l-medium">{{ item.title }}</p>
              <p class="b-light">
                {{ item.text }}
              </p>
              <p class="b-medium">{{ formatDate()(item.created_at, 'dd.MM.yyyy HH:mm') }}</p>
            </div>
          </div>
        </v-list-item>
      </v-list>
    </v-navigation-drawer></v-layout
  >
  <v-btn size="40" class="menu__logout">
    <i class="icon-close-circle text-error"></i>
    <v-tooltip activator="parent" location="end">Cerrar sesión</v-tooltip>
  </v-btn>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { toast } from 'vue3-toastify'

const emit = defineEmits(['route-value'])
import { useProjectStore } from '@/modules/project/store/projectStore'
const projectStore = useProjectStore()
import { useNotificationStore } from '@/stores/notificationStore'
import formatDate from '@/helpers/formatDate'
const notificationStore = useNotificationStore()

const projects = ref<any>([
  {
    uuid: '54a2ea3f-c509-408d-b4b6-302e80511121',
    name: 'Kodex Backoffice',
    color: 'Azul Oscuro',
    logo: 'http://127.0.0.1:5173/src/assets/icons/logo.svg',
    owner: true
  },
  {
    uuid: 'c0ef91e2-b964-44fd-a10b-062fe0ab9e01',
    name: 'GainUp',
    color: 'Azul Oscuro',
    logo: null,
    owner: true
  },
  {
    uuid: '42143f57-46f0-4eb9-a9ed-98d9651b34b0',
    name: 'AxioFx',
    color: 'Azul Oscuro',
    logo: null,
    owner: true
  },
  {
    uuid: '44547771-df9b-4a99-aa14-08233b9b7d40',
    name: 'Elv Backoffice',
    color: 'Dark Blue',
    logo: null,
    owner: true
  },
  {
    uuid: '75537c97-59ac-436d-b3e5-8a735e0d858f',
    name: 'Genesys',
    color: 'Azul Oscuro',
    logo: null,
    owner: true
  },
  {
    uuid: '7c33bf49-fe05-4eb0-ba4c-7e4d413e70ef',
    name: 'Prueba',
    color: 'Azul Oscuro',
    logo: null,
    owner: true
  },
  {
    uuid: '3446b82f-2dd4-4529-81a7-a8ad40d4579e',
    name: 'QuantumToken',
    color: 'Dark Blue',
    logo: null,
    owner: true
  },
  {
    uuid: '99292394-faee-4234-a6a0-0d1585913f8c',
    name: 'TreeCoin',
    color: 'Blanco',
    logo: null,
    owner: true
  },
  {
    uuid: '176c3c83-0805-4851-aba4-0849f4ed87f3',
    name: 'SpaceApp',
    color: 'Azul Oscuro',
    logo: null,
    owner: true
  },
  {
    uuid: '35835f17-427a-4ec1-aa25-6decc53f759e',
    name: 'SpaxeToken',
    color: 'Azul Oscuro',
    logo: null,
    owner: true
  },
  {
    uuid: 'df5f1b66-d894-4008-bddd-5638fa5ba2f3',
    name: 'GoldenMx',
    color: 'Azul Oscuro',
    logo: null,
    owner: true
  },
  {
    uuid: '00edc998-e83c-4b27-ba50-6cdc6be70729',
    name: 'GoldenToken',
    color: 'Azul Oscuro',
    logo: null,
    owner: true
  },
  {
    uuid: '6b28b143-ae46-4319-a169-1a4093cb9e2e',
    name: 'Confiance',
    color: 'Azul Oscuro',
    logo: null,
    owner: true
  },
  {
    uuid: 'f2f2a1e6-8ee7-4c4b-93e8-8423a6ad03e3',
    name: 'MfxPrime',
    color: 'Dark Blue',
    logo: null,
    owner: true
  },
  {
    uuid: '77fcb8ff-12e9-4733-aacb-70aaa22c61a4',
    name: 'MfxBroker',
    color: 'Dark Blue',
    logo: null,
    owner: true
  },
  {
    uuid: '3c6224e8-3548-4be3-ac3a-82a4d192c446',
    name: 'B7Academy',
    color: 'Dark Blue',
    logo: null,
    owner: true
  },
  {
    uuid: '48b7709b-1424-4407-8127-2ff19543ab65',
    name: 'Reim Investment',
    color: 'Dark Blue',
    logo: null,
    owner: true
  },
  {
    uuid: 'a620111e-cf9e-4aba-8b2e-ea14e8cfac97',
    name: 'CoffeeSwap',
    color: 'Dark Blue',
    logo: null,
    owner: true
  },
  {
    uuid: '168b5dcd-e86f-4f0d-8562-0367d6fe0a4f',
    name: 'Ihamora',
    color: 'Azul Oscuro',
    logo: null,
    owner: true
  },
  {
    uuid: '6d0a6e9c-f59b-4779-9730-94c3d698ddb3',
    name: 'Spaxe',
    color: 'Dark Blue',
    logo: null,
    owner: true
  },
  {
    uuid: 'bbaedf94-916c-43d2-b336-f65156c83b98',
    name: 'EmaxMarkets',
    color: 'Dark Blue',
    logo: null,
    owner: true
  },
  {
    uuid: 'd492dd7d-43cc-4e64-a3d0-2e2b109079ab',
    name: 'BeexBots',
    color: 'Azul Oscuro',
    logo: null,
    owner: true
  },
  {
    uuid: 'a8f22617-8c11-411c-a563-832234096ed1',
    name: 'Prueba V2 Act',
    color: '#001244',
    logo: null,
    owner: true
  },
  {
    uuid: '258fa5ed-9dfe-4fd5-9863-6ad51e6c7edc',
    name: 'Prueba canción',
    color: '',
    logo: null,
    owner: true
  },
  {
    uuid: 'cff18f82-4c1c-43b6-b24b-ec847cba1896',
    name: 'sdsdgsdg',
    color: '',
    logo: null,
    owner: true
  },
  {
    uuid: 'f4ec9741-cd68-41c6-b057-3b4b0021cd1a',
    name: 'pi',
    color: '',
    logo: null,
    owner: true
  }
])
const getProjects = async () => {
  await projectStore.getProjects().then((response: any) => {
    projects.value = response
  })
}
const notifications = ref<any>([])
const getNotifications = async () => {
  await notificationStore.getNotifications().then((response: any) => {
    notifications.value = response
  })
}

const onDisableNotification = async (uuid: string | undefined) => {
  await notificationStore.readNotification({ uuid: uuid }).then((response: any) => {
    if (response != 'done') {
      const index = notifications.value.findIndex((objeto: any) => objeto.uuid === response)
      if (index) {
        notifications.value.splice(index, 1)
      }
    } else {
      notifications.value = []
      drawer.value = false
    }
    toast('Notificaciones eliminadas éxitosamente')
  })
}

onMounted(() => {
  getProjects(), getNotifications()
})

const generateName = (name: string) => {
  // Obtener las iniciales del nombre
  const initials = name
    .split(' ')
    .map((word) => word.charAt(0))
    .join('')
  return initials
}

const drawer = ref(false)

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
</script>

<style lang="scss" scoped>
.menu {
  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 72px;
  @media (max-width: 1280px) {
    display: none;
  }
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
    &-content {
      max-height: calc(100vh - 420px);
      overflow-y: auto;
      &::-webkit-scrollbar {
        width: 0px; /* Ancho de la barra de desplazamiento */
      }

      /* Estilos del track (el fondo de la barra de desplazamiento) */
      &::-webkit-scrollbar-track {
        background: #f5f5f5; /* Color del fondo del track */
        border-radius: 0px;
      }

      /* Estilos del thumb (el "botón" que puedes arrastrar) */
      &::-webkit-scrollbar-thumb {
        background: #d4d4d4; /* Color del thumb */
        border-radius: 0px;
      }

      /* Estilos del thumb cuando se está interactuando con él */
      &::-webkit-scrollbar-thumb:hover {
        background: #c5c5c5; /* Color del thumb en hover */
        border-radius: 0px;
      }
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
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
  &__logout {
    position: absolute;
    bottom: 24px;
    left: 16px;
    border-radius: 12px;
    i {
      font-size: 24px;
    }
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
