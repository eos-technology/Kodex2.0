<template>
  <div class="drop">
    <img class="image" :src="getFile({ route: 'icons', url: 'cloud', extension: 'svg' })" alt="" />
    <p class="b-light d-flex flex-column align-center" style="max-width: 300px;">
      <span class="custom-file-input">
        Drag and drop file, or
        <input type="file" id="fileInput" />
        <label for="fileInput" class="b-semibold ml-1">Selecciona un archivo</label>
      </span>
      Upload files up to 8gb
    </p>
  </div>
</template>
<script lang="ts" setup>
import { getFile } from '@/helpers/Index'

</script>
<style lang="scss" scoped>
.drop {
  display: flex;
  padding: 24px 16px;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  border: 1px dashed var(--button-primario-primario, #091D8B);
  background: var(--button-primario-basic, linear-gradient(0deg, #F3F7FF 0%, #F3F7FF 100%), #D5DDFE);
}

.custom-file-input {
  position: relative;
  overflow: hidden;
  display: inline-block;
}

.custom-file-input input[type="file"] {
  position: absolute;
  font-size: 100px;
  opacity: 0;
  right: 0;
  top: 0;
  cursor: pointer;
}

.custom-file-input label {

  color: #001E62;
  border: none;

  cursor: pointer;
}
</style>