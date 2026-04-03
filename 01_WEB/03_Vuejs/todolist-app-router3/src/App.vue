<template>
  <div class="container">
    <Header />
    <router-view />
  </div>
</template>

<script setup>
import { reactive, computed, provide } from 'vue';
import Header from '@/components/Header.vue';

const states = reactive({
  todoList: [
    { id: 1, todo: 'ES6 학습', desc: '설명 1', done: false },
    { id: 2, todo: 'React 학습', desc: '설명 2', done: false },
    { id: 3, todo: 'ContextAPI 학습', desc: '설명 3', done: true },
    { id: 4, todo: '야구경기 관람', desc: '설명 4', done: false },
  ],
});

const addTodo = ({ todo, desc }) => {
  // 객체 구조 분해 할당
  states.todoList.push({ id: new Date().getTime(), todo, desc, done: false });
};

const updateTodo = ({ id, todo, desc, done }) => {
  // 구조 분해 할당하는 이유
  let index = states.todoList.findIndex((todo) => todo.id === id);
  states.todoList[index] = { ...states.todoList[index], todo, desc, done }; // 스프레드 연산자!
};

const deleteTodo = (id) => {
  let index = states.todoList.findIndex((todo) => todo.id === id);
  states.todoList.splice(index, 1);
};

const toggleDone = (id) => {
  let index = states.todoList.findIndex((todo) => todo.id === id);
  states.todoList[index].done = !states.todoList.done;
};
provide(
  'todoList',
  computed(() => states.todoList),
);

provide('actions', { addTodo, deleteTodo, toggleDone, updateTodo });
</script>
