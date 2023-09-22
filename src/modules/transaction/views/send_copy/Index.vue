<template>
    <section class="send">
        <h3 class="h3-bold mb-6">{{ $t('transactions.headerTitle') }}</h3>
        <router-link :to="{ name: 'transactions' }" style="text-decoration: none;" class="text-black">
            <BackDummy />
        </router-link>
        <v-card class="card-transaction pa-4 rounded-lg d-flex flex-column" v-if="!send">
            <h3 class="h3-bold">{{ $t('transactions.send') }}</h3>
            <p class="l-light mt-4">{{ $t('transactions.description') }}</p>
            <div class="b-regular mt-8">
                <span>{{ $t('transactions.email') }}</span>
                <v-text-field placeholder="Example@mail.com" variant="solo" class="rounded-lg"></v-text-field>
            </div>
            <v-btn class="text-none rounded-lg text-white mt-4" color="#091D8B" @click="send = true">{{ $t('transactions.btnSend') }}</v-btn>
            <router-link :to="{ name: 'transactions' }">
                <v-btn variant="outlined" class="text-none rounded-lg mt-4 text-black w-100">{{ $t('transactions.btnCancel')}}</v-btn>
            </router-link>
        </v-card>
        <v-card class="card-transaction pa-4 rounded-lg d-flex flex-column align-center" v-if="send">

            <div>
                <img src="@/assets/images/ready.webp" alt="">
            </div>
            <h3 class="h3-bold">{{ $t('transactions.ready') }}</h3>
            <p class="l-light mt-4">{{ $t('transactions.sendCopy') }} <span class="font-weight-bold">email@email.com</span></p>
            <router-link :to="{ name: 'transactions' }" class="w-100">
                <v-btn class="text-none rounded-lg text-white mt-6 w-100" color="#091D8B">{{ $t('transactions.back') }}</v-btn>
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
</style>