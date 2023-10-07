<template>
  <header class="header">
    <h3 class="h3-bold">{{ title }}</h3>
    <v-btn color="primary" v-if="text">{{ text }}</v-btn>
  </header>
</template>

<script lang="ts" setup>
defineProps({
  title: String,
  text: String
})
</script>
<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  gap: 2.4rem;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 767px) {
    h3 {
      font-size: 7.5vw;
    }

    button {
      width: 100%;
    }
  }
}
</style>
