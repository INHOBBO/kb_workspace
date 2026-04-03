import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.css';

const app = createApp(App); // App.vue

app.use(router); // index.js

app.mount('#app');
