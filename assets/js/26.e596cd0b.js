(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{232:function(a,t,s){"use strict";s.r(t);var n=s(0),r=Object(n.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("blockquote",[s("p",[a._v("专栏原创出处："),s("a",{attrs:{href:"https://github.com/GourdErwa/review-notes/tree/master/framework/flink-basis",target:"_blank",rel:"noopener noreferrer"}},[a._v("源笔记文件"),s("OutboundLink")],1),a._v(" ，"),s("a",{attrs:{href:"https://github.com/GourdErwa/flink-advanced",target:"_blank",rel:"noopener noreferrer"}},[a._v("源码"),s("OutboundLink")],1)])]),a._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#开发前准备工作"}},[a._v("开发前准备工作")])]),s("li",[s("a",{attrs:{href:"#数据集说明"}},[a._v("数据集说明")]),s("ul",[s("li",[s("a",{attrs:{href:"#words-数据集说明"}},[a._v("words 数据集说明")])]),s("li",[s("a",{attrs:{href:"#模拟游戏统计业务数据集说明（重要）"}},[a._v("模拟游戏统计业务数据集说明（重要）")]),s("ul",[s("li",[s("a",{attrs:{href:"#pojo-定义声明"}},[a._v("POJO 定义声明")])]),s("li",[s("a",{attrs:{href:"#快速创建数据集工具类"}},[a._v("快速创建数据集工具类")])])])])])])])]),s("p"),a._v(" "),s("h2",{attrs:{id:"开发前准备工作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开发前准备工作"}},[a._v("#")]),a._v(" 开发前准备工作")]),a._v(" "),s("p",[a._v("参考 "),s("a",{attrs:{href:"https://github.com/GourdErwa/flink-advanced",target:"_blank",rel:"noopener noreferrer"}},[a._v("flink-advanced"),s("OutboundLink")],1),a._v(" 项目 README.MD 文件说明")]),a._v(" "),s("h2",{attrs:{id:"数据集说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据集说明"}},[a._v("#")]),a._v(" 数据集说明")]),a._v(" "),s("h3",{attrs:{id:"words-数据集说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#words-数据集说明"}},[a._v("#")]),a._v(" words 数据集说明")]),a._v(" "),s("p",[a._v("模拟一篇文章为.txt文件，对其中单词进行一些频次分析")]),a._v(" "),s("blockquote",[s("p",[a._v("参考 "),s("code",[a._v("io.gourd.flink.scala.data.Words")])])]),a._v(" "),s("h3",{attrs:{id:"模拟游戏统计业务数据集说明（重要）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模拟游戏统计业务数据集说明（重要）"}},[a._v("#")]),a._v(" 模拟游戏统计业务数据集说明（重要）")]),a._v(" "),s("p",[a._v("模拟游戏业务数据")]),a._v(" "),s("blockquote",[s("p",[a._v("参考 "),s("a",{attrs:{href:"https://github.com/GourdErwa/flink-advanced/tree/master/src/main/scala/io/gourd/flink/scala/games/data/pojo",target:"_blank",rel:"noopener noreferrer"}},[a._v("games/data/pojo"),s("OutboundLink")],1),a._v(" 定义POJO内容\n参考 "),s("a",{attrs:{href:"https://github.com/GourdErwa/flink-advanced/tree/master/src/main/resources/data/game",target:"_blank",rel:"noopener noreferrer"}},[a._v("resources/data/game/*.csv"),s("OutboundLink")],1),a._v(" 文件定义演示数据内容\n提供模拟数据集模型定义及数据载入工具方法\n以角色扮演游戏举例，用户登录账户后，可以选择不同的角色进行游戏，一个用户拥有多个角色\nUserXXX 表示用户事件，RoleXXX 表示角色事件。")])]),a._v(" "),s("h4",{attrs:{id:"pojo-定义声明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pojo-定义声明"}},[a._v("#")]),a._v(" POJO 定义声明")]),a._v(" "),s("h5",{attrs:{id:"用户登录-userlogin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用户登录-userlogin"}},[a._v("#")]),a._v(" 用户登录-UserLogin")]),a._v(" "),s("div",{staticClass:"language-scala extra-class"},[s("pre",{pre:!0,attrs:{class:"language-scala"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("package")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("io"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("gourd"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("flink"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("scala"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("games"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("pojo")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/** 用户登录\n  *\n  * @param platform 所在平台id（e.g. H5/IOS/ADR/IOS_YY）\n  * @param server   所在游戏服id\n  * @param uid      用户唯一id\n  * @param dataUnix 事件时间/s 时间戳\n  * @param status   登录动作（LOGIN/LOGOUT）\n  * @author Li.Wei by 2019/11/6\n  */")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("case")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" UserLogin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("platform"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" server"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n                     uid"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n                     dataUnix"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("Int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n                     status"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("extends")]),a._v(" GameModel "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("override")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("def")]),a._v(" getDataUnix"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("Int")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" dataUnix\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n")])])]),s("h5",{attrs:{id:"角色登录-rolelogin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#角色登录-rolelogin"}},[a._v("#")]),a._v(" 角色登录-RoleLogin")]),a._v(" "),s("div",{staticClass:"language-scala extra-class"},[s("pre",{pre:!0,attrs:{class:"language-scala"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("package")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("io"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("gourd"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("flink"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("scala"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("games"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("pojo")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/** 角色登录\n  *\n  * @param platform 所在平台id（e.g. H5/IOS/ADR/IOS_YY）\n  * @param server   所在游戏服id\n  * @param uid      用户唯一id\n  * @param rid      角色唯一id\n  * @param dataUnix 事件时间/s 时间戳\n  * @param status   登录动作（LOGIN/LOGOUT）\n  * @author Li.Wei by 2019/11/6\n  */")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("case")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" RoleLogin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("platform"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" server"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n                     uid"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n                     rid"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n                     dataUnix"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("Int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n                     status"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("extends")]),a._v(" GameModel "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("override")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("def")]),a._v(" getDataUnix"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("Int")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" dataUnix\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("h5",{attrs:{id:"角色充值-rolepay"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#角色充值-rolepay"}},[a._v("#")]),a._v(" 角色充值-RolePay")]),a._v(" "),s("div",{staticClass:"language-scala extra-class"},[s("pre",{pre:!0,attrs:{class:"language-scala"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("package")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("io"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("gourd"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("flink"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("scala"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("games"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("pojo")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/** 角色充值\n  *\n  * @param platform 所在平台id（e.g. H5/IOS/ADR/IOS_YY）\n  * @param server   所在游戏服id\n  * @param uid      用户唯一id\n  * @param rid      角色唯一id\n  * @param dataUnix 事件时间/s 时间戳\n  * @param payWay   支付方式\n  * @param orderId  订单id\n  * @param money    金额\n  * @author Li.Wei by 2019/11/6\n  */")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("case")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" RolePay"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("platform"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" server"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n                   uid"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n                   rid"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n                   dataUnix"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("Int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n                   payWay"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" orderId"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" money"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("Double")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("extends")]),a._v(" GameModel "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("override")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("def")]),a._v(" getDataUnix"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("Int")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" dataUnix\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n\n")])])]),s("h5",{attrs:{id:"角色商城消费-roleshop"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#角色商城消费-roleshop"}},[a._v("#")]),a._v(" 角色商城消费-RoleShop")]),a._v(" "),s("div",{staticClass:"language-scala extra-class"},[s("pre",{pre:!0,attrs:{class:"language-scala"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("package")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("io"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("gourd"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("flink"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("scala"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("games"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("pojo")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/** 角色商城消费\n  *\n  * @param platform   所在平台id（e.g. H5/IOS/ADR/IOS_YY）\n  * @param server     所在游戏服id\n  * @param uid        用户唯一id\n  * @param rid        角色唯一id\n  * @param dataUnix   事件时间/s 时间戳\n  * @param itemId     商品id\n  * @param num        数量\n  * @param totalMoney 总金额\n  * @author Li.Wei by 2019/11/6\n  */")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("case")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" RoleShop"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("platform"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" server"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n                    uid"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n                    rid"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n                    dataUnix"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("Int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n                    itemId"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" num"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("Long")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" totalMoney"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("Double")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("extends")]),a._v(" GameModel "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("override")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("def")]),a._v(" getDataUnix"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("Int")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" dataUnix\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n")])])]),s("h4",{attrs:{id:"快速创建数据集工具类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#快速创建数据集工具类"}},[a._v("#")]),a._v(" 快速创建数据集工具类")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/GourdErwa/flink-advanced/blob/master/src/main/scala/io/gourd/flink/scala/games/data/GameData.scala",target:"_blank",rel:"noopener noreferrer"}},[a._v("GameData.scala"),s("OutboundLink")],1),a._v(" 提供了快速创建上述POJO对于数据集方法，减少开发过程重复代码")]),a._v(" "),s("div",{staticClass:"language-scala extra-class"},[s("pre",{pre:!0,attrs:{class:"language-scala"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("object")]),a._v(" GameData "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// load DataSet")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("object")]),a._v(" DataSet "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Register DataSet")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("object")]),a._v(" RegisterDataSet "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n     "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// ... 更多方法参考源码")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// load DataStream")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("object")]),a._v(" DataStream "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// ... 更多方法参考源码")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Register DataStream")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("object")]),a._v(" RegisterDataStream "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// ... 更多方法参考源码")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("object")]),a._v(" Table "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// ... 更多方法参考源码")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);