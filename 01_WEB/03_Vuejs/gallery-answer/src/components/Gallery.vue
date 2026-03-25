<template>
  <div>
    <GalleryBig :image="selectedImage.url" />
    <GalleryList :images="images" @change-image="changeImage" />
  </div>
</template>

<script>
import GalleryBig from './GalleryBig.vue';
import GalleryList from './GalleryList.vue';
// 위에 :image는 저기서 이름을 정한거임. 야 Big아 selectImage.url가져가라!
// 위에 :images는 저기서 이름을 정한거임. 뒤에 images는 밑에 data()값 GalleryList에서는 이름으로 정한 images로 쓰면 됨~ props로 받아야징
// 위에 changeImage는 저기서 이름 정한거임 다시 methods로 잡자! 이건 공식급.

// 동적으로 사용할겁니다! 고정된거 아님. 우리는 Big으로 보낼겁니다.
export default {
  // 부모는 bind로 던지고 자식은 props로?

  components: { GalleryBig, GalleryList }, // 직계 자식만. 컴포넌트 등록했으니, template에서 사용가능

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
    changeImage(image) {
      this.selectedImage = image; // 내가 가져온 image로 selectedImage 덮어 버리자
    },
  },
};
</script>
