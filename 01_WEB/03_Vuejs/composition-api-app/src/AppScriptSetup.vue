<template>
  <div>
    <!-- 증가와 감수 버튼 작성 -->
    <p><h3>Count : {{ count }}</h3></p>
    <button @click="increment">증가</button>
    <button @click="decrement">감소</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const count = ref(10);
const increment = () => {
  count.value++; 
}
const decrement = () => {
  count.value--;
}
</script>
