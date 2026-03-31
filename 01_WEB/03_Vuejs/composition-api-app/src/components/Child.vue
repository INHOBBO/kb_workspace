<template>
  <div>
    <button @click="increment">증가</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  initCount: {
    // v-bind:initCount로 줬음
    type: Number,
    default: 5,
  },
});

const count = ref(props.initCount);

const emit = defineEmits(['update-count']);

const increment = () => {
  count.value++;
  emit('update-count', count.value);
};
</script>
