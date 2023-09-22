<template>
    <section class="keys">
        <h3 class="h3-bold mb-6">{{ $t('setting.title') }}</h3>
        <router-link :to="{ name: 'config' }" style="text-decoration: none;" class="text-black">
            <BackDummy />
        </router-link>
        <v-card class="card pa-6">
            <div class="card-body">
                <!-- Step 1 -->
                <div v-if="!saved" class="big-gap">
                    <div class="small-gap">
                        <h1 class="h4-bold">{{ $t('setting.create-api') }}</h1>
                        <p class="l-regular">{{ $t('setting.info-description') }}</p>
                    </div>

                    <form class="big-gap">
                        <div class="small-gap">
                            <div>
                                <label for="name" class="b-regular">{{ $t('setting.name-api') }}</label>
                                <input v-model="form.name" id="name" type="text" :placeholder="$t('setting.name')">
                            </div>

                            <div>
                                <label for="name" class="b-regular">{{ $t('setting.domain') }}</label>
                                <input v-model="form.domain" id="name" type="text" placeholder="www.example.com">
                            </div>

                            <div>
                                <label for="name" class="b-regular">{{ $t('setting.use-type') }}</label>
                                <select v-model="form.apiMethod">
                                    <option value="" selected>{{ $t('setting.select') }}</option>
                                    <option v-for="(option, index) in options" :value="option" :key="index">{{ option }}
                                    </option>
                                </select>
                            </div>

                        </div>

                        <div class="small-gap">
                            <v-btn @click="saved = true" class="text-none text-white w-100 primary" color="#091D8B">{{ $t('setting.save') }}</v-btn>
                            <router-link :to="{name:'config'}">
                                <v-btn class="text-none w-100 primary outlined" variant="outlined">{{ $t('setting.cancel') }}</v-btn>
                            </router-link>
                        </div>
                    </form>

                </div>

                <!-- Step 2 -->
                <div v-if="saved" class="approved-message">
                    <img class="image" :src="getFile({ route: 'images', url: 'check_3d', extension: 'png' })" alt="" />
                    <div class="approved-message__message">
                        <h1 class="h3-bold ">{{ $t('payment-methods.all-ready') }}</h1>

                        <p class="l-regular">{{ $t('newApi-message1') }} <span>ApiKey</span> {{ $t('newApi-message2') }}
                            <span>{{ form.apiMethod }}</span> {{ $t('newApi-message3') }} <span>{{ form.projectName
                            }}</span> {{ $t('newApi-message4') }}
                        </p>
                    </div>
                    <router-link :to="{name:'config'}" class="w-100">
                        <v-btn class="text-none text-white primary" color="#091D8B">{{ $t('globals.back') }}</v-btn>
                    </router-link>
                </div>


            </div>
        </v-card>
    </section>
</template>
<script setup lang="ts">
import { getFile } from '@/helpers/Index'
import { reactive, ref } from 'vue'


const saved = ref<boolean>(false)

const form = reactive({
    name: '',
    domain: '',
    apiMethod: '',
    projectName: 'NombreProyecto'
})

const options = ['Pagos por Api', 'Pagos por Modal', 'Pagos por Enlaces']
</script>

<style lang='scss' scoped> .card {
     width: 450px;
     margin: 0 auto;

     @media (max-width: 767px) {
         width: 100%;

         h1 {
             font-size: 7.5vw;
         }

         .l-regular {
             font-size: 4vw;
             line-height: normal;
         }
     }

     input,
     select {
         width: 100%;
         padding: 8px 12px;
         background-color: #f9fafb;
         border: 1px solid #DDE4ED;
         border-radius: 10px;
         font-size: 14px;
         font-weight: 500;
         line-height: 20px;
         color: #394357;
     }

     input:focus-visible {
         outline: none;
     }
 }

 .l-semibold,
 .b-regular,
 .text-button {
     color: #001E62;
 }

 .big-gap {
     display: flex;
     flex-direction: column;
     gap: 32px;
 }

 .small-gap {
     display: flex;
     flex-direction: column;
     gap: 16px;
 }


 .approved-message {
     display: flex;
     flex-direction: column;
     align-items: center;
     gap: 24px;

     img {
         width: 120px;
     }

     &__message {
         text-align: center;

         span {
             font-weight: 600;
         }
     }

     button {
         width: 100%;
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