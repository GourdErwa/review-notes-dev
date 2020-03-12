> 专栏原创出处：[github-源笔记文件 ](https://github.com/GourdErwa/review-notes/tree/master/language/scala-basis) ，[github-源码 ](https://github.com/GourdErwa/scala-advanced/tree/master/scala-base/src/main/scala/com/gourd/scala/base/)，欢迎 Star，转载请附上原文出处链接和本声明。

Scala 编程语言专栏系列笔记，系统性学习可访问个人复盘笔记-技术博客 [Scala 编程语言 ](https://review-notes.top/language/scala-basis/)

[toc]
## 什么是特质
特质用于在类之间共享程序接口和字段。  
* 特质类似于 Java 中的接口和抽象类的结合。 
* 特质中可以声明属性和方法。
* 类和对象可以扩展特质，但是特质不能被实例化，因此特质没有参数。
* java 中的所有接口可以被当做特质来使用。
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
* 如果子类存在父类，则第一个必须先 extends 父类，剩余实现的特质都使用 `with` 关键字。  
* 特质里可以有抽象方法也可以有非抽象方法。
* 特质可以继承其他类来实现功能的扩展。
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
## 特质底层实现原理
* 当特质中只有抽象方法时，在编译过后只会生成一个 ClassName.class 的文件，它里面定义了一个接口和对应的抽象方法。
* 当特质中存在默认实现的方法时，在编译过后还会额外生成一个 ClassName$class.class de 文件，它是一个抽象类，里面定义了特质中默认实现了的方法。
* 当某个类继承了存在默认实现方法的特质时，这个类编译过后会生成这个方法，但是底层调用的其实是 ClassName$class.class 中这个特质的默认实现。

源码内容：
```scala
  trait Animal {
    def showName(): String
  
    def showNumbers(): Unit = {
      println("有几只小动物")
    }
  }
  
  class Dog(name: String) extends Animal {
    val dog = name
  
    override def showName(): String = {
      dog
    }
  }
```
编译后 class 文件内容：
```scala
  // Animal.class 接口文件
  public interface Animal
  {
      String showName();
      
      void showNumbers();
  }
  // Animal$class 抽象类文件
  public abstract class Animal$class
  {
      public static void showNumbers(final Animal $this) {
          Predef$.MODULE$.println((Object)"\u6709\u51e0\u53ea\u5c0f\u52a8\u7269");
      }
      
      public static void $init$(final Animal $this) {
      }
  }
  // Dog.class 文件
  public class Dog implements Animal
  {
      private final String dog;
  
      @Override
      public void showNumbers() {
          // 生成了 showNumbers 方法，但是底层调用的是 Animal$class 中的 showNumbers 方法
          Animal$class.showNumbers(this);
      }
      
      public String dog() {
          return this.dog;
      }
      
      @Override
      public String showName() {
          return this.dog();
      }
      
      public Dog(final String name) {
          Animal$class.$init$(this);
          this.dog = name;
      }
  }
```