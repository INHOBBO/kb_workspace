<template>
  <div class="m-3">
    <h3>존재하지 않는 경로</h3>
    <p>요청 경로 : {{ currentRoute.path }}</p>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'; // useRoute 꺼내오자
const currentRoute = useRoute(); // 현재 접속한 라우터 정보
</script>
