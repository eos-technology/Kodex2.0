<template>
  <article class="back" @click="$router.back()">
    <div>
      <img src="@/assets/icons/form/back.svg" alt="" />
    </div>
    <p class="b-regular">{{ $t('globals.back') }}</p>
  </article>
</template>

<script lang="ts">
export default {
  props: {
    back: {
      Type: String,
      default: '/'
    }
  }
}
</script>

<style lang="scss" scoped>
.back {
  display: flex;
  align-items: center;
  padding: 8px;
  gap: 8px;
  height: 36px;
  cursor: pointer;
  background: #f6f8fa;
  border: 1px solid #dde4ed;
  border-radius: 8px;
  width: fit-content;
  &__text {
    display: none;
    @media (min-width: 600px) {
      display: unset;
    }
  }
}
</style>
