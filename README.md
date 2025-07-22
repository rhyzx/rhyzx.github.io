# 忻斌

90 年，男；
主修前端，辅修 Web 开发相关的各种技能，认同 [Ruby on Rails 的开发理念](https://guides.rubyonrails.org/getting_started.html#what-is-rails-questionmark:~:text=Don%27t%20Repeat%20Yourself,endless%20configuration%20files.)；
热爱开源，为多个开源项目贡献过[代码](https://github.com/pulls?q=is%3Apr+author%3Arhyzx+archived%3Afalse+is%3Apublic+is%3Aclosed)（比如 [Bun](https://github.com/oven-sh/bun/pulls?q=author%3Arhyzx)、[Babel](https://github.com/babel/babel/pulls?q=author%3Arhyzx)、[Vue](https://github.com/vuejs/vue/pulls?q=author%3Arhyzx)、[jQuery](https://github.com/jquery/jquery/pulls?q=author%3Arhyzx)）；
乐于学习新技术与钻研工程最佳实践，略有代码洁癖。

- 邮箱：[rhyzix@gmail.com](mailto://rhyzix@gmail.com)
- 电话：17326069639
- 学历：专科（2008–2011 浙江金融职业学院 国际金融）
- GitHub：[https://github.com/rhyzx](https://github.com/rhyzx)

## 专业技能

- 精通 JavaScript
- 熟悉 HTTP 协议，擅长 Web 应用优化
- 熟悉 Docker，擅长使用容器化与 CI 等技术进行自动化部署
- 对后端开发与 SQL 优化有一定的了解，可以使用 Ruby on Rails、Node.js、PHP 等技术进行 RESTful 服务开发
- 了解微信小程序与小游戏开发
- 了解 WebGL 与实时渲染技术
- 了解区块链技术，参与过 DeFi 合约开发
- 了解 Rust

## 项目经历

### 2023.4–2025.7 [Waffo 收银台](https://cashier.waffo.com)

类 Stripe 网页收银台，对接 100+ 支付渠道，面向全球用户，目前大约 5 万单每日。
重表单应用，对页面加载速度有较高要求，本人主导该项目的业务功能开发与技术迭代，逐步将该项目从 CSR（React）转向 SSR、从中心化转向边缘节点化，最终实现所有地区 1.5 秒内的 LCP 指标。

- 将服务从 AWS 新加坡集群切换到 AWS Fargate（巴西与新加坡），后又切换到 Google Cloud Run（11 个地区）
- 借鉴 [Phoenix LiveView](https://github.com/phoenixframework/phoenix_live_view) 思想在 Node.js 上实现基于 WebSocket 的动态页面 SSR，将 95% 的业务代码迁移到 Node.js 端，页面主脚本从 1MB 减少到 20KB
- 基于 HTTP2 长链接与后端通信，减少接口调用 RTT；使用 Valibot 验证接口数据，并在开发环境预警异常数据
- 基于 MessageFormat 2.0 进行国际化，并开发相关工具用于 ID 生成与文案提取
- 基于 Pulumi 对 GCP 设施代码化管理
- 基于 React-pdf 进行 PDF 渲染，剥离 React，将渲染线程与主线程使用 Worker 分离
- 基于 Datadog 进行前端与 Node.js 端监控，扩展 dd-trace 能力使其支持该项目技术栈

### 2024.12–2025.7 [WaffoPlay](https://waffoplay.com)

在线点卡商城，复用了大部分收银台的技术栈并持续完善 LiveView。

- 实现 [Live Navigation](https://hexdocs.pm/phoenix_live_view/live-navigation.html)，利用 WebSocket 进行页面跳转
- 基于 React Email 实现支持国际化的邮件渲染，剥离了其自带的基于 Next.js 的预览功能并使用 LiveView 替代

### 2018–2022 [YIZ](https://yiz.design)

新媒体创业公司，作为技术合伙人负责维护公司的各类设施，比如基于 Kubernetes 进行应用部署、证书自动申请（Let's Encrypt）、[CDN 证书自动同步](https://github.com/YIIZ/sync-qcloud-cdn-cert)。

参与各类营销类 H5 页面、HTML5 游戏、微信小程序、微信小游戏的前后端开发，主要技术栈为 Pixi.js、Three.js、Ruby on Rails、Elixir/Phoenix 和 Node.js；
一些可访问的 demo：[LOL 十周年庆H5](https://demo.yiz.design/lol-10th/)、 [LOL 寻找本命导师](https://demo.yiz.design/lol-sentinels/)、[LOL 暗星皮肤](https://demo.yiz.design/loldark/)、[OPPO 答题测试](https://demo.yiz.design/oppo-coloros/index.html)、[太空梦](https://demo.yiz.design/space-dream/)、[王者听力测试](https://demo.yiz.design/kof-hearing-test/index.html)、[虚幻争霸](http://demo.yiz.design/qq-paragon)。

### 2016–2017 [Treation](https://web.archive.org/web/20210118154809/https://treation.com/)

<!-- [![treation](./treation_demo-00.00.00.000.jpeg)](./treation_demo.mp4) -->

类 Airtable 的表格数据管理工具。
主导该项目的前端工作，基于 Vue、Bootstrap4、Actioncable，主要负责表格的编辑功能与性能优化；
参与部分后端任务，基于 Ruby on Rails。

### 2015–2016 [有道云笔记](https://note.youdao.com/)·网易

参与云笔记 2.0 改版任务，推进部分技术迭代 (比如 SVG icons、[Angular 组件化](https://www.dropbox.com/s/0y3jsd3qmjw6pje/some-angular-best-practices.pdf?dl=0))，
独立负责部分功能 (比如 PDF 预览、任务管理、日历等)，并使用 Node.js 完成其中一些功能的接口；
负责一些效率工具的开发 (比如基于 [mincer](https://github.com/nodeca/mincer) 的一个静态资源构建系统，用于快速开发静态网页)。

### 2015–2015 云 OS·阿里云

基于 JavaScript 的手机系统，负责部分 SDK API 设计工作。

### 2014–2015 [酷盘](https://web.archive.org/web/20150315002405/https://kanbox.com/)·阿里云

基于 Ruby on Rails 开发的网盘，负责前端开发和部分后端工作 (主要是 VC 层) 。
前端技术上主要继承了 Ruby on Rails 默认的体系，如 CoffeeScript、Sass、jQuery + UJS、Turbolinks、Sprockets (前端工具链)，
还使用了 Backbone 和 Bootstrap，并使用 rails-assets 进行 Bower 的组件管理。

### 2014–2014 uDATA·淘宝 UED

基于 Chrome 的一个数据可视化插件 (基于 D3)，中途加入参与部分新特性的开发。
之后负责新版重构，使用 Node.js 搭建后端服务，使之脱离原先的由另一 Java 团队开发的接口，直连淘宝的数据服务。
技术上主要基于淘宝的 Midway，model 层使用了 Bookshelf。

### 2013–2014 ATA 社区·淘宝 UED

阿里内部技术社区，基于 PHP 开发。参与老版的维护工作，之后负责新版的前端架构搭建和部分后端技术选型，
使用了 CoffeeScript、Less、Brunch、Bootstrap、Bower、Sundown、Twig 等大量开源项目。
另外负责大部分前端页面开发与后端 VC 层的开发任务。

### 2011–2013

- 九言科技
- 核新同花顺
