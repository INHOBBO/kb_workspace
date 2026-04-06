<script setup>
import { useProductStore } from '@/stores/product';
import ProductItem from './ProductItem.vue';
import { storeToRefs } from 'pinia';

const store = useProductStore();

const { products } = storeToRefs(store);
</script>

<template>
  <h3>상품 목록</h3>
  <ProductItem
    v-for="(product, index) in products"
    :key="index"
    :product="product"
    :index="index"
  />
</template>
