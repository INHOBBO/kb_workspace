<template>
  <div>
    <h1>게시물 상세 페이지</h1>
    <h3>ID: {{ route.params.id }}</h3>
  </div>
</template>

<script>
import { useRoute } from 'vue-router';

export default {
  setup() {
    const route = useRoute(); // 현재 url에 있는 모든 정보 가져오기, params, query 사용 가능하게 해줌!

    return { route };
  },
};
</script>
