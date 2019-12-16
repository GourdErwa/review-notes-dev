// 侧导航定义
module.exports = {
    '/language/java-concurrency/': [
        {
            title: "并发编程-基础概念",
            collapsable: true,
            sidebarDepth: 1,
            children: [
                ['内存模型-基础概念', '内存模型-基础概念'],
                ['内存模型-顺序一致性', '内存模型-顺序一致性'],
                ['并发编程-CAS实现原理', 'CAS实现原理'],
                ['内存模型-原子操作', '原子操作'],
                ['内存模型-final域的内存语义', 'final域的内存语义'],
                ['并发关键字-volatile', '并发关键字-volatile'],
                ['并发关键字-synchronized', '并发关键字-synchronized'],
                ['锁的内存语义', '锁的内存语义'],
                ['锁类型总结', '锁类型总结'],
                ['锁-死锁问题', '死锁问题'],
                ['并发同步、锁定机制比较', '并发同步、锁定机制比较']
            ]
        },
        {
            title: "并发编程-关键类分析",
            collapsable: true,
            sidebarDepth: 1,
            children: [
                ['并发关键类-atomic原子类', 'atomic原子类'],
                ['并发关键类-AbstractQueuedSynchronizer', 'AbstractQueuedSynchronizer'],
                ['并发关键类-ReentrantLock', 'ReentrantLock'],
                ['并发关键类-ReentrantReadWriteLock', 'ReentrantReadWriteLock'],
                ['并发关键类-StampedLock', 'StampedLock'],
                ['并发关键类-Condition', 'Condition'],
                ['并发关键类-CountDownLatch', 'CountDownLatch'],
                ['并发关键类-CyclicBarrier', 'CyclicBarrier']
            ]
        }
    ],
    '/framework/flink-basis/': [
        {
            title: "Flink 基础概念",
            collapsable: true,
            sidebarDepth: 1,
            children: [
                ['基础概念', '基础概念'],
                ['运行环境', '运行环境'],
                ['编程模型', '编程模型'],
                ['类型系统', '类型系统'],
                ['开发前准备与模拟数据集介绍', '开发前准备与模拟数据集介绍'],
                ['基础API概览', '基础API概览'],
                ['Environment概览', 'Environment概览']
            ]
        },
        {
            title: "DataSet（Batch）",
            collapsable: true,
            sidebarDepth: 1,
            children: [
                ['DataSet概览', 'DataSet概览'],
                ['DataSet分配唯一标识符', 'DataSet分配唯一标识符'],
                ['DataSet参数传递', 'DataSet参数传递'],
                ['DataSet广播变量', 'DataSet广播变量'],
                ['DataSet分布式缓冲', 'DataSet分布式缓冲'],
                ['DataSet语义注解', 'DataSet语义注解']
            ]
        }, {
            title: "DataStream（Streaming）",
            collapsable: true,
            sidebarDepth: 1,
            children: [
                ['DataStream概览', 'DataStream概览'],
                ['DataStream时间水印机制', 'DataStream时间水印机制'],
                ['DataStream-ProcessFunction', 'DataStream-ProcessFunction'],
                ['DataStream窗口机制', 'DataStream窗口机制'],
                ['DataStream窗口功能函数', 'DataStream窗口功能函数']
            ]
        }
    ]
}
;
