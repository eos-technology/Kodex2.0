<template>
  <!-- Cards -->
  <v-card class="cards__item pa-4 pa-md-6 d-flex align-center" rounded="lg"
    ><i :class="`icon-${icon} icon`"></i>
    <div>
      <p class="b-light">{{ title }}</p>
      <h5 class="h5-bold">{{ value }}</h5>
    </div>
  </v-card>
</template>

<script setup lang="ts">
defineProps({
  icon: String,
  title: String,
  value: String
})
</script>

<style lang="scss" scoped>
.icon {
  padding: 12px;
  border-radius: 16px;
  background-color: #ebf3ff;
  font-size: 24px;
  color: #001e62;
  margin-right: 10px;
}

p {
  color: #0a1e8c;
}
</style>
