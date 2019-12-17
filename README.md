[![Build Status](https://travis-ci.org/GourdErwa/review-notes-dev.svg?branch=master)](https://travis-ci.org/GourdErwa/review-notes-dev)
## 快速开始
- 为什么有这个项目？   
用于团队分享学习、复盘笔记资料共享，它是一个开发性质的项目，为 [review-notes ](https://github.com/GourdErwa/review-notes) 项目内容开发阶段使用。
  
- 正式学习的地址是？   
单个笔记专栏完成后，在内容经过贡献者多重交叉审核通过后最终正式发布到 [https://review-notes.top/ ](http://review-notes.top/)  

- 网上学习资料那么多，为什么还写这些？   
因为网上是别人写的，我们阅读后知识吸收率太低，这个项目用于自身学习团队分享，主要使用费曼学习法进行，[关于学习方法 ](/about/关于学习方法.md)。

- 在线阅读地址内容怎么发布的？  
使用 [vuepress](https://vuepress.vuejs.org/) 发布，使用 [Travis CI](https://travis-ci.org/GourdErwa/review-notes-dev) 持续集成 ，交叉审核地址 [http://dev.review-notes.top ](http://dev.review-notes.top/)

## 笔记内容
- 编程语言 
    * [Java 基础知识 ](/language/java-basis/)
    * [Java 并发编程 ](/language/java-concurrency/)
    * [Scala 基础-语言核心特性 ](/language/scala-lang-tour/)
- 技术框架
    * [Flink 入门进阶 ](/framework/flink-basis/)
- 算法
    * [数据结构 ](/algorithm/data-structures/)
    
## 贡献说明
**贡献流程：**
- Fork [review-notes-dev](https://github.com/GourdErwa/review-notes-dev) 后在本地拉取分支进行开发
- 开发文章文件格式： Markdown [语法格式 ](https://guides.github.com/features/mastering-markdown/)
- 专栏笔记目录结构

|目录|说明|
|---|---|
|./$MODULE|专栏名称|
|./$MODULE/_images|开发期间专栏引用图片|
|./$MODULE/_notes|专栏内容笔记内容 (参考书籍、源图片等内容)|
|./$MODULE/README.md|专栏介绍（默认为专栏导言）|
|.vuepress/sidebar/$MODULE.js|侧导航配置，配置后引入`custom-sidebar.js`即可展示|

- 专栏完成后提交 PR
- 贡献者审核校验
- 贡献成员反复推敲后正式发布
***
**建议：**
- 图片命名不可包含空格，中英文之间用“-”连接
- 图片引用根目录为 `https://raw.githubusercontent.com/$YOU-GITHUB/review-notes-dev/$MODULE/_images/` 
- 文章内容以二级标题为目录大纲（一级标题与文件名一致，可忽略不写）
- 内容排版参考 [排版指南 ](https://github.com/sparanoid/chinese-copywriting-guidelines/blob/master/README.zh-CN.md)
- 推荐中英文排版工具 [Text-Typesetting](https://cyc2018.github.io/Text-Typesetting/) 进行排版优化
- 图片不支持 SVG 格式，使用 [在线图片转换工具 ](https://svgtopng.com/zh/) 将 SVG 转 PNG 等其他格式

图片展示居中格式引入代码示例如下（根据实际图片条件长宽）：
```html
<div align="center">
    <img src="https://blog-review-notes.oss-cn-beijing.aliyuncs.com/.../_images/NAME.png">
    <p>NAME</p>
</div>
```
## 贡献者
感谢以下人员对本仓库做出的贡献：[liming199323](https://github.com/liming199323) , [VVvista](https://github.com/VVvista)

## 关于
- 怎么学习？参考 [关于学习方法 ](/about/关于学习方法.md)