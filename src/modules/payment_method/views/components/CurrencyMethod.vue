<template>
  <div class="payments text-primary">
    <div class="payments__content">
      <div class="payments__coin" :class="{ 'payments__coin--width': !isEnable }">
        <img :src="getFile({ route: 'icons', url: `${item.icon}`, extension: 'png' })" alt="" />
        <div>
          <p class="l-medium">{{ item.coin }}</p>
          <p class="s-light text-nowrap">{{ $t(item.value) }}</p>
        </div>
      </div>

      <div class="payments__box" v-if="!isEnable" :class="{ 'payments__box--info': !isEnable }">
        <p class="s-light">{{ $t(item.dollars) }}</p>
        <p class="l-medium">{{ item.valueDollars }}</p>
      </div>

      <div class="payments__box" v-if="!isEnable" :class="{ 'payments__box--info': !isEnable }">
        <p class="s-light">{{ $t(item.ammount) }}</p>
        <p class="l-medium">{{ item.ammountValue }}</p>
      </div>

      <div class="d-flex align-center">
        <div class="payments__box mr-8" :class="{ 'payments__box--configure-link': isEnable }">
          <span
            v-if="isToogle"
            @click="
              $router.push({ name: 'payment_method-config', params: { currency: item.type } })
            "
            class="link-icon"
            ><i class="icon-arrow-right"></i
          ></span>
          <a
            v-if="isToogle"
            @click="
              $router.push({ name: 'payment_method-config', params: { currency: item.type } })
            "
            class="l-medium link text-decoration-none"
            >{{ $t('configure') }}</a
          >
        </div>
        <div class="payments__box" v-if="isEnable">
          <!-- <b-form-checkbox v-model="isToogle" name="check-button" switch /> -->

          <v-switch
            v-model="isToogle"
            density="compact"
            hide-details
            color="primary"
            inset
          ></v-switch>
        </div>
      </div>
    </div>

    <div class="payments__box payments__box--responsive-link" v-if="isEnable">
      <hr v-if="isToogle" />
      <a
        v-if="isToogle"
        @click="$router.push({ name: 'payment_method-config', params: { currency: item.type } })"
        class="l-medium"
        >{{ $t('configure') }}</a
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import getFile from '@/helpers/getFile'

const props = defineProps({
  item: {
    type: Object,
    required: true
  },
  isEnable: {
    //se trata de la vista principal o de la vista de 'habilitar métodos'
    type: Boolean,
    default: false
  },
  toggle: {
    type: Boolean,
    default: false
  }
})

const isToogle = ref(props.toggle)
</script>

<style lang="scss" scoped>
.payments {
  padding: 16px;
  background: #fafafa;
  border: 1px solid #dde4ed;
  border-radius: 12px;

  &__content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
  }

  &__coin {
    display: flex;
    gap: 16px;
    align-items: center;
    height: 32px;

    &--width {
      width: 15%;
    }
  }

  &__box {
    a {
      cursor: pointer;
      text-align: right;
    }

    .link {
      @media (max-width: 767px) {
        display: none;
      }
    }

    .link-icon {
      display: none;

      @media (max-width: 767px) {
        display: block;
        font-size: 7vw;
        color: #001e62;
      }
    }
  }

  &__box--info {
    @media (max-width: 767px) {
      display: none;
    }
  }

  &__box--configure-link {
    @media (max-width: 767px) {
      display: none;
    }
  }

  &__box--responsive-link {
    display: none;

    @media (max-width: 767px) {
      display: block;
      text-align: center;

      hr {
        margin-top: 5vw;
      }

      a {
        display: inline-block;
        padding-top: 2vw;
      }
    }
  }
}

.link {
  color: #3587ff;
  text-decoration: underline;
}
</style>
