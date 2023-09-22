<template>
  <div class="checkbox">
    <input
      class="field"
      type="checkbox"
      :checked="modelValue"
      @change="$emit('update:modelValue', $event.target.checked)"
    />

    <label :for="uuid"
      >{{ label }} <span>{{ span }}</span></label
    >
  </div>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    default: ''
  },
  modelValue: {
    type: Boolean,
    default: false
  },
  id: {
    type: String
  },
  span: {
    type: String
  }
})
</script>

<style lang="scss" scoped>
.checkbox {
  display: flex;
  gap: 4px;
  align-items: center;
  input[type='checkbox'] {
    appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 6px;
    background: linear-gradient(0deg, rgba(18, 100, 163, 0.05), rgba(18, 100, 163, 0.05));
    border: 1px solid #dde4ed;
    cursor: pointer;
    &:checked {
      background-color: #091d8b;
      background-image: url('@/assets/icons/form/check.svg');
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
    }
  }
  label {
    color: #001e62;
    font-size: 14px;
    font-weight: 300;
    line-height: 20px;
    span {
      cursor: pointer;
      font-weight: 500;
    }
  }
}
</style>
