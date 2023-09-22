<template>
    <div class="card-big ">
        <v-card class="pa-4 pa-md-6 rounded-lg">
            <div class="card-header main-header mb-6">
                <h4 class="h4-semibold">{{ $t('dashboard.login-recents') }}</h4>
                <router-link to="#" class="link-auth">{{ $t('view-all') }}</router-link>
            </div>
            <div class="sesion">
                <v-card v-for="(item, index) in data" :key="index" class="rounded-lg pa-4 pa-md-6">
                    <div class="card-header mb-6">
                        <div class="card-box">
                            <i :class="`icon-${item.iconCard} sesion__icon`"></i>
                            <p class="l-medium">{{ item.titleCard }}</p>
                        </div>
                        <router-link class="link-under" to="#">{{ $t('logout') }}</router-link>
                    </div>
                    <div class="line mb-6"></div>
                    <div class="sesion__info">
                        <div class="sesion__box sesion__box--up">
                            <i class="icon-user sesion__icon"></i>
                            <div>
                                <p class="l-light">
                                    NombreUsuario -
                                    <span class="l-regular">({{ $t('setting.recent') }})</span>
                                </p>
                                <p class="b-light">NombreUsuario@email.com</p>
                            </div>
                        </div>
                        <div class="sesion__box">
                            <i class="icon-earth sesion__icon"></i>
                            <p class="l-light">
                                {{ $t('setting.login') }} -
                                <span class="l-regular">03/03/2023 00:00</span>
                            </p>
                        </div>
                        <div class="sesion__box">
                            <i class="icon-navigation sesion__icon"></i>
                            <p class="l-light">
                                IP Address -
                                <span class="l-regular">104.199.26.19</span>
                            </p>
                        </div>
                        <div class="sesion__box">
                            <i class="icon-location sesion__icon"></i>
                            <p class="l-light">
                                {{ $t('setting.location') }} -
                                <span class="l-regular">Bogotá, Colombia</span>
                            </p>
                        </div>
                    </div>

                    <div class="card-header">
                        <p class="l-light">{{ $t('setting.block-ip') }}</p>
                        <div>
                            <v-switch inset class="switch" color="#091D8B"></v-switch>
                        </div>
                    </div>
                </v-card>
            </div>
        </v-card>
    </div>
</template>
  
<script lang="ts" setup>
import { ref } from 'vue';

const data = ref([
    {
        iconCard: "imac",
        titleCard: "Apple iMac",
    },
    {
        iconCard: "ipad",
        titleCard: "Table android Samsung",
    },
    {
        iconCard: "apple",
        titleCard: "Mac Mini",
    },
]);

const isChecked = ref(false);
</script>
  
<style lang="scss" scoped>
@import "@/assets/mixins";


.main-header {
    @media (max-width: 767px) {
     
        flex-direction: column;
        align-items: start;
        gap: 1.6px;
        /* Cambio de 1.6rem a 16px */

        h4 {
            font-size: 7.5vw;
            line-height: normal;
        }
    }
}

.sesion {
    @include grid(3, 24px);

    /* Cambio de 2.4rem a 24px */
    &__icon {
        font-size: 24px;
        color: #001e62;
    }

    &__box {
        display: flex;
        align-items: center;
        gap: 8px;

        &--up {
            align-items: flex-start;
        }
    }

    &__info {
        display: grid;
        gap: 8px;
    }

    @media (max-width: 767px) {
        display: flex;
        flex-direction: column;
        gap: 16px;
        /* Cambio de 2.4rem a 16px */
    }

   
}
.link-auth,
.link-under{
    color: #3587FF;
}

.switch{
    height:60px;
    padding-top: 5px;
}
</style>
  