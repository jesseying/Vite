import type { App } from 'vue'
import jContainer from './src/index.vue'
export default {
  install(app: App) {
    app.component('JContainer', jContainer)
  }
}
