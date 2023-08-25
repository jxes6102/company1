import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import '@/assets/css/none.css'
import '@/assets/css/tailwind.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/assets/css/all.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import zhTW from 'element-plus/dist/locale/zh-tw.mjs'
// import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

const app = createApp(App)
app.use(ElementPlus, {
    locale: zhTW,
})

app.use(store).use(router).mount('#app')

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.directive('tothistop', {
    mounted(el) {
        const target = {
            top: el.offsetTop - 100,
            left: 0,
            behavior: 'smooth',
        }
        document.querySelector('#main').scrollTo(target)
    }
})

app.directive('tofocus', {
    mounted(el) {
        el.focus()
    }
})

