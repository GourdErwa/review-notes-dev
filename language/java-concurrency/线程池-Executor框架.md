
## Executor 框架是什么
Java 线程的创建与销毁需要一定的开销，因此为每一个任务创建一个新线程来执行，线程的创建与开销将浪费大量计算资源。而且，如果不对创建线程的数量做限制，可能会导致系统负荷太高而崩溃。Java 的线程既是工作单元，也是执行机制。JDK1.5 之后，工作单元与执行机制分离，工作单元包括 Runnable 和 Callable，执行机制由 Executor 框架负责。

## Executor 框架的两级调度模型
在 HotSpot VM 的线程模型中，Java 线程被一对一映射为本地操作系统线程。Java 线程启动时会创建一个本地操作系统线程;当该 Java 线程终止时，这个操作系统线程也会被回收。操作系统会调度所有线程并将它们分配给可用的 CPU。

- 在上层，Java 多线程程序通常把应用分解为若干个任务，然后使用用户级的调度器 (Executor 框架) 将这些任务映射为固定数量的线程;
- 在底层，操作系统内核将这些线程映射到硬件处理器上。

## Executor 框架组成
Executor 框架主要由 3 大部分组成如下：
1. 任务的提交：包括被执行任务需要实现的接口:Runnable 接口或 Callable 接口。
2. 任务的执行：包括任务执行机制的核心接口 Executor，以及继承自 Executor 的 ExecutorService 接口。Executor 框架有两个关键类实现了 ExecutorService 接口 (ThreadPoolExecutor 和 ScheduledThreadPoolExecutor)。
3. 任务的结果：异步计算的结果，包括接口 Future 和实现 Future 接口的 FutureTask 类。

### 任务的执行核心类说明
任务的执行，核心接口 Executor 一些基础类继承关系图：
<div align="center">
    <img src="https://blog-review-notes.oss-cn-beijing.aliyuncs.com/language/java-concurrency/_images/类图关系-Executor.png">
</div>


### 任务提交与结果返回核心类说明
任务的提交`Runnable 接口或 Callable 接口`与任务的结果 `Future 接口`关系图：
<div align="center">
    <img src="https://blog-review-notes.oss-cn-beijing.aliyuncs.com/language/java-concurrency/_images/类图关系-Future.png">
    <p> 类图关系-Future </p>
</div>

下面是这些类和接口的简介：
- Executor 是一个接口，它是 Executor 框架的基础，它将任务的提交与任务的执行分离开。
- ThreadPoolExecutor 是线程池的核心实现类，用来执行被提交的任务。 ·ScheduledThreadPoolExecutor 是一个实现类，可以在给定的延迟后运行命令，或者定期执行命令。ScheduledThreadPoolExecutor 比 Timer 更灵活，功能更强大。
- Future 接口和实现 Future 接口的 FutureTask 类，代表异步计算的结果。
- Runnable 接口和 Callable 接口的实现类，都可以被 ThreadPoolExecutor 或 ScheduledThreadPoolExecutor 执行。

## ThreadPoolExecutor详解

## ScheduledThreadPoolExecutor详解

## FutureTask详解


