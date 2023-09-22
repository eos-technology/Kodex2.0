<template>
  <div class="flag">
    <label for="">{{ label }}</label>
    <vue-tel-input v-model="value" v-bind="bindProps"></vue-tel-input>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";
export default {
  components: {},
  props: {
    label: {
      type: String,
      default: "",
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
  },
  setup(props, { emit }) {
    const value = computed({
      get() {
        return props.modelValue;
      },
      set(value) {
        emit("update:modelValue", value);
      },
    });
    const phone = ref("0123456789");
    const bindProps = {
      defaultCountry: "CO",
      placeholder: "Enter a phone number",
      required: false,
      preferredCountries: ["CO", "BR"],
      name: "telephone",
      dropdownOptions: {
        disabledDialCode: true,
        showFlags: true,
      },
      inputOptions: {
        showDialCode: true,
      },
    };
    return {
      value,
      phone,
      bindProps,
    };
  },
};
</script>
<style lang="scss">
.flag {
  display: grid;
  gap: 4px;
  label {
    font-size: 14px;
    font-weight: 300;
    line-height: 20px;
    color: #295170;
  }
}
.vue-tel-input {
  display: flex;
  gap: 8px;
  background: transparent;
  border: none;
  outline: none;
  box-shadow: none !important;
  &:focus-within {
    border: none;
  }
}
.vti {
  &__dropdown {
    outline: none;
    background: #f9fafb;
    border: 1px solid #dde4ed;
    border-radius: 12px;
    padding: 12px 16px;
  }
  &__flag {
    margin: 0;
    width: 14px;
    border-radius: 7px;
  }
  &__input {
    outline: none;
    background: #f9fafb;
    border: 1px solid #dde4ed;
    border-radius: 12px;
    padding: 12px 16px;
    font-size: 14px;
    font-weight: 700;
    line-height: 20px;
    color: #295170;
  }
  &__selection{
    gap: 8px;
  }
}
</style>
