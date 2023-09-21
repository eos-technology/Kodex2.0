<template>
    <section class="send">
        <h3 class="h3-bold mb-6">{{ $t('users.header') }}</h3>
        <router-link :to="{ name: 'user' }" style="text-decoration: none;" class="text-black">
            <BackDummy />
        </router-link>
        <v-card class="card-transaction pa-4 rounded-lg d-flex flex-column" v-if="!send">
            <h3 class="h3-bold">{{ $t('users.btnUser') }}</h3>
            <p class="l-light mt-4">{{ $t('users.description') }}</p>
            <div class="b-regular mt-8">
                <span>{{ $t('users.email') }}</span>
                <v-text-field placeholder="Example@mail.com" variant="solo" class="rounded-lg"></v-text-field>
            </div>
            <div class="b-regular">
                <span>{{ $t('users.feeProject') }}</span>
                <v-text-field placeholder="0.00%" variant="solo" class="rounded-lg"></v-text-field>
            </div>
            <v-btn class="text-none  text-white mt-4 primary" color="#091D8B" @click="send = true">
                {{ $t('users.send') }}</v-btn>
            <router-link :to="{ name: 'user' }">
                <v-btn variant="outlined" class="text-none mt-4  w-100 primary outlined">
                    {{ $t('users.cancel') }}</v-btn>
            </router-link>
        </v-card>
        <v-card class="card-transaction pa-4 rounded-lg d-flex flex-column align-center" v-if="send">

            <div>
                <img src="@/assets/images/ready.webp" alt="">
            </div>
            <h3 class="h3-bold">{{ $t('reports.allDone') }}</h3>
            <p class="l-light mt-4">{{ $t('reports.sendEmail') }} <span class="font-weight-bold">email@email.com</span></p>
            <router-link :to="{ name: 'user' }" class="w-100">
                <v-btn class="text-none text-white mt-6 w-100 primary" color="#091D8B">{{ $t('transactions.back')
                }}</v-btn>
            </router-link>
        </v-card>
    </section>
</template>
<script setup lang="ts">
import { ref } from 'vue'


const send = ref<boolean>(false)

</script>
<style lang="scss" scoped>
.card-transaction {
    margin: auto;
    width: 450px;

    @media (max-width: 500px) {
        width: 100%;
    }


}

:deep(.v-field--variant-solo) {
    border-radius: 12px;
    border: 1px solid var(--border-border-input, #F4F5F8);
    background: var(--inputs-fondo-2, #F6F7F9);
    box-shadow: none;
    color: #394357;

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