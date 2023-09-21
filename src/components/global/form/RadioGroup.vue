<template>
  <div class="group">
    <component
      v-for="option in options"
      :key="option.value"
      :is="vertical ? 'div' : 'span'"
      :class="{
        vertical: vertical
      }"
    >
      <Radio
        :label="option.label"
        :value="option.value"
        :modelValue="modelValue"
        :name="name"
        @update:modelValue="$emit('update:modelValue', $event)"
      />
    </component>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  options: {
    type: Object,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  modelValue: {
    type: [String, Number],
    required: true
  },
  vertical: {
    type: Boolean,
    default: false
  }
})
</script>

<style lang="scss" scoped>
.vertical {
  display: grid;
  justify-items: center;
  gap: 8px;
}
.group {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

</style>
