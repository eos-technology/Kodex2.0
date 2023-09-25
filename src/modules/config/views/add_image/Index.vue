<template>
    <section class="images">
        <h3 class="h3-bold mb-6">{{ $t('setting.title') }}</h3>
        <router-link :to="{ name: 'config' }" style="text-decoration: none;" class="text-black">
            <BackDummy />
        </router-link>
        <v-card class="card pa-6">
            <div class="image-project">
                <div class="image-project__section">
                    <h1 class="h3-bold">{{ $t('setting.project-image') }}</h1>
                    <p class="l-regular">{{ $t('setting.message-image') }}</p>
                </div>
                <DropZone />
                <div class="image-project__section">
                    <router-link :to="{name: 'config'}">
                        <v-btn class="text-none text-white mt-4 w-100 primary" color="#091D8B">{{ $t('setting.save') }}</v-btn>
                    </router-link>
                    <router-link :to="{name: 'config'}">
                    <v-btn variant="outlined" class="text-none w-100 primary outlined">{{ $t('setting.cancel')
                    }}</v-btn>
                    </router-link>
                    
                </div>
            </div>
        </v-card>
    </section>
</template> 

<script setup lang="ts">
import DropZone from '@/components/global/ui/DropZone.vue'

</script> 

<style lang='scss' scoped> .card {
     width: 31.25vw;
     margin: 0 auto;

     @media (max-width: 767px) {
         width: 100%;

         h1 {
             font-size: 7.5vw;
         }

         p {
             font-size: 3.5vw;
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

 .primary {
     height: 48px;
     border-radius: 16px;
 }

 .outlined {
     border: 1px solid var(--border-border-input, #F4F5F8);
     background: var(--fondos-blanco, #FFF);
     color: #001E62;
 }
</style>