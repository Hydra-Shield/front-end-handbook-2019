# 学习Web浏览器

> Web浏览器（通常称为浏览器）是一种应用程序，用于检索，并展示万维网上的信息资源。这些信息资源可以是网页，图像，视频或其他内容，由统一资源标识符（URI / URL）标识。信息资源中的超链接可使用户方便地浏览相关信息。网页浏览器虽然主要用于使用万维网，但也可用于获取专用网络中网页服务器之信息或文件系统内之文件。
                                        <p align="right"> ----— [Wikipedia](https://zh.wikipedia.org/wiki/%E7%BD%91%E9%A1%B5%E6%B5%8F%E8%A7%88%E5%99%A8)  </p>

                                        
### 最常用的浏览器（在桌面和移动设备上）是：

1.[Chrome](https://www.google.com/chrome/)（引擎：[Blink](https://en.wikipedia.org/wiki/Blink_(browser_engine)) + [V8](https://en.wikipedia.org/wiki/V8_%28JavaScript_engine%29)）

2.[Firefox](https://www.mozilla.org/en-US/firefox/new/)（引擎：[Gecko](https://en.wikipedia.org/wiki/Gecko_%28software%29) + [SpiderMonkey](https://en.wikipedia.org/wiki/SpiderMonkey)）

3.[Internet Explorer](http://windows.microsoft.com/en-us/internet-explorer/download-ie)（引擎：[Trident](https://en.wikipedia.org/wiki/Trident_(software)) + [Chakra](https://en.wikipedia.org/wiki/Chakra_%28JScript_engine%29)）

4.[Safari](https://www.apple.com/safari/)（引擎：[Webkit](https://en.wikipedia.org/wiki/WebKit) + [SquirrelFish](https://trac.webkit.org/wiki/SquirrelFish)）


![https://frontendmasters.com/books/front-end-handbook/2019/assets/images/statcounter.png](https://frontendmasters.com/books/front-end-handbook/2019/assets/images/statcounter.png)

<p align="right">——图片来源：  http://gs.statcounter.com/browser-market-share </p>

### 浏览器和网络技术（API）的发展

* [evolutionoftheweb.com](http://www.evolutionoftheweb.com/) [文章]

* [网络浏览器的时间表](https://en.wikipedia.org/wiki/Timeline_of_web_browsers) [文章]

### 最常用的[无头浏览器](http://www.asad.pw/HeadlessBrowsers/)是：**  

* [无头Chromium](https://chromium.googlesource.com/chromium/src/+/lkgr/headless/README.md) (引擎: [Blink](https://www.chromium.org/blink) \+ V8)

* [SlimerJS](http://slimerjs.org/) (引擎: [Gecko](https://en.wikipedia.org/wiki/Gecko_%28software%29) \+ [SpiderMonkey](https://en.wikipedia.org/wiki/SpiderMonkey_%28software%29))

### 浏览器如何工作

* [我学到的关于浏览器和网络的20件事](http://www.20thingsilearned.com/en-US/foreword/1) [文章]

* [CSS速成：浏览器如何布局网页](http://dbaron.org/talks/2012-03-11-sxsw/master.xhtml)[文章]

* [浏览器如何工作：现代网络浏览器的幕后](http://www.html5rocks.com/en/tutorials/internals/howbrowserswork/) [文章]

* [Quantum Up Close：什么是浏览器引擎？](https://hacks.mozilla.org/2017/05/quantum-up-close-what-is-a-browser-engine/)

* [浏览器渲染网站的真相是什么](https://www.youtube.com/watch?v=SmE4OwHztCc) [视频]

* [是什么导致布局重排](https://gist.github.com/paulirish/5d52fb081b3570c81e3a) [文章]

* [每个前端开发者应该知道的关于网页渲染的内容](http://frontendbabel.info/articles/webpage-rendering-101/) \[文章]

### 浏览器优化：

* [浏览器渲染优化](https://www.udacity.com/course/browser-rendering-optimization--ud860) [视频]

* [网站性能优化](https://www.udacity.com/course/website-performance-optimization--ud884) [视频]

### 浏览器比较**

* [Web浏览器的比较](https://en.wikipedia.org/wiki/Comparison_of_web_browsers) [文章]

**浏览器Hack**

* [browserhacks.com](http://browserhacks.com/) [文章]

### 浏览器开发

过去，前端开发人员花费大量时间使代码运行在几种不同的浏览器中。这在过去比今天严重的多。如今，抽象工具（例如React，Webpack，Post-CSS，Babel等...）与现代浏览器相结合，使浏览器的开发变得相当容易。新的挑战不是用户将使用哪个浏览器，而是他们将在哪个设备上运行浏览器。


### 安全浏览器

大多数现代浏览器的最新版本被认为是安全浏览器。 也就是说，理论上，它们应该在不提示用户的情况下自动更新。 这种向自我更新浏览器的转变一直是对不自动更新的旧浏览器缓慢替代的过程。

### 浏览器的选择

截至今天，大多数前端开发者使用Chrome和“Chrome Dev Tools”来开发前端代码。 但是，最常用的现代浏览器都提供了一种开发者工具。 选择哪一个作为开发工具是主观的。 更重要的问题是知道有哪些浏览器，你必须支持哪些设备，然后进行适当的测试。
