<template>
  <ul class="navbar-nav">
    <MenuItem v-for="menu in menus" :key="menu.title" :menu="menu" />
  </ul>
</template>

<script setup>
import MenuItem from './MenuItem.vue';

defineProps({
  menus: {
    type: Array,
    required: true,
  },
});
</script>
