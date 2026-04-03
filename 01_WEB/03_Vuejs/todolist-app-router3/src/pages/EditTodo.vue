<template>
  <div class="row">
    <div class="col p-3">
      <h2>할일 수정</h2>
    </div>
  </div>

  <div class="row">
    <div class="col">
      <div class="form-group">
        <label htmlFor="todo">할일 : </label>
        <input
          type="text"
          class="form-control"
          id="todo"
          v-model="todoItem.todo"
        />
      </div>

      <div class="form-group">
        <label htmlFor="desc">설명 : </label>
        <textarea
          class="form-control"
          rows="3"
          id="desc"
          v-model="todoItem.desc"
        ></textarea>
      </div>

      <div class="form-group">
        <label htmlFor="done">완료여부 : </label>&nbsp;
        <input type="checkbox" v-model="todoItem.done" />
      </div>

      <div class="form-group">
        <button
          type="button"
          class="btn btn-primary m-1"
          @click="updateTodoHandler"
        >
          수정
        </button>
        <button
          type="button"
          class="btn btn-primary m-1"
          @click="router.push('/todos')"
        >
          취소
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject, reactive } from 'vue';
import { useRouter, useRoute } from 'vue-router';

// 1. 필요한 데이터와 함수, 리모컨 챙기기
const todoList = inject('todoList');
const { updateTodo } = inject('actions');
const router = useRouter();
const currentRoute = useRoute();

// 2. 주소창에서 id를 뽑아내서 수정할 타겟 데이터 찾기
const matchedTodoItem = todoList.value.find(
  (item) => item.id === currentRoute.params.id,
);

// 3. 만약 이상한 id로 들어왔다면 목록으로 튕겨내기
if (!matchedTodoItem) {
  router.push('/todos');
}

// 4. 찾은 데이터를 화면과 연결되는 반응형 상자에 예쁘게 담기
const todoItem = reactive({ ...matchedTodoItem });

// 5. 수정 버튼을 눌렀을 때 실행될 로직
const updateTodoHandler = () => {
  let { todo } = todoItem;

  // 유효성 검사
  if (!todo || todo.trim() === '') {
    alert('할일은 반드시 입력해야 합니다');
    return;
  }

  // 덮어쓰기 요청 후 목록으로 이동
  updateTodo({ ...todoItem });
  router.push('/todos');
};
</script>
