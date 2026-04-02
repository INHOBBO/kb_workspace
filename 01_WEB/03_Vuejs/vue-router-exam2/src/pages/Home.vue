<!-- <template>
  <div>
    <h1>게시물 목록</h1>

    <ul>
      <li><router-link to="Post/1">1번 글</router-link></li>
      <li><router-link to="Post/2">2번 글</router-link></li>
      <li><router-link to="Post/3">3번 글</router-link></li>
    </ul>
  </div>
</template> -->

<template>
  <div>
    <h1>게시물 목록</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <router-link :to="`Post/${post.id}`">{{ post.id }}번 글</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const posts = ref([{ id: 1 }, { id: 2 }, { id: 3 }]);
</script>
