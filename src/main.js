import App from './App.vue'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import router from './router'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import 'element-plus/dist/index.css'
import './assets/base.css'
import './assets/common.css'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
app.use(createPinia()).use(router).use(ElementPlus,{
  locale:zhCn
}).use(mavonEditor)

app.mount('#app')
