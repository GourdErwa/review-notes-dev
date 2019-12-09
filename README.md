[![Build Status](https://travis-ci.org/GourdErwa/review-notes-dev.svg?branch=master)](https://travis-ci.org/GourdErwa/review-notes-dev)

该项目为用于 review-notes 文档内容开发阶段，不能保证内容准确性。  
某专栏完成后，在内容经过多重交叉审核通过后最终正式发布到 [review-notes](https://github.com/GourdErwa/review-notes)

## 构建环境
- 该文档使用 [vuepress](https://vuepress.vuejs.org/) 发布 ， 执行 `npm run docs:dev` 本地阅读调试
- 使用 [Travis CI](https://travis-ci.org/GourdErwa/review-notes-dev) 持续集成，[在线阅读地址](http://dev.review-notes.top/)

### 编程语言 
* [Java 基础知识](/language/java-basis/)
* [Java 并发编程](/language/java-concurrency/)
* [Scala 基础-语言核心特性](/language/scala-lang-tour/)

### 技术框架
* [Flink 入门进阶](/framework/flink-basis/)

### 算法
* [数据结构](/algorithm/data-structures/)
    
## 贡献说明

|目录|说明|
|---|---|
|./$MODULE|模块名称|
|./$MODULE/_images|开发期间模块引用图片|
|./$MODULE/_notes|模块内容笔记内容(参考书籍、源图片等内容)|
|./$MODULE/README.md|模块介绍（默认为模块导言）|

**建议：**
- 图片命名不可包含空格，中英文之间用“-”连接
- 图片引用根目录为 `https://raw.githubusercontent.com/GourdErwa/review-notes-dev/master/$MODULE/_images/` 
- 文章内容以二级标题为目录大纲（一级标题与文件名一致，可忽略不写）
- 内容排版参考 [排版指南](https://github.com/sparanoid/chinese-copywriting-guidelines/blob/master/README.zh-CN.md)
- 使用排版工具 [Text-Typesetting](https://github.com/CyC2018/Text-Typesetting) 进行排版优化

***
感谢以下人员对本仓库做出的贡献：[liming199323](https://github.com/liming199323) , [VVvista](https://github.com/VVvista)