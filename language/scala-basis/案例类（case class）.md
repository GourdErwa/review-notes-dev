> 专栏原创出处：[github-源笔记文件 ](https://github.com/GourdErwa/review-notes/tree/master/language/scala-basis) ，[github-源码 ](https://github.com/GourdErwa/scala-advanced/tree/master/scala-base/src/main/scala/com/gourd/scala/base/)，欢迎 Star，转载请附上原文出处链接和本声明。

Scala 编程语言专栏系列笔记，系统性学习可访问个人复盘笔记-技术博客 [Scala 编程语言 ](https://review-notes.top/language/scala-basis/)

[toc]
## 什么是案例类
案例类 (Case classes) 和普通类差不多，但是有几点关键差别： 
* 案例类创建之后，scala 还会为其自动创建一个半生对象，里面包含了 apply 和 unapply 方法。      
* 案例类默认实现了 unapply 方法，可以通过模式匹配获取成员属性，因此案例类很适合用于模式匹配。
* 案例类非常适合用于创建不可变的数据，因此构造参数不建议声明成 var。
* 案例类还默认实现了 toString、equals、copy、hashCode 这些方法。
## 定义一个案例类
一个最简单的案例类定义由关键字 case class、类名、参数列表 (可为空) 组成。
* 实例化案例类时可以不使用关键字 new，直接通过类名创建，因为案例类有一个默认的 apply 方法来创建对象。
* 案例类构造方法中的成员属性默认是 public val 的。  
```scala
  case class Book(isbn: String)
  val frankenstein = Book("978-0486282114")
  
  // 案例类的构造参数没有加关键字限定时，默认是 public val 的
  case class Message(sender: String, recipient: String, body: String)
  val message1 = Message("guillaume@quebec.ca", "jorge@catalonia.es", "Ça va ?")
  println(message1.sender)  // prints guillaume@quebec.ca
  message1.sender = "travis@washington.us"  // this line does not compile
```
## 比较两个案例类
案例类在做比较的时候是按属性值进行比较而非按引用比较。
```scala
  // 尽管 message2 和 message3 引用不同的对象，但是他们的属性值是相等的，所以 message2 == message3 为 true。
  case class Message(sender: String, recipient: String, body: String)
  
  val message2 = Message("jorge@catalonia.es", "guillaume@quebec.ca", "Com va?")
  val message3 = Message("jorge@catalonia.es", "guillaume@quebec.ca", "Com va?")
  println(message2 == message3) // true
```
## 拷贝一个案例类
可以使用案例类的实例的 copy 方法来创建一个浅拷贝。  
创建浅拷贝的同时可以通过构造参数来为浅拷贝对象的成员属性做一些改变。
```scala
  case class Message(sender: String, recipient: String, body: String)
  val message = Message("julien@bretagne.fr", "travis@washington.us", "Me zo o komz gant ma amezeg")
  
  // 指定 message 的 recipient 作为 message1 的 sender
  // 设置 message1 的 recipient 的属性值为 "claire@bourgogne.fr"
  // 而 message1 的 body 属性直接拷贝的 message 实例的 body 值
  val message1 = message.copy(sender = message.recipient, recipient = "claire@bourgogne.fr")
  println(message1.sender) // travis@washington.us
  println(message1.recipient) // claire@bourgogne.fr
  println(message1.body) // "Me zo o komz gant ma amezeg"
```