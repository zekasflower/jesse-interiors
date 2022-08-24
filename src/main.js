import { createApp } from 'vue'
import App from './App.vue'
import { Icon } from '@iconify/vue';

import './style.css'

const app = createApp(App);

app.component('Icon', Icon);

app.mount('#app')
