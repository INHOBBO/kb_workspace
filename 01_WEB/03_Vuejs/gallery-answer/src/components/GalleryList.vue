<template>
  <div style="display: flex; gap: 10px; margin-top: 20px">
    <GalleryListItem
      v-for="img in images"
      :key="img.id"
      :image="img"
      @select="selectImage"
    />
  </div>
</template>

<script>
// 자식이 보낸 select! 음 처리할 메소드는 selectImage로 이름 정해보자
// 위에 마지막 img쓴거는 다시 자식으로 내려간다. 근데 이름을 :image로 했지? 그럼 image로 간다.
import GalleryListItem from './GalleryListItem.vue';

export default {
  components: { GalleryListItem },
  props: ['images'], // Gallery.vue에서 :images로 준거 props로 받아옴. 여기 썼으니까 위에 images쓸 수 있음. 위에 템플릿에 images는 이거 쓰는거임
  methods: {
    selectImage(image) {
      // image는 listitem.vue에서 this.image할때 그 image임!
      // 위에서 selectImage로 정하기로 했지? 그러니까 methods로 만들어야지
      this.$emit('change-image', image); // 다시 가져가! 이벤트명은 내가 정한다. 부모에서 쓰도록
    },
  },
};
</script>
