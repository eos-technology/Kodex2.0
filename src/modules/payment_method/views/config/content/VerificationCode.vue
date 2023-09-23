<template>
  <form class="verification-code__form">
    <input
      type="tel"
      class="verification-code__input"
      maxlength="1"
      pattern="[0-9]*"
      placeholder="-"
    />
    <input
      type="tel"
      class="verification-code__input"
      maxlength="1"
      pattern="[0-9]*"
      placeholder="-"
    />
    <input
      type="tel"
      class="verification-code__input"
      maxlength="1"
      pattern="[0-9]*"
      placeholder="-"
    />
    <input
      type="tel"
      class="verification-code__input"
      maxlength="1"
      pattern="[0-9]*"
      placeholder="-"
    />
  </form>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'

const emit = defineEmits(['update:model-value'])

const inputs = ref<HTMLInputElement[]>([])

onMounted(() => {
  const inputsElements = document.querySelectorAll('.verification-code__form input')
  inputs.value = Array.from(inputsElements) as HTMLInputElement[]

  inputs.value.forEach((input, index) => {
    input.dataset.index = index.toString()
    input.addEventListener('paste', handleOtpPaste)
    input.addEventListener('keyup', handleOtp)
  })
})

function handleOtpPaste(e: ClipboardEvent) {
  const data = e.clipboardData?.getData('text')

  if (data) {
    const value = data.split('')
    if (value.length === inputs.value.length) {
      inputs.value.forEach((input, index) => {
        input.value = value[index]
        input.dispatchEvent(new Event('input'))
      })
      submit()
    }
  }
}

function handleOtp(e: KeyboardEvent) {
  const input = e.target as HTMLInputElement
  const fieldIndex = Number(input.dataset.index)

  if (e.key === 'Backspace') {
    if (fieldIndex > 0) {
      inputs.value[fieldIndex - 1].focus()
    }
    return
  }

  if (e.key.length === 1) {
    const newValue = e.key
    input.value = newValue

    if (fieldIndex < inputs.value.length - 1) {
      inputs.value[fieldIndex + 1].focus()
    } else {
      submit()
    }
  }
}

function submit() {
  let otp = ''
  inputs.value.forEach((input) => {
    otp += input.value
    input.disabled = true
    input.classList.add('disabled')
  })
  emit('update:model-value', otp)
}
</script>

<style lang="scss" scoped>
.verification-code {
  &__form {
    display: grid;
    grid-template-columns: auto auto auto auto;
    gap: 1.5rem;
  }

  &__input {
    width: 100%;
    padding: 1rem;
    border: 1px solid #eaecf0;
    border-radius: 0.5rem;
    text-align: center;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      appearance: none;
      margin: 0;
    }

    &:focus-visible {
      outline: none;
    }
  }
}
</style>
