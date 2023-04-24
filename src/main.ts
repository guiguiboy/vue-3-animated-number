import { createApp } from 'vue'
import App from './App.vue'
import AnimatedNumber from "./components/AnimatedNumber.vue"

const app = createApp(App)
app.component('AnimatedNumber', AnimatedNumber)
app.mount('#app')
