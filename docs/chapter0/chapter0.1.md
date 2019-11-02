# 回顾 2018 年的前端发展

- 在过去一年，React 中有不少令人瞩目的发布，其中包括 [lifecycle 函数](https://reactjs.org/blog/2018/03/29/react-v-16-3.html#component-lifecycle-changes)、[context API](https://reactjs.org/blog/2018/03/29/react-v-16-3.html#official-context-api)，[suspense](https://reactjs.org/docs/react-api.html#reactsuspense)、[React hooks](https://reactjs.org/docs/hooks-intro.html)

  > 译者：hooks 大概是 react 去年最大的惊喜了。

- [微软收购了 Github](https://news.microsoft.com/2018/06/04/microsoft-to-acquire-github-for-7-5-billion/)，是的，这个是真的。

- [通过 CSS 创建字体成为现实](https://yusugomori.com/projects/css-sans/)

- 过去被称作前端驱动的 APP，现在被称作“[serverless](https://thepowerofserverless.info/)”。不幸的是，这言过于实了,虽然 JAMstack 一词似乎确实引起了开发人员的共鸣。

> 译者：serverless 在 18 年大火，nest，AWS lambda,以及这个文档发布的 now 都是其应用

- Google 提供了一些好用的工具帮助网页加载得更快，比如[squoosh](https://github.com/GoogleChromeLabs/squoosh/)和[quicklink](https://github.com/GoogleChromeLabs/quicklink)

- 过去的一年里，[Vue](https://risingstars.js.org/2018/en/#section-framework)比 React 获得了[更多](https://hasvuepassedreactyet.surge.sh/)的 Github stars。但 React 的[使用](https://2018.stateofjs.com/front-end-frameworks/overview/)人数仍占优势。

> 译者：vue 威武

- [RE:DOM](https://github.com/redom/redom)引入了类似于 React 的解决方案，没有虚拟 DOM 或 JSX。

- [DeskGap](https://deskgap.com/)和[Neutralino.js](https://neutralino.js.org/)作为 NW.js 和 Electron 的替代品出现。

- 在 2017 年， [前端 HTML&CSS 开发者](https://medium.com/@mandy.michael/is-there-any-value-in-people-who-cannot-write-javascript-d0a66b16de06)与[前端应用开发者](https://medium.com/@mandy.michael/is-there-any-value-in-people-who-cannot-write-javascript-d0a66b16de06)之间产生了巨大的[隔阂](https://medium.com/@jerrylowm/the-death-of-front-end-developers-803a95e0f411)。在 2018 年，隔阂[越来越深](https://css-tricks.com/the-great-divide/)，且越来越多[人](https://rachelandrew.co.uk/archives/2019/01/30/html-css-and-our-vanishing-industry-entry-points/)开始[感受](https://hackernoon.com/the-backendification-of-frontend-development-62f218a773d4)到[这种](http://bradfrost.com/blog/post/big-ol-ball-o-javascript/)[隔阂](https://justmarkup.com/notes/2018-11-27-just-markup/)。

- 与最近几年一样,这一年，有成堆的应用/框架的解决方案尝试成为主流的 JavaScript App 工具（例如[React、Angular、Vue](https://stateofjs.com/2017/front-end/results)等等）让我为你列举一下，[Radi.js](https://radi.js.org/), [DisplayJS](https://display.js.org/), [Stimulus](https://stimulusjs.org/), [Omi](https://github.com/Tencent/omi), [Quasar](https://quasar-framework.org/).

> 译者：从现在来看，还没有任何一个能威胁到三大主流的位置，表现最好的 quasar 也不过 9k+ star，腾讯出品 Omi 8K+ star。

* JavaScript框架开始提供自己的编程语言，将其编译成JavaScript（例如[Mint](https://www.mint-lang.com/)）

* [CodeSandbox](https://codesandbox.io/)已经发展成为在线代码共享的主要解决方案

* [CSS Grid](https://cssgridgarden.com/)和[CSS Flexbox](https://flexboxfroggy.com/)在现代浏览器中得到完全支持，并且得到了一些重大的进展。但许多人仍然不知道[何时去使用哪一个以及如何使用](https://css-irl.info/to-grid-or-to-flex/)。

* 许多人已经意识到使用类型体系的产生的长期代价（比如Typescript和Flow）。有人总结说，被束缚在类型体系中与被束缚在模块体系（如AMD、Require.js）相比并没有什么不一样，并且[带来的问题远比解决的问题多](https://medium.com/javascript-scene/the-typescript-tax-132ff4cb175b)。
至少，许多开发人员意识到，如果在大型代码库中需要用到类型，那么与本身包含类型系统的语言（例如[Reason](https://reasonml.github.io/)，[Purescript](http://www.purescript.org/)，[Elm](https://elm-lang.org/)）相比，束缚在类型体系中并不理想。

* [CSS变量](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables)已被现代Web浏览器[支持](https://caniuse.com/#feat=css-variables)

* [CSS in JS](http://michelebertoli.github.io/css-in-js/)方式开始流行，不过有些人却对此产生[质疑](http://bradfrost.com/blog/link/whats-wrong-with-css-in-js/)。

* [ES模块](https://caniuse.com/#search=modules)现在可用于现代浏览器，[模块动态导入](https://developers.google.com/web/updates/2017/11/dynamic-import#dynamic)紧随其后也会支持。我们甚至可以看到[相关工具](https://www.pikapkg.com/blog/introducing-pika-pack/)的转变。

* 许多人意识到基于Cypress进行端到端测试在很大程度是正确的开始（即先使用[Cypress](cypress)，然后是[Jest](https://jestjs.io/)）

* 虽然今年[Webpack](https://webpack.js.org/)使用量仍然很大，但许多开发人员发现[Parcel](https://github.com/parcel-bundler/parcel)更容易使用和运行。

* 这一年提出的最重要的一个问题是，[JavaScript的成本所在](https://medium.com/@addyosmani/the-cost-of-javascript-in-2018-7d8950fbb5d4)

* [Babel 7](https://babeljs.io/blog/2018/08/27/7.0.0) 于今年发布。这是一个大事件，上一次主要版本发布差不多三年前。

* 人们已经意识到JavaScript变化太快的这个残酷事实，于是大家开始[谈论](https://www.robinwieruch.de/javascript-fundamentals-react-requirements/)在你学习诸如React的东西前需要知道什么。竞争是真实存在的。

* 大部分开发者通过[Apollo](https://www.apollographql.com/)发现了GraphQL，把它[看作](https://blog.bitsrc.io/why-does-everyone-love-graphql-17de7f99f05a)是data API's的下一场革命。

* Gulp及其相关明显地落后于[NPM/Yarn](https://css-tricks.com/why-npm-scripts/)，但这并未能阻止微软用[Just](https://github.com/Microsoft/just)参与这场角逐。

* 这一年，不但可以能对HTML、CSS和JavaScript使用lint/hint ，还可以对[web自身lint/hint](https://webhint.io/)。

* [《2018年前端工具调查报告》](https://ashleynolan.co.uk/blog/frontend-tooling-survey-2018-results)很值得一读，如果你仅仅想了解有多少jQuery仍然在被使用。

* [无可否认](https://2018.stateofjs.com/javascript-flavors/typescript/)，[TypeScript](https://www.typescriptlang.org/)今年收获了大量使用者。

* [VScode](https://code.visualstudio.com/)成为了代码编辑器的首选。