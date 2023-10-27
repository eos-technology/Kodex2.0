<template>
  <div>
    <v-btn size="xs-small" class="btn" v-clipboard="text" v-clipboard:success="onSuccess">
      <p v-if="!copied">
        <i class="icon-copy mr-1"></i>
        <span v-if="!hideText">
          <span v-if="!label">{{ $t('transactions.btnCopy') }}</span>
          <span v-else>{{ label }}</span>
        </span>
      </p>
      <p v-else>
        <i class="icon-done mr-1"></i>
        <span v-if="!hideText">{{ $t('transactions.btnCopied') }}</span>
      </p>
    </v-btn>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const copied = ref<boolean>(false)

const props = defineProps({
  text: {
    required: true
  },
  label: {
    type: String
  },
  hideText: {
    type: Boolean,
    default: true
  }
})

const onSuccess = () => {
  copied.value = true
  setTimeout(() => {
    copied.value = false
  }, 2000)
}
</script>
<style lang="scss" scoped>
.btn {
  display: flex;
  padding: 8px 12px;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  border: 1px solid #f4f5f8;
  font-weight: 200 !important;
  i {
    font-size: 1rem;
    color: #001e62;
    background-color: #fff;
    padding: 0;
  }
  @media (max-width: 670px) {
    border: none;
    color: #3587ff;
    font-size: 14px;
    line-height: 20px;

    i {
      color: #3587ff;
    }
  }
}
</style>
