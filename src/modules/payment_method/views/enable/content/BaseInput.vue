<template>
  <div class="input">
    <label v-show="label" :for="uuid"><span v-show="required">*</span> {{ label }}</label>
    <input v-bind="$attrs" :placeholder="placeholder" :id="uuid" :value="modelValue"
      @input="$emit('update:modelValue', modelValue)" />
  </div>
</template>

<script lang="ts" setup>
import { uniqueID } from "@/helpers/Index";
const uuid = uniqueID().getID().toString();
defineProps({
  label: {
    type: [String, Boolean],
    default: false,
  },
  placeholder: {
    type: [String],
    default: "text",
  },
  modelValue: {
    type: [String, Number],
    default: "",
  },
  required: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped>
// @import "@/assets/sass/_colors.scss";

// $border-input: #f4f5f8;
// $bg-input: #f6f7f9;
// $text-input: #1f2d4d;

.input {
  display: grid;
  gap: 4px;
  width: 100%;

  label {
    color: #1f2d4d;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;

    span {
      color: var(danger);
      font-weight: 700;
      margin-right: 4px;
    }
  }

  input {
    padding: 12px 16px;
    background-color: #f6f7f9;
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

.checkbox {
  display: flex;
  gap: 4px;
  align-items: center;

  input[type="checkbox"] {
    appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 6px;
    background: #f6f7f9;
    border: #f4f5f8;
    cursor: pointer;

    &:checked {
      background-color: var(primary);
      background-image: url("@/assets/icons/form/check.svg");
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
    }
  }

  label {
    font-weight: 400;
    color: #1f2d4d;
    font-size: 17px;
    font-weight: 24px;
    cursor: pointer;
  }
}

.search {
  // width: 330px;

  background: {
    image: url("@/assets/icons/form/search.svg");
    repeat: no-repeat;
    position: 12px;
    size: 16px;
  }

  input {
    padding-left: 36px;
  }

  @media (max-width: 400px) {
    width: 100%;
  }
}
</style>