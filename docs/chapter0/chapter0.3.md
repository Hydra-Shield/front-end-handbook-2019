# 相关框架与技术名词汇总

#### React lifecycle 函数

React v16.3 引入了两个新的生命周期函数，对 React 组件生命周期函数产生了巨大变化。

两个新的生命周期函数：  
getDerivedStateFromProps  
getSnapshotBeforeUpdate

并且干掉了一部分原有的生命周期 API,包括：  
componentWillReceiveProps  
componentWillMount  
componentWillUpdate

> 详情可参看：  
> [React v16.3.0: New lifecycles and context API](https://reactjs.org/blog/2018/03/29/react-v-16-3.html#component-lifecycle-changes)  
> [React v16.3 之后的组件生命周期函数](https://zhuanlan.zhihu.com/p/38030418)

#### context API

同样是 React v16.3,React 还增加了全新的 Context API.

新版 Context API 主要由以下部分组成：

- React.createContext 方法用于创建一个 Context 对象。该对象包含 Provider 和 Consumer 两个属性，分别为两个 React 组件。
- Provider 组件。用在组件树中更外层的位置。它接受一个名为 value 的 prop，其值可以是任何 JavaScript 中的数据类型。
- Consumer 组件。可以在 Provider 组件内部的任何一层使用。它接收一个名为 children 值为一个函数的 prop。这个函数的参数是 Provider 组件接收的那个 value prop 的值，返回值是一个 React 元素（一段 JSX 代码）。

> 相关文档  
> [React 官方文档](https://reactjs.org/docs/context.html)  
> [React ⚛️ 新的 Context API](https://juejin.im/post/5a75960b5188257a88503498)

#### suspense

React v16.6 带来的新功能，旨在解决异步渲染和网络 IO 的问题，核心是以同步的方式去书写代码，就像我们写 async/await，标志着 React 从原来的只做 view 层，迈向了大而全的解决方案。
使用 suspense 可以做到

- 在数据还未准备好时，暂停状态的更新
- 对任何组件都可以轻松添加异步的数据，不会产生阻塞
- 网速快的时候，在整个 tree ready 的时候直接 render
- 网速不好的时候，可以精确控制 loading 的状态
- 会给我们提供 high-level 和 low-level 的 API，可以有 Placeholder, Loading 这样直接在业务场景中的组件，也会有给库使用的底层 API

> [官方文档](https://reactjs.org/docs/react-api.html#reactsuspense)  
> [全面了解 React 新功能: Suspense 和 Hooks](https://segmentfault.com/a/1190000017483690)

#### React hooks

React 16.7.0-alpha 版本推出的新特性，目的是为了解决状态共享，是继 render-props 和 higher-order components 之后的第三种状态共享方案。

> [官方文档](https://reactjs.org/docs/hooks-intro.html)
> [精读《React Hooks》](https://juejin.im/post/5be8d3def265da611a476231)

#### css-sans

帮助我们用 css 创建字体的工具,然而只有英文，中文大概是不太可能了

> 网址：http://yusugomori.com/projects/css-sans/
> github:https://github.com/yusugomori/csssans

#### serverless

Serverless 是一种 “无服务器架构”，让用户无需关心程序运行环境、资源及数量，只要将精力 Focus 到业务逻辑上的技术。

> [精读《Serverless 给前端带来了什么》](https://github.com/dt-fe/weekly/blob/master/94.%E7%B2%BE%E8%AF%BB%E3%80%8AServerless%20%E7%BB%99%E5%89%8D%E7%AB%AF%E5%B8%A6%E6%9D%A5%E4%BA%86%E4%BB%80%E4%B9%88%E3%80%8B.md)  
> [从 IaaS 到 FaaS—— Serverless 架构的前世今生](https://amazonaws-china.com/cn/blogs/china/iaas-faas-serverless/)

#### JAMstack

JAM 表示 JavaScript, API 和 Markup。JAMstack 是一个现代的 Web 开发架构，基于在客户端使用的 JavaScript、可重用的 API、预构建的 Markup。
一个无服务器的架构，比如常用的静态网站生成，Gatsby.js，hugo，vuepress 等。

> [官网](https://jamstack.org/)

- squoosh
  Google 开源发布的一款专门用来压缩图片的在线服务，支持 JPG、PNG、WebP 等格式的极限压缩。

> https://squoosh.app/

- quicklink

Google Labs 出品的新技术。在页面空闲时，quicklink 会预加载视窗内的链接，来加速潜在页面的打开速度。

> https://github.com/GoogleChromeLabs/quicklink

- RE:DOM
- DeskGap
- Neutralino.js
- Radi.js
- DisplayJS
- Stimulus
- Omi
- Quasar
- Mint
- CodeSandbox
- CSS Grid
- CSS Flexbox
- Typescript
- Flow
- ReasonML
  (https://reasonml.github.io/)，
- Purescript
  (http://www.purescript.org/)，
- Elm
  (https://elm-lang.org/)）
- CSS 变量
- CSS in JS
- ES 模块
- pika-pack
- Parcel
- Babel 7
- Apollo
- Just
- webhint
- VScode
- cssdb
- webp
- Prepack
- GraphQL
- swc-project
- Web Components
