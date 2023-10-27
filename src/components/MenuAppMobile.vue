<template>
  <div>
    <!-- Header -->
    <section class="mobil">
      <img src="../assets/images/logo.svg" alt="" />
      <div class="mobil__box">
        <i class="icon-bell mobil__bell"></i>
        <input type="checkbox" id="checkbox3" class="checkbox3 visuallyHidden" v-model="menu" />

        <label for="checkbox3">
          <div class="hamburger hamburger3">
            <span class="bar bar1"></span>
            <span class="bar bar2"></span>
            <span class="bar bar3"></span>
            <span class="bar bar4"></span>
          </div>
        </label>
      </div>
      <!-- <pre>{{ menu }}</pre> -->
    </section>
    <!-- Menu -->
    <section class="routes" :class="{ 'routes--open': menu }">
      <div class="routes__general">
        <p class="routes__text">Menu General</p>
        <router-link class="routes__link" :to="{ name: 'dashboard' }" @click="menu = false"
          ><i class="icon-dashboard routes__icon"></i>
          <p class="l-semibold" style="color: #001E62;">Panel general</p></router-link
        >
      </div>
      <div class="routes__general">
        <p class="routes__text">{{ $t('menu.selectProyect') }}</p>
        <div class="routes__proyects">
          <div v-for="proyect in projects" class="">
            <!-- Projects -->
            <div class="routes__project" @click="openProject = openProject==null ? proyect.uuid : null">
              <div class="routes__project-item">
                <p class="routes__project-icon">{{ generateName(proyect.name) }}</p>
                <div>
                  <p class="l-semibold" style="color: #0A1E8C;">{{ proyect.name }}</p>
                  <p class="sm-semibold" style="color: #0B823B;">Propietario</p>
                </div>
              </div>
              <i
                class="icon-arrow-down"
                style="color: #394357; transition: transform .5s ease;"
                :style="{transform: openProject==proyect.uuid ? 'rotate(0)': 'rotate(-90deg)'}">
              </i>
            </div>
            <!-- <TransitionGroup name="list">
            </TransitionGroup> -->
            <div v-if="openProject==proyect.uuid" class="menu-item mt-4">
              <router-link
                @click="menu = false, openProject = null"
                class="menu-item__route"
                v-for="(item, index) in routes"
                :key="index"
                :to="{ name: `${item.route}`, params: { uuid: `${proyect.uuid}` } }"
                v-tooltip="item.name"
                style="color: #001E62;"
                ><i :class="`icon-${item.icon} menu-item__icon`"></i>
                <p class="menu-item__name">{{ item.name }}</p></router-link
              >
            </div>
  
          </div>
        </div>
        <v-btn class="btn" color="primary">{{ $t('menu.createNewProyect') }}</v-btn>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const menu = ref(false)
const openProject = ref(null)

const routes = [
  { icon: 'dash', name: 'Dashboard', route: 'project-dashboard' },
  { icon: 'link', name: 'Enlaces de pago', route: 'payment_links' },
  { icon: 'transaction', name: 'Transaction', route: 'transactions' },
  { icon: 'clock', name: 'Reports', route: 'reports' },
  { icon: 'bank', name: 'Métodos de pago', route: 'payment_method' },
  { icon: 'user', name: 'Usuarios', route: 'user' },
  { icon: 'setting', name: 'Configuración', route: 'config' }
]


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

const generateName = (name: string) => {
  // Obtener las iniciales del nombre
  const initials = name
    .split(' ')
    .map((word) => word.charAt(0))
    .join('')
  return initials
}
</script>

<style lang="scss" scoped>
.mobil {
  z-index: 20;
  background-color: #e9ebef;
  display: flex;
  padding: 16px 24px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  &__logo {
    width: 8.6rem;
  }
  &__box {
    display: flex;
    gap: 16px;
    align-items: center;
  }
  &__menu {
    display: flex;
    width: 32px;
    height: 32px;
    justify-content: center;
    align-items: center;
    gap: 12px;
    font-size: 1.8rem;
    color: #fff;
    border-radius: 12px;
    border: 0px solid #dde4ed;
    background: #061461;
    cursor: pointer;
    &:hover {
      filter: brightness(70%);
    }
  }
  &__bell {
    font-size: 1.8rem;
    display: flex;
    width: 32px;
    height: 32px;
    justify-content: center;
    align-items: center;
    gap: 12px;
    color: #001e62;
  }
}

/* GENERAL STYLES */
.visuallyHidden {
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  height: 1px;
  width: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
}

h1 {
  text-align: center;
}

.hamburger {
  display: flex;
  width: 32px;
  height: 32px;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 12px;
  border: 0px solid #dde4ed;
  background: #061461;
  cursor: pointer;
}

.hamburger .bar {
  margin: 0 auto;
  padding: 0;
  width: 12px;
  height: 1px;
  background-color: #fff;
  display: block;
  transition: all 0.4s ease-in-out;
  position: absolute;
}

.bar1 {
  top: 12px;
}

.bar2,
.bar3 {
  top: 16px;
}

.bar3 {
  right: 10px;
}

.bar4 {
  bottom: 12px;
}

/* HAMBURGER 3 */

.hamburger3 .bar1 {
  transform-origin: 5%;
}

.hamburger3 .bar4 {
  transform-origin: 5%;
}

.checkbox3:checked + label > .hamburger3 > .bar1 {
  transform: rotate(45deg);
  height: 1px;
  width: 12px;
  background-color: transparent;
}

.checkbox3:checked + label > .hamburger3 > .bar3 {
  transform: rotate(45deg);
  height: 1px;
  background-color: #fff;
}

.checkbox3:checked + label > .hamburger3 > .bar2 {
  transform: rotate(-45deg);
  height: 1px;
  background-color: #fff;
}

.checkbox3:checked + label > .hamburger3 > .bar4 {
  background-color: transparent;
  transform: rotate(-45deg);
  height: 1px;
  width: 12px;
}

.routes {
  position: fixed;
  top: 65px;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  gap: 24px;
  background-color: #e9ebef;
  padding: 24px;
  height: 100%;
  z-index: 10;
  transition: transform 0.3s ease-in-out;
  transform-origin: top;
  transform: translateY(-100%);
  &__general {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  &__text {
    color: #5e6f87;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 1.26px;
    text-transform: uppercase;
  }
  &__link {
    display: flex;
    padding: 0px 16px;
    align-items: center;
    gap: 12px;
    text-decoration: none;
  }
  &__icon {
    padding: 8px;
    border-radius: 12px;
    background: #061461;
    font-size: 16px;
    color: #fff;
    &:hover {
      background: #3587ff;
    }
  }
  &__proyects{
    max-height: calc(100vh - 25rem);
    overflow: scroll;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    &::-webkit-scrollbar {
      background-color: transparent;
      color: transparent;
      display: none;
    }

    &::-webkit-scrollbar-thumb {
      background-color: transparent;
    }
  }
  &__project {
    display: flex;
    padding: 16px;
    align-items: center;
    gap: 16px;
    border-radius: 16px;
    border: 1px solid #dde4ed;
    background: #f6f8fa;
    justify-content: space-between;
    cursor: pointer;
    &:hover {
      filter: brightness(90%);
    }
    &-item {
      display: flex;
      gap: 16px;
      align-items: center;
    }
    &-icon {
      display: flex;
      width: 40px;
      height: 40px;
      justify-content: center;
      align-items: center;
      gap: 12px;
      flex-shrink: 0;
      border-radius: 12px;
      background: #3587ff;
      color: #fff;
    }
  }
}

.icon-arrow-down {
  font-size: 24px;
}

.routes--open {
  transform: translateY(0%);
}

.menu-item {
  display: flex;
  padding: 1.6rem;
  border-radius: 16px;
  border: 1px solid #dde4ed;
  background: rgba(255, 255, 255, 0.4);
  flex-direction: column;
  gap: 1.6rem;
  height: auto;
  a {
    text-decoration: none;
  }
  &__route {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    width: fit-content;
    font-size: 14px;
    font-weight: 300;
    line-height: 20px;
    padding-right: 12px;
    &.active {
      font-weight: 700;
      .menu-item__icon {
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
  &__icon {
    padding: 8px;
    font-size: 1.6rem;
    color: #001e62;
  }
  &__line {
    opacity: 0.2;
    margin: 8px 0;
  }
  &__text {
    transform: translateX(0%);
    opacity: 1;
  }
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

</style>
