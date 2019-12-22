(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{281:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("blockquote",[s("p",[t._v("专栏原创出处："),s("a",{attrs:{href:"https://github.com/GourdErwa/review-notes/tree/master/language/java-concurrency",target:"_blank",rel:"noopener noreferrer"}},[t._v("github-源笔记文件 "),s("OutboundLink")],1),t._v(" ，"),s("a",{attrs:{href:"https://github.com/GourdErwa/java-advanced/tree/master/java-concurrency",target:"_blank",rel:"noopener noreferrer"}},[t._v("github-源码 "),s("OutboundLink")],1),t._v("，欢迎 Star，转载请附上原文出处链接和本声明。")])]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#线程池是什么"}},[t._v("线程池是什么")])]),s("li",[s("a",{attrs:{href:"#为什么用线程池"}},[t._v("为什么用线程池")])]),s("li",[s("a",{attrs:{href:"#线程池实现原理"}},[t._v("线程池实现原理")])]),s("li",[s("a",{attrs:{href:"#工作线程运行机制"}},[t._v("工作线程运行机制")])]),s("li",[s("a",{attrs:{href:"#创建线程池"}},[t._v("创建线程池")]),s("ul",[s("li",[s("a",{attrs:{href:"#创建示例"}},[t._v("创建示例")])]),s("li",[s("a",{attrs:{href:"#构造函数说明"}},[t._v("构造函数说明")])])])]),s("li",[s("a",{attrs:{href:"#提交任务到线程池"}},[t._v("提交任务到线程池")]),s("ul",[s("li",[s("a",{attrs:{href:"#execute-方法提交任务"}},[t._v("execute 方法提交任务")])]),s("li",[s("a",{attrs:{href:"#submit-方法提交任务"}},[t._v("submit 方法提交任务")])])])]),s("li",[s("a",{attrs:{href:"#关闭线程池"}},[t._v("关闭线程池")]),s("ul",[s("li",[s("a",{attrs:{href:"#关闭原理"}},[t._v("关闭原理")])]),s("li",[s("a",{attrs:{href:"#关闭返回状态说明"}},[t._v("关闭返回状态说明")])])])]),s("li",[s("a",{attrs:{href:"#合理地配置线程池"}},[t._v("合理地配置线程池")])]),s("li",[s("a",{attrs:{href:"#参考"}},[t._v("参考")])])])]),s("p"),t._v(" "),s("h2",{attrs:{id:"线程池是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#线程池是什么"}},[t._v("#")]),t._v(" 线程池是什么")]),t._v(" "),s("p",[t._v("线程池就是提前创建若干个线程，如果有任务需要处理，线程池里的线程就会处理任务，处理完之后线程并不会被销毁，而是等待下一个任务。")]),t._v(" "),s("p",[t._v("由于创建和销毁线程都是消耗系统资源的，所以当你想要频繁的创建和销毁线程的时候就可以考虑使用线程池来提升系统的性能。")]),t._v(" "),s("h2",{attrs:{id:"为什么用线程池"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么用线程池"}},[t._v("#")]),t._v(" 为什么用线程池")]),t._v(" "),s("ul",[s("li",[t._v("降低资源消耗。通过重复利用已创建的线程降低线程创建和销毁造成的消耗。")]),t._v(" "),s("li",[t._v("提高响应速度。当任务到达时，任务可以不需要等到线程创建就能立即执行。")]),t._v(" "),s("li",[t._v("提高线程的可管理性。线程是稀缺资源，如果无限制地创建，不仅会消耗系统资源，还会降低系统的稳定性，使用线程池可以进行统一分配、调优和监控。")])]),t._v(" "),s("h2",{attrs:{id:"线程池实现原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#线程池实现原理"}},[t._v("#")]),t._v(" 线程池实现原理")]),t._v(" "),s("p",[t._v("当提交一个新任务到线程池时，线程池的处理流程如下：")]),t._v(" "),s("ol",[s("li",[t._v("线程池判断核心线程池里的线程是否都在执行任务。\n"),s("ul",[s("li",[t._v("如果不是，则创建一个新的工作线程来执行任务。")]),t._v(" "),s("li",[t._v("如果是，则进入下个流程。")])])]),t._v(" "),s("li",[t._v("线程池判断工作队列是否已经满。\n"),s("ul",[s("li",[t._v("如果工作队列没有满，则将新提交的任务存储在这个工作队列里。")]),t._v(" "),s("li",[t._v("如果工作队列满了，则进入下个流程。")])])]),t._v(" "),s("li",[t._v("线程池判断线程池的线程是否都处于工作状态。\n"),s("ul",[s("li",[t._v("如果没有，则创建一个新的工作线程来执行任务。")]),t._v(" "),s("li",[t._v("如果已经满了，则交给饱和策略来处理这个任务。")])])])]),t._v(" "),s("p",[t._v("ThreadPoolExecutor 执行 execute 方法的示意图:")]),t._v(" "),s("div",{attrs:{align:"center"}},[s("img",{attrs:{src:"https://blog-review-notes.oss-cn-beijing.aliyuncs.com/language/java-concurrency/_images/ThreadPoolExecutor-执行示意图.png"}})]),t._v(" "),s("p",[t._v("ThreadPoolExecutor 执行 execute 方法分下面 4 种情况。")]),t._v(" "),s("ol",[s("li",[t._v("如果当前运行的线程少于 corePoolSize，则创建新线程来执行任务 (注意，执行这一步骤需要获取全局锁 mainLock )。")]),t._v(" "),s("li",[t._v("如果运行的线程等于或多于 corePoolSize，则将任务加入 BlockingQueue。")]),t._v(" "),s("li",[t._v("如果无法将任务加入 BlockingQueue(队列已满)，则创建新的线程来处理任务 (注意，执行这一步骤需要获取全局锁)。")]),t._v(" "),s("li",[t._v("如果创建新线程将使当前运行的线程超出 maximumPoolSize，任务将被拒绝，并调用 RejectedExecutionHandler.rejectedExecution() 方法。")])]),t._v(" "),s("p",[t._v("ThreadPoolExecutor 采取上述步骤的总体设计思路，是为了在执行 execute 方法时，尽可地避免获取全局锁。在 ThreadPoolExecutor 完成预热之后 (当前运行的线程数大于等于 corePoolSize)，几乎所有的 execute 方法调用都是执行步骤 2，而步骤 2 不需要获取全局锁。")]),t._v(" "),s("p",[t._v("ThreadPoolExecutor.execute 提交任务源码分析：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("execute")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Runnable")]),t._v(" command"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("command "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NullPointerException")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" c "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ctl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 运行的线程少于 corePoolSize 时则创建线程并执行当前任务")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("workerCountOf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" corePoolSize"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addWorker")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("command"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            c "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ctl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        \n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如线程数大于等于基本线程数或线程创建失败，则将当前任务放到工作队列中。")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isRunning")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" workQueue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("offer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("command"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" recheck "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ctl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 重新检查是否满足条件（可能上次检查后有线程完成）")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isRunning")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("recheck"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("remove")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("command"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("reject")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("command"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("workerCountOf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("recheck"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addWorker")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addWorker")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("command"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果无法将任务排队，则尝试添加新的线程")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("reject")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("command"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 添加失败，抛出 RejectedExecutionException 异常")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"工作线程运行机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#工作线程运行机制"}},[t._v("#")]),t._v(" 工作线程运行机制")]),t._v(" "),s("p",[t._v("线程池创建线程时，会将线程封装成工作线程 Worker，Worker 在执行完任务后，还会循环获取工作队列里的任务来执行。")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Worker")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AbstractQueuedSynchronizer")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Runnable")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("runWorker")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Worker")]),t._v(" w"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Thread")]),t._v(" wt "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Thread")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("currentThread")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Runnable")]),t._v(" task "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" w"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("firstTask"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        w"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("firstTask "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        w"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("unlock")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 允许中断")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" completedAbruptly "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("task "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("task "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getTask")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 循环获取任务")]),t._v("\n                w"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("lock")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 为什么加锁？参考文章下面解释")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 中断处理：如果池正在停止，或者运行 worker 被中断")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("runStateAtLeast")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" STOP"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v("\n                     "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Thread")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("interrupted")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v("\n                      "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("runStateAtLeast")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" STOP"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("wt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isInterrupted")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                    wt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("interrupt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("beforeExecute")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("wt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" task"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                        task"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("run")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 运行任务逻辑")]),t._v("\n                        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("afterExecute")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("task"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Throwable")]),t._v(" ex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("afterExecute")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("task"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" ex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("finally")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    task "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                    w"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("completedTasks"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                    w"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("unlock")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            completedAbruptly "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("finally")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("processWorkerExit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("w"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" completedAbruptly"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("Worker 为什么在执行任务时候加锁？")]),t._v(" "),s("ul",[s("li",[t._v("Worker 抑制线程真正开始运行任务之前的中断，将 lock 状态初始化为负值，并在启动时将其清除（在 runWorker 方法中）")]),t._v(" "),s("li",[t._v("锁被设计为非重入互斥锁，避免调用线程池方法 setCorePoolSize 时也能获取锁，保证等待工作的 Worker 是一个可以执行任务的，不是一个将要中断的 Worker")]),t._v(" "),s("li",[t._v("锁的控制保护了正在执行 task 的 Worker 不能被其他线程中断（必须竞争锁后才能执行中断）")])]),t._v(" "),s("blockquote",[s("p",[t._v("例如：Worker 执行时所属的线程为 wt，如果 wt 线程想中断 Worker 时必须获取 Worker 的锁")])]),t._v(" "),s("h2",{attrs:{id:"创建线程池"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建线程池"}},[t._v("#")]),t._v(" 创建线程池")]),t._v(" "),s("h3",{attrs:{id:"创建示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建示例"}},[t._v("#")]),t._v(" 创建示例")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ThreadPoolExecutor")]),t._v(" poolExecutor "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ThreadPoolExecutor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// corePoolSize")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// maximumPoolSize")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TimeUnit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MINUTES"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// keepAliveTime")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ArrayBlockingQueue")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// BlockingQueue")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Thread")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ThreadFactory")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ThreadPoolExecutor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DiscardPolicy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// RejectedExecutionHandler")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"构造函数说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#构造函数说明"}},[t._v("#")]),t._v(" 构造函数说明")]),t._v(" "),s("h4",{attrs:{id:"corepoolsize"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#corepoolsize"}},[t._v("#")]),t._v(" corePoolSize")]),t._v(" "),s("p",[t._v("当提交一个任务到线程池时，线程池会创建一个线程来执行任务，即使其他空闲的基本线程能够执行新任务也会创建线程，等到需要执行的任务数大于线程池基本大小时就不再创建。")]),t._v(" "),s("blockquote",[s("p",[t._v("如果调用了线程池的 prestartAllCoreThreads() 方法， 线程池会提前创建并启动所有基本线程。")])]),t._v(" "),s("h4",{attrs:{id:"keepalivetime"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#keepalivetime"}},[t._v("#")]),t._v(" keepAliveTime")]),t._v(" "),s("p",[t._v("当线程数大于核心线程数量时，多余的线程多久后回收")]),t._v(" "),s("h4",{attrs:{id:"maximumpoolsize"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#maximumpoolsize"}},[t._v("#")]),t._v(" maximumPoolSize")]),t._v(" "),s("p",[t._v("线程池允许创建的最大线程数。如果队列满了，并且已创建的线程数小于最大线程数，则线程池会再创建新的线程执行任务。")]),t._v(" "),s("blockquote",[s("p",[t._v("注意，如果使用了无界的任务队列这个参数就没什么效果。")])]),t._v(" "),s("h4",{attrs:{id:"blockingqueue"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#blockingqueue"}},[t._v("#")]),t._v(" BlockingQueue")]),t._v(" "),s("p",[t._v("用于保存等待执行的任务的阻塞队列 "),s("code",[t._v("BlockingQueue")]),t._v("。可以选择以下几个阻塞队列:")]),t._v(" "),s("ul",[s("li",[t._v("ArrayBlockingQueue: 是一个基于数组结构的有界阻塞队列，此队列按 FIFO(先进先出) 原则对元素进行排序。")]),t._v(" "),s("li",[t._v("DelayQueue: 一个无界阻塞队列，只有在延迟期满时，才能从中提取元素，队列的头部，是延迟期满后保存时间最长的 delay 元素")]),t._v(" "),s("li",[t._v("LinkedBlockingQueue: 一个基于链表结构的阻塞队列，此队列按 FIFO 排序元素，吞吐量通常要高于 ArrayBlockingQueue。")]),t._v(" "),s("li",[t._v("LinkedBlockingDeque: 一个由链表结构组成的双向阻塞队列。")]),t._v(" "),s("li",[t._v("LinkedTransferQueue: 一个由链表结构组成的无界阻塞队列。")]),t._v(" "),s("li",[t._v("SynchronousQueue: 一个不存储元素的阻塞队列。每个插入操作必须等到另一个线程调用移除操作，否则插入操作一直处于阻塞状态，吞吐量通常要高于 Linked-BlockingQueue。")]),t._v(" "),s("li",[t._v("PriorityBlockingQueue: 一个具有优先级的无限阻塞队列。")])]),t._v(" "),s("h4",{attrs:{id:"threadfactory"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#threadfactory"}},[t._v("#")]),t._v(" ThreadFactory")]),t._v(" "),s("p",[t._v("用于设置创建线程的工厂，可以通过线程工厂给每个创建出来的线程设置更有意义的名字。")]),t._v(" "),s("h4",{attrs:{id:"rejectedexecutionhandler"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rejectedexecutionhandler"}},[t._v("#")]),t._v(" RejectedExecutionHandler")]),t._v(" "),s("p",[t._v("当队列和线程池都满了，说明线程池处于饱和状态，那么必须采取一种策略处理提交的新任务。这个策略默认情况下是 AbortPolicy，表示无法处理新任务时抛出异常。在 JDK 1.5 中 Java 线程池框架提供了以下 4 种策略。")]),t._v(" "),s("ul",[s("li",[t._v("AbortPolicy:直接抛出异常。")]),t._v(" "),s("li",[t._v("CallerRunsPolicy:只用调用者所在线程来运行任务。")]),t._v(" "),s("li",[t._v("DiscardOldestPolicy:丢弃队列里最近的一个任务，并执行当前任务。")]),t._v(" "),s("li",[t._v("DiscardPolicy:不处理，丢弃掉。")])]),t._v(" "),s("blockquote",[s("p",[t._v("也可以根据应用场景需要来实现 RejectedExecutionHandler 接口自定义策略。")])]),t._v(" "),s("h2",{attrs:{id:"提交任务到线程池"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#提交任务到线程池"}},[t._v("#")]),t._v(" 提交任务到线程池")]),t._v(" "),s("p",[t._v("可以使用两个方法向线程池提交任务，分别为 execute 和 submit 方法。")]),t._v(" "),s("h3",{attrs:{id:"execute-方法提交任务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#execute-方法提交任务"}},[t._v("#")]),t._v(" execute 方法提交任务")]),t._v(" "),s("p",[t._v("execute 方法用于提交不需要返回值的任务。")]),t._v(" "),s("p",[t._v("所以无法判断任务是否被线程池执行成功。")]),t._v(" "),s("h3",{attrs:{id:"submit-方法提交任务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#submit-方法提交任务"}},[t._v("#")]),t._v(" submit 方法提交任务")]),t._v(" "),s("p",[t._v("submit 方法用于提交需要返回值的任务。")]),t._v(" "),s("p",[t._v("线程池会返回一个 Future 类型的对象，通过这个 Future 对象可以判断任务是否执行成功，并且可以通过 Future 的 get 方法来获取返回值，get 方法会阻塞当前线程直到任务完成，而使用 get(long timeout，TimeUnit unit) 方法则会阻塞当前线程一段时间后立即返回，这时候有可能任务没有执行完。")]),t._v(" "),s("h2",{attrs:{id:"关闭线程池"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关闭线程池"}},[t._v("#")]),t._v(" 关闭线程池")]),t._v(" "),s("p",[t._v("通过调用线程池的 shutdown 或 shutdownNow 方法来关闭线程池。")]),t._v(" "),s("h3",{attrs:{id:"关闭原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关闭原理"}},[t._v("#")]),t._v(" 关闭原理")]),t._v(" "),s("p",[t._v("原理是遍历线程池中的工作线程，然后逐个调用线程的 interrupt 方法来中断线程，所以无法响应中断的任务可能永远无法终止。"),s("br"),t._v("\n但是它们存在一定的区别：")]),t._v(" "),s("ul",[s("li",[t._v("shutdownNow 首先将线程池的状态设置成 STOP，然后尝试停止所有的正在执行或暂停任务的线程，并返回等待执行任务的列表。")]),t._v(" "),s("li",[t._v("shutdown 只是将线程池的状态设置成 SHUTDOWN 状态，然后中断所有没有正在执行任务的线程。")])]),t._v(" "),s("h3",{attrs:{id:"关闭返回状态说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关闭返回状态说明"}},[t._v("#")]),t._v(" 关闭返回状态说明")]),t._v(" "),s("ul",[s("li",[t._v("isShutdown: 只要调用了这两个关闭方法中的任意一个，isShutdown 方法就会返回 true。")]),t._v(" "),s("li",[t._v("isTerminated: 当所有的任务都已关闭后，才表示线程池关闭成功，这时调用 isTerminated 方法会返回 true。")])]),t._v(" "),s("p",[t._v("至于应该调用哪一种方法来关闭线程池，应该由提交到线程池的任务特性决定，通常调用 shutdown 方法来关闭线程池，如果任务不一定要执行完，则可以调用 shutdownNow 方法。")]),t._v(" "),s("h2",{attrs:{id:"合理地配置线程池"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#合理地配置线程池"}},[t._v("#")]),t._v(" 合理地配置线程池")]),t._v(" "),s("p",[t._v("要想合理地配置线程池，就必须首先分析任务特性，可以从以下几个角度来分析：")]),t._v(" "),s("ul",[s("li",[t._v("任务的性质：CPU 密集型任务、IO 密集型任务和混合型任务。")]),t._v(" "),s("li",[t._v("任务的优先级：高、中和低。")]),t._v(" "),s("li",[t._v("任务的执行时间：长、中和短。")]),t._v(" "),s("li",[t._v("任务的依赖性：是否依赖其他系统资源，如数据库连接。")])]),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("性质不同的任务可以用不同规模的线程池分开处理。")]),t._v(" "),s("ul",[s("li",[t._v("CPU 密集型任务应配置尽可能小的线程，如配置 cpu+1 个线程的线程池。由于 IO 密集型任务线程并不是一直在执行任务，则应配置尽可能多的线程，如 2*cpu。")]),t._v(" "),s("li",[t._v("混合型的任务，如果可以拆分，将其拆分成一个 CPU 密集型任务和一个 IO 密集型任务，只要这两个任务执行的时间相差不是太大，那么分解后执行的吞吐量将高于串行执行的吞吐量。\n如果这两个任务执行时间相差太大，则没必要进行分解。可以通过 Runtime.getRuntime().availableProcessors() 方法获得当前设备的 CPU 个数。")]),t._v(" "),s("li",[t._v("优先级不同的任务可以使用优先级队列 PriorityBlockingQueue 来处理。它可以让优先级高的任务先执行。")])]),t._v(" "),s("blockquote",[s("p",[t._v("建议使用有界队列。有界队列能增加系统的稳定性和预警能力。")])]),t._v(" "),s("h2",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),s("ul",[s("li",[t._v("并发编程的艺术")])])])}),[],!1,null,null,null);a.default=e.exports}}]);