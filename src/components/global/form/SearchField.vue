<template>
  <div class="search-box">
    <v-text-field
      prepend-inner-icon="mdi-magnify"
      :label="$t('search')"
      single-line
      hide-details
    ></v-text-field>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.search-box{
  width: 30%;
  // max-width: 218px;
  border-radius: 12px;
  overflow: hidden;

  @media (max-width: 480px){
    width: 60%;
  }

  :deep(.v-field--variant-filled .v-field__outline::before){
    border: none;
    outline: none;
  }

}
</style>
