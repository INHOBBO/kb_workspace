<template>
  <div>
    <p><h1>숫자 : {{ count }}</h1></p>
    <Child 
    :initCount="count"
    @update-count="updateCount"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Child from './components/Child.vue';

const count = ref(5);
const updateCount = (newCount) => {
    count.value = newCount;
}

</script>
