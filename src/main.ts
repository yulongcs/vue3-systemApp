import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'
// 初始化css
import 'normalize.css/normalize.css'
// 全局 css
import '@/styles/index.scss'

const app = createApp(App)

app
  .use(store)
  .use(router)
  // .use(installElementPlus)
  .mount('#app')
