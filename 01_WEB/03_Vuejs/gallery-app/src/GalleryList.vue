<template>
  <div class="gallery-list">
    <GalleryListItem
      v-for="item in images"
      :key="item.id"
      :item="item"
      @change-image="forwardChangeImage"
    />
  </div>
</template>

<script>
import GalleryListItem from './GalleryListItem.vue';

export default {
  name: 'GalleryList',
  components: { GalleryListItem },
  props: {
    images: {
      type: Array,
      required: true,
    },
  },
  methods: {
    forwardChangeImage(selectedItem) {
      this.$emit('change-image', selectedItem);
    },
  },
};
</script>

<style scoped>
.gallery-list {
  display: flex;
  justify-content: center;
  width: 1500px;
  height: 300px;
}
</style>
