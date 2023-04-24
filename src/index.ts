import AnimatedNumber from './components/AnimatedNumber.vue'
import type { App } from 'vue'


export default {
  install: (app: App, options: any) => {
    app.component("AnimatedNumber", AnimatedNumber)
  }
}

export { AnimatedNumber }