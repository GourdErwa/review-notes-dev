> 专栏原创出处：[github-源笔记文件 ](https://github.com/GourdErwa/review-notes/tree/master/language/scala-basis) ，[github-源码 ](https://github.com/GourdErwa/scala-advanced/tree/master/scala-base/src/main/scala/com/gourd/scala/base/)，欢迎 Star，转载请附上原文出处链接和本声明。

Scala 编程语言专栏系列笔记，系统性学习可访问个人复盘笔记-技术博客 [Scala 编程语言 ](https://review-notes.top/language/scala-basis/)

[toc]
## 什么是混入
当某个特质被用于组合类时，被称为混入。  
* 一个类只能有一个父类，但是可以有多个混入。
* 如果一个类具有父类，并且混入的特质也具有父类，那么这个类的父类必须是混入特质的父类的子类。
## 示例 1
类 D 有一个父类 B 和一个混入 C，父类 B 和混入 C 具有相同的父类 A。  
```scala
  abstract class A {
    val message: String
  }
  class B extends A {
    val message = "I'm an instance of class B"
  }
  trait C extends A {
    def loudMessage = message.toUpperCase()
  }
  // D 具有父类 B，混入的特质 C 具有父类 A，那么 B 必须是 A的子类
  class D extends B with C
  
  val d = new D
  println(d.message)  // I'm an instance of class B
  println(d.loudMessage)  // I'M AN INSTANCE OF CLASS B
```
## 示例 2
```scala
  // 抽象类，具有一个抽象类型 T 和标准的迭代器方法
  abstract class AbsIterator {
    type T
    def hasNext: Boolean
    def next(): T
  }
  // 实现类
  class StringIterator(s: String) extends AbsIterator {
    type T = Char
    private var i = 0
    def hasNext = i < s.length
    def next() = {
      val ch = s charAt i
      i += 1
      ch
    }
  }
  // 特质，继承了 AbsIterator，定义了 foreach 方法，只要还有下一个元素，就会将下一个元素作为参数放入 f 函数中
  trait RichIterator extends AbsIterator {
    def foreach(f: T => Unit): Unit = while (hasNext) f(next())
  }
  // RichStringIter 继承了 StringIterator 混入了 RichIterator，使其功能更加灵活
  class RichStringIter extends StringIterator("Scala") with RichIterator
  
  val richStringIter = new RichStringIter
  richStringIter foreach println
  // S
  // c
  // a
  // l
  // a
```
## 使用匿名内部类来实现动态混入
```scala
  trait Animal {
    def showName(): Unit = {
      println("animal")
    }
  }
  
  abstract class Pet {
    def petType()
  }
  
  class Dog {}
  
  object Main {
    def main(args: Array[String]): Unit = {
      val dog = new Dog with Animal
      dog.showName()
  
      val pet = new Pet with Animal {
        override def petType(): Unit = {
          println("宠物类型")
        }
      }
      pet.showName()
    }
  }
```
## 静态混入时的构建顺序
静态混入时先初始化父类对象然后初始化混入的特质，最后再初始化自己本身。
```scala
  object Main {
    def main(args: Array[String]): Unit = {
      abstract class A {
        println("A")
        val message: String
      }
      class B extends A {
        println("B")
        val message = "I'm an instance of class B"
      }
      trait C extends A {
        println("C")
        def loudMessage = message.toUpperCase()
      }
      class D extends B with C{
        println("D")
      }
  
      val d = new D
      // A
      // B
      // C
      // D
    }
  }
```
## 动态混入时的构建顺序以及执行顺序是怎样的
* 创建一个动态混入对象时，先出初始化要创建的对象，然后再初始化动态混入的特质，混入的特质按照从左向右的顺序依次初始化。
* 执行方法时，有些类似栈的结构，先混入的后执行，也就是按照混入特质从右向左的顺序执行。
* 当执行 super 方法时，这里的父类指的是左边混入的特质，如果左边没有混入的特质了则指的是真正的父类。
* 如果执行 super 方法时不想调用默认左边动态混入特质的方法时，可以指定父类的泛型来调用真正父类的方法 super[父类].
```scala
  trait Animal {
    println("Animal")
  
    def showName()
  }
  
  trait Pet extends Animal {
    println("Pet")
  
    override def showName(): Unit = {
      println("Pet show name")
    }
  }
  
  trait DogPet extends Pet {
    println("DogPet")
  
    override def showName(): Unit = {
      println("DogPet show name")
      super.showName()
    }
  }
  
  trait CatPet extends Pet {
    println("CatPet")
  
    override def showName(): Unit = {
      println("CatPet show name")
      super[Pet].showName()
    }
  }
  
  class Tom {
  println("Tom")
  }
  
  object Main {
    def main(args: Array[String]): Unit = {
      val tom = new Tom with DogPet with CatPet
      tom.showName()
      // 结果：
      // Tom     先构建自己本身
      // Animal  再构建 DogPet 的顶级父类
      // Pet     再构建 DogPet 的父类
      // DogPet  再构建 DogPet
      // CatPet  最后构建 CatPet，因为 CatPet 的父类已经构建过了，因此不再构建
  
  
      // CatPet show name  从右向左执行，先执行 CatPet 的 showName 方法
      // DogPet show name  调用 super 时，父类是左边动态混入的特质，因此执行 DogPet 的 showName 方法
      // Pet show name     DogPet 调用 super 方法时，应为左边不存在动态混入的特质，所以执行父类 Pet 的 showName 方法
    }
  }
```