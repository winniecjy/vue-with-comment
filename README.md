# vue 源码注释

> 版本：v2.6.11
## 目录
[vue源码学习（一）之整体结构]()    

注释代码位于仓库：https://github.com/winniecjy/vue-with-comment.git    
vue用的很多了，但是源码却没怎么看过。趁着2020年魔鬼开局只能在家自闭，刚好可以认真研读一番，先整理一下学习主干，从了解目录结构开始。           
## vue整体结构
上图整理了整个vue工程的目录结构，重点关注的是核心代码，位于`src/core`中。       
![vue源码目录](https://image-1254389045.cos.ap-guangzhou.myqcloud.com/Vue.js%E6%BA%90%E7%A0%81%E7%9B%AE%E5%BD%95.svg)       
## 从最外层入口文件开始
在核心代码的入口文件`index.js`，对Vue进行了最后的拼装，挂载了全局的API和一些只读属性，并暴露出去。      
```javascript
/**
 * src/core/index.js
 * 
 */

import Vue from './instance/index'
import { initGlobalAPI } from './global-api/index'
import { isServerRendering } from 'core/util/env'
import { FunctionalRenderContext } from 'core/vdom/create-functional-component'

// Vue挂载全局API
initGlobalAPI(Vue)

// Vue挂载全局只读属性
Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
})

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
})

// 暴露ssr环境下需要的方法FunctionalRenderContext
// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
})

Vue.version = '__VERSION__'

export default Vue

```
接下来从主干入手，了解Vue实例化构造函数和原型方法。       

## 参考
[[1] vue.js - v2.6.11](https://github.com/vuejs/vue/tree/v2.6.11)   
[[2] Vue贡献规则文档](https://github.com/vuejs/vue/blob/v2.6.11/.github/CONTRIBUTING.md)   