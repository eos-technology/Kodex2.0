<template> 
    <div class="finish">
        <div class="finish__content">
            <img class="img_qr" src="@/assets/images/coin-aprov.png" alt="" />
            <h3 class="h3-bold">{{ $t('cart.title3') }}</h3>
            <p class="l-light">{{ $t('cart.finish-text1') }} <span class="l-medium">NombreCompra</span> {{ $t('cart.finish-text2') }}</p>
        </div>

        <div class="finish__button">
            <v-btn variant="flat" color="primary" @click="$router.back()">{{ $t('cart.back') }}</v-btn>
        </div>
    </div>
</template> 

<script lang='ts' setup> 

</script> 

<style lang='scss' scoped> 
.finish{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 32px;

    &__content{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 16px;
        text-align: center;

        img{
            width: 100%;
            height: 100%;
            max-width: 150px;
            max-height: 150px;

        }


    }

    &__button{
        :deep(.v-btn){
            padding: 12px 16px;
            height: fit-content;
            border-radius: 16px;
            text-transform: none;
        }
    }
}

.h3-bold{
    color: #0A1E8C;
}

.l-light,.l-medium{
    color: #001E62;
}
</style>