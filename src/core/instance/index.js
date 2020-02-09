/**
 * src/core/instance/index.js
 * 
 * commentBy: cai jieying
 */
import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}

/**
 * 将vue的功能拆分到不同的目录中维护
 */
initMixin(Vue)  // 初始化入口，定义_init方法
stateMixin(Vue) // 数据绑定相关：$set, $delete, $watch
eventsMixin(Vue)// 事件方法相关：$on, $once, $off, $emit
lifecycleMixin(Vue) // 生命周期相关：_update, $forceUpdate, $destroy
renderMixin(Vue)// 渲染相关：定义$nextTick, _render将render函数转为vnode

export default Vue
