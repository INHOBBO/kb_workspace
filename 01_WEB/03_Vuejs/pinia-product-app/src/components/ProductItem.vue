<script setup>
import { useProductStore } from '@/stores/product';

const props = defineProps({
  // List에 :product가 옴!
  product: Object,
  index: Number,
});
const store = useProductStore();
const { removeProduct } = store;
</script>

<template>
  <div>
    <p>
      번호: {{ props.index }}<br />
      상품명 : {{ product.name }}<br />
      단가 : {{ product.price }}<br />
      개수 : {{ product.qty }}<br />
      합계 : {{ product.price * product.qty }}
      <button @click="removeProduct(props.index)">삭제</button>
    </p>
  </div>
</template>
