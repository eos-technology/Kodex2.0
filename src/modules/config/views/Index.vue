<template>
  <div class="setting">
    <h3 class="h3-bold">{{ $t('setting.title') }}</h3>
    <Banner />
    <Tabs />
  </div>
</template>
<script setup lang="ts">
import Banner from './content/Banner.vue'
import Tabs from './Tabs.vue'
</script>
<style lang="scss" scoped>
.setting,
.main-section,
.optional-section {
  display: flex;
  flex-direction: column;
  gap: 1.67vw;
}
</style>
