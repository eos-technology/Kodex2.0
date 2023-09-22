<template>
  <div class="radio-check">
    <input
      class="radio-check__input"
      type="radio"
      :checked="modelValue === value"
      :value="value"
      v-bind="$attrs"
      @change="$emit('update:modelValue', value)"
      id="id"
    />
    <label v-if="label" for="id">{{ label }}</label>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  label: {
    type: String,
    default: ''
  },
  modelValue: {
    type: [String, Number],
    default: ''
  },
  value: {
    type: [String, Number],
    required: true
  }
})
</script>

<style lang="scss" scoped>
.radio-check {
  display: flex;
  gap: 8px;
  align-items: center;
  &__input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 1px solid #F4F5F8;
    &:checked{
      border: 4px solid #091D8B;
    }
  }
}

</style>
