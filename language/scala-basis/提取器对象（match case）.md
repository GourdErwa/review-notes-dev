> 专栏原创出处：[github-源笔记文件 ](https://github.com/GourdErwa/review-notes/tree/master/language/scala-basis) ，[github-源码 ](https://github.com/GourdErwa/scala-advanced/tree/master/scala-base/src/main/scala/com/gourd/scala/base/)，欢迎 Star，转载请附上原文出处链接和本声明。

Scala 编程语言专栏系列笔记，系统性学习可访问个人复盘笔记-技术博客 [Scala 编程语言 ](https://review-notes.top/language/scala-basis/)

[toc]
## 什么是提取器对象
提取器对象是一个包含有 unapply 方法的单例对象。

* unapply 方法接受一个实例对象然后返回最初创建它所用的参数。

* 提取器常用在模式匹配和偏函数中。

## unapply 返回结果定义
* 方式 1：提取单个 T 类型的值，`def unapply(obj: A): Option[T]`。

* 方式 2：提取多个值，类型分别为 T1,...,Tn，可以把它们放在一个可选的元组中， `def unapply(obj: A): Option[(T1, ..., T2)]`。

* 方式 3：判断真假，可以返回一个 Boolean 类型的值，`def unapply(obj: A): Boolean`。

* 方式 4：提取值的数量不固定，根据输入来返回随机数量的值，提取方法必须定义为 unapplySeq，`def unapplySeq(obj: A): Option[Seq[T]]`。

### 方式 1-示例
提取单个值
```scala
  import scala.util.Random
  
  object CustomerID {
  
    def apply(name: String) = s"$name--${Random.nextLong}"
  
    def unapply(customerID: String): Option[String] = {
      val stringArray: Array[String] = customerID.split("--")
      if (stringArray.tail.nonEmpty) Some(stringArray.head) else None
    }
  }

  // CustomerID("Sukyoung") 是简化语法，默认调用了 CustomerID.apply("Sukyoung")，返回一个字符串。
  val customer1ID = CustomerID("Sukyoung")  // Sukyoung--23098234908

  customer1ID match {
    // 第一项匹配默认是在调用提取器方法 unapply，并将结果绑定到 name 上
    case CustomerID(name) => println(name)  // prints Sukyoung
    case _ => println("Could not extract a CustomerID")
  }
  
  val customer2ID = CustomerID("Nico")
  // 变量定义可以使用提取模式引入变量，提取器方法 unapply 可以用来初始化变量 name
  // 等价于 val name = CustomerID.unapply(customer2ID).get
  val CustomerID(name) = customer2ID
  println(name)  // prints Nico
```
### 方式 2-示例
提取多个值
```scala
  trait School {
    def name: String
    def age: Int
  }

  class Student(val name: String, val age: Int, val score: Double) extends School
  class Teacher(val name: String, val age: Int) extends School

  object Student {
    def unapply(student: Student): Option[(String, Int, Double)] =
      Some((student.name, student.age, student.score))
  }
  object Teacher {
    def unapply(teacher: Teacher): Option[(String, Int)] =
      Some((teacher.name, teacher.age))
  }

  val lisa = new Student("Lisa", 14, 97)
  lisa match {
    // 不需要 age 属性，可以使用 _ 占位符代替
    case Student(name, _, score) => println(s"学生 $name 获得 $score 分")
    case _ => println("老师没有评分资格")
  }
```
### 方式 3-示例
提取 boolean 值
```scala
  trait School {
    def name: String
    def age: Int
  }

  class Student(val name: String, val age: Int, val score: Double) extends School
  class Teacher(val name: String, val age: Int) extends School

  object Student {
    def unapply(student: Student): Option[(String, Int, Double)] =
      Some((student.name, student.age, student.score))
  }
  object Teacher {
    def unapply(teacher: Teacher): Option[(String, Int)] =
      Some((teacher.name, teacher.age))
  }
  object GoodStudent {
    def unapply(student: Student): Boolean = student.score > 90
  }

  val lisa = new Student("Lisa", 14, 97)
  lisa match {
    // boolean 类型返回值模式匹配写法，student 相当于匹配到的对象实例
    case student @ GoodStudent() => println(s"学生 ${student.name} 成绩优异")
    case _ => println("老师没有评分资格")
  }
```
### 方式 4-示例
提取值数量不固定
```scala
  object Split {
    def unapplySeq(str: String): Option[Seq[String]] =
      Some(str.split("-").toSeq)
  }

  val numberStr = "111-222-333-444"

  numberStr match {
    // 由于切分后得到的结果集合元素数量未知，因此使用该模式定义提取方法 first 为结果集第一个元素
    case Split(first,tail @ _*) => println(s"第一个元素：$first ，剩余元素：$tail")
    case _ => println("Not match")
  }
```