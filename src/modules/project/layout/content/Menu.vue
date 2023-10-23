<template>
  <div class="project_menu">
    <v-navigation-drawer :rail="mini" :rail-width="75">
      <!-- Contenido del menú -->
      <v-list>
        <v-list-item>
          <div class="d-flex" style="justify-content: space-between">
            <div v-if="!mini">
              <div class="project_name">Nombre del projecto</div>
              <div class="owner">Propietario</div>
            </div>
            <v-list-item-icon>
              <v-btn
                variant="flat"
                :class="mini == true ? 'initial' : 'rotate'"
                @click.stop="toggleMiniVariant"
                color="#FAFAFA"
                size="x-small"
                class="toggle"
              >
                <img src="@/assets/icons/arrow-right.svg" alt="" />
              </v-btn>
            </v-list-item-icon>
          </div>
        </v-list-item>
      </v-list>
      <v-list style="max-width: 90%; margin: auto">
        <v-divider color="#000000" />
      </v-list>

      <v-list density="compact" style="margin: auto" v-for="route in routes">
        <v-list-item>
          <router-link class="route" :to="{ name: `${route.route}` }">
            <v-list-item-icon>
              <i
                :class="`icon-${route.icon} icon ${route.name == 'Dashboard' ? 'active' : ''}`"
              ></i>
            </v-list-item-icon>
            <v-list-item-title v-if="!mini">{{ route.name }} </v-list-item-title>
            <v-tooltip v-else activator="parent" location="end">
              {{ route.name }}
            </v-tooltip>
          </router-link>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const mini = ref<boolean>(true)

const emit = defineEmits(['toggleDrawer'])

const toggleMiniVariant = () => {
  mini.value = !mini.value
}

const routes = [
  { icon: 'dash', name: 'Dashboard', route: 'project' },
  { icon: 'link', name: 'Enlaces de pago', route: 'project' },
  { icon: 'transaction', name: 'Transaction', route: 'project' },
  { icon: 'clock', name: 'Reports', route: 'project' },
  { icon: 'bank', name: 'Métodos de pago', route: 'project' },
  { icon: 'user', name: 'Usuarios', route: 'project' },
  { icon: 'setting', name: 'Configuración', route: 'project' }
]
</script>

<style lang="scss">
.v-navigation-drawer--rail .v-list-item__content {
  margin: auto;
}
.project_menu .v-navigation-drawer {
  position: absolute !important;
}
.project_menu .v-navigation-drawer,
.project_menu .v-list {
  background-color: #e9ebef;
}
</style>

<style lang="scss" scoped>
.rotate {
  transition: transform 0.8s; /* Duración de la animación */
  transform: rotate(180deg); /* La rotación deseada */
}
.initial {
  transform: rotate(0deg); /* La posición inicial */
}
.toggle {
  height: 35px;
  border-radius: 12px;
}

.icon {
  width: 32px;
  height: 32px;
  font-size: 15px;
  padding: 8px;
  border-radius: 12px;
  color: #001e62;
}

.v-list-item-title {
  color: #001e62;
}
.router-link-exact-active i {
  background: #061461;
  color: #fafafa;
}
.router-link-exact-active .v-list-item-title {
  font-weight: 600;
}
.route {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 14px;
  font-weight: 300;
  line-height: 20px;
  &.active {
    font-weight: 700;
    .menu__icon {
      padding: 8px;
      background: #061461;
      border-radius: 12px;
      color: #fff;
    }
  }
  &--text {
    color: #fff;
    font-size: 1.7rem;
    text-align: center;
  }
}
.project_name {
  color: #0a1e8c;
  font-weight: 700;
  line-height: 22px;
}
.owner {
  color: #0b823b;
  font-size: 14px;
  font-weight: 600;
}
</style>
