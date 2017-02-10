# 忻斌

90年，男。
主修前端，辅修 web 开发相关的各种技能，认同 RoR 的开发理念。
热爱开源，为多个开源项目提过 PR，如
[Vue](https://github.com/vuejs/vue/pulls?q=is%3Apr+author%3Arhyzx+is%3Aclosed)、
[jQuery](https://github.com/jquery/jquery/pull/1888)、
[async](https://github.com/caolan/async/pull/216)。
喜欢钻技术，略有强迫症。

- Email: rhyzix@gmail.com
- TEL: 15158102797
- Github: https://github.com/rhyzx


## 教育背景

- 2008 - 2011 浙江金融职业学院 国际金融


## 项目经历

### 2016 - 2017 [Treation](https://treation.com)(远程工作) #开发
主导该项目的前端工作，基于 vue、bs4、actioncable，主要精力花在表格的编辑功能开发与性能优化上。
也参与部分后端任务，基于 rails。
<!--
- 表格性能
  - 局部渲染（non-fixed size items）
  - 组件复用 cache-for
  - lazy-reativity
- 单例编辑器
- 滚动组件
- 弹出组件套
- Store 设计迭代（类 vuex？`observableComputed`）
-->


### 2015 - 2016 [有道云笔记](https://note.youdao.com/) @网易 #开发
参与云笔记 2.0 改版任务，推进部分技术迭代 (比如 svg icons、组件化等 [see](https://speakerdeck.com/rhyzx/xie-angular-de-zui-jia-shi-jian))，
独立负责部分功能 (比如 pdf 预览、任务管理、日历等)，并使用 node 完成其中一些功能的接口。
另外负责一些效率工具的开发 (比如基于 [mincer](https://github.com/nodeca/mincer) 的一个静态资源构建系统，
用于快速开发静态网页)。


### 2014 - 2015 [WolfeCareer](http://wolfecareer.com/)(业余项目) #web 开发
一个工作外参与的创业项目，主要负责部分技术选型和前后端开发任务。
该项目后端主要基于 Pyramid (Python)，前端则是 Angular 和 Grunt，
另外还使用了 Docker 进行开发环境部署，可见[sample-pyramid-app-with-docker-and-fig](https://github.com/rhyzx/sample-pyramid-app-with-docker-and-fig)。


### 2015 - 2015 云 OS 4.0 @阿里云 #前端
一个类似 WebOS 的手机系统，应用开发语言为基于 node 的 javascript。
主要负责 SDK 的部分 API 设计工作。


### 2014 - 2015 [酷盘](https://kanbox.com/) @阿里云 #web 开发
类 Dropbox，基于 Rails 开发，负责前端开发和部分后端工作 (主要是 VC 层) 。
前端技术上主要继承了 Rails 默认的体系，如 Coffee、Sass、jQuery + UJS、Turbolinks、Sprockets (前端工具链)，
另外主要还使用了 Backbone 和 Bootstrap，并使用 Rails-assets 进行 Bower 的组件管理。


### 2014 - 2014 [uDATA](http://udata.taobao.net/) @淘宝UED #web 开发
基于 chrome 的一个数据可视化插件 (基于 D3)，中途加入参与部分新特性的开发。
之后负责新版重构，使用 node 搭建后端服务，使之脱离原先的由另一 java 团队开发的接口，直连淘宝的数据服务。
技术上主要基于淘宝的 midway (express 封装)，model 层使用了 bookshelf。


### 2013 - 2014 [ATA](http://atatech.org/) @淘宝UED #web 开发
公司的一个内部技术社区，基于 PHP 开发。参与老版的维护工作，之后负责新版的前端架构搭建和部分后端技术选型，
使用了 coffee、less、brunch、bootstrap、bower、sundown、twig 等大量开源项目。
另外负责大部分前端页面开发与后端 VC 层的开发任务。


### 2012 - 2013 [爱图购主站](http://itugo.com/) @九言科技 #前端开发
中途加入的项目，项目使用 seajs 进行 js 模块化和 less 动态化 css，并使用 git 进行版本控制。
主要任务是参与网站开发，项目中积极优化和组件化代码并提出一些优点意见，如为 less 引入了 bootstrap 的 mixin 库。
之后项目切换到 grunt 进行自动化项目构建和 swig 模板，全面切换到 node 进行开发。


### 2012 - 2012 [爱图购H5版](http://m.itugo.com/) @九言科技 #前端开发
独立完成的项目，用于承接 iPhone 用户。
主要有图片瀑布流和内页异步滑动切换。
使用了原生 js 构建，全面应用了 html5 特性。
根据需要写了一个轻量的 mobile slide 组件。


### 2011 - 2012 @核新同花顺公司 #前端开发/Java后端
这段时间主要参与了多个证券系统的前端开发，独立完成各种前端任务，
解决浏览器兼容性问题并优化页面，另有少部分参与后端的开发。


## 个人项目

### [lt](https://github.com/rhyzx/lt) 2013
一个极简的**试验型** js 模板引擎，性能非常优异。
语法上实现了 [{{Mustache}}](http://mustache.github.com/)，适合前端轻量级的内容渲染。


### [php-yaf-extras](https://github.com/rhyzx/php-yaf-extras) 2013
php [yaf](http://php.net/manual/en/book.yaf.php) 框架的扩展包，主要用于 ATA 项目。

- 扩展了对 RESTful 路由的支持。
- 添加了对不同模板引擎的支持用于引入 twig 模板引擎。
- 扩展了 controller 多个实用的方法比如对 flash message 的支持。


### [node-fluent-stream](https://github.com/rhyzx/node-fluent-stream) 2012

简化 node stream 数据流处理的工具。
初衷是在写代理工具的时候发现处理字节流非常蛋疼。
实现了 node 的 Stream 接口，可以很优雅地和各类流拼接。
另外在这个项目开始尝试引入 travis-ci 来自动化测试。

