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
          <p class="l-semibold">Panel general</p></router-link
        >
      </div>
      <div class="routes__general">
        <p class="routes__text">Menu General</p>
        <!-- Projects -->
        <div class="routes__project" @click="openProject = !openProject">
          <div class="routes__project-item">
            <p class="routes__project-icon">NP</p>
            <div>
              <p class="l-semibold">Nombre Proyecto</p>
              <p class="sm-semibold">Propietario</p>
            </div>
          </div>
          <i class="icon-arrow-down"></i>
        </div>
        <!-- <TransitionGroup name="list">
        </TransitionGroup> -->
        <div v-if="openProject" class="menu-item">
          <router-link
            @click="menu = false"
            class="menu-item__route"
            v-for="(item, index) in routes"
            :key="index"
            :to="{ name: `${item.route}` }"
            v-tooltip="item.name"
            ><i :class="`icon-${item.icon} menu-item__icon`"></i>
            <p class="menu-item__name">{{ item.name }}</p></router-link
          >
        </div>
        <b-button variant="primary">Crear nuevo proyecto</b-button>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const menu = ref(false)
const openProject = ref(false)

const routes = [
  { icon: 'dash', name: 'Dashboard', route: 'project' },
  { icon: 'link', name: 'Enlaces de pago', route: 'payments' },
  { icon: 'transaction', name: 'Transaction', route: 'transaction' },
  { icon: 'clock', name: 'Reports', route: 'reports' },
  { icon: 'bank', name: 'Métodos de pago', route: 'paymentMethod' },
  { icon: 'user', name: 'Usuarios', route: 'users' },
  { icon: 'setting', name: 'Configuración', route: 'setting' }
]
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
