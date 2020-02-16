> 专栏原创出处：[github-源笔记文件 ](https://github.com/GourdErwa/review-notes/tree/master/language/scala-basis) ，[github-源码 ](https://github.com/GourdErwa/scala-advanced/tree/master/scala-base/src/main/scala/com/gourd/scala/base/)，欢迎 Star，转载请附上原文出处链接和本声明。

Scala 编程语言专栏系列笔记，系统性学习可访问个人复盘笔记-技术博客 [Scala 编程语言 ](https://review-notes.top/language/scala-basis/)

[toc]
## 什么是特质
特质用于在类之间共享程序接口和字段。  
* 特质类似于 Java 中的接口。 
* 特质中可以声明属性和方法。
* 类和对象可以扩展特质，但是特质不能被实例化，因此特质没有参数。
## 如何定义特质
最简单的定义方法就是关键字 `trait + 标识符`。  
特质用作泛型类型和定义抽象方法非常有用。
```scala
  trait HairColor  // 定义一个简单的特质
  
  // 定义一个带有泛型类型和抽象方法的特质
  trait Iterator[A] {
    def hasNext: Boolean
    def next(): A
  }
```
## 如何使用特质
* 如果子类没有父类，第一个实现的特质用 `extends` 关键字，其余实现的特质用 `with` 关键字。  
* 如果子类存在父类，则剩余实现的特质都使用 `with` 关键字。  
使用 override 关键字来实现特质里面的任何抽象成员。
```scala
  trait Iterator[A] {
    def hasNext: Boolean
    def next(): A
  }
  
  // IntIterator 将参数 to 作为 hasNext 方法比较的上限，并扩展了 Iterator 的类型为 Int
  // 因此 next 方法必须返回 Int 类型的值
  class IntIterator(to: Int) extends Iterator[Int] {
    private var current = 0
    override def hasNext: Boolean = current < to
    override def next(): Int =  {
      if (hasNext) {
        val t = current
        current += 1
        t
      } else 0
    }
  }
  
  val iterator = new IntIterator(10)
  iterator.next()  // returns 0
  iterator.next()  // returns 1
```
## 子类型（实现类）的作用
凡是需要特质的地方，都可以由该特质的子类型来替换。
```scala
  trait Pet {
    val name: String
  }
  
  class Cat(val name: String) extends Pet
  class Dog(val name: String) extends Pet
  
  val dog = new Dog("Harry")
  val cat = new Cat("Sally")
  // 此处集合中需要放入 Pet 类型的对象，因为 Cat 和 Dog 实现了 Pet 特质，因此对象 dog 和 cat 可以放入该集合
  val animals = ArrayBuffer.empty[Pet]
  animals.append(dog)
  animals.append(cat)
  animals.foreach(pet => println(pet.name))  // Prints Harry Sally
```