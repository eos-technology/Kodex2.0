<template>
  <!-- Cards -->
  <div class="cards">
    <v-card class="pa-4 pa-md-6 rounded-lg d-flex align-center"
      ><i :class="`icon-${icon} cards-icon`"></i>
      <div>
        <p class="b-light">{{ title }}</p>
        <h5 class="h5-bold">{{ value }}</h5>
      </div>
    </v-card>
    <v-card class="pa-4 pa-md-6 rounded-lg d-flex align-center"
      ><i :class="`icon-${icon1} cards-icon`"></i>
      <div>
        <p class="b-light">{{ title1 }}</p>
        <h5 class="h5-bold">{{ value1 }}</h5>
      </div>
    </v-card>
    <v-card class="pa-4 pa-md-6 rounded-lg d-flex align-center"
      ><i :class="`icon-${icon2} cards-icon`"></i>
      <div>
        <p class="b-light">{{ title2 }}</p>
        <h5 class="h5-bold">{{ value2 }}</h5>
      </div>
    </v-card>
    <v-card class="pa-4 pa-md-6 rounded-lg d-flex align-center"
      ><i :class="`icon-${icon3} cards-icon`"></i>
      <div>
        <p class="b-light">{{ title3 }}</p>
        <h5 class="h5-bold">{{ value3 }}</h5>
      </div>
    </v-card>
  </div>
</template>

<script setup lang="ts">
defineProps({
  icon: String,
  title: String,
  value: String,
  icon1: String,
  title1: String,
  value1: String,
  icon2: String,
  title2: String,
  value2: String,
  icon3: String,
  title3: String,
  value3: String
})
</script>

<style lang="scss" scoped>
@import '@/assets/sass/mixins';
.cards {
  @include grid(4, 24px);
  @media (max-width: 1080px) {
    @include grid(2, 24px);
  }
  @media (max-width: 600px) {
    @include grid(1, 24px);
  }
  &-icon {
    padding: 12px;
    border-radius: 16px;
    background-color: #ebf3ff;
    font-size: 24px;
    color: #001e62;
    margin-right: 10px;
  }
}

p {
  color: #0a1e8c;
}

:deep(.v-card) {
  border-radius: 16px !important;
  border: 1px solid #dde4ed;
}
</style>
