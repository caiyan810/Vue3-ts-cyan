import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { createPinia } from 'pinia'
const pinia = createPinia();
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

pinia.use(piniaPluginPersistedstate)

import router from './router'
createApp(App)
.use(pinia)
.use(router)
.mount('#app')
