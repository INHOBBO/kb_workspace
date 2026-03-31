<template>
  <div>
    <!-- 증가와 감수 버튼 작성 -->
    <p><h3>Count : {{ count }}</h3></p>
    <button @click="increment">증가</button>
    <button @click="decrement">감소</button>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'AppRef',
  components: {},
  setup() {
    const count = ref(10);

    const increment = () => {
        return count.value++; 
    }
    const decrement = () => {
        return count.value--;
    }
    return { count, increment, decrement };
  },
};
</script>
