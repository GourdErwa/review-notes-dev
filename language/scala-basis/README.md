> 专栏原创出处：[github-源笔记文件 ](https://github.com/GourdErwa/review-notes/tree/master/language/scala-basis) ，[github-源码 ](https://github.com/GourdErwa/scala-advanced/tree/master/scala-base/src/main/scala/com/gourd/scala/base/)，欢迎 Star，转载请附上原文出处链接和本声明。

- 本教程基于 Scala 2.13 整理

## 专栏同步地址
- CSDN： [Scala 编程语言-专栏文章目录汇总](https://gourderwa.blog.csdn.net/article/details/103883565)

## 欢迎来到 Scala 入门-语言特征
本教程包含了对于大多数 Scala 特性的简单介绍。主要针对 Scala 这门语言的初学者。

## Scala 是什么？
Scala 是一门现代的多范式语言，志在以简洁、优雅及类型安全的方式来表达常用的编程模型。它平滑地集成了面向对象和函数式语言的特性。

## Scala 是面向对象的
鉴于一切值都是对象，可以说 Scala 是一门纯面向对象的语言。对象的类型和行为是由类和特质来描述的。类可以由子类化和一种灵活的、基于 mixin 的组合机制（它可作为多重继承的简单替代方案）来扩展。

## Scala 是函数式的
鉴于一切函数都是值，又可以说 Scala 是一门函数式语言。Scala 为定义匿名函数提供了轻量级的语法，支持高阶函数，允许函数嵌套及柯里化。Scala 的样例类和内置支持的模式匹配代数模型在许多函数式编程语言中都被使用。对于那些并非类的成员函数，单例对象提供了便捷的方式去组织它们。

此外，通过对提取器的一般扩展，Scala 的模式匹配概念使用了 right-ignoring 序列模式，自然地延伸到 XML 数据的处理。其中，for 表达式对于构建查询很有用。这些特性使得 Scala 成为开发 web 服务等程序的理想选择。

## Scala 是静态类型的
Scala 配备了一个拥有强大表达能力的类型系统，它可以静态地强制以安全、一致的方式使用抽象。典型来说，这个类型系统支持：
- 泛型类
- 型变注解
- 上、下 类型边界
- 作为对象成员的内部类和抽象类型
- 复合类型
- 显式类型的自我引用
- 隐式参数和隐式转化
- 多态方法
类型推断让用户不需要标明额外的类型信息。这些特性结合起来为安全可重用的编程抽象以及类型安全的扩展提供了强大的基础。

## Scala 是可扩展的
在实践中，特定领域应用的发展往往需要特定领域的语言扩展。Scala 提供了一种语言机制的独特组合方式，使得可以方便地以库的形式添加新的语言结构。

很多场景下，这些扩展可以不通过类似宏（macros）的元编程工具完成。例如：

- 隐式类允许给已有的类型添加扩展方法。
- 字符串插值可以让用户使用自定义的插值器进行扩展。

## Scala 的互操作性
Scala 设计的目标是与流行的 Java 运行环境（JRE）进行良好的互操作，特别是与主流的面向对象编程语言——Java 的互操作尽可能的平滑。Java 的最新特性如函数接口（SAMs）、lambda 表达式、注解及泛型类 在 Scala 中都有类似的实现。

另外有些 Java 中并没有的特性，如缺省参数值和带名字的参数等，也是尽可能地向 Java 靠拢。Scala 拥有类似 Java 的编译模型（独立编译、动态类加载），且允许使用已有的成千上万的高质量类库。

## 参考
- [https://docs.scala-lang.org/tour/tour-of-scala.html](https://docs.scala-lang.org/tour/tour-of-scala.html)