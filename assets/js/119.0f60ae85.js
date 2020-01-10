(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{331:function(a,t,s){"use strict";s.r(t);var n=s(0),v=Object(n.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("blockquote",[s("p",[a._v("专栏原创出处："),s("a",{attrs:{href:"https://github.com/GourdErwa/review-notes/tree/master/language/java-jvm",target:"_blank",rel:"noopener noreferrer"}},[a._v("github-源笔记文件 "),s("OutboundLink")],1),a._v(" ，"),s("a",{attrs:{href:"https://github.com/GourdErwa/java-advanced/tree/master/java-jvm",target:"_blank",rel:"noopener noreferrer"}},[a._v("github-源码 "),s("OutboundLink")],1),a._v("，欢迎 Star，转载请附上原文出处链接和本声明。")])]),a._v(" "),s("p",[a._v("Java JVM-虚拟机专栏系列笔记，系统性学习可访问个人复盘笔记-技术博客 "),s("a",{attrs:{href:"https://review-notes.top/language/java-jvm/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Java JVM-虚拟机 "),s("OutboundLink")],1)]),a._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#一、前言"}},[a._v("一、前言")])]),s("li",[s("a",{attrs:{href:"#二、类加载过程"}},[a._v("二、类加载过程")]),s("ul",[s("li",[s("a",{attrs:{href:"#加载"}},[a._v("加载")])]),s("li",[s("a",{attrs:{href:"#验证"}},[a._v("验证")])]),s("li",[s("a",{attrs:{href:"#准备"}},[a._v("准备")])]),s("li",[s("a",{attrs:{href:"#解析"}},[a._v("解析")])]),s("li",[s("a",{attrs:{href:"#初始化"}},[a._v("初始化")])])])]),s("li",[s("a",{attrs:{href:"#三、类加载器"}},[a._v("三、类加载器")]),s("ul",[s("li",[s("a",{attrs:{href:"#_1-关于类的比较"}},[a._v("1. 关于类的比较")])]),s("li",[s("a",{attrs:{href:"#_2-类加载器有哪些"}},[a._v("2. 类加载器有哪些")])]),s("li",[s("a",{attrs:{href:"#_3-jdk-9-前的双亲委派模式"}},[a._v("3. JDK 9 前的双亲委派模式")])]),s("li",[s("a",{attrs:{href:"#_4-jdk-9-的双亲委派模式"}},[a._v("4. JDK 9 的双亲委派模式")])]),s("li",[s("a",{attrs:{href:"#_5-双亲委派模式示意图"}},[a._v("5. 双亲委派模式示意图")])])])]),s("li",[s("a",{attrs:{href:"#总结"}},[a._v("总结")])]),s("li",[s("a",{attrs:{href:"#参考"}},[a._v("参考")])])])]),s("p"),a._v(" "),s("h2",{attrs:{id:"一、前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、前言"}},[a._v("#")]),a._v(" 一、前言")]),a._v(" "),s("p",[a._v("Java 源文件最终编译为 Class 文件，Class 文件中描述的各类信息，最终都需要加载到虚拟机中之后才能被运行和使用。")]),a._v(" "),s("p",[a._v("本节内容主要介绍")]),a._v(" "),s("ul",[s("li",[a._v("虚拟机如何加载这些 Class 文件")]),a._v(" "),s("li",[a._v("Class 文件中的信息进入到虚拟机后会发生什么变化")]),a._v(" "),s("li",[a._v("类加载的过程")]),a._v(" "),s("li",[a._v("JDK 9 前后双亲委派模式")])]),a._v(" "),s("h2",{attrs:{id:"二、类加载过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、类加载过程"}},[a._v("#")]),a._v(" 二、类加载过程")]),a._v(" "),s("p",[a._v("一个类型从被加载到虚拟机内存中开始，到卸载出内存为止，它的整个生命周期将会经历七个阶段")]),a._v(" "),s("ul",[s("li",[a._v("加载（Loading）")]),a._v(" "),s("li",[a._v("验证（Verification）")]),a._v(" "),s("li",[a._v("准备（Preparation）")]),a._v(" "),s("li",[a._v("解析（Resolution）")]),a._v(" "),s("li",[a._v("初始化（Initialization）")]),a._v(" "),s("li",[a._v("使用（Using）")]),a._v(" "),s("li",[a._v("卸载（Unloading）")])]),a._v(" "),s("blockquote",[s("p",[a._v("「解析阶段」在某些情况下可以在「初始化阶段」之后再开始，这是为了支持 Java 语言的运行时绑定特性。")])]),a._v(" "),s("p",[a._v("涉及名词解释：")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("符号引用：符号引用以一组符号来描述所引用的目标，符号可以是任何形式的字面量，只要使用时能无歧义地定位到目标即可。\n符号引用与虚拟机实现的内存布局无关，引用的目标并不一定是已经加载到虚拟机内存当中的内容。\n各种虚拟机实现的内存布局可以各不相同，但是它们能接受的符号引用必须都是一致的，因为符号引用的字面量形式明确定义在《Java 虚拟机规范》的 Class 文件格式中。")])]),a._v(" "),s("li",[s("p",[a._v("直接引用：直接引用是可以直接指向目标的指针、相对偏移量或者是一个能间接定位到目标的句柄。\n直接引用是和虚拟机实现的内存布局直接相关的，同一个符号引用在不同虚拟机实例上翻译出来的直接引用一般不会相同。如果有了直接引用，那引用的目标必定已经在虚拟机的内存中存在。")])])]),a._v(" "),s("h3",{attrs:{id:"加载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#加载"}},[a._v("#")]),a._v(" 加载")]),a._v(" "),s("p",[a._v("在加载阶段，Java 虚拟机需要完成以下三件事情：")]),a._v(" "),s("ol",[s("li",[s("p",[a._v("通过一个类的全限定名来获取定义此类的二进制字节流。")])]),a._v(" "),s("li",[s("p",[a._v("将这个字节流所代表的静态存储结构转化为方法区的运行时数据结构。")])]),a._v(" "),s("li",[s("p",[a._v("在内存中生成一个代表这个类的 java.lang.Class 对象，作为方法区这个类的各种数据的访问入口。")])])]),a._v(" "),s("blockquote",[s("p",[a._v("对于数组类而言，情况有所不同，数组类本身不通过类加载器创建，它是由 Java 虚拟机直接在内存中动态构造出来的。")])]),a._v(" "),s("p",[a._v("加载阶段结束后，Java 虚拟机外部的二进制字节流就按照虚拟机所设定的格式存储在方法区之中，在 Java 堆内存中实例化一个 java.lang.Class 类的对象，这个对象将作为程序访问方法区中的类型数据的外部接口。")]),a._v(" "),s("blockquote",[s("p",[a._v("方法区中的数据存储格式完全由虚拟机实现自行定义，《Java 虚拟机规范》未规定此区域的具体数据结构。")])]),a._v(" "),s("h3",{attrs:{id:"验证"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#验证"}},[a._v("#")]),a._v(" 验证")]),a._v(" "),s("p",[a._v("验证的目的是确保 Class 文件的字节流中包含的信息符合《Java 虚拟机规范》的全部约束要求，保证这些信息被当作代码运行后不会危害虚拟机自身的安全。")]),a._v(" "),s("ol",[s("li",[s("p",[a._v("文件格式验证：\n验证字节流是否符合 Class 文件格式的规范，并且能被当前版本的虚拟机处理。")])]),a._v(" "),s("li",[s("p",[a._v("元数据验证：\n对字节码描述的信息进行语义分析，以保证其描述的信息符合《Java 语言规范》的要求。")])]),a._v(" "),s("li",[s("p",[a._v("字节码验证：\n通过数据流分析和控制流分析，确定程序语义是合法的、符合逻辑的。")])]),a._v(" "),s("li",[s("p",[a._v("符号引用验证：\n简单来说就是该类是否缺少或者被禁止访问它依赖的某些外部类、方法、字段等资源。此验证校验行为发生在虚拟机将符号引用转化为直接引用的时候，即「解析阶段」中进行。")])])]),a._v(" "),s("h3",{attrs:{id:"准备"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#准备"}},[a._v("#")]),a._v(" 准备")]),a._v(" "),s("p",[a._v("准备阶段是正式为类中定义的变量（静态变量）分配内存并设置类变量初始值的阶段，从概念上讲，这些变量所使用的内存都应当在方法区中进行分配。")]),a._v(" "),s("h3",{attrs:{id:"解析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解析"}},[a._v("#")]),a._v(" 解析")]),a._v(" "),s("p",[a._v("解析阶段是 Java 虚拟机将常量池内的符号引用替换为直接引用的过程。")]),a._v(" "),s("p",[a._v("解析动作主要针对类或接口、字段、类方法、接口方法、方法类型、方法句柄和调用点限定符这 7 类符号引用进行，")]),a._v(" "),s("p",[a._v("简单的理解为我们类中如果变量是其他类的类型、继承了父类、实现了接口，那么该阶段会做相关的解析。更深入的了解可以参考《深入理解 Java 虚拟机：JVM 高级特性与最佳实践（第 3 版）》7.3.4 章节内容。")]),a._v(" "),s("h3",{attrs:{id:"初始化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#初始化"}},[a._v("#")]),a._v(" 初始化")]),a._v(" "),s("p",[a._v("初始化阶段就是执行类构造器方法的过程")]),a._v(" "),s("h2",{attrs:{id:"三、类加载器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、类加载器"}},[a._v("#")]),a._v(" 三、类加载器")]),a._v(" "),s("p",[a._v("类加载器用于实现类的加载动作。")]),a._v(" "),s("h3",{attrs:{id:"_1-关于类的比较"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-关于类的比较"}},[a._v("#")]),a._v(" 1. 关于类的比较")]),a._v(" "),s("p",[a._v("比较两个类是否「相等」，只有在这两个类是由同一个类加载器加载的前提下才相等。即使这两个类来源于同一个 Class 文件，被同一个 Java 虚拟机加载，只要加载它们的类加载器不同，那这两个类就必定不相等。")]),a._v(" "),s("h3",{attrs:{id:"_2-类加载器有哪些"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-类加载器有哪些"}},[a._v("#")]),a._v(" 2. 类加载器有哪些")]),a._v(" "),s("p",[a._v("站在 Java 虚拟机的角度来看，只存在两种不同的类加载器：")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("一种是启动类加载器（Bootstrap ClassLoader），这个类加载器使用 C++ 语言实现，是虚拟机自身的一部分。")])]),a._v(" "),s("li",[s("p",[a._v("一种就是其他所有的类加载器，这些类加载器都由 Java 语言实现，独立存在于虚拟机外部，并且全都继承自抽象类 java.lang.ClassLoader。")])])]),a._v(" "),s("h4",{attrs:{id:"启动类加载器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启动类加载器"}},[a._v("#")]),a._v(" 启动类加载器")]),a._v(" "),s("p",[a._v("负责加载存放在 "),s("code",[a._v("<JAVA_HOME>\\lib")]),a._v(" 目录，或者被 "),s("code",[a._v("-Xbootclasspath")]),a._v(" 参数所指定的路径中存放的，而且是 Java 虚拟机能够识别的（按照文件名识别，如 rt.jar、tools.jar，名字不符合的类库即使放在 lib 目录中也不会被加载）类库加载到虚拟机的内存中。")]),a._v(" "),s("p",[a._v("启动类加载器无法被 Java 程序直接引用，用户在编写自定义类加载器时，如果需要把加载请求委派给引导类加载器去处理，那直接使用 null 代替即可")]),a._v(" "),s("h4",{attrs:{id:"由-java-语言实现的类加载器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#由-java-语言实现的类加载器"}},[a._v("#")]),a._v(" 由 Java 语言实现的类加载器")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("扩展类加载器（Ext ClassLoader）"),s("br"),a._v("\n负责加载 "),s("code",[a._v("<JAVA_HOME>\\lib\\ext")]),a._v(" 目录中，或者被 java.ext.dirs 系统变量所指定的路径中所有的类库。\n它是一种 Java 系统类库的扩展机制，JDK 的开发团队允许用户将具有通用性的类库放置在 ext 目录里以扩展 Java SE 的功能，"),s("em",[a._v("在 JDK 9 之后，这种扩展机制被模块化带来的天然的扩展能力所取代")]),a._v("。\n开发者可以直接在程序中使用扩展类加载器来加载 Class 文件。")])]),a._v(" "),s("li",[s("p",[a._v("应用程序类加载器（App ClassLoader）"),s("br"),a._v("\n它负责加载用户类路径（ClassPath）上所有的类库，开发者同样可以直接在代码中使用这个类加载器。如果应用程序中没有自定义过自己的类加载器，一般情况下这个就是程序中默认的类加载器。")])])]),a._v(" "),s("h3",{attrs:{id:"_3-jdk-9-前的双亲委派模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-jdk-9-前的双亲委派模式"}},[a._v("#")]),a._v(" 3. JDK 9 前的双亲委派模式")]),a._v(" "),s("p",[a._v("JDK 9 之前的 Java 应用都是由「启动类加载器」、「扩展类加载器」、「应用程序类加载器」这三种类加载器互相配合来完成加载的，如果有需要还可以加入自定义的类加载器来进行拓展")]),a._v(" "),s("blockquote",[s("p",[a._v("自定义的类加载器场景：典型的如增加除了磁盘位置之外的 Class 文件来源，或者通过类加载器实现类的隔离、重载等功能。")])]),a._v(" "),s("ul",[s("li",[s("p",[a._v("工作过程："),s("br"),a._v("\n如果一个类加载器收到了类加载的请求，它首先不会自己去尝试加载这个类，而是把这个请求委派给父类加载器去完成，每一个层次的类加载器都是如此，\n因此所有的加载请求最终都应该传送到最顶层的「启动类加载器」中，只有当父加载器在它的搜索范围中没有找到所需的类时，子加载器才会尝试自己去完成加载。")])]),a._v(" "),s("li",[s("p",[a._v("为什么要使用这个模式？"),s("br"),a._v("\nJava 中的类随着它的类加载器一起具备了一种"),s("em",[a._v("带有优先级的层次关系")]),a._v("。")])])]),a._v(" "),s("blockquote",[s("p",[a._v("例如：类 java.lang.Object，它存放在 rt.jar 之中，无论哪一个类加载器要加载这个类，最终都是委派给处于模型最顶端的启动类加载器进行加载，因此 Object 类在程序的各种类加载器环境中都能够保证是同一个类。")])]),a._v(" "),s("h3",{attrs:{id:"_4-jdk-9-的双亲委派模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-jdk-9-的双亲委派模式"}},[a._v("#")]),a._v(" 4. JDK 9 的双亲委派模式")]),a._v(" "),s("p",[a._v("JDK 9 为了模块化的支持，对双亲委派模式做了一些改动：")]),a._v(" "),s("ol",[s("li",[s("p",[a._v("扩展类加载器被平台类加载器（Platform ClassLoader）取代。"),s("br"),a._v("\nJDK 9 时基于模块化进行构建（原来的 rt.jar 和 tools.jar 被拆分成数十个 JMOD 文件），\n其中的 Java 类库就已天然地满足了可扩展的需求，那自然无须再保留 "),s("code",[a._v("<JAVA_HOME>\\lib\\ext")]),a._v(" 目录，此前使用这个目录或者 java.ext.dirs 系统变量来扩展 JDK 功能的机制已经没有继续存在的价值了。")])]),a._v(" "),s("li",[s("p",[a._v("平台类加载器和应用程序类加载器都不再继承自 java.net.URLClassLoader。"),s("br"),a._v("\n现在启动类加载器、平台类加载器、应用程序类加载器全都继承于 jdk.internal.loader.BuiltinClassLoader。")])])]),a._v(" "),s("blockquote",[s("p",[a._v("如果有程序直接依赖了这种继承关系，或者依赖了 URLClassLoader 类的特定方法，那代码很可能会在 JDK 9 及更高版本的 JDK 中崩溃。")])]),a._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[s("p",[a._v("启动类加载器现在是在 Java 虚拟机内部和 Java 类库共同协作实现的类加载器（以前是 C++实现）。"),s("br"),a._v("\n为了与之前的代码保持兼容，所有在获取启动类加载器的场景（譬如 Object.class.getClassLoader）中仍然会返回 null 来代替，而不会得到 BootClassLoader 的实例。")])]),a._v(" "),s("li",[s("p",[a._v("类加载的委派关系也发生了变动。"),s("br"),a._v("\n当平台及应用程序类加载器收到类加载请求，在委派给父加载器加载前，要先判断该类是否能够归属到某一个系统模块中，如果可以找到这样的归属关系，就要优先委派给负责那个模块的加载器完成加载。")])])]),a._v(" "),s("hr"),a._v(" "),s("p",[a._v("在 Java 模块化系统明确规定了三个类加载器负责各自加载的模块：")]),a._v(" "),s("ul",[s("li",[a._v("启动类加载器负责加载的模块")])]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[a._v("java"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("base                        java"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("security"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("sasl\njava"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("datatransfer                java"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("xml\njava"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("desktop                     jdk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("httpserver\njava"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("instrument                  jdk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("internal"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("vm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("ci\njava"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("logging                     jdk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("management\njava"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("management                  jdk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("management"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("agent\njava"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("management"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("rmi              jdk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("naming"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("rmi\njava"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("naming                      jdk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("net\njava"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("prefs                       jdk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("sctp\njava"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("rmi                         jdk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("unsupported\n")])])]),s("ul",[s("li",[a._v("平台类加载器负责加载的模块")])]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[a._v("java"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("activation"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v("                jdk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("accessibility\njava"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("compiler"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v("                  jdk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("charsets\njava"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("corba"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v("                     jdk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("crypto"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("cryptoki\njava"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("scripting                  jdk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("crypto"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("ec\njava"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("se                         jdk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("dynalink\njava"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("se"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("ee                      jdk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("incubator"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("httpclient\njava"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("security"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("jgss              jdk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("internal"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("vm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("compiler"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v("\njava"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("smartcardio                jdk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("jsobject\njava"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("sql                        jdk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("localedata\njava"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("sql"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("rowset                 jdk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("naming"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("dns\njava"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("transaction"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v("               jdk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("scripting"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("nashorn\njava"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("xml"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("bind"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v("                  jdk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("security"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("auth\njava"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("xml"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("crypto                 jdk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("security"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("jgss\njava"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("xml"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("ws"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v("                    jdk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("xml"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("dom\njava"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("xml"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("ws"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("annotation"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v("         jdk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("zipfs\n")])])]),s("ul",[s("li",[a._v("应用程序类加载器负责加载的模块")])]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[a._v("jdk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("aot                         jdk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("jdeps\njdk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("attach                      jdk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("jdi\njdk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("compiler                    jdk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("jdwp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("agent\njdk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("editpad                     jdk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("jlink\njdk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("hotspot"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("agent               jdk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("jshell\njdk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("internal"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("ed                 jdk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("jstatd\njdk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("internal"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("jvmstat            jdk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("pack\njdk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("internal"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("le                 jdk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("policytool\njdk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("internal"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("opt                jdk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("rmic\njdk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("jartool                     jdk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("scripting"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("nashorn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("shell\njdk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("javadoc                     jdk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("xml"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("bind"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v("\njdk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("jcmd                        jdk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("xml"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("ws"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v("\njdk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("jconsole\n")])])]),s("h3",{attrs:{id:"_5-双亲委派模式示意图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-双亲委派模式示意图"}},[a._v("#")]),a._v(" 5. 双亲委派模式示意图")]),a._v(" "),s("div",{attrs:{align:"center"}},[s("img",{attrs:{src:"https://blog-review-notes.oss-cn-beijing.aliyuncs.com/language/java-jvm/_images/类加载-双亲委派模式.jpeg"}})]),a._v(" "),s("h2",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[a._v("#")]),a._v(" 总结")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("类生命周期分为七步")])]),a._v(" "),s("li",[s("p",[a._v("双亲委派模式是为了保证「带有优先级的层次关系」的一种实现，例如 Object 类只能由启动类加载器加载。")])]),a._v(" "),s("li",[s("p",[a._v("JDK 9 时为了模块化支持，对以前的双亲委派模式做了 4 点改动进行适配")])])]),a._v(" "),s("h2",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[a._v("#")]),a._v(" 参考")]),a._v(" "),s("ul",[s("li",[a._v("《深入理解 Java 虚拟机：JVM 高级特性与最佳实践（第 3 版）》周志明 著")])])])}),[],!1,null,null,null);t.default=v.exports}}]);