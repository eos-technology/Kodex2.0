<template>
  <div class="input">
    <label v-show="label" :for="uuid"><span v-show="required">*</span> {{ label }}</label>
    <input
      v-bind="$attrs"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script setup>
defineProps({
  label: {
    type: [String, Boolean],
    default: false
  },
  placeholder: {
    type: [String, Number],
    default: 'text'
  },
  modelValue: {
    type: [String, Number],
    default: ''
  },
  required: {
    type: Boolean,
    default: false
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/sass/_colors.scss';

$border-input: #f4f5f8;
$bg-input: #f6f7f9;
$text-input: #1f2d4d;
.input {
  display: grid;
  gap: 4px;
  label {
    color: $text-input;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;

    span {
      color: $danger;
      font-weight: 700;
      margin-right: 4px;
    }
  }
  input {
    padding: 12px 16px;
    background-color: $bg-input;
    border: 1px solid $border-input;
    border-radius: 12px;
    font-size: 14px;
    font-weight: 300;
    line-height: 20px;
    color: #394357;
    &:focus {
      outline: none;
    }
  }
}

.checkbox {
  display: flex;
  gap: 4px;
  align-items: center;
  input[type='checkbox'] {
    appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 6px;
    background: $bg-input;
    border: $border-input;
    cursor: pointer;
    &:checked {
      background-color: $primary;
      background-image: url('@/assets/icons/form/check.svg');
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
    }
  }
  label {
    font-weight: 400;
    color: $text-input;
    font-size: 1.7rem;
    font-weight: 2.4rem;
    cursor: pointer;
  }
}

.search {
  width: 33rem;
  background: {
    image: url('@/assets/icons/form/search.svg');
    repeat: no-repeat;
    position: 12px;
    size: 1.6rem;
  }
  input {
    padding-left: 3.6rem;
  }
  @media (max-width: 400px) {
    width: 100%;
  }
}
</style>
