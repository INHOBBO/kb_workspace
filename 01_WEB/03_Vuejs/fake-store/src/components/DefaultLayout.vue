<template>
  <div class="container-fluid p-0">
    <Header />

    <main class="container mt-4 min-vh-100">
      <router-view></router-view>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import Header from './Header.vue';
import Footer from './Footer.vue';
</script>
