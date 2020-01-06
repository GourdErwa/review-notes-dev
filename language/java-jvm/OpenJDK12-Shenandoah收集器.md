> 专栏原创出处：[github-源笔记文件 ](https://github.com/GourdErwa/review-notes/tree/master/language/java-jvm) ，[github-源码 ](https://github.com/GourdErwa/java-advanced/tree/master/java-jvm)，欢迎 Star，转载请附上原文出处链接和本声明。

Java JVM-虚拟机专栏系列笔记，系统性学习可访问个人复盘笔记-技术博客 [Java JVM-虚拟机 ](https://review-notes.top/language/java-jvm/)

[[toc]]
## 前言
最初 Shenandoah 是由 RedHat 公司独立发展的新型收集器项目，在 2014 年 RedHat 把 Shenandoah 贡献给了 OpenJDK，并推动它成为 OpenJDK 12 的正式特性之一。

该收集器目标是实现一种能在任何堆内存大小下都可以把垃圾收集的停顿时间限制在「十毫秒」以内的垃圾收集器，该目标意味着相比 CMS 和 G1，Shenandoah 不仅要进行并发的垃圾标记，还要并发地进行对象清理后的整理动作。

## 与 G1 的关系
Shenandoah 像是 G1 的下一代继承者，它们两者有着相似的堆内存布局，在初始标记、并发标记等许多阶段的处理思路上都高度一致。

它与 G1 至少有三个明显的不同之处：
1. 最重要的是支持并发的整理算法，G1 的回收阶段是可以多线程并行的，但却不能与用户线程并发

2. Shenandoah（目前）是默认不使用分代收集的，换言之，不会有专门的新生代 Region 或者老年代 Region 的存在，没有实现分代，并不是说分代对 Shenandoah 没有价值，这更多是出于性价比的权衡，基于工作量上的考虑而将其放到优先级较低的位置上

3. Shenandoah 摒弃了在 G1 中耗费大量内存和计算资源去维护的记忆集，改用名为「连接矩阵」（Connection Matrix）的全局数据结构来记录跨 Region 的引用关系，降低了处理跨代指针时的记忆集维护消耗，也降低了伪共享问题

## 工作过程

#### 1. 初始标记（Initial Marking）
与 G1 一样，首先标记与 GC Roots 直接关联的对象，这个阶段仍是「Stop The World」的，但停顿时间与堆大小无关，只与 GC Roots 的数量相关。

#### 2. 并发标记（Concurrent Marking）
与 G1 一样，遍历对象图，标记出全部可达的对象，这个阶段是与用户线程一起并发的，时间长短取决于堆中存活对象的数量以及对象图的结构复杂程度。

#### 3. 最终标记（Final Marking）
与 G1 一样，处理剩余的 SATB 扫描，并在这个阶段统计出回收价值最高的 Region，将这些 Region 构成一组回收集（Collection Set）。最终标记阶段也会有一小段短暂的停顿。

#### 4.并发清理（Concurrent Cleanup）
这个阶段用于清理那些整个区域内连一个存活对象都没有找到的 Region（这类 Region 被称为 Immediate Garbage Region）。

#### 5. 并发回收（Concurrent Evacuation）
并发回收阶段是 Shenandoah 与之前 HotSpot 中其他收集器的核心差异。

在这个阶段，Shenandoah 要把回收集里面的存活对象先复制一份到其他未被使用的 Region 之中。

复制对象这件事情如果将用户线程冻结起来再做那是相当简单的，但如果两者必须要同时并发进行的话，就变得复杂起来了。
其困难点是在移动对象的同时，用户线程仍然可能不停对被移动的对象进行读写访问，移动对象是一次性的行为，但移动之后整个内存中所有指向该对象的引用都还是旧对象的地址，这是很难一瞬间全部改变过来的。
对于并发回收阶段遇到的这些困难，Shenandoah 将会通过读屏障和被称为「Brooks Pointers」的转发指针来解决（讲解完 Shenandoah 整个工作过程之后笔者还要再回头介绍它）。


并发回收阶段运行的时间长短取决于回收集的大小。

#### 6. 初始引用更新（Initial Update Reference）
并发回收阶段复制对象结束后，还需要把堆中所有指向旧对象的引用修正到复制后的新地址，这个操作称为引用更新。
引用更新的初始化阶段实际上并未做什么具体的处理，设立这个阶段只是为了建立一个线程集合点，确保所有并发回收阶段中进行的收集器线程都已完成分配给它们的对象移动任务而已。

初始引用更新时间很短，会产生一个非常短暂的停顿。

#### 7. 并发引用更新（Concurrent Update Reference）
真正开始进行引用更新操作，这个阶段是与用户线程一起并发的，时间长短取决于内存中涉及的引用数量的多少。
并发引用更新与并发标记不同，它不再需要沿着对象图来搜索，只需要按照内存物理地址的顺序，线性地搜索出引用类型，把旧值改为新值即可。

#### 8. 最终引用更新（Final Update Reference）
解决了堆中的引用更新后，还要修正存在于 GC Roots 中的引用。
这个阶段是 Shenandoah 的最后一次停顿，停顿时间只与 GC Roots 的数量相关。

#### 9. 并发清理（Concurrent Cleanup）
经过并发回收和引用更新之后，整个回收集中所有的 Region 已再无存活对象，这些 Region 都变成 Immediate Garbage Regions 了，最后再调用一次并发清理过程来回收这些 Region 的内存空间，供以后新对象分配使用。


## 参考
- 《深入理解 Java 虚拟机：JVM 高级特性与最佳实践（第 3 版）》周志明 著
- [wiki.openjdk-Shenandoah](https://wiki.openjdk.java.net/display/shenandoah/main)