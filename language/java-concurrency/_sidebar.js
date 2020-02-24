module.exports = [
    {
        title: "Java 并发编程-基础",
        collapsable: false,
        sidebarDepth: 0,
        children: [
            ['内存模型-基础概念', '内存模型-基础概念'],
            ['内存模型-顺序一致性', '内存模型-顺序一致性'],
            ['并发编程-CAS实现原理', 'CAS实现原理'],
            ['内存模型-原子操作', '原子操作'],
            ['内存模型-final域的内存语义', 'final域的内存语义'],
            ['并发关键字-volatile', '并发关键字-volatile'],
            ['并发关键字-synchronized', '并发关键字-synchronized'],
            ['锁的内存语义', '锁的内存语义'],
            ['并发操作比较（CAS、volatile、synchronized、Lock）', '并发操作比较（CAS、volatile、synchronized、Lock）'],
            ['原子操作类（atomic包）', '原子操作类（atomic包）']
        ]
    },
    {
        title: "Java 并发编程-线程",
        collapsable: false,
        sidebarDepth: 0,
        children: [
            ['线程简介', '线程简介'],
            ['线程等待通知机制（wait、notify）', '线程等待通知机制（wait、notify）'],
            ['线程等待操作比较（sleep、wait、park、Condition）', '线程等待操作比较（sleep、wait、park、Condition）'],
            ['线程关键类-ThreadLocal', '线程关键类-ThreadLocal'],
            ['线程池简介', '线程池简介'],
            ['线程池-Executor框架', '线程池-Executor框架'],
        ]
    },
    {
        title: "Java 并发编程-锁",
        collapsable: false,
        sidebarDepth: 0,
        children: [
            ['锁-Lock接口简介', '锁-Lock接口简介'],
            ['锁-AbstractQueuedSynchronizer介绍', '锁-AbstractQueuedSynchronizer介绍'],
            ['锁-AbstractQueuedSynchronizer原理', '锁-AbstractQueuedSynchronizer原理'],
            ['锁-重入锁（ReentrantLock）', '锁-重入锁（ReentrantLock）'],
            ['锁-读写锁（ReentrantReadWriteLock）', '锁-读写锁（ReentrantReadWriteLock）'],
            ['锁相关工具类（LockSupport）', '锁相关工具类（LockSupport）'],
            ['锁等待通知机制（Condition）', '锁等待通知机制（Condition）'],
            ['锁-死锁问题及解决方案', '锁-死锁问题及解决方案'],
            ['锁类型总结', '锁类型总结']
        ]
    },
    {
        title: "Java 并发编程-容器和工具",
        collapsable: false,
        sidebarDepth: 0,
        children: [
            ['并发容器-阻塞队列', '并发容器-阻塞队列'],
            ['jdk1.8-ConcurrentHashMap', 'jdk1.8-ConcurrentHashMap'],
            ['并发容器-ConcurrentLinkedQueue', '并发容器-ConcurrentLinkedQueue'],
            ['并行任务框架-ForkJoin', '并行任务框架-ForkJoin'],
            ['等待多线程完成-CountDownLatch', '等待多线程完成-CountDownLatch'],
            ['同步屏障-CyclicBarrier', '同步屏障-CyclicBarrier'],
            ['控制并发数的信号量-Semaphore', '控制并发数的信号量-Semaphore'],
            ['线程交换数据-Exchanger', '线程交换数据-Exchanger']
        ]
    }
];