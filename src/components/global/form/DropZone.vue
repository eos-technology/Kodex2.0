<template>
  <section class="drop">
    <div v-if="message">
      <p class="b-regular">
        {{ message }}
        <span v-if="isOptional" class="drop__top b-light">(optional)</span>
      </p>
    </div>
    <div
      class="drop__drag-area"
      @dragover.prevent="onDragOver"
      @dragleave.prevent="onDragleave"
      @drop.prevent="onDrop"
    >
      <img :src="getFile('icons', 'cloud')" alt="" />
      <span v-if="!isDragging">
        <p class="b-light">
          Drag and drop file, or
          <span class="drop__select b-semibold" role="button" @click="selectFiles"
            >Browse computer</span
          >
        </p>
        <p class="s-light text-center">Upload files up to 8gb</p>
      </span>

      <div v-else class="drop__select">Drop image here</div>
      <input type="file" name="file" class="file" ref="fileInput" multiple @change="onFileSelect" />
    </div>
    <div class="drop__container">
      <div class="drop__image" v-for="(image, index) in images" :key="index">
        <span class="delete" @click="deleteImage(index)">&times;</span>
        <img :src="image.url" />
      </div>
      <!-- <button class="drop__button" type="button">Upload</button> -->
    </div>
  </section>
</template>

<script>
export default (await import('vue')).defineComponent({
  data() {
    return {
      images: [],
      isDragging: false
    }
  },
  props: {
    message: {
      type: [Boolean, String],
      default: 'Añadir imagen del producto'
    },
    isOptional: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    selectFiles() {
      this.$refs.fileInput.click()
    },
    onFileSelect(event) {
      const files = event.target.files
      if (files.length === 0) return
      for (let i = 0; i < files.length; i++) {
        if (files[i].type.split('/')[0] != 'image') continue
        if (!this.images.some((e) => e.name === files[i].name)) {
          this.images.push({
            name: files[i].name,
            url: URL.createObjectURL(files[i])
          })
        }
      }
      console.log(this.images)
    },
    deleteImage(index) {
      this.images.splice(index, 1)
    },
    onDragOver(event) {
      event.preventDefault()
      this.isDragging = true
      event.dataTransfer.dropEffect = 'copy'
    },
    onDragleave(event) {
      event.preventDefault()
      this.isDragging = false
    },
    onDrop(event) {
      event.preventDefault()
      this.isDragging = false
      const files = event.dataTransfer.files
      for (let i = 0; i < files.length; i++) {
        if (files[i].type.split('/')[0] != 'image') continue
        if (!this.images.some((e) => e.name === files[i].name)) {
          this.images.push({
            name: files[i].name,
            url: URL.createObjectURL(files[i])
          })
        }
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.drop {
  width: 100%;
  display: grid;
  gap: 4px;
  overflow: hidden;
  &__top {
    color: #525e7b;
  }
  &__button {
    outline: 0;
    border: 0;
    color: #fff;
    border-radius: 1.2rem;
    font-weight: 400;
    padding: 1.2rem;
    width: 100%;
    background-color: #091d8b;
  }
  &__drag-area {
    padding: 2.4rem 1.6rem;
    height: 13.5rem;
    border-radius: 8px;
    border: 1px dashed #091d8b;
    background: linear-gradient(0deg, #f3f7ff, #f3f7ff), #d5ddfe;
    display: grid;
    gap: 8px;
    justify-items: center;
    user-select: center;
    -webkit-user-select: none;
    &.visible {
      font-size: 18px;
    }
  }
  &__select {
    cursor: pointer;
    transition: 0.4s;
    &:hover {
      opacity: 0.6;
    }
  }
  &__container {
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    position: relative;
    gap: 1.6rem;
  }
  &__image {
    width: 7.5rem;
    height: 7.5rem;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      border-radius: 5px;
    }
    span {
      position: absolute;
      top: -2px;
      right: 9px;
      font-size: 20px;
      cursor: pointer;
    }
  }
}
.drop input,
.drop__drag-area .on-drop,
.drop__drag-area.dragover .visible {
  display: none;
}

.delete {
  z-index: 999;
  color: #fe0000;
}

.b-light {
  @media (max-width: 767px) {
    text-align: center;
  }
}
</style>
