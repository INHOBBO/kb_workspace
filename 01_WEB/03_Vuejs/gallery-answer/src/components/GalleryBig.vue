<template>
  <img :src="image" style="width: 450px; height: 400px" />
</template>

<script>
// :src 난 고정이 아니라 값을 계속 받겠다.
export default {
  props: ['image'], // props로 Gallery에서 주는거 받겠습니다! 감사합니다.
};
</script>
