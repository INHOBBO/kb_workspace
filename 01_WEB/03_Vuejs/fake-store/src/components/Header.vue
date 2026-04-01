<template>
  <header>
    <div
      class="p-5 text-center bg-dark text-white"
      style="
        background-image: url('/src/assets/background.jpg');
        background-size: cover;
      "
    >
      <h1 class="display-4 fw-bold">{{ config.title }}</h1>
      <p class="lead">{{ config.subtitle }}</p>
    </div>
    <NavBar />
  </header>
</template>

<script setup>
import config from '../../config/index.js';
import NavBar from './NavBar.vue';
</script>
