<template>
  <img
    :src="image.url"
    :style="{
      width: '80px',
      cursor: 'pointer',
    }"
    @click="handleClick"
  />
</template>

<script>
// 이벤트는 img에서 일어나니까~ img에서 이벤트 걸기
export default {
  props: ['image'],
  methods: {
    handleClick() {
      // 위에 함수 먼저 쓰고! 음..! 부모님에게 넘겨줘야해!! methods! 하고 emit!
      this.$emit('select', this.image); // ('이벤트명', 값) 부모님에게 전달하는 이벤트명은 select!! 이름을 정하는 곳
      // image는 props에서 받는거니깡
    },
  },
};
</script>
