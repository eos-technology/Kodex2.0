<template>
  <section class="new-proyect pa-5">
    <Header :title="$t('dashboard.proyects')" />

    <GoBack />

    <v-card>
      <v-card-item>
        <!-- step 1 -->
        <div v-if="step == 1" class="new-proyect__content">
          <div class="new-proyect__header">
            <h3 class="h3-bold">{{ $t('dashboard.new') }}</h3>
            <p class="l-light">{{ $t('dashboard.desc1') }}</p>
          </div>

          <div class="new-proyect__form">
            <label class="b-regular" for="newProyect">{{ $t('dashboard.nameProyect') }}</label>
            <input
              class="b-light"
              type="text"
              v-model="form.name"
              :placeholder="$t('dashboard.yourProyect')"
            />
          </div>

          <div class="new-proyect__buttons">
            <v-btn :loading="loading" @click="createProject()" color="primary" variant="flat">
              {{ $t('dashboard.new-btn') }}
            </v-btn>
            <v-btn
              @click="$router.push({ name: 'dashboard' })"
              class="cancel"
              color="#001E62"
              variant="text"
            >
              {{ $t('dashboard.cancel-btn') }}
            </v-btn>
          </div>
        </div>

        <!-- step 2 -->
        <div v-if="step == 2" class="new-proyect__content">
          <div class="new-proyect__header a-center">
            <div class="new-proyect__img">
              <img :src="getFile({ route: 'images', url: 'check_3d', extension: 'png' })" />
            </div>
            <h3 class="h3-bold">{{ $t('dashboard.allReady') }}</h3>
            <p class="l-light">
              {{ $t('dashboard.text-1') }} <span class="l-medium"> {{ name }} </span>
              {{ $t('dashboard.text-2') }}
            </p>
          </div>
          <div class="new-proyect__buttons">
            <v-btn
              @click="$router.push({ name: 'config', params: { uuid: project.uuid } })"
              color="primary"
              variant="flat"
              >{{ $t('dashboard.configure') }}</v-btn
            >
            <v-btn @click="$router.push({ name: 'dashboard' })" color="#3587FF" variant="plain">{{
              $t('dashboard.omit')
            }}</v-btn>
          </div>
        </div>
      </v-card-item>
    </v-card>
  </section>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { getFile } from '@/helpers/Index'

import { useProjectStore } from '@/modules/project/store/projectStore'
const projectStore = useProjectStore()

let form = ref<{ name: string | null; color: string | null }>({
  name: null,
  color: null
})

const loading = ref<boolean>(false)
const project = ref<any>(null)
const createProject = async () => {
  loading.value = true
  await projectStore.createProject(form.value).then((response: any) => {
    loading.value = false
    step.value = 2
    project.value = response
  })
}

const name = ref(null)
const step = ref(1)
</script>

<style scoped lang="scss">
.new-proyect {
  display: flex;
  flex-direction: column;
  gap: 24px;

  &__header {
    display: flex;
    flex-direction: column;
    gap: 16px;

    &.a-center {
      align-items: center;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  &__form {
    display: flex;
    flex-direction: column;
    gap: 4px;

    input {
      padding: 12px 16px;
      border-radius: 12px;
      border: 1px solid #f4f5f8;
      background: #f6f7f9;

      &:focus-visible {
        outline: none;
      }
    }
  }

  &__buttons {
    display: flex;
    flex-direction: column;
    gap: 16px;

    :deep(.v-btn) {
      padding: 12px 16px;
      height: fit-content;
      border-radius: 16px;

      text-transform: none;
      font-size: 17px;
      font-style: normal;
      font-weight: 600;
      line-height: 140%;
    }

    .cancel {
      border: 1px solid #f4f5f8;
    }
  }

  &__img {
    width: 150px;
    height: 150px;

    img {
      width: 100%;
    }
  }
}

:deep(.v-card) {
  width: 100%;
  max-width: 450px;
  margin: 0 auto;
  padding: 24px;
  border-radius: 16px;
  border: 1px solid #dde4ed;
}

:deep(.v-card-item) {
  padding: 0;
}
</style>
