import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useProductStore = defineStore('product', () => {
  const products = ref([]);

  // 등록
  function addProduct(product) {
    products.value.push(product);
  }

  function removeProduct(index) {
    products.value.splice(index, 1);
  }

  return { products, addProduct, removeProduct };
});
