(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{436:function(t,s,a){"use strict";a.r(s);var n=a(18),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("blockquote",[a("p",[t._v("专栏原创出处："),a("a",{attrs:{href:"https://github.com/GourdErwa/review-notes/tree/master/language/java-puzzle",target:"_blank",rel:"noopener noreferrer"}},[t._v("github-源笔记文件 "),a("OutboundLink")],1),t._v(" ，欢迎 Star，转载请附上原文出处链接和本声明。")])]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#使用前的配置"}},[t._v("使用前的配置")])]),a("li",[a("a",{attrs:{href:"#创建仓库"}},[t._v("创建仓库")])]),a("li",[a("a",{attrs:{href:"#进行更改"}},[t._v("进行更改")])]),a("li",[a("a",{attrs:{href:"#检查历史和状态"}},[t._v("检查历史和状态")])]),a("li",[a("a",{attrs:{href:"#重做提交"}},[t._v("重做提交")])]),a("li",[a("a",{attrs:{href:"#分支"}},[t._v("分支")])]),a("li",[a("a",{attrs:{href:"#同步更改"}},[t._v("同步更改")])]),a("li",[a("a",{attrs:{href:"#多-ssh-key-生成及代理配置"}},[t._v("多 SSH-Key 生成及代理配置")]),a("ul",[a("li",[a("a",{attrs:{href:"#生成一个新的-ssh-key"}},[t._v("生成一个新的 SSH Key")])]),a("li",[a("a",{attrs:{href:"#将-ssh-key-添加到不同的代理"}},[t._v("将 SSH Key 添加到不同的代理")])]),a("li",[a("a",{attrs:{href:"#测试配置是否成功"}},[t._v("测试配置是否成功")])])])]),a("li",[a("a",{attrs:{href:"#术语表"}},[t._v("术语表")])]),a("li",[a("a",{attrs:{href:"#参考"}},[t._v("参考")])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"使用前的配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用前的配置"}},[t._v("#")]),t._v(" 使用前的配置")]),t._v(" "),a("p",[a("strong",[t._v("检查你的配置")])]),t._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看所有的配置以及它们所在的文件")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --list --show-origin\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 所有 Git 当时能找到的配置")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --list\n")])])]),a("p",[a("strong",[t._v("全局配置")]),t._v("\n配置文件在"),a("code",[t._v("git config --list --show-origin")]),t._v(" 命令中可查看")]),t._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 对你的 commit 操作设置关联的用户名")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global user.name "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"[name]"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 对你的 commit 操作设置关联的邮箱地址")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global user.email "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"[email address]"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 启用有帮助的彩色命令行输出。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global color.ui auto\n")])])]),a("p",[a("strong",[t._v("本地工程配置")]),t._v("\n配置文件在当前工程目录/.git/config 文件中")]),t._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --local user.name xxx\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --local user.email xxx@xxx.com\n")])])]),a("h2",{attrs:{id:"创建仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建仓库"}},[t._v("#")]),t._v(" 创建仓库")]),t._v(" "),a("p",[t._v("当着手于一个新的仓库时，你只需创建一次。要么在本地创建，然后推送到 GitHub/GitLab；要么通过 clone 一个现有仓库。")]),t._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Git 全局设置（或者本地化设置 git config --local）")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global user.name "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global user.email "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"email@email.com"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建一个新仓库")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone git@url:path.git\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" path\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("touch")]),t._v(" README.md\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" README.md\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"add README"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push -u origin master\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 推送现有文件夹")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" existing_folder\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" init\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" origin git@url:path.git\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Initial commit"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push -u origin master\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 推送现有的 Git 仓库")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" existing_repo\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rename")]),t._v(" origin old-origin\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" origin git@url:path.git\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push -u origin --all\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push -u origin --tags\n")])])]),a("h2",{attrs:{id:"进行更改"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进行更改"}},[t._v("#")]),t._v(" 进行更改")]),t._v(" "),a("p",[t._v("浏览并检查项目文件的发展。")]),t._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将文件进行快照处理内容写入暂存区，用于版本控制")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("file"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将暂存区内容添加到仓库中，永久地记录在版本历史中")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"[descriptive message]"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# -a参数可以将所有已跟踪文件中的执行修改或删除操作的文件都提交到本地仓库，即使它们没有经过git add添加到暂存区")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -am"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"[descriptive message]"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("-am 等同于 -a -m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 从工作区和索引中删除文件")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" -rf "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("file"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("h2",{attrs:{id:"检查历史和状态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#检查历史和状态"}},[t._v("#")]),t._v(" 检查历史和状态")]),t._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看命令历史")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reflog\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 历史提交次数")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" rev-list HEAD "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wc")]),t._v(" -l\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 列出当前分支的版本提交历史")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log --graph --decorate --oneline -3 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("用以展示经过修饰的提交历史，最近 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" 条"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log --grep apples --oneline\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("如果只想要看包含关键字“apple”的提交"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log HEAD~5"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("HEAD^ --oneline\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("查看历史提交记录中两个点之间的提交历史"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log branch_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("master --oneline "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("对于分支可以使用该命令"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log --follow "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("file"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("列出文件的版本历史，包括重命名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log -p -1 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("使用参数-p可以在显示日志的时候同时显示改动"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 文件追溯")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" blame path/to/file\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" blame -L "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v(",+5 path/to/file "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("只想查看某几行，使用-L n,m参数"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 输出指定 commit 的元数据和内容变化")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" show "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("commit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("p",[t._v("获取历史版本")]),t._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看历史提交的目录树 ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" ls-tree "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("tree-ish"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("paths"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" ls-tree 776c5c9 README\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" ls-tree -r refs/tags/D doc\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 整个工作区切换到历史版本 ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("commit"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout HEAD^^ \n        \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 检出某文件的历史版本")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("commit"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" -- "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("paths"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout refs/tags/D -- README \n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout 776c5c9 -- doc\n       \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 检出某文件的历史版本到其他文件名")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" show "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("commit"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(":"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("file"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" new_name\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" show 887113d:README "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" README.OLD\n")])])]),a("p",[t._v("保存进度 stash 命令")]),t._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 修改了代码，但不想提交的时候，需要先隐藏再切换分支")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("隐藏保存修改的信息"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash list "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("要查看现有的储藏"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash apply "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("获取最新隐藏的信息"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash apply stash @"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("获取更早隐藏的信息"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash drop stash @"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("删除隐藏"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("检查当前文件状态 status 命令")]),t._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" status\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" status -s "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("状态简览"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("查看已暂存和未暂存的修改 diff 命令")]),t._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看尚未暂存的文件更新了哪些部分（推荐使用 idea 比对）")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("diff")]),t._v("          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("工作区 vs 暂存区"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("diff")]),t._v(" HEAD     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("工作区 vs HEAD"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("diff")]),t._v(" B A      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("里程碑B vs 里程碑A"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("diff")]),t._v(" A        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("工作区 vs 里程碑A"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("diff")]),t._v(" --staged "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("查看已暂存的将要添加到下次提交里的内容"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("diff")]),t._v(" --cached "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("暂存区 vs 版本库"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("diff")]),t._v(" --cached A "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("暂存区 vs 里程碑A"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 文件在版本间的差异比较")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("diff")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("commit"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("1")]),t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("commit"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("2")]),t._v(">")]),t._v(" -- "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("paths"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 对比两个分支差异")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("diff")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("first-branch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("second-branch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 对比当前 HEAD 和前两个提交")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("diff")]),t._v(" HEAD HEAD~2\n")])])]),a("h2",{attrs:{id:"重做提交"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重做提交"}},[t._v("#")]),t._v(" 重做提交")]),t._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除前一次提交，并创建一个新的提交记录以替代之前的提交")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit --amend\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 撤销所有 [commit] 后的的提交，在本地保存更改")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("COMMIT_ID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset --soft  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("暂存区-"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("工作区"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset --mixed "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("版本库-"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("暂存区"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 放弃所有历史，改回指定提交。慎重使用")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset --hard "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("COMMIT_ID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("版本库-"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("暂存区-"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("工作区"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 交互式变基 (rebase）。它可以用来编辑提交信息，或者将多个提交压缩成一个提交")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" rebase -i origin/master\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建一个新的提交，让当前项目状态恢复到指定提交之前")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" revert "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("COMMIT_ID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("h2",{attrs:{id:"分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分支"}},[t._v("#")]),t._v(" 分支")]),t._v(" "),a("p",[t._v("分支是使用 Git 工作的一个重要部分。你做的任何提交都会发生在当前“checked out”到的分支上。使用 git status 查看那是哪个分支。")]),t._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 列出当前项目分支")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建一个新分支")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 说明：如果报错「fatal: 不是一个有效的对象名：'master'。」说明初始化仓库后还没有任何提交记录。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("branch-name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 切换到指定分支并更新工作目录 (working directory)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("branch-name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除指定分支")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -d "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("branch-name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("h2",{attrs:{id:"同步更改"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#同步更改"}},[t._v("#")]),t._v(" 同步更改")]),t._v(" "),a("p",[t._v("将你本地仓库与远端仓库同步")]),t._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 下载远端跟踪分支的所有历史")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" fetch\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将指定分支的历史合并到当前分支。这通常在拉取请求 (PR) 中完成，但也是一个重要的 Git 操作。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" merge "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("branch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# git push 的一般形式为 git push <远程主机名> <本地分支名> <远程分支名>")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 例如 git push origin master：refs/for/master")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 即是将本地的master分支推送到远程主机origin上的对应master分支， origin 是远程主机名。第一个master是本地分支名，第二个master是远程分支名。")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将所有本地分支提交上传到 GitHub")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 使用来自 GitHub 的对应远端分支的所有新提交更新你当前的本地工作分支。git pull 是 git fetch 和 git merge 的结合。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" pull\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 假设我们和同事在各自单独的分支上进行开发，同事有一个重要的提交我们也想应用到自己的分支上来，但是不需要对方分支的其他提交")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" cherry-pick COMMIT_ID\n")])])]),a("h2",{attrs:{id:"多-ssh-key-生成及代理配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多-ssh-key-生成及代理配置"}},[t._v("#")]),t._v(" 多 SSH-Key 生成及代理配置")]),t._v(" "),a("h3",{attrs:{id:"生成一个新的-ssh-key"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生成一个新的-ssh-key"}},[t._v("#")]),t._v(" 生成一个新的 SSH Key")]),t._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 执行命令生成 ssh-key，需要指定相应的邮箱")]),t._v("\n$ ssh-keygen -t rsa -b "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4096")]),t._v(" -C "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"your_email@example.com"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 推荐不使用默认文件名 id_rsa ，按实际场景重新命名文件名称，比如：/Users/you/.ssh/id_rsa_github_my")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" Enter a "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("which")]),t._v(" to save the key "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("/Users/you/.ssh/id_rsa"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(": "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("如果不更改文件名直接回车 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" Enter passphrase "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("empty "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" no passphrase"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(": "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("输入密码，回车 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" Enter same passphrase again: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("再次输入密码，回车 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 可以看到刚刚生成的 ssh-key id_rsa_github_my 文件")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 复制对应 id_rsa_github_my.pub 内容添加至 WEB 端配置 SSH 内容地方即可。")]),t._v("\n$ ll /Users/you/.ssh\n")])])]),a("h3",{attrs:{id:"将-ssh-key-添加到不同的代理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#将-ssh-key-添加到不同的代理"}},[t._v("#")]),t._v(" 将 SSH Key 添加到不同的代理")]),t._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" /Users/you/.ssh/config\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 配置文件参数")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Host : Host 可以看作是一个你要识别的模式，对识别的模式，进行配置对应的的主机名和 ssh 文件（可以直接填写 ip 地址）")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# HostName : 要登录主机的主机名（建议与 Host 一致）")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# User : 登录名（如 gitlab 的 username）")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# IdentityFile : 指明上面 User 对应的 identityFile 路径")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Port: 端口号（如果不是默认 22 号端口则需要指定）")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 以下为一个配置示例")]),t._v("\n\nHost github.com\nHostName github.com\nPreferredauthentications publickey\nIdentityFile ~/.ssh/id_rsa_github_my\nPort "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("22")]),t._v("\n\nHost dev-git.gaolvzongheng.com\nHostName dev-git.gaolvzongheng.com\nPreferredauthentications publickey\nIdentityFile ~/.ssh/id_rsa_github_gaolvgo\nPort "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("22")]),t._v("\n\nHost "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("119.3")]),t._v(".177.8\nHostName "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("119.3")]),t._v(".177.8\nPreferredauthentications publickey\nIdentityFile ~/.ssh/id_rsa_github_gaolvgo\nPort "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("22")]),t._v("\n")])])]),a("h3",{attrs:{id:"测试配置是否成功"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试配置是否成功"}},[t._v("#")]),t._v(" 测试配置是否成功")]),t._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ .ssh "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ssh")]),t._v(" -T git@github.com\nEnter passphrase "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" key "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/Users/liwei/.ssh/id_rsa_github_my'")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v("\nHi GourdErwa"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v(" You've successfully authenticated, but GitHub does not provide shell access.\n")])])]),a("h2",{attrs:{id:"术语表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#术语表"}},[t._v("#")]),t._v(" 术语表")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("HEAD：代表你当前的工作目录。使用 git checkout 可移动 HEAD 指针到不同的分支、标记 (tags) 或提交")])]),t._v(" "),a("li",[a("p",[t._v(".gitignore 文件：\n有时一些文件最好不要用 Git 跟踪。这通常在名为 .gitignore 的特殊文件中完成。你可以在 "),a("a",{attrs:{href:"https://github.com/github/gitignore",target:"_blank",rel:"noopener noreferrer"}},[t._v("github.com/github/gitignore"),a("OutboundLink")],1),t._v(" 找到有用的 .gitignore 文件模板。")])])]),t._v(" "),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://learngitbranching.js.org/?locale=zh_CN",target:"_blank",rel:"noopener noreferrer"}},[t._v("玩 branch 游戏学git"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://onlywei.github.io/explain-git-with-d3/#commit%E3%80%82",target:"_blank",rel:"noopener noreferrer"}},[t._v("图形化交互式学 git"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://git-scm.com/book/zh/v2",target:"_blank",rel:"noopener noreferrer"}},[t._v("git-book 官方文档"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.gitkraken.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("gitkraken Git 客户端 "),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.sourcetreeapp.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Sourcetree Git 客户端 "),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://segmentfault.com/a/1190000019455172",target:"_blank",rel:"noopener noreferrer"}},[t._v("如何使用Git Rebase"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);