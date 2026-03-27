<template>
  <img :src="image" style="width: 450px; height: 400px" />
</template>

<script>
// :src 난 고정이 아니라 값을 계속 받겠다.
export default {
  props: ['image'], // props로 Gallery.vue에서 주는거 받겠습니다! :image임 감사합니다. Gallery.vue에서 :image로 줬잖아! 그럼 image로 받아야지
};
</script>
