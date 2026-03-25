<template>
  <div class="gallery-container">
    <GalleryBig :images="selectedImage" />
    <GalleryList :images="images" @change-image="changeImage" />
  </div>
</template>

<script>
import GalleryBig from './GalleryBig.vue';
import GalleryList from './GalleryList.vue';

export default {
  name: 'Gallery',
  components: { GalleryBig, GalleryList },
  props: {
    selectedImage: { id: 'img1', url: '/images/dog1.jpg' },
  },
  data() {
    return {
      images: [
        { id: 'img1', url: '/images/dog1.jpg' },
        { id: 'img2', url: '/images/dog2.jpg' },
        { id: 'img3', url: '/images/dog3.jpg' },
        { id: 'img4', url: '/images/dog4.jpg' },
        { id: 'img5', url: '/images/dog5.jpg' },
      ],
      selectedImage: { id: 'img1', url: '/images/dog1.jpg' },
    };
  },
  methods: {
    changeImage(newImage) {
      this.selectedImage = newImage;
    },
  },
};
</script>

<style scoped>
.gallery-container {
  margin-top: auto;
  align-items: center;
}
</style>
