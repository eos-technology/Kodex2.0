<template>
  <section class="restrictions">
    <h3 class="h3-bold mb-6 text-primary">{{ $t('setting.title') }}</h3>
    <router-link :to="{ name: 'config' }" style="text-decoration: none" class="text-black">
      <BackDummy />
    </router-link>
    <v-card class="pa-6 rounded-lg">
      <div class="card-body">
        <!-- <h1 class="h4-bold">{{ $t('setting.restrictions') }}</h1> -->
        <div class="restrictions mt-6">
          <div class="restrictions__nav">
            <ul class="restrictions__options">
              <li @click="selected = 1" class="l-regular" :class="{ selected: selected == 1 }">
                {{ $t('setting.logins') }}
              </li>
              <li @click="selected = 2" class="l-regular" :class="{ selected: selected == 2 }">
                {{ $t('setting.users') }}
              </li>
              <li @click="selected = 3" class="l-regular" :class="{ selected: selected == 3 }">
                {{ $t('setting.ip-address') }}
              </li>
              <li @click="selected = 4" class="l-regular" :class="{ selected: selected == 4 }">
                {{ $t('setting.buyers') }}
              </li>
            </ul>
          </div>

          <div class="restrictions__section">
            <Logins v-if="selected == 1" />
            <Users v-else-if="selected == 2" />
            <IpAddress v-else-if="selected == 3" />
            <Buyers v-else-if="selected == 4" />
          </div>
        </div>
      </div>
    </v-card>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import Logins from '../content/Logins.vue'
import Users from '../content/Users.vue'
import IpAddress from '../content/IpAddress.vue'
import Buyers from '../content/Buyers.vue'

const selected = ref(1)
</script>

<style lang="scss" scoped>
.restrictions {
  display: flex;
  flex-direction: column;
  gap: 24px;

  &__nav {
    overflow-x: scroll;
    overflow-y: visible;
    height: 40px;
  }

  &__nav::-webkit-scrollbar {
    display: none;
  }

  &__options {
    display: flex;
    flex-direction: row;
    gap: 30px;
    height: 35px;
    white-space: nowrap;
    border-bottom: 1px solid var(--border-border-input, #f4f5f8);

    li {
      list-style: none;
      cursor: pointer;
    }

    hr {
      width: 100%;
    }
  }
}

.selected {
  font-weight: bold;

  border-bottom: 2px solid #091d8b;
}
</style>
