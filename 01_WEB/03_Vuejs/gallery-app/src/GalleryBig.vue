<template>
  <div class="gallery-big">
    <img v-if="images" :src="images.url" :alt="images.id" class="main-image" />
  </div>
</template>

<script>
export default {
  name: 'GalleryBig',
  props: {
    images: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.gallery-big {
  display: flex;
  justify-content: center;
  align-items: center;
}

.main-image {
  width: 500px;
  height: 500px;
  border-radius: 10px;
}
</style>
