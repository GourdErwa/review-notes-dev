(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{319:function(a,t,s){"use strict";s.r(t);var n=s(0),r=Object(n.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("blockquote",[s("p",[a._v("专栏原创出处："),s("a",{attrs:{href:"https://github.com/GourdErwa/review-notes/tree/master/language/scala-basis",target:"_blank",rel:"noopener noreferrer"}},[a._v("github-源笔记文件 "),s("OutboundLink")],1),a._v(" ，"),s("a",{attrs:{href:"https://github.com/GourdErwa/scala-advanced/tree/master/scala-base/src/main/scala/com/gourd/scala/base/",target:"_blank",rel:"noopener noreferrer"}},[a._v("github-源码 "),s("OutboundLink")],1),a._v("，欢迎 Star，转载请附上原文出处链接和本声明。")])]),a._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#类型关系图"}},[a._v("类型关系图")])]),s("li",[s("a",{attrs:{href:"#any"}},[a._v("Any")])]),s("li",[s("a",{attrs:{href:"#anyval"}},[a._v("AnyVal")])]),s("li",[s("a",{attrs:{href:"#anyref"}},[a._v("AnyRef")])]),s("li",[s("a",{attrs:{href:"#nothing"}},[a._v("Nothing")])]),s("li",[s("a",{attrs:{href:"#null"}},[a._v("Null")])])])]),s("p"),a._v(" "),s("h2",{attrs:{id:"类型关系图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#类型关系图"}},[a._v("#")]),a._v(" 类型关系图")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://blog-review-notes.oss-cn-beijing.aliyuncs.com/language/scala-basis/_images/%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B%E5%85%B3%E7%B3%BB%E5%9B%BE.png",alt:"关系图 "}})]),a._v(" "),s("h2",{attrs:{id:"any"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#any"}},[a._v("#")]),a._v(" Any")]),a._v(" "),s("p",[a._v("Any 是所有类型的超类型，也称为顶级类型。"),s("br"),a._v("\n它定义了一些通用的方法如 equals、hashCode 和 toString。Any 有两个直接子类：AnyVal 和 AnyRef。")]),a._v(" "),s("div",{staticClass:"language-scala extra-class"},[s("pre",{pre:!0,attrs:{class:"language-scala"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("val")]),a._v(" a"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("Any")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("val")]),a._v(" b"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("Any")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'s'")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("val")]),a._v(" c"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("Any")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.0")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("val")]),a._v(" d"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("Any")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("null")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("val")]),a._v(" e"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("Any")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" None\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("h2",{attrs:{id:"anyval"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#anyval"}},[a._v("#")]),a._v(" AnyVal")]),a._v(" "),s("p",[a._v("AnyVal 代表值类型。"),s("br"),a._v("\n有 9 个预定义的非空的值类型分别是：Double、Float、Long、Int、Short、Byte、Char、Unit 和 Boolean。"),s("br"),a._v("\nUnit 是不带任何意义的值类型，它仅有一个实例可以像这样声明：()。"),s("br"),a._v("\n所有的函数必须有返回，所以说有时候 Unit 也是有用的返回类型。")]),a._v(" "),s("div",{staticClass:"language-scala extra-class"},[s("pre",{pre:!0,attrs:{class:"language-scala"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("val")]),a._v(" a"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("AnyVal")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("val")]),a._v(" b"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("AnyVal")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'s'")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("val")]),a._v(" c"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("AnyVal")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.0")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("h2",{attrs:{id:"anyref"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#anyref"}},[a._v("#")]),a._v(" AnyRef")]),a._v(" "),s("p",[a._v("AnyRef 代表引用类型。"),s("br"),a._v("\n所有非值类型都被定义为引用类型。在 Scala 中，每个用户自定义的类型都是 AnyRef 的子类型。"),s("br"),a._v("\n如果 Scala 被应用在 Java 的运行环境中，AnyRef 相当于 java.lang.Object。")]),a._v(" "),s("div",{staticClass:"language-scala extra-class"},[s("pre",{pre:!0,attrs:{class:"language-scala"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("val")]),a._v(" a"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("AnyRef")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" None\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("case")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" People"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("name"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("val")]),a._v(" b"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("AnyRef")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" People"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"zhangsan"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("h2",{attrs:{id:"nothing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nothing"}},[a._v("#")]),a._v(" Nothing")]),a._v(" "),s("p",[a._v("Nothing 是所有类型的子类型，也称为底部类型。没有一个值是 Nothing 类型的。"),s("br"),a._v("\n它的用途之一是给出非正常终止的信号，如抛出异常、程序退出或者一个无限循环\n(可以理解为它是一个不对值进行定义的表达式的类型，或者是一个不能正常返回的方法)。")]),a._v(" "),s("h2",{attrs:{id:"null"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#null"}},[a._v("#")]),a._v(" Null")]),a._v(" "),s("p",[a._v("Null 是所有引用类型的子类型（即 AnyRef 的任意子类型）。"),s("br"),a._v("\n它有一个单例值由关键字 null 所定义。Null 主要是使得 Scala 满足和其他 JVM 语言的互操作性，但是几乎不应该在 Scala 代码中使用。")]),a._v(" "),s("div",{staticClass:"language-scala extra-class"},[s("pre",{pre:!0,attrs:{class:"language-scala"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("val")]),a._v(" a"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("AnyRef")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("null")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("val")]),a._v(" b"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" Null "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("null")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);