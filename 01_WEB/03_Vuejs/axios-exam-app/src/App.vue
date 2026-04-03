<template>
  <h1>사용자 관리</h1>

  <!-- 입력 -->
  <input v-model="name" placeholder="이름을 입력." />
  <button @click="addUser">추가</button>
  <button @click="listUsers">목록</button>

  <!-- 목록 -->
  <ul>
    <li v-for="user in users" :key="user.id">
      {{ user.id }} / {{ user.name }}
      <button @click="deleteUsers(user.id)">삭제</button>
    </li>
  </ul>
</template>

<script setup>
import axios from 'axios';
import { ref, reactive } from 'vue';

const name = ref('');
const users = reactive([]);

// 추가
const addUser = async () => {
  if (!name.value) return;

  const res = await axios.post('/api/users', { name: name.value });
  users.push(res.data);
  name.value = '';
};

// 목록
const listUsers = async () => {
  const res = await axios.get('/api/users');
  users.splice(0, users.length, ...res.data);
};

// 삭제
const deleteUsers = async (id) => {
  await axios.delete(`/api/users/${id}`);

  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) users.splice(index, 1);
};
</script>

<style>
button {
  margin-left: 10px;
}

</style>
