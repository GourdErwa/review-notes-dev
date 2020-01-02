> 专栏原创出处：[github-源笔记文件 ](https://github.com/GourdErwa/review-notes/tree/master/language/java-core) ，[github-源码 ](https://github.com/GourdErwa/java-advanced/tree/master/java-core)，欢迎 Star，转载请附上原文出处链接和本声明。

Java 核心知识专栏系列笔记，系统性学习可访问个人复盘笔记-技术博客 [Java 核心知识 ](https://review-notes.top/language/java-core/)

[[toc]]

基于 jdk1.8 讲解分析。
## HashMap

## HashMap 关键字段讲解
- table  
`Node[]` 结构的数组，保存我们的 K/V 键值对信息。Node 可能为单链表（Node）或者红黑树（TreeNode）结构，TreeNode 继承了 Node。

- capacity  
容量，即 table 的长度，默认 16

- loadFactor  
负载因子，默认 0.75f。决定了桶的使用情况。
如果负载因子太大，桶的利用率越高，但是冲突的几率变大了。反之负载因子太小，桶的利用率越低，冲突几率变小了。平衡与折衷的默认值设置为 0.75f。
可参考 [泊松分布和指数分布 ](http://www.ruanyifeng.com/blog/2015/06/poisson-distribution.html#comment-356111)。

- threshold  
扩容阈值，当 K/V 的数量大于等于该阈值时 table 进行扩容，初始化时默认为 16，进行 put 或者扩容操作后按公式`threshold = capacity * loadFactor`计算。
假如我们的初始化容量是16，负载因子是0.75f。第一次扩容的阈值为12

- size  
K/V 的数量，即我们通过 put 方法放入 table 中的键值对。

## 问
#### 为什么 table 要设计为 `Node[]` 结构的数组？
- 我们存入的 K/V 信息如何确定要保存到哪个数组下标呢？  
通过 K 的哈希值定位到数组下标。

- 那如果多个 K 生成的哈希值出现都一样时（哈希冲突）怎么办？  
*此处应该是理解 HashMap 数据结构的重点了*。出现冲突后定位的数组索引下标都一样了，因此我们要在一个数组下标上放好多数据，
HashMap 采用了 Node（单链表），TreeNode（红黑树）来保存每个数组下标的数据。

- 为什么要用 单链表、红黑树 两种树结构呢？
    - 红黑树需要进行左旋，右旋操作， 而单链表不需要，单链表只能顺序查找。
    - 如果元素小于 8 个，单链表，查询成本高，新增成本低
    - 如果元素大于 8 个，红黑树，查询成本低，新增成本高

#### 什么时候单链表与红黑树互相转换？
- 如果当前链表的个数 ≥ 8，且 capacity ≥ 64，单链表会转为红黑树。
- 如果当前红黑树的个数 ≤ 6，红黑树会转为单链表。

#### 为什么容量为 2 次幂的原因





