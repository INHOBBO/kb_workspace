<script setup>
import { storeToRefs } from 'pinia';
import { reactive } from 'vue';
import { useProductStore } from '@/stores/product';

const store = useProductStore();
const { products } = storeToRefs(store);
const { addProduct } = store; // 함수는 그냥 이렇게 써도 됨

const form = reactive({
  name: '',
  price: 0,
  qty: 0,
});

function submitForm() {
  addProduct({ ...form });

  // 초기화
  form.name = '';
  form.price = 0;
  form.qty = 0;
}
</script>

<template>
  <div>
    <h3>상품 등록</h3>
    <input v-model="form.name" placeholder="상품명 입력" /><br />
    <input
      v-model.number="form.price"
      type="number"
      placeholder="단가 입력"
    /><br />
    <input v-model="form.qty" placeholder="개수 입력" /><br />
    <button @click="submitForm">등록</button>
  </div>
</template>
