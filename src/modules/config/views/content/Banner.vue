<template>
  <v-card rounded="lg" class="card pa-6">
    <div class="banner">
      <div class="banner__picture">
        <img class="image" :src="getFile({ route: 'images', url: 'settings-banner', extension: 'png' })" alt="" />
        <img class="logo" :src="getFile({ route: 'images', url: 'logo-largo', extension: 'png' })" alt="" />
      </div>

      <div class="banner__profile">
        <img class="profile" :src="getFile({ route: 'images', url: 'Basic', extension: 'png' })" alt="" />
      </div>

      <div class="banner__info">
        <div class="banner__text">
          <h3 class="h3-bold text-primary">Nombre del proyecto</h3>
          <p class="l-semibold text-brand">
            <span class="dot-status dot-status--enable"></span>
            &nbsp;&nbsp;
            {{ $t('setting.verified') }}
          </p>
        </div>

        <div class="banner__button">
          <v-btn class="btn" color="error" variant="outlined">
            <span class="icon-trash"><i class="icon-delete"></i></span>
            <span class="trash">{{ $t('setting.delete-img') }}</span>
          </v-btn>
          <v-btn class="btn" color="primary" variant="outlined" @click="isOpen = true">{{
            $t('setting.attach-image') }}</v-btn>
        </div>
      </div>
    </div>
  </v-card>

  <!-- image proyect -->
  <v-dialog width="450" v-model="isOpen">
    <v-card rounded="lg">
      <div class="modal">
        <div class="modal__header">
          <h5 class="h5-bold text-primary">{{ $t('setting.project-image') }}</h5>
          <button class="modal__close" @click="isOpen = false">
            <img :src="getFile({
              route: 'icons/form',
              url: 'close',
              extension: 'svg'
            })
              " alt="" />
          </button>
        </div>
        <div class="d-flex flex-column ">
          <div class="image-project">
            <div class="image-project__section">
              <p class="l-regular text-primary">{{ $t('setting.message-image') }}</p>
            </div>
           <DropZone /> 
            <div class="image-project__section">
              <v-btn class="btn" color="primary" @click="isOpen = false">{{ $t('setting.save') }}</v-btn>
              <v-btn class="btn" variant="outlined" color="secondary" @click="isOpen = false">
                <p class="text-primary">{{ $t('setting.cancel') }}</p>
              </v-btn>
            </div>
          </div>
        </div>

      </div>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { getFile } from '@/helpers/Index'
import { ref } from 'vue'


const isOpen = ref(false)
</script>

<style lang="scss" scoped>
.card {
  overflow: hidden;
}

.banner {
  &__picture {
    .image {
      margin-top: -24px;
      margin-left: -24px;
      width: calc(100% + 48px);
      height: 15.83vw;

      @media (max-width: 767px) {
        height: 30vw;
      }
    }

    .logo {
      position: absolute;
      top: 13%;
      right: 3.4vw;
      height: 5vw;

      @media (max-width: 767px) {
        width: 30vw;
        height: auto;
        top: 8%;
        right: 32%;
      }
    }
  }

  &__profile {
    margin: 0 auto;
    margin-bottom: 1.67vw;
    margin-top: -6.3vw;

    img {
      width: 12.67vw;
    }

    @media (max-width: 767px) {
      margin-top: -11.7vw;
      display: flex;
      justify-content: center;

      img {
        width: 30vw;
      }
    }
  }

  &__info {
    padding: 0.69vw 0;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;

    p {
      display: flex;
      align-items: center;
    }

    @media (max-width: 767px) {
      flex-direction: column;
      align-items: center;
      gap: 24px;
      text-align: center;

      p {
        justify-content: center;
      }

      h3 {
        margin-bottom: 4px;
        font-size: 7.5vw;
      }
    }
  }

  &__button {
    display: flex;
    align-items: center;
    gap: 1.2vw;

    @media (max-width: 767px) {
      width: 100%;
      display: grid;
      grid-template-columns: min-content 1fr;
      gap: 16px;

      button {
        border-radius: 3.5vw;
        font-size: 14px;
        width: 100%;
      }
    }

    @media (max-width: 320px) {
      grid-template-columns: 1fr;
    }
  }
}

.image-project {
     display: flex;
     flex-direction: column;
     gap: 32px;

     &__section {
         display: flex;
         flex-direction: column;
         gap: 16px;

         @media (max-width: 767px) {
             gap: 6px;
         }
     }

     @media (max-width: 767px) {
         gap: 24px;
     }
 }

.icon-trash {
  display: none;
}

@media (max-width: 767px) {
  .icon-trash {
    display: inline;
    font-size: 20px;
  }

  .trash {
    display: none;
  }
}

.primary {
  height: 48px;
  border-radius: 16px;
}

.outlined-remove {
  color: #ef4444;
  border: 1px solid var(--button-delete-delete, #ef4444);
}

.outlined-add {
  color: #091d8b;
  border: 1px solid var(--button-primario-primario, #091d8b);
}
</style>
