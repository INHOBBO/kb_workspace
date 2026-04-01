<template>
  <nav class="navbar navbar-expand-md bg-primary navbar-dark">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
        <i class="fa-solid fa-house"></i> {{ config.title }}
      </router-link>

      <button class="navbar-toggler" type="button" @click="toggleNav">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div :class="navClass">
        <MenuGroup :menus="config.menus" />
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed } from 'vue';
import config from '../../config/index.js';
import MenuGroup from './menu/MenuGroup.vue';

const isNavShow = ref(false);
const toggleNav = () => {
  isNavShow.value = !isNavShow.value; // 아까 해결하셨던 바로 그 논리!
};

// 메뉴 열림/닫힘 상태에 따라 부트스트랩 클래스명을 동적으로 바꿔줍니다.
const navClass = computed(() =>
  isNavShow.value
    ? 'collapse navbar-collapse show'
    : 'collapse navbar-collapse',
);
</script>
