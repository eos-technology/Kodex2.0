<template> 
  <div class="add" :class="{'w100': w100}">
    <v-btn class="btn" color="secondary" @click="num--" :disabled="num<1">
      <span>-</span>
    </v-btn>
    <p class="b-light">{{ num }}</p>
    <v-btn class="btn" color="primary" @click="num++">
      <span>+</span>
    </v-btn>
  </div>
</template> 

<script lang='ts' setup>
import { ref } from 'vue';

defineProps({
  w100: Boolean
})

const num =  ref(0)
</script> 

<style lang='scss' scoped> 
.add{
  border-radius: 0.75rem;
  border: 1px solid #F4F5F8;
  background: #F6F7F9;
  padding: 0.75rem 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 2.75rem;
  width: 100%;
  max-width: 15.625rem;

  :deep(.v-btn){
    height: 1rem !important;
    width: 1rem;
    padding: 0;
    border-radius: 0.3rem !important;
  }

  :deep(.v-btn:first-child){
    background: #5662724b !important;
  }

  :deep(.v-btn__content){
    position: relative;

    span{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-60%,-45%);
      font-size: 0.8rem;
    }
  }
}

.w100{
  width: 100%;
  max-width: 100%;
}

:deep(.v-btn--size-default){
  min-width: 0;
}
</style>