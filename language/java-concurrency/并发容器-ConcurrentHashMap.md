> 专栏原创出处：[github-源笔记文件 ](https://github.com/GourdErwa/review-notes/tree/master/language/java-concurrency) ，[github-源码 ](https://github.com/GourdErwa/java-advanced/tree/master/java-concurrency)，欢迎 Star，转载请附上原文出处链接和本声明。

Java 并发编程专栏系列笔记，系统性学习可访问个人复盘笔记-技术博客 [Java 并发编程 ](https://review-notes.top/language/java-concurrency/)

[[toc]]
## ConcurrentHashMap 是什么（jdk1.8）


### 重要字段介绍
- `Node<K,V>[] table`：默认为null，初始化发生在第一次插入操作，默认大小为16的数组，用来存储Node节点数据，扩容时大小总是2的幂次方。
- `Node<K,V>[] nextTable`：默认为null，扩容时新生成的数组，其大小为原数组的两倍。
- `Node`：
```java
    static class Node<K,V> implements Map.Entry<K,V> {
        final int hash;
        final K key;
        volatile V val;
        volatile Node<K,V> next;

        ...
    }
```
- `ForwardingNode`:特殊的Node节点，hash值为-1，其中存储nextTable的引用。
只有table发生扩容的时候，ForwardingNode才会发挥作用，作为一个占位符放在table中表示当前节点为null或则已经被移动。
```java
    static final class ForwardingNode<K,V> extends Node<K,V> {
        final Node<K,V>[] nextTable;
        ForwardingNode(Node<K,V>[] tab) {
            super(MOVED, null, null, null);
            this.nextTable = tab;
        }
        ...
    }
```


## 初始化
- 初始化时会根据参数调整table大小，可以初始化时指定，不然使用默认值 16 。为了确保table的大小总是2的幂次方，我们初始化时指定的不一定是最终计算的。
- table的初始化操作会延迟到第一put操作再进行，且初始化只会执行一次。

```java
    private final Node<K,V>[] initTable() {
        Node<K,V>[] tab; int sc;
        while ((tab = table) == null || tab.length == 0) {
        //如果一个线程发现sizeCtl<0，意味着另外的线程执行CAS操作成功，当前线程只需要让出cpu时间片
            if ((sc = sizeCtl) < 0)
                Thread.yield(); // lost initialization race; just spin
            else if (U.compareAndSwapInt(this, SIZECTL, sc, -1)) {
                try {
                    if ((tab = table) == null || tab.length == 0) {
                        int n = (sc > 0) ? sc : DEFAULT_CAPACITY;
                        @SuppressWarnings("unchecked")
                        Node<K,V>[] nt = (Node<K,V>[])new Node<?,?>[n];
                        table = tab = nt;
                        sc = n - (n >>> 2); //0.75*capacity
                    }
                } finally {
                    sizeCtl = sc;
                }
                break;
            }
        }
        return tab;
    }
```