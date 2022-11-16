import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
//import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css'
const app = createApp(App).use(store).use(router)

import components from '@/components/UI'
components.forEach(component =>{
    app.component(component.name, component)
})

app.mount('#app')
