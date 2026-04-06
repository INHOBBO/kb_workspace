<script setup>
import { useCounterStore } from '@/stores/counter';
import { storeToRefs } from 'pinia';

const store = useCounterStore(); // store안에 count, double, increment, decrement

const { count, doubleCount } = storeToRefs(store); // 데이터는 포장해서 꺼내기
const { increment, decrement } = store; // 함수는 그냥 꺼내기
</script>

<template>
  <div>
    <!-- <h3>count : {{ store.count }}</h3>
    <h3>doubleCount : {{ store.doubleCount }}</h3> -->

    <h3>count : {{ count }}</h3>
    <h3>doubleCount : {{ doubleCount }}</h3>

    <button @click="increment">증가</button> &nbsp;
    <button @click="decrement">감소</button>

    <!-- <button @click="store.increment">증가</button> &nbsp;
    <button @click="store.decrement">감소</button> -->
  </div>
</template>
