<template>
  <div class="add-box">
    <p class="b-regular">Cantidad</p>
    <div class="add-box__amount">
      <button class="add-box__amount-btn"><i class="icon-minus"></i></button>
      <p class="b-light">O</p>
      <button class="add-box__amount-btn active">
        <i class="icon-plus"></i>
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.add-box {
  display: grid;
  gap: 4px;

  &.w {
    .add-box__amount {
      width: 100%;
      max-width: unset;
    }
  }

  &__amount {
    max-width: 250px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
    gap: 8px;
    width: 100%;
    background-color: #f6f7f9;
    border: 1px solid #f4f5f8;
    border-radius: 12px;

    &-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #e9ecf1;
      color: #5e6f87;
      border-radius: 4px !important;
      
      padding: 0 !important;
      outline: none;
      border: none;

      &.active {
        background-color: #091d8b;
        color: #fff;
      }
    }
  }

  :deep(.v-btn){
    width: 16px;
    height: 16px;
  }
 
}

.b-regular {
  color: #1f2d4d;
}

</style>
