import { createApp } from 'vue';
// import App from './App.vue';
// import App from './App2.vue';
import App from './App4.vue';
// import CheckboxItem from './components/CheckboxItem.vue'; 전역 변수 선언
createApp(App).mount('#app');
// createApp(App).components('CheckboxItem', CheckboxItem).mount('#app'); 이거까지 있어야 전역변수
