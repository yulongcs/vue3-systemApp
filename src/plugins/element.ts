import { App } from 'vue'
import {
  ElButton,
  locale
} from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import lang from 'element-plus/lib/locale/lang/zh-cn'
import 'dayjs/locale/zh-cn'

export default (app: App): void => {
  locale(lang)

  // 按需导入组件列表
  const components = [
    ElButton
  ]

  components.forEach(component => {
    app.component(component.name, component)
  })

  // 该对象目前支持 size 与 zIndex 字段。size 用于改变组件的默认尺寸 small，zIndex 设置弹框的初始 z-index（默认值：2000）。
  app.config.globalProperties.$ELEMENT = {
    size: 'medium'
  }
}
