import AnimatedNumber from "./components/AnimatedNumber.vue"

export default {
  install: (app, options) => {
    app.component("AnimatedNumber", AnimatedNumber)
  }
}

