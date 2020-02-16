> 专栏原创出处：[github-源笔记文件 ](https://github.com/GourdErwa/review-notes/tree/master/language/java-concurrency) ，[github-源码 ](https://github.com/GourdErwa/java-advanced/tree/master/java-concurrency)，欢迎 Star，转载请附上原文出处链接和本声明。

Java 并发编程专栏系列笔记，系统性学习可访问个人复盘笔记-技术博客 [Java 并发编程](https://review-notes.top/language/java-concurrency/)

[toc]
## 比较说明
本节内容主要从 CAS 、volatile 、synchronized、Lock 进行对比分析并发实现的差异。    

实现并发的基础是保证了可见性、有序性，因此此处不做比较。
## 并发性比较

- 场景
    - CAS：单个变量支持比较替换操作，如果实际值与期望值一致时才进行修改
    - volatile：单个变量并发操作，直接修改为我们的目标值
    - synchronized：一般性代码级别的并发
    - Lock：代码级别的并发，需要使用锁实现提供的独特机制，例如：读写分离、分段、中断、共享、重入等 synchronized 不支持的机制。

- 原子性
    - CAS：保证原子性
    - volatile：单个操作保证原子性，组合操作（例如：++）不保证原子性
    - synchronized：保证原子性
    - Lock：保证原子性

- 并发粒度
    - CAS：单个变量值
    - volatile：单个变量值
    - synchronized：静态、非静态方法、代码块
    - Lock：代码块

- 编码操作性
    - CAS：调用 JDK 方法
    - volatile：使用关键字，系统通过屏障指令保证并发性
    - synchronized：使用关键字，加锁解锁操作系统默认通过指令控制
    - Lock：手动加锁解锁

- 线程阻塞
    - CAS：不会
    - volatile：不会
    - synchronized：可能会
    - Lock：可能会

- 性能（在合理使用情况下比较，比如我们可以用 volatile 实现的需求即不用 Lock）
    - CAS：主要表现在 CPU 资源占用
    - volatile：性能较好
    - synchronized：性能一般（JDK 1.6 优化后增加了偏向锁、轻量级锁机制）
    - Lock：性能较差

## 锁比较
> volatile 不是锁实现机制，因此锁相关比较不参与

- 锁重入
    - synchronized：支持
    - Lock：ReentrantLock 实现类支持

- 锁中断操作
    - synchronized：不支持中断操作
    - Lock：支持中断，支持超时中断

- 锁功能性
    - synchronized：独占锁、可重入锁
    - Lock：独占锁、共享锁、可重入锁、读写锁、分段锁 ...

- 锁状态感知
    - synchronized：无法判断是否拿到锁
    - Lock：可以判断是否拿到锁

- 死锁
    - synchronized：可能出现死锁
    - Lock：需合理编码，可能出现死锁

## 说明
本内容为个人理解总结，可能存在理论性问题，欢迎讨论反馈，谢谢。