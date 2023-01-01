import type { App } from 'vue'
import jContainer from '@/components/jContainer'
// 注册组件
const components = [jContainer]
export default {
  install(app: App) {
    components.map((item) => {
      app.use(item)
    })
  }
}
