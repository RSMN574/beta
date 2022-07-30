import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { NhostClient } from '@nhost/vue'
const nhost = new NhostClient({
    subdomain: "cbskufonufjoeyzvavsy",
    region: "ap-southeast-1"
  })
createApp(App).use(store).use(router).use(ElementPlus).use(nhost).mount('#app')
