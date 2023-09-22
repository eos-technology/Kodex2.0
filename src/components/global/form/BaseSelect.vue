<template>
  <div class="select">
    <label v-if="label" class="select__label" :for="id">
      <span v-if="required">*</span> {{ label }}
    </label>
    <select
      :value="modelValue"
      class="select__field"
      v-bind="{
        ...$attrs,
        onChange: ($event) => {
          $emit('update:modelValue', $event.target.value);
        },
      }"
      :id="id"
    >
      <option value="" selected>{{ select }}</option>
      <option v-for="option in options" :value="option" :key="option">
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    default: "text",
  },
  id: {
    type: String,
  },
  modelValue: {
    type: [String, Number],
    default: "",
  },
  options: {
    type: Array,
    required: true,
  },
  required: {
    type: Boolean,
    default: false,
  },
  select: {
    type: String,
    default: "Select",
  },
});
</script>

<style lang="scss" scoped>
.select {
  display: grid;
  gap: 8px;
  &__label {
    font-size: 14px;
    line-height: 20px;
    span {
      color: red;
      font-weight: 600;
      margin-right: 4px;
    }
  }

  &__field {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    background-image: url("@/assets/icons/form/arrow-select.svg") !important;
    background-repeat: no-repeat !important;
    background-position: right 16px center !important;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 12px 16px;
    gap: 8px;
    background: #f6f7f9;
    border: 1px solid #f4f5f8;
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
</style>
