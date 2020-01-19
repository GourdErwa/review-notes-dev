(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{360:function(t,e,a){"use strict";a.r(e);var r=a(0),l=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("blockquote",[a("p",[t._v("专栏原创出处："),a("a",{attrs:{href:"https://github.com/GourdErwa/review-notes/tree/master/language/java-jvm",target:"_blank",rel:"noopener noreferrer"}},[t._v("github-源笔记文件 "),a("OutboundLink")],1),t._v(" ，"),a("a",{attrs:{href:"https://github.com/GourdErwa/java-advanced/tree/master/java-jvm",target:"_blank",rel:"noopener noreferrer"}},[t._v("github-源码 "),a("OutboundLink")],1),t._v("，欢迎 Star，转载请附上原文出处链接和本声明。")])]),t._v(" "),a("p",[t._v("Java JVM-虚拟机专栏系列笔记，系统性学习可访问个人复盘笔记-技术博客 "),a("a",{attrs:{href:"https://review-notes.top/language/java-jvm/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java JVM-虚拟机 "),a("OutboundLink")],1)]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#一、诊断思路"}},[t._v("一、诊断思路")])]),a("li",[a("a",{attrs:{href:"#二、诊断过程"}},[t._v("二、诊断过程")]),a("ul",[a("li",[a("a",{attrs:{href:"#_1-定位-pid"}},[t._v("1. 定位 PID")])]),a("li",[a("a",{attrs:{href:"#_2-使用本机内存跟踪（nmt）追踪内存变化情况"}},[t._v("2. 使用本机内存跟踪（NMT）追踪内存变化情况")])]),a("li",[a("a",{attrs:{href:"#_3-分析堆直方图、生成-dump-文件"}},[t._v("3. 分析堆直方图、生成 dump 文件")])]),a("li",[a("a",{attrs:{href:"#_4-dump-文件分析"}},[t._v("4. dump 文件分析")])])])]),a("li",[a("a",{attrs:{href:"#三、gc-相关问题诊断"}},[t._v("三、GC 相关问题诊断")])]),a("li",[a("a",{attrs:{href:"#专栏更多文章笔记"}},[t._v("专栏更多文章笔记")])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"一、诊断思路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、诊断思路"}},[t._v("#")]),t._v(" 一、诊断思路")]),t._v(" "),a("p",[t._v("在 OOM 触发时，我们的程序可能已经挂掉或者假死了，一般情况我们可能会重启程序一边运行一边进行故障定位。一直循环这个过程，直到定位到根源问题。")]),t._v(" "),a("p",[t._v("1）"),a("strong",[t._v("程序挂掉时")]),t._v("，自动生成 dump 文件进行分析。")]),t._v(" "),a("p",[t._v("使用 JVM 参数获取 dump 文件")]),t._v(" "),a("ul",[a("li",[t._v("-XX:+HeapDumpOnOutOfMemoryError，当 OutOfMemoryError 发生时自动生成 Heap Dump 文件。")]),t._v(" "),a("li",[t._v("-XX:+HeapDumpBeforeFullGC，当 JVM 执行 FullGC 前执行 dump。")]),t._v(" "),a("li",[t._v("-XX:+HeapDumpAfterFullGC，当 JVM 执行 FullGC 后执行 dump。")]),t._v(" "),a("li",[t._v("-XX:+HeapDumpOnCtrlBreak，交互式获取 dump。在控制台按下快捷键 Ctrl + Break 时，JVM 就会转存一下堆快照。")]),t._v(" "),a("li",[t._v("-XX:HeapDumpPath=/test.hprof，指定 dump 文件存储路径。")])]),t._v(" "),a("p",[t._v("2）"),a("strong",[t._v("程序运行时")]),t._v("，同步进行故障诊断，大体思路为：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("哪些对象导致堆空间增长（堆空间直方图）")])]),t._v(" "),a("li",[a("p",[t._v("哪些对象不能被垃圾回收")])]),t._v(" "),a("li",[a("p",[t._v("GC 回收的表现，年轻代与老年代的回收频率结果，Full GC 的触发时机")])]),t._v(" "),a("li",[a("p",[t._v("使用本机内存跟踪（NMT）实时比对各内存区域增减情况")])])]),t._v(" "),a("p",[t._v("诊断过程发现一定规律后，尝试生成 dump 文件进行分析")]),t._v(" "),a("p",[t._v("3）"),a("strong",[t._v("分析 dump 文件思路")])]),t._v(" "),a("ul",[a("li",[t._v("哪些对象较大，数量较多")]),t._v(" "),a("li",[t._v("大对象的占用率")]),t._v(" "),a("li",[t._v("大对象的引用栈，分析无效引用")])]),t._v(" "),a("p",[t._v("本文内容从如何观察堆空间直方图及 dump 文件分析为主要点进行分析")]),t._v(" "),a("p",[t._v("JDK 相关命令详细用法可参考  "),a("a",{attrs:{href:"https://blog.csdn.net/xiaohulunb/article/details/103887785",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java JVM JDK13 诊断命令处理工具 jps,jstat,jinfo,jmap,jstack,jcmd"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"二、诊断过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、诊断过程"}},[t._v("#")]),t._v(" 二、诊断过程")]),t._v(" "),a("h3",{attrs:{id:"_1-定位-pid"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-定位-pid"}},[t._v("#")]),t._v(" 1. 定位 PID")]),t._v(" "),a("p",[t._v("执行 "),a("code",[t._v("jps -l")]),t._v(" 命令，定位高内存占用的 PID")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("jps -l\n1174 org.elasticsearch.bootstrap.Elasticsearch\n")])])]),a("h3",{attrs:{id:"_2-使用本机内存跟踪（nmt）追踪内存变化情况"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-使用本机内存跟踪（nmt）追踪内存变化情况"}},[t._v("#")]),t._v(" 2. 使用本机内存跟踪（NMT）追踪内存变化情况")]),t._v(" "),a("p",[t._v("VM 参数配置启用内存跟踪（会导致 5％-10％的性能开销），"),a("code",[t._v("-XX:NativeMemoryTracking=[off|summary|detail]")]),t._v("。")]),t._v(" "),a("blockquote",[a("p",[t._v("如果在 JVM 退出时打印追踪信息配置： "),a("code",[t._v("-XX:+UnlockDiagnosticVMOptions -XX:+PrintNMTStatistics")])])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("jcmd NMT Option")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("off")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("关闭，默认处于该状态")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("summary")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("收集摘要信息")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("detail")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("收集详细信息")])])])]),t._v(" "),a("p",[t._v("执行 "),a("code",[t._v("jcmd <pid> VM.native_memory")]),t._v(" 进行追踪统计，命令支持功能如下：")]),t._v(" "),a("p",[a("code",[t._v("jcmd <pid> VM.native_memory [summary|detail|baseline|summary.diff|detail.diff|shutdown] [scale= KB|MB|GB]")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("jcmd NMT Option")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("summary")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("打印摘要信息")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("detail")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("打印详细信息")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("baseline")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("创建一个新的内存使用情况基准快照以进行比较")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("summary.diff")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("根据最后一个基准打印新的摘要报告")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("detail.diff")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("根据最后一个基准打印新的详细报告")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("shutdown")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("停止本机内存跟踪")])])])]),t._v(" "),a("p",[t._v("使用示例：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("jcmd 5460 VM.native_memory baseline   ———— 创建一个基准快照\n\njcmd 5460 VM.native_memory detail.diff  —————— 一段时间后进行比较\n\n———————— 部分打印信息如下：\nTotal: reserved=664624KB  -20610KB, committed=254344KB -20610KB  <--- 与基线比较，+增加，-减少\n \n-  Java Heap (reserved=516096KB, committed=204800KB)\n             (mmap: reserved=516096KB, committed=204800KB)\n \n-  Class (reserved=6578KB +3KB, committed=4530KB +3KB)\n         (classes #668 +3)                           <--- 3 个类被加载\n         (malloc=434KB +3KB, #930 -7)                <--- malloc 的内存增加了 3KB，但是 malloc 的数量减少了 7\n         (mmap: reserved=6144KB, committed=4096KB)\n   ...\n   ...      \n")])])]),a("p",[t._v("更多内容可参考官方文档\n"),a("a",{attrs:{href:"https://docs.oracle.com/en/java/javase/13/vm/native-memory-tracking.html#GUID-710CAEA1-7C6D-4D80-AB0C-B0958E329407",target:"_blank",rel:"noopener noreferrer"}},[t._v("Native Memory Tracking"),a("OutboundLink")],1),t._v(" ，\n"),a("a",{attrs:{href:"https://docs.oracle.com/en/java/javase/13/troubleshoot/diagnostic-tools.html#GUID-635E34C2-CDDC-4C1A-8C3E-3C68F1FEC775",target:"_blank",rel:"noopener noreferrer"}},[t._v("使用 NMT 检测内存泄漏 "),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"_3-分析堆直方图、生成-dump-文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-分析堆直方图、生成-dump-文件"}},[t._v("#")]),t._v(" 3. 分析堆直方图、生成 dump 文件")]),t._v(" "),a("p",[t._v("建议使用最新的 jcmd 而不是 jmap 实用程序，以增强诊断功能并降低性能开销，jcmd 命令提供了很多诊断功能，参考上面的处理工具文章链接使用。")]),t._v(" "),a("p",[t._v("下面小节中分别介绍 jcmd、jmap 2 个命令的使用，选择你合适的即可。")]),t._v(" "),a("blockquote",[a("p",[t._v("dump 文件太大时请注意，为了保证 dump 的信息是可靠的，所以会暂停应用程序。如果 jmap 添加了 :live 参数后，JVM 会先触发 gc，然后再统计信息。")])]),t._v(" "),a("p",[a("strong",[t._v("2.1) 使用 jcmd 命令分析")])]),t._v(" "),a("ol",[a("li",[t._v("执行 "),a("code",[t._v("jcmd PID GC.class_histogram")]),t._v(" 命令查看堆直方图，示例如下：")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("jcmd 11704 GC.class_histogram\n11704:\n num     #instances         #bytes  class name (module)\n-------------------------------------------------------\n   1:       2007799       48573456  [B (java.base@11.0.5)\n   2:       2007232       48173568  java.lang.String (java.base@11.0.5)\n   3:       2000000       48000000  io.gourd.java.jvm.oom.Oom$OomKey\n   4:       1003838       32122816  java.util.HashMap$Node (java.base@11.0.5)\n   5:           322        8435136  [Ljava.util.HashMap$Node; (java.base@11.0.5)\n")])])]),a("p",[t._v("输出显示堆中每种类类型的总大小和实例计数。如果获得了一系列直方图（例如，每 2 分钟一次），则您可能能够观察到可以进行进一步分析的趋势。")]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("执行 "),a("code",[t._v("jcmd PID GC.heap_dump filename=filename")]),t._v(" 生成 dump 文件")])]),t._v(" "),a("p",[a("strong",[t._v("2.2) 使用 jmap 命令分析")])]),t._v(" "),a("ol",[a("li",[t._v("执行 "),a("code",[t._v("jmap -histo:live PID")]),t._v(" 命令查看堆直方图，示例如下：")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("jmap -histo:live 1174\n num     #instances         #bytes  class name (module)\n-------------------------------------------------------\n   1:          7570         503328  [B (java.base@11.0.2)\n   2:          6987         167688  java.lang.String (java.base@11.0.2)\n   3:          1224         150344  java.lang.Class (java.base@11.0.2)\n   4:          3825         122400  java.util.HashMap$Node (java.base@11.0.2)\n   \n... 更多内容未粘贴   \n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("执行 "),a("code",[t._v("jmap -dump:live,format=b,file=test.dump PID")]),t._v(" 将存活对象转换为 dump 文件进行离线分析")])]),t._v(" "),a("h3",{attrs:{id:"_4-dump-文件分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-dump-文件分析"}},[t._v("#")]),t._v(" 4. dump 文件分析")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://blog-review-notes.oss-cn-beijing.aliyuncs.com/language/java-jvm/_images/jvisualvm-大对象分析.png"}}),t._v(" "),a("p",[t._v("JDK 自带的 jvisualvm 工具进行分析 ")])]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://blog-review-notes.oss-cn-beijing.aliyuncs.com/language/java-jvm/_images/jprofile-大对象分析.png"}}),t._v(" "),a("p",[t._v("jprofile 工具进行分析 ")])]),t._v(" "),a("p",[t._v("实际生产过程中我们可以选择更多的工具进行运行监控、分析 dump 文件：")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.eclipse.org/mat/",target:"_blank",rel:"noopener noreferrer"}},[t._v("推荐-Memory Analyzer (MAT)"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.ej-technologies.com/products/jprofiler/overview.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("推荐-付费-jprofiler"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://docs.oracle.com/javacomponents/jmc-5-4/jfr-runtime-guide/run.htm#JFRUH176",target:"_blank",rel:"noopener noreferrer"}},[t._v("推荐-Flight Recorder-飞行记录仪 "),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://docs.oracle.com/javase/9/tools/jhsdb.htm",target:"_blank",rel:"noopener noreferrer"}},[t._v("jhsdb"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://openjdk.java.net/tools/svc/jconsole/",target:"_blank",rel:"noopener noreferrer"}},[t._v("jconsole"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.oracle.com/technetwork/java/javaseproducts/mission-control/java-mission-control-1998576.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java Mission Control"),a("OutboundLink")],1)])]),t._v(" "),a("blockquote",[a("p",[t._v("更多 JDK 相关命令详细用法可参考  "),a("a",{attrs:{href:"https://blog.csdn.net/xiaohulunb/article/details/103887785",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java JVM JDK13 诊断命令处理工具 jps,jstat,jinfo,jmap,jstack,jcmd"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("更多故障诊断及调优，参考本专栏 "),a("a",{attrs:{href:"https://blog.csdn.net/xiaohulunb/article/details/103828570",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java JVM（JDK13）-专栏文章目录汇总 "),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"三、gc-相关问题诊断"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、gc-相关问题诊断"}},[t._v("#")]),t._v(" 三、GC 相关问题诊断")]),t._v(" "),a("p",[t._v("GC 及内存区域占用情况分析可使用 "),a("code",[t._v("jstat")]),t._v(" 命令进行分析")]),t._v(" "),a("p",[t._v("比如：执行 "),a("code",[t._v("jstat -gcutil -t -h 5 PID 500 10")]),t._v(" 查看各内存区域占用情况")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("jstat -gcutil -t -h 5 1174 500 10\nTimestamp         S0     S1     E      O      M     CCS    YGC     YGCT    FGC    FGCT     GCT\n         1138.7   0.00 100.00  25.00  22.32  94.42  85.09     29    0.064     4    0.067    0.131\n         1139.2   0.00 100.00  50.00  22.32  94.42  85.09     29    0.064     4    0.067    0.131\n         1139.8   0.00 100.00  50.00  22.32  94.42  85.09     29    0.064     4    0.067    0.131\n         1140.3   0.00 100.00  50.00  22.32  94.42  85.09     29    0.064     4    0.067    0.131\n         1140.8   0.00 100.00  50.00  22.32  94.42  85.09     29    0.064     4    0.067    0.131\nTimestamp         S0     S1     E      O      M     CCS    YGC     YGCT    FGC    FGCT     GCT\n         1141.3   0.00 100.00  50.00  22.32  94.42  85.09     29    0.064     4    0.067    0.131\n         1141.8   0.00 100.00  50.00  22.32  94.42  85.09     29    0.064     4    0.067    0.131\n         1142.3   0.00 100.00  50.00  22.32  94.42  85.09     29    0.064     4    0.067    0.131\n         1142.8   0.00 100.00  50.00  22.32  94.42  85.09     29    0.064     4    0.067    0.131\n         1143.3   0.00 100.00  50.00  22.32  94.42  85.09     29    0.064     4    0.067    0.131\n")])])]),a("h2",{attrs:{id:"专栏更多文章笔记"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#专栏更多文章笔记"}},[t._v("#")]),t._v(" 专栏更多文章笔记")]),t._v(" "),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"https://gourderwa.blog.csdn.net/article/details/104020339",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java 核心知识-专栏文章目录汇总 "),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://blog.csdn.net/xiaohulunb/article/details/103594468",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java 并发编程-专栏文章目录汇总 "),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://blog.csdn.net/xiaohulunb/article/details/103828570",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java JVM（JDK13）-专栏文章目录汇总 "),a("OutboundLink")],1)])])])])}),[],!1,null,null,null);e.default=l.exports}}]);