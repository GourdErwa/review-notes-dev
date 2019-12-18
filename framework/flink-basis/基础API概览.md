   
> 专栏原创出处：[github-源笔记文件 ](https://github.com/GourdErwa/review-notes/tree/master/framework/flink-basis) ，[github-源码 ](https://github.com/GourdErwa/flink-advanced)，欢迎 Star，转载请附上原文出处链接和本声明。
本节内容对应[官方文档 ](https://ci.apache.org/projects/flink/flink-docs-release-1.9/dev/api_concepts.html)  

## 数据集和数据流
Flink 具有特殊的类`DataSet`，`DataStream`用于表示程序中的数据。您可以将它们视为包含重复项的不可变数据集合。  
`DataSet`处理有限的数据集，用于批处理，对于`DataStream`数据流是无限的，用于流处理。

这些集合在某些关键方面与常规 Java 集合不同。首先，它们是不可变的，这意味着一旦创建它们就不能添加或删除元素。

## 懒惰执行
所有 Flink 程序都是延迟执行的：执行程序的 main 方法时，不会直接进行数据加载和转换。而是，将创建每个操作并将其添加到程序的计划中。  
当通过 `execute()` 执行环境上的调用触发执行时才会执行这些操作。

## 指定键
某些转换（join，coGroup，keyBy，groupBy）要求在元素集合上定义键。

其他转换（Reduce，GroupReduce，Aggregate，Windows）允许在应用键之前将数据分组。

> 按键值分组后可提高任务执行并行度。
```scala
DataSet<...> input = // [...]
DataSet<...> reduced = input
  .groupBy(/*define key here*/)
  .reduceGroup(/*do something*/);
```
```scala
DataStream<...> input = // [...]
DataStream<...> windowed = input
  .keyBy(/*define key here*/)
  .window(/*window specification*/);
```  
### 定义元组的键
```scala
val input: DataStream[(Int, String, Long)] = // [...]
val keyed = input.keyBy(0) // 元组分组在第一字段
val grouped = input.groupBy(0,1) // 元组分组在由第一字段和第二字段组成的复合键上
```  
```scala
DataStream<Tuple3<Tuple2<Integer, Float>,String,Long>> ds;
ds.keyBy(0) // 系统将完整字符 Tuple2 用作键（以 Integer 和 Float 作为键）
```
### 使用字段表达式定义键
您可以使用基于字符串的字段表达式来引用嵌套字段，并定义用于分组，排序，联接或联合分组的键。

字段表达式使选择（嵌套）复合类型（例如 Tuple 和 POJO 类型）中的字段变得非常容易。
```scala
// some ordinary POJO (Plain old Java Object)
class WC(var word: String, var count: Int) {
  def this() { this("", 0L) }
}
val words: DataStream[WC] = // [...]
val wordCounts = words.keyBy("word").window(/*window specification*/)

// or, as a case class, which is less typing
case class WC(word: String, count: Int)
val words: DataStream[WC] = // [...]
val wordCounts = words.keyBy("word").window(/*window specification*/)
```

**字段表达式语法**：
- 通过字段名称选择 POJO 字段。例如，"user"引用 POJO 类型的“用户”字段。
- 通过其 1 偏移字段名称或 0 偏移字段索引选择元组字段。例如"_1"，分别"5"参考 Scala 元组类型的第一个字段和第六个字段。
- 您可以在 POJO 和元组中选择嵌套字段。例如，"user.zip"引用存储在 POJO 类型的“用户”字段中的 POJO 的“zip”字段。支持 POJO 和元组的任意嵌套和混合，例如"_2.user.zip"或"user._4.1.zip"。
- 您可以使用"_"通配符表达式选择完整类型。这对于非 Tuple 或 POJO 类型的类型也适用。

**字段表达式示例**：
```scala
class WC(var complex: ComplexNestedClass, var count: Int) {
  def this() { this(null, 0) }
}

class ComplexNestedClass(
    var someNumber: Int,
    someFloat: Float,
    word: (Long, Long, String),
    hadoopCitizen: IntWritable) {
  def this() { this(0, 0, (0, 0, ""), new IntWritable(0)) }
}
```
- "count"：WC 类中的 count 字段。
- "complex"：WC 类中的 POJO 类型 ComplexNestedClass。
- "complex.word._3"：WC 类中的的 ComplexNestedClass#word 最后一个字段 Tuple3。
- "complex.hadoopCitizen"：WC 类中的 ComplexNestedClass#hadoopCitizen 字段。

### 使用按键选择器功能定义按键
使用 `KeySelector` 函数选择自定义实现的键
```scala
// some ordinary case class
case class WC(word: String, count: Int)
val words: DataStream[WC] = // [...]
val keyed = words.keyBy( _.word )
```

## 转换函数
### Lambda Functions
```scala
val data: DataSet[String] = // [...]
data.filter { _.startsWith("http://") }
val data: DataSet[Int] = // [...]
data.reduce { (i1,i2) => i1 + i2 }
// or
data.reduce { _ + _ }
```
### Rich functions
`RichFunction`提供了函数的生命周期，`open(Configuration parameters)`，`close`，`getRuntimeContext`，`setRuntimeContext`，`getIterationRuntimeContext`
用于自定义一些资源相关操作。  

例如：操作广播变量、操作分布式缓存、计算器等...需要在`RichFunction`函数生命周期中执行
```scala
data.map { x => x.toInt }
```
```scala
// 自定义实现函数
class MyMapFunction extends RichMapFunction[String, Int] {
  def map(in: String):Int = { in.toInt }
};
data.map(new MyMapFunction())

// 或者直接使用匿名函数
data.map (new RichMapFunction[String, Int] {
  def map(in: String):Int = { in.toInt }
})
```

## 支持的数据类型
- **Java Tuples and Scala Case Classes**（java 元组及 scala CaseClass）
- **Java POJOs**（java POJO 类）
- **Primitive Types**（所有 Java 和 Scala 基本类型，例如 Integer，String 和 Double。）
- **Regular Classes**（所有不能当做 POJO 处理的类都会被 Flink 当做泛型类来处理，Flink 把它们多做黑箱处理，并且获取不到它们的内容。泛型的序列化和反序列化使用的是 Kryo 序列化框架。）
- **Values** （值类型都是自定义[org.apache.flink.types.Value] 序列化机制。有时候业务场景下通用的序列化效率较低或者程序重用对象缓解 GC 压力时）
- **Hadoop Writables**（实现 org.apache.hadoop.Writable 接口的类型）
- **Special Types**（Scala 的 Either，Option 和 Try。Java API 具有自己的自定义实现 Either。与 Scala 的类似 Either）

## 累加器和计数器
累加器是具有加法运算和最终累加结果的简单结构，可在作业结束后使用。

最简单的累加器是一个计数器：您可以使用 Accumulator.add(V value) 方法将其递增 。在工作结束时，Flink 将汇总（合并）所有部分结果并将结果发送给客户端。

内置累加器实现了[Accumulator](https://github.com/apache/flink/blob/master/flink-core/src/main/java/org/apache/flink/api/common/accumulators/Accumulator.java)，具体实现参考
[accumulators 包 ](https://github.com/apache/flink/blob/master/flink-core/src/main/java/org/apache/flink/api/common/accumulators)

使用示例：
```scala
object Accumulators extends BatchExecutionEnvironmentApp {

  // 用户登录数据 DataSet
  val userLoginDs = DataSet.userLogin(this)

  userLoginDs
    .map(new MyMap())
    .first(10)
    .writeAsText("./debug-out/Accumulators.txt")

  // 结果将存储在 JobExecutionResult
  private val result = bEnv.execute()
  // 获取计数器结果为 num-lines:11520
  info(s"num-lines:${result.getAccumulatorResult("num-lines")}")
}

/**
  * 自定义 map 实现函数，操作累加器示例
  */
private class MyMap extends RichMapFunction[UserLogin, (String, String)] {

  // 创建一个累加器对象
  private val numLines = new IntCounter

  override def open(config: Configuration): Unit = {
    // 注册累加器对象
    getRuntimeContext.addAccumulator("num-lines", numLines)
  }

  override def map(value: UserLogin): (String, String) = {
    numLines.add(1) // 累加器 +1
    (value.uid, value.status)
  }
}
```